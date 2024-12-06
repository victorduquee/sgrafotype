<template>
  <div class="carousel-container">
    <div class="arrows">
      <button class="arrow pastilla_icon" @click="prevSlide">
        <svg
          width="15"
          height="27"
          viewBox="0 0 15 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 25.3999L2 13.3999L14 1.3999"

            stroke-width="2"
          />
        </svg>
      </button>
      <button class="arrow pastilla_icon" @click="nextSlide">
        <svg
          width="15"
          height="27"
          viewBox="0 0 15 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.3999L13 13.3999L1 25.3999"

            stroke-width="2"
          />
        </svg>
      </button>
    </div>

    <div class="carousel-slides">
      <!-- Div 1 -->
      <div class="carousel-slide subsection" v-show="currentSlide === 0">
        <div class="text-subsection">
          <h2>Región unidad</h2>
          <p class="small">
            Es la estructura que articula toda la familia, y que permite generar
            una coherencia entre la diversidad de esgrafiados de la ciudad.
          </p>
          <p class="small">
            Esta región plana es la que genera los mosaicos y los frisos al
            aplicarle las translaciones en vertical y horizontal, e irá formando
            una retícula en el texto.
          </p>
        </div>
        <div class="graph graph1">
          <div class="graphBall graphBall1"></div>
          <div class="graphBall graphBall2"></div>
          <div class="graphBall graphBall3"></div>
          <div class="graphBall graphBall4"></div>
          <div class="graphBall graphBall5"></div>
          <div class="graphBall graphBall6"></div>
          <div class="graphBall graphBall7"></div>
          <div class="graphBall graphBall8"></div>
          <div class="graphBall graphBall9"></div>
          <div class="graphBall graphBall10"></div>
          <div class="graphBall graphBall11"></div>
          <div class="graphBall graphBall12"></div>
          <div class="graphBall graphBall13"></div>
          <div class="graphBall graphBall14"></div>
          <div class="graphBall graphBall15"></div>
          <div class="graphBall graphBall16"></div>
          <div class="graphBall graphBall17"></div>
          <div class="graphBall graphBall18"></div>
          <div class="graphBall graphBall19"></div>
          <div class="graphBall graphBall20"></div>
          <div class="graphBall graphBall21"></div>
          <div class="graphBall graphBall22"></div>
          <div class="graphBall graphBall23"></div>
          <div class="graphBall graphBall24"></div>
          <div class="graphBall graphBall25"></div>

          <div class="graphSection graphSection1"></div>
          <div class="graphSection graphSection2"></div>
          <div class="graphSection graphSection3"></div>
          <div class="graphSection graphSection4"></div>
          <div class="graphSection graphSection5"></div>
          <div class="graphSection graphSection6"></div>
          <div class="graphSection graphSection7"></div>
          <div class="graphSection graphSection8"></div>
          <div class="graphSection graphSection9"></div>
          <div class="graphSection graphSection10"></div>
          <div class="graphSection graphSection11"></div>
          <div class="graphSection graphSection12"></div>
          <div class="graphSection graphSection13"></div>
          <div class="graphSection graphSection14"></div>
          <div class="graphSection graphSection15"></div>
          <div class="graphSection graphSection16"></div>
        </div>
      </div>

      <!-- Div 2 -->
      <div class="carousel-slide subsection" v-show="currentSlide === 1">
        <div class="text-subsection">
          <h2>Puntos de unión</h2>
          <p class="small">Son cada uno de los puntos en los que convergen las líneas horizontales y verticales que conforman la región unidad cuadrada</p>
        </div>
        <div class="graph graph2">
          <div class="graphBall graphBall1"></div>
          <div class="graphBall graphBall2"></div>
          <div class="graphBall graphBall3"></div>
          <div class="graphBall graphBall4"></div>
          <div class="graphBall graphBall5"></div>
          <div class="graphBall graphBall6"></div>
          <div class="graphBall graphBall7"></div>
          <div class="graphBall graphBall8"></div>
          <div class="graphBall graphBall9"></div>
          <div class="graphBall graphBall10"></div>
          <div class="graphBall graphBall11"></div>
          <div class="graphBall graphBall12"></div>
          <div class="graphBall graphBall13"></div>
          <div class="graphBall graphBall14"></div>
          <div class="graphBall graphBall15"></div>
          <div class="graphBall graphBall16"></div>
          <div class="graphBall graphBall17"></div>
          <div class="graphBall graphBall18"></div>
          <div class="graphBall graphBall19"></div>
          <div class="graphBall graphBall20"></div>
          <div class="graphBall graphBall21"></div>
          <div class="graphBall graphBall22"></div>
          <div class="graphBall graphBall23"></div>
          <div class="graphBall graphBall24"></div>
          <div class="graphBall graphBall25"></div>

          <div class="graphSection graphSection1"></div>
          <div class="graphSection graphSection2"></div>
          <div class="graphSection graphSection3"></div>
          <div class="graphSection graphSection4"></div>
          <div class="graphSection graphSection5"></div>
          <div class="graphSection graphSection6"></div>
          <div class="graphSection graphSection7"></div>
          <div class="graphSection graphSection8"></div>
          <div class="graphSection graphSection9"></div>
          <div class="graphSection graphSection10"></div>
          <div class="graphSection graphSection11"></div>
          <div class="graphSection graphSection12"></div>
          <div class="graphSection graphSection13"></div>
          <div class="graphSection graphSection14"></div>
          <div class="graphSection graphSection15"></div>
          <div class="graphSection graphSection16"></div>
        </div>
      </div>

      <!-- Div 3 -->
      <div class="carousel-slide subsection" v-show="currentSlide === 2">
        <div class="text-subsection">
          <h2>Cuadrante</h2>
          <p class="small">La región unidad se divide en 4 cuadrantes, numerados del 1 al 4. Los dos superiores son 1 y 2, y los dos inferiores, 3 y 4.</p>
        </div>
        <div class="graph graph3">
          <div class="cuadrante-container">
            <div class="cuadrante cuadrante-1">
              <p class="small">Cuadrante 1</p>
            </div>
            <div class="cuadrante cuadrante-2">
              <p class="small">Cuadrante 2</p>
            </div>
            <div class="cuadrante cuadrante-3">
              <p class="small">Cuadrante 3</p>
            </div>
            <div class="cuadrante cuadrante-4">
              <p class="small">Cuadrante 4</p>
            </div>
          </div>
          <div class="graphBall graphBall1"></div>
          <div class="graphBall graphBall2"></div>
          <div class="graphBall graphBall3"></div>
          <div class="graphBall graphBall4"></div>
          <div class="graphBall graphBall5"></div>
          <div class="graphBall graphBall6"></div>
          <div class="graphBall graphBall7"></div>
          <div class="graphBall graphBall8"></div>
          <div class="graphBall graphBall9"></div>
          <div class="graphBall graphBall10"></div>
          <div class="graphBall graphBall11"></div>
          <div class="graphBall graphBall12"></div>
          <div class="graphBall graphBall13"></div>
          <div class="graphBall graphBall14"></div>
          <div class="graphBall graphBall15"></div>
          <div class="graphBall graphBall16"></div>
          <div class="graphBall graphBall17"></div>
          <div class="graphBall graphBall18"></div>
          <div class="graphBall graphBall19"></div>
          <div class="graphBall graphBall20"></div>
          <div class="graphBall graphBall21"></div>
          <div class="graphBall graphBall22"></div>
          <div class="graphBall graphBall23"></div>
          <div class="graphBall graphBall24"></div>
          <div class="graphBall graphBall25"></div>

          <div class="graphSection graphSection1"></div>
          <div class="graphSection graphSection2"></div>
          <div class="graphSection graphSection3"></div>
          <div class="graphSection graphSection4"></div>
          <div class="graphSection graphSection5"></div>
          <div class="graphSection graphSection6"></div>
          <div class="graphSection graphSection7"></div>
          <div class="graphSection graphSection8"></div>
          <div class="graphSection graphSection9"></div>
          <div class="graphSection graphSection10"></div>
          <div class="graphSection graphSection11"></div>
          <div class="graphSection graphSection12"></div>
          <div class="graphSection graphSection13"></div>
          <div class="graphSection graphSection14"></div>
          <div class="graphSection graphSection15"></div>
          <div class="graphSection graphSection16"></div>
        </div>
      </div>

      <!-- Div 4 -->
      <div class="carousel-slide subsection" v-show="currentSlide === 3">
        <div class="text-subsection">
          <h2>Glifo</h2>
          <p class="small">Cada letra de la familia tipográfica contiene un glifo. Cada uno de los sets estilísticos del glifo tiene que ir en uno de los cuadrantes de la región unidad.</p>
          <p class="small">SS00 🡢 C1</p>
          <p class="small">SS01 🡢 C2</p>
          <p class="small">SS02 🡢 C3</p>
          <p class="small">SS03 🡢 C4</p>

        </div>
        <div class="graph graph4">
          <div class="svg-container">
            <svg
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="svg_1"
            >
              <path
                d="M25 0L33.33 8.33V16.66H16.66V33.33H8.33L0 25V0H25ZM16.67 33.33V41.66L25 49.99L33.33 41.66V33.33H16.66H16.67ZM33.33 33.33H41.66L49.99 25L41.66 16.67H33.33V33.34V33.33Z"
              />
            </svg>

            <svg
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="svg_2"
            >
              <path
                d="M50 0V25L41.67 33.33H33.34V16.66H16.67V8.33L25 0H50ZM16.67 33.33V41.66L25 49.99L33.33 41.66V33.33H16.66H16.67ZM16.67 16.67H8.34L0 25L8.33 33.33H16.66V16.66L16.67 16.67Z"
              />
            </svg>

            <svg
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="svg_3"
            >
              <path
                d="M0 50V25L8.33 16.67H16.66V33.34H33.33V41.67L25 50H0ZM33.33 16.67V8.34L25 0L16.67 8.33V16.66H33.34L33.33 16.67ZM33.33 33.33H41.66L49.99 25L41.66 16.67H33.33V33.34V33.33Z"
              />
            </svg>

            <svg
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="svg_4"
            >
              <path
                d="M25 50L16.67 41.67V33.34H33.34V16.67H41.67L50 25V50H25ZM33.33 16.67V8.34L25 0L16.67 8.33V16.66H33.34L33.33 16.67ZM16.67 16.67H8.34L0 25L8.33 33.33H16.66V16.66L16.67 16.67Z"
              />
            </svg>
          </div>

          <div class="graphBall graphBall1"></div>
          <div class="graphBall graphBall2"></div>
          <div class="graphBall graphBall3"></div>
          <div class="graphBall graphBall4"></div>
          <div class="graphBall graphBall5"></div>
          <div class="graphBall graphBall6"></div>
          <div class="graphBall graphBall7"></div>
          <div class="graphBall graphBall8"></div>
          <div class="graphBall graphBall9"></div>
          <div class="graphBall graphBall10"></div>
          <div class="graphBall graphBall11"></div>
          <div class="graphBall graphBall12"></div>
          <div class="graphBall graphBall13"></div>
          <div class="graphBall graphBall14"></div>
          <div class="graphBall graphBall15"></div>
          <div class="graphBall graphBall16"></div>
          <div class="graphBall graphBall17"></div>
          <div class="graphBall graphBall18"></div>
          <div class="graphBall graphBall19"></div>
          <div class="graphBall graphBall20"></div>
          <div class="graphBall graphBall21"></div>
          <div class="graphBall graphBall22"></div>
          <div class="graphBall graphBall23"></div>
          <div class="graphBall graphBall24"></div>
          <div class="graphBall graphBall25"></div>

          <div class="graphSection graphSection1"></div>
          <div class="graphSection graphSection2"></div>
          <div class="graphSection graphSection3"></div>
          <div class="graphSection graphSection4"></div>
          <div class="graphSection graphSection5"></div>
          <div class="graphSection graphSection6"></div>
          <div class="graphSection graphSection7"></div>
          <div class="graphSection graphSection8"></div>
          <div class="graphSection graphSection9"></div>
          <div class="graphSection graphSection10"></div>
          <div class="graphSection graphSection11"></div>
          <div class="graphSection graphSection12"></div>
          <div class="graphSection graphSection13"></div>
          <div class="graphSection graphSection14"></div>
          <div class="graphSection graphSection15"></div>
          <div class="graphSection graphSection16"></div>
        </div>
      </div>

      <!-- Div 5 -->
      <div class="carousel-slide subsection" v-show="currentSlide === 4">
        <div class="text-subsection">
          <h2>Motivo</h2>
          <p class="small">Es el diseño completo contenido en la región unidad. Lo obtenemos cuando juntamos los cuatro glifos de los cuatro cuadrantes de la región unidad.</p>
        </div>
        <div class="graph graph5">
          <div class="svg-container">
            <svg
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="svg_1"
            >
              <path
                d="M25 0L33.33 8.33V16.66H16.66V33.33H8.33L0 25V0H25ZM16.67 33.33V41.66L25 49.99L33.33 41.66V33.33H16.66H16.67ZM33.33 33.33H41.66L49.99 25L41.66 16.67H33.33V33.34V33.33Z"
              />
            </svg>

            <svg
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="svg_2"
            >
              <path
                d="M50 0V25L41.67 33.33H33.34V16.66H16.67V8.33L25 0H50ZM16.67 33.33V41.66L25 49.99L33.33 41.66V33.33H16.66H16.67ZM16.67 16.67H8.34L0 25L8.33 33.33H16.66V16.66L16.67 16.67Z"
              />
            </svg>

            <svg
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="svg_3"
            >
              <path
                d="M0 50V25L8.33 16.67H16.66V33.34H33.33V41.67L25 50H0ZM33.33 16.67V8.34L25 0L16.67 8.33V16.66H33.34L33.33 16.67ZM33.33 33.33H41.66L49.99 25L41.66 16.67H33.33V33.34V33.33Z"
              />
            </svg>

            <svg
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="svg_4"
            >
              <path
                d="M25 50L16.67 41.67V33.34H33.34V16.67H41.67L50 25V50H25ZM33.33 16.67V8.34L25 0L16.67 8.33V16.66H33.34L33.33 16.67ZM16.67 16.67H8.34L0 25L8.33 33.33H16.66V16.66L16.67 16.67Z"
              />
            </svg>
          </div>

          <div class="graphBall graphBall1"></div>
          <div class="graphBall graphBall2"></div>
          <div class="graphBall graphBall3"></div>
          <div class="graphBall graphBall4"></div>
          <div class="graphBall graphBall5"></div>
          <div class="graphBall graphBall6"></div>
          <div class="graphBall graphBall7"></div>
          <div class="graphBall graphBall8"></div>
          <div class="graphBall graphBall9"></div>
          <div class="graphBall graphBall10"></div>
          <div class="graphBall graphBall11"></div>
          <div class="graphBall graphBall12"></div>
          <div class="graphBall graphBall13"></div>
          <div class="graphBall graphBall14"></div>
          <div class="graphBall graphBall15"></div>
          <div class="graphBall graphBall16"></div>
          <div class="graphBall graphBall17"></div>
          <div class="graphBall graphBall18"></div>
          <div class="graphBall graphBall19"></div>
          <div class="graphBall graphBall20"></div>
          <div class="graphBall graphBall21"></div>
          <div class="graphBall graphBall22"></div>
          <div class="graphBall graphBall23"></div>
          <div class="graphBall graphBall24"></div>
          <div class="graphBall graphBall25"></div>

          <div class="graphSection graphSection1"></div>
          <div class="graphSection graphSection2"></div>
          <div class="graphSection graphSection3"></div>
          <div class="graphSection graphSection4"></div>
          <div class="graphSection graphSection5"></div>
          <div class="graphSection graphSection6"></div>
          <div class="graphSection graphSection7"></div>
          <div class="graphSection graphSection8"></div>
          <div class="graphSection graphSection9"></div>
          <div class="graphSection graphSection10"></div>
          <div class="graphSection graphSection11"></div>
          <div class="graphSection graphSection12"></div>
          <div class="graphSection graphSection13"></div>
          <div class="graphSection graphSection14"></div>
          <div class="graphSection graphSection15"></div>
          <div class="graphSection graphSection16"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 5;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + 5) % 5;
};
</script>

