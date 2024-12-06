<template>
  <div class="layout">
    <Header class="header" />
    <LateralNav class="lateral-nav" />
    <div class="main-content">
      <main class="content">
        <slot />
        <!-- Este slot renderiza el contenido de la página -->
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>

<style lang="scss" scoped>
.layout {
  @apply grid grid-cols-12;
}
.main-content {
  @apply flex flex-col flex-1;
  @apply pt-[58px] sm:pt-[58px] md:pt-[74px] lg:pt-[74px] xl:pt-[74px] 2xl:pt-[74px];
  @apply border-l-2 border-l-azuloscuro-50;

  @apply border-l-0 sm:border-l-0 md:border-l-0 lg:border-l-2 xl:border-l-2 2xl:border-l-2;

  @apply col-start-1 col-end-13;
  @apply sm:col-start-1 sm:col-end-13;
  @apply md:col-start-1 md:col-end-13;
  @apply lg:col-start-4 lg:col-end-13;
  @apply xl:col-start-4 xl:col-end-13;
  @apply 2xl:col-start-4 2xl:col-end-13;
}



.content {
  @apply flex-1;
}

.header {
  @apply fixed top-0 left-0 right-0;
}
</style>
