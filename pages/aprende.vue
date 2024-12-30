<template>
  <div class="prueba-container">

    <section data-aos="fade-up" id="sets">
      <div class="section-info-container">
        <h1>Los sets estilísticos</h1>
        <div class="big-container">
          <p class="big">
            La familia tipográfica cuenta con tres sets estilísticos, además del
            estándar. Son tres grupos de glifos alternativos para cada una de
            las letras.
          </p>
        </div>
      </div>
      <TabsComponent2
        :optionNames="['SS00', 'SS01', 'SS02', 'SS03']"
        :defaultSelected="0"
      >
      </TabsComponent2>
    </section>
    <section data-aos="fade-up" id="terminos">
      <div class="section-info-container">
        <h1>Términos utilizados</h1>
        <div class="big-container">
          <p class="big">
            El funcionamiento de SGrafoType es algo complejo, por lo que antes
            de aprender a escribir con la herramienta, explicaremos los
            conceptos básicos que vamos a empezar a emplear de ahora en
            adelante.
          </p>
        </div>
      </div>
      <Carousel2 />
      <!-- <div class="subsection">
        <div class="text-subsection">
          <h2>Frisos</h2>
          <p class="small">
            Cuando el motivo se traslada en horizontal, se obtiene un friso.
          </p>
        </div>
        <Frisos />
      </div>
      <div class="subsection">
        <div class="text-subsection">
          <h2>Mosaicos</h2>
          <p class="small">
            Cuando el motivo se traslada en horizontal y vertical, se obtiene un
            mosaico.
          </p>
        </div>
        <Mosaicos />
      </div> -->
    </section>
    <section data-aos="fade-up" id="escribe">
      <div class="section-info-container">
        <h1>Escribe con SGrafoType</h1>
        <div class="big-container">
          <p class="big">
            SGrafoType está programada por medio de OpenType para poder acceder
            a los cuatro sets estilísticos de una manera cómoda.
          </p>
        </div>
      </div>
      <Cuadrantes />
      <TypeTester />
    </section>
    <section data-aos="fade-up" id="clasificacion">
      <div class="section-info-container">
        <h1>Clasificación de motivos</h1>
        <div class="big-container">
          <p class="big">
            Pensando en que los motivos se van a combinar entre ellos, se han
            agrupado con aquellos con los que conectan mejor a la hora de
            repetirse en el plano.
          </p>
          <p class="big">
            Es decir, dependiendo de en qué puntos de unión de la región unidad
            termine el motivo, conectará mejor con unos o con otros de todo el
            grupo de motivos.
          </p>
        </div>
      </div>

      <Clasificacion
        :optionNames="[
          'Frisos',
          'Mosaicos 1',
          'Mosaicos 2',
          'Mosaicos 3',
          'Triángulos',
        ]"
        :defaultSelected="0"
      >
      </Clasificacion>
      <div class="subsection" >
        <div class="text-subsection-single">
          <h2>Triángulos</h2>
          <div class="small-container">
            <div class="small">
              La O y la P sólo se enlazan entre ellas y con ningún otro motivo.
              La minúscula escribe un triángulo que apunta arriba, y la
              mayúscula, un triángulo que apunta abajo.
            </div>
            <div class="small">
              SGrafoType está diseñada para detectar cuando se escriben una
              mayúscula y minúscula juntas, de manera que reduce el kerning y
              conecta los glifos.
            </div>
          </div>
        </div>
        <Triangulos />
      </div>
    </section>
    <section data-aos="fade-up" id="variabilidad">
      <div class="section-info-container">
        <h1>Variabilidad</h1>
        <div class="big-container">
          <p class="big">
            SGrafoType tiene un eje de variabilidad: la anchura, para remarcar
            el latido de las personas que pasan por Segovia, sobretodo en el
            terreno audiovisual.
          </p>
          <p class="big">
            Tenemos cinco instancias de el eje de variabilidad: Movement 1, 2,
            3, 4 y 5, ero la variabilidad nos permite obtener todos los pasos
            intermedios, del 1 al 1000.
          </p>
        </div>
      </div>
      <TypeVariability />
    </section>

  </div>
</template>

<script>




definePageMeta({
  layout: 'prueba-layout',
  title: 'Aprende | SGrafoType',
  meta: [
    { name: 'description', content: 'En esta sección aprenderás todos los conocimientos necesarios para aprender a utilizar SGrafoType.' },
    { property: 'og:title', content: 'Aprende | SGrafoType' },
    { property: 'og:description', content: 'En esta sección aprenderás todos los conocimientos necesarios para aprender a utilizar SGrafoType.' },
    { name: 'twitter:title', content: 'Aprende | SGrafoType' },
    { name: 'twitter:description', content: 'En esta sección aprenderás todos los conocimientos necesarios para aprender a utilizar SGrafoType.' }
  ]
});


import TextInput from "~/components/TextInput.vue";
import Keyboard from "~/components/Keyboard.vue";
import Carousel from "~/components/Carousel.vue";
import Carousel2 from "~/components/Carousel2.vue";
import TypeTester from "~/components/TypeTester.vue";
import TabsComponent from "~/components/TabsComponent.vue";
import TabsComponent2 from "~/components/TabsComponent.vue";
import TypeVariability from "~/components/TypeVariability.vue";
import Frisos from "~/components/Frisos.vue";
import Mosaicos from "~/components/Mosaicos.vue";
import Cuadrantes from "~/components/Cuadrantes.vue";
import Clasificacion from "~/components/Clasificacion.vue";
import Triangulos from "~/components/Triangulos.vue";
import LateralNav from "~/components/LateralNav.vue";


export default {
  components: {
    TextInput,
    Keyboard,
    Carousel,
    Carousel2,
    TypeTester,
    TabsComponent,
    TabsComponent2,
    TypeVariability,
    Frisos,
    Mosaicos,
    Cuadrantes,
    Clasificacion,
    Triangulos,
    LateralNav
  },
};



</script>

<style lang="sass" scoped></style>