<style lang="scss" scoped>
.carousel-container {
  @apply flex flex-col col-span-12;
}





.graph {
  @apply grid grid-cols-4 relative aspect-square;
  
  /* Responsive */
  @apply col-start-1 col-end-13;
  @apply sm:col-start-1 sm:col-end-8;
  @apply md:col-start-1 md:col-end-7;
  @apply lg:col-start-8 lg:col-end-13;
  @apply xl:col-start-8 xl:col-end-13;
  @apply 2xl:col-start-8 2xl:col-end-13;
}

.graph1 {
  .graphSection {
    @apply border-naranja-50 outline-naranja-50 bg-naranja-50 bg-opacity-20;
  }

  .graphBall {
    @apply border-azuloscuro-800;
  }
}

.graph2 {
  .graphSection {
    @apply border-azuloscuro-800 outline-azuloscuro-800;
  }

  .graphBall {
    @apply border-naranja-50 bg-naranja-50;
  }
}

.graph3 {
  @apply relative;
  .graphSection {
    @apply border-azuloscuro-800 outline-azuloscuro-800;
  }

  .graphBall {
    @apply border-azuloscuro-800;
  }

  .cuadrante-container {
    @apply grid grid-cols-2 absolute top-0 left-0 right-0 bottom-0 z-30;
    .cuadrante {
      @apply flex justify-center items-center  outline outline-1 border-[1px];
    }
    .cuadrante-1 {
      @apply bg-naranja-50 border-naranja-50 outline-naranja-50 z-50 text-naranja-50;
      p {
        color: white !important;
        font-weight: 600;
      }
    }
    .cuadrante-2,
    .cuadrante-3,
    .cuadrante-4 {
      @apply border-azuloscuro-50 outline-azuloscuro-50;
    }
  }
}

