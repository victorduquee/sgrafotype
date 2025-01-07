<template>
  <div>
    <section data-aos="fade-up">
      <div class="subsection">
        <div class="text-subsection-single">
          <h2>Marca ciudad</h2>
          <div class="small-container">
            <p class="small">
              Para evaluar el funcionamiento de SGrafoType en el ámbito de la creación de una marca ciudad, se desarrollaron varias aplicaciones, construyendo gradualmente un sistema y estableciendo directrices que fueron recopiladas en un manual de marca. Este manual abarca la estrategia de marca, la identidad verbal y la identidad visual.
            </p>
            <p class="small">
              Se diseñó un nuevo logotipo, concebido para ser dinámico, que integra SGrafoType en su construcción. Además, se definió una nueva paleta de colores, se seleccionó una tipografía para los textos, se estableció un estilo de iconos y se determinó un enfoque fotográfico particular.
            </p>
          </div>
        </div>
      </div>
    </section>

    
    <ClientOnly>
      <video autoplay muted loop data-aos="fade-up">
        <source src="/public/assets/sistema.mp4" type="video/mp4" />
      </video>
    </ClientOnly>

    <img src="/public/assets/valla.png" data-aos="fade-up" />
    <img src="/public/assets/posters.png" data-aos="fade-up" />
    <img src="/public/assets/revistas.png" data-aos="fade-up" />
    <img src="/public/assets/ppt.png" data-aos="fade-up" />
    <ClientOnly>
      <video autoplay muted loop data-aos="fade-up">
        <source src="/public/assets/posts.mp4" type="video/mp4" />
      </video>
    </ClientOnly>

    <ClientOnly>
      <video autoplay muted loop data-aos="fade-up">
        <source src="/public/assets/stories.mp4" type="video/mp4" />
      </video>
    </ClientOnly>
    <img src="/public/assets/bus.png" data-aos="fade-up" />
    <img src="/public/assets/futbol.png" data-aos="fade-up" />
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
