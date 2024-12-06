<template>
  <div class="layout">
    <Header class="header" />
    <div class="main-content">
      <main class="content">
        <slot />
        <!-- Este slot renderiza el contenido de la página -->
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";


</script>

<style lang="scss" scoped>
.layout {
  @apply flex flex-col min-h-screen;
}
.main-content {
  @apply flex flex-1;
  @apply pt-[58px] sm:pt-[58px] md:pt-[74px] lg:pt-[74px] xl:pt-[74px] 2xl:pt-[74px];

}

.content {
  @apply flex-1;
}

.header {
  @apply fixed top-0 left-0 right-0;
}
</style>