.graph4 {
  @apply relative;
  .graphSection {
    @apply border-azuloscuro-800 outline-azuloscuro-800;
  }

  .graphBall {
    @apply border-azuloscuro-800;
  }

  .svg-container {
    @apply grid grid-cols-2 absolute top-0 left-0 right-0 bottom-0;
    svg {
      @apply w-full fill-naranja-50 z-40;
    }

    .svg_2,
    .svg_3,
    .svg_4 {
      @apply fill-naranja-50 opacity-50;
    }
  }
}

.graph5 {
  @apply relative;
  .graphSection {
    @apply border-azuloscuro-800 outline-azuloscuro-800;
  }

  .graphBall {
    @apply border-azuloscuro-800;
  }

  .svg-container {
    @apply grid grid-cols-2 absolute top-0 left-0 right-0 bottom-0;
    svg {
      @apply w-full fill-naranja-50 z-40;
    }
  }
}

.graphSection {
  @apply outline outline-1 border-[1px] border-azuloscuro-50 outline-azuloscuro-50 aspect-square;
}

.graphBall {
  @apply h-5 w-5 rounded-full border-2 border-azuloscuro-50 absolute bg-white;
}

.graphBall1 {
  @apply left-0 top-0 -translate-x-1/2 -translate-y-1/2;
}

.graphBall2 {
  @apply left-1/4 top-0 -translate-x-1/2 -translate-y-1/2;
}

.graphBall3 {
  @apply left-1/2 top-0 -translate-x-1/2 -translate-y-1/2;
}

.graphBall4 {
  @apply left-3/4 top-0 -translate-x-1/2 -translate-y-1/2;
}

.graphBall5 {
  @apply right-0 top-0 translate-x-1/2 -translate-y-1/2;
}

.graphBall6 {
  @apply left-0 top-1/4 -translate-x-1/2 -translate-y-1/2;
}

.graphBall7 {
  @apply left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2;
}

.graphBall8 {
  @apply left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2;
}

.graphBall9 {
  @apply left-3/4 top-1/4 -translate-x-1/2 -translate-y-1/2;
}

.graphBall10 {
  @apply right-0 top-1/4 translate-x-1/2 -translate-y-1/2;
}

.graphBall11 {
  @apply left-0 top-1/2 -translate-x-1/2 -translate-y-1/2;
}

.graphBall12 {
  @apply left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2;
}

.graphBall13 {
  @apply left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2;
}

.graphBall14 {
  @apply left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2;
}

.graphBall15 {
  @apply right-0 top-1/2 translate-x-1/2 -translate-y-1/2;
}

.graphBall16 {
  @apply left-0 top-3/4 -translate-x-1/2 -translate-y-1/2;
}

.graphBall17 {
  @apply left-1/4 top-3/4 -translate-x-1/2 -translate-y-1/2;
}

.graphBall18 {
  @apply left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2;
}

.graphBall19 {
  @apply left-3/4 top-3/4 -translate-x-1/2 -translate-y-1/2;
}

.graphBall20 {
  @apply right-0 top-3/4 translate-x-1/2 -translate-y-1/2;
}

.graphBall21 {
  @apply left-0 bottom-0 -translate-x-1/2 translate-y-1/2;
}

.graphBall22 {
  @apply left-1/4 bottom-0 -translate-x-1/2 translate-y-1/2;
}

.graphBall23 {
  @apply left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2;
}

.graphBall24 {
  @apply left-3/4 bottom-0 -translate-x-1/2 translate-y-1/2;
}

.graphBall25 {
  @apply right-0 bottom-0 translate-x-1/2 translate-y-1/2;
}

.arrows {
  @apply flex flex-row col-span-12 gap-6 mb-8;
}

.arrow {
  @apply cursor-pointer;
}
</style>
