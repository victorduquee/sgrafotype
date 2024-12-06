<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'preload',
      href: '/public/fonts/SGrafoTypeVF.ttf',
      as: 'font',
      type: 'font/woff2',
      crossorigin: 'anonymous'
    }
  ]
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

