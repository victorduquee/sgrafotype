<template>
    <div class="layout">
      <Header class="header" />
  
      <div class="main-content">
        <LateralNav  class="lateral-nav"/>
        <div class="content-footer-container">
          <main class="content">
            <slot />
            <!-- Este slot renderiza el contenido de la página -->
          </main>
          <Footer />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Header from "~/components/Header.vue";
  import Footer from "~/components/Footer.vue";
  </script>
  
  <style lang="scss" scoped>
  .layout {
    @apply flex flex-col;
  }
  .main-content {
    @apply flex flex-row flex-1 ;
    max-height: 100vh;
    @apply pt-[58px] sm:pt-[58px] md:pt-[74px] lg:pt-[74px] xl:pt-[74px] 2xl:pt-[74px];
    .lateral-nav{
      @apply h-screen;
    }
  
    .content-footer-container{
      @apply h-screen ;  
      @apply flex flex-col overflow-scroll;
  
    }
  }
  
  .content {
    @apply flex-1;
  }
  
  .header {
    @apply fixed top-0 left-0 right-0;
  }
  </style>
  