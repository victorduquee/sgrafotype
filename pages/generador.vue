<template>
  <div>
    <section data-aos="fade-up">
      <div class="section-info-container">
        <div class="big-solo-container">
          <p class="big">
            Como complemento a la familia tipográfica, se ha desarrollado un
            software en Processing que convierte imágenes en esgrafiados. Esta
            herramienta actúa como una metáfora visual que simboliza cómo los
            individuos que transitan por la ciudad, independientemente de su
            origen, dejan su huella en ella, casi de manera literal, en sus
            paredes. El software permite representar de forma estética cómo cada
            historia personal se integra en la cultura colectiva de la ciudad,
            utilizando esta técnica tradicional para reflejar la conexión entre
            lo individual y lo comunitario.
          </p>
        </div>
      </div>
    </section>
    <section data-aos="fade-up">
      <div class="subsection">
        <div class="text-subsection-single">
          <h2>Uso de la herramienta</h2>
          <div class="small-container">
            <p class="small">
              Su uso es sencillo: basta con arrastrar una imagen al programa
              para que realice la conversión. La aplicación ofrece controles
              para ajustar parámetros específicos según las necesidades. Una vez
              obtenida la imagen deseada, simplemente se presiona uno de los
              botones de “exportar” para guardar el resultado.
            </p>
          </div>
        </div>
      </div>
    </section>

    <ClientOnly>
      <video autoplay muted loop data-aos="fade-up">
        <source src="/public/assets/generador.mp4" type="video/mp4" />
      </video>
    </ClientOnly>

    <section data-aos="fade-up">
      <div class="subsection">
        <div class="text-subsection-single">
          <h2>Personalización de motivos</h2>
          <div class="small-container">
            <p class="small">
              Es posible personalizar los motivos utilizados para los cuatro
              valores de brillo de la imagen generada. Para ello, el software
              incluye una biblioteca de motivos, que contiene todos los motivos
              de la tipografía en formato SVG. Para actualizar los motivos, solo
              es necesario añadir los nuevos motivos en la carpeta “data” del
              programa. Y por último, deben renombrarse como “glifo1, “glifo2”,
              “glifo3” y “glifo4”, de modo que el software los reconozca al
              crear la imagen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <ClientOnly>
      <video autoplay muted loop data-aos="fade-up">
        <source src="/public/assets/cambio_glifos.mp4" type="video/mp4" />
      </video>
    </ClientOnly>



  </div>
</template>

<script>
import ComingSoon from "~/components/ComingSoon.vue";


definePageMeta({
  title: 'Generador | SGrafoType',
  meta: [
    { name: 'description', content: 'Como complemento a SGrafoType, se ha desarrollado un software que convierte imágenes en esgrafiados.' },
    { property: 'og:title', content: 'Generador | SGrafoType' },
    { property: 'og:description', content: 'Como complemento a SGrafoType, se ha desarrollado un software que convierte imágenes en esgrafiados.' },
    { name: 'twitter:title', content: 'Generador | SGrafoType' },
    { name: 'twitter:description', content: 'Como complemento a SGrafoType, se ha desarrollado un software que convierte imágenes en esgrafiados.' }
  ]
});


export default {
  components: {
    ComingSoon,
  },
};



</script>

<style></style>
