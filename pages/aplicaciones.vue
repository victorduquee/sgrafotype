<template>
  <div>
    <section data-aos="fade-up">
      <ComingSoon />
    </section>
  </div>
</template>

<script>

import ComingSoon from "~/components/ComingSoon.vue";


definePageMeta({
  title: 'Aplicaciones | SGrafoType',
  meta: [
    { name: 'description', content: 'En esta sección verás ejemplos reales de utilización de SGrafoType.' },
    { property: 'og:title', content: 'Aplicaciones | SGrafoType' },
    { property: 'og:description', content: 'En esta sección verás ejemplos reales de utilización de SGrafoType.' },
    { name: 'twitter:title', content: 'Aplicaciones | SGrafoType' },
    { name: 'twitter:description', content: 'En esta sección verás ejemplos reales de utilización de SGrafoType.' }
  ]
});


export default {
  components: {
    ComingSoon
  },
};
</script>

<style></style>
