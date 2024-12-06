<template>
  <div class="cuadrantes-container subsection">
    <div class="cuadrante-container ss01">
      <p class="small cuadrante-text">
        Al pulsar una letra, accedemos al SS00, que es el estándar.
      </p>
      <div class="cuadrante-content">
        <div class="glifo">
          <div class="glifo-text">
            <p class="eyebrow">GLIFO SS00</p>
          </div>
          <div class="glifo-box">
            <svg
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 0L33.33 8.33V16.66H16.66V33.33H8.33L0 25V0H25ZM16.67 33.33V41.66L25 49.99L33.33 41.66V33.33H16.66H16.67ZM33.33 33.33H41.66L49.99 25L41.66 16.67H33.33V33.34V33.33Z"
              />
            </svg>
          </div>
        </div>
        <div class="texto-real">
          <div class="texto-real-text">
            <p class="eyebrow">TEXTO REAL</p>
          </div>
          <div class="texto-real-box">
            <p class="small">a</p>
          </div>
        </div>
      </div>
    </div>
    <div class="cuadrante-container ss02">
      <p class="small cuadrante-text">
        Si escribimos esa misma letra dos veces, accedemos al SS01.
      </p>
      <div class="cuadrante-content">
        <div class="glifo">
          <div class="glifo-text">
            <p class="eyebrow">GLIFO SS01</p>
          </div>
          <div class="glifo-box">
            <svg
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49.9902 25L41.6602 33.33L33.3302 33.33L33.3302 16.66L16.6602 16.66L16.6602 8.33L24.9902 -1.09278e-06L49.9902 0L49.9902 25ZM16.6602 16.67L8.33023 16.67L0.000231604 25L8.33023 33.33L16.6602 33.33L16.6602 16.66L16.6602 16.67ZM16.6602 33.33L16.6602 41.66L24.9902 49.99L33.3202 41.66L33.3202 33.33L16.6502 33.33L16.6602 33.33Z"
              />
            </svg>
          </div>
        </div>
        <div class="texto-real">
          <div class="texto-real-text">
            <p class="eyebrow">TEXTO REAL</p>
          </div>
          <div class="texto-real-box">
            <p class="small">aa</p>
          </div>
        </div>
      </div>
    </div>
    <div class="cuadrante-container ss03">
      <p class="small cuadrante-text">
        Si escribimos esa misma letra tres veces, accedemos al SS02.
      </p>
      <div class="cuadrante-content">
        <div class="glifo">
          <div class="glifo-text">
            <p class="eyebrow">GLIFO SS02</p>
          </div>

          <div class="glifo-box">
            <svg
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-1.09278e-06 24.9902L8.33 16.6602L16.66 16.6602L16.66 33.3302L33.33 33.3302L33.33 41.6602L25 49.9902L0 49.9902L-1.09278e-06 24.9902ZM33.33 33.3202L41.66 33.3202L49.99 24.9902L41.66 16.6602L33.33 16.6602L33.33 33.3302L33.33 33.3202ZM33.33 16.6602L33.33 8.33023L25 0.000231604L16.67 8.33023L16.67 16.6602L33.34 16.6602L33.33 16.6602Z"
              />
            </svg>
          </div>
        </div>
        <div class="texto-real">
          <div class="texto-real-text">
            <p class="eyebrow">TEXTO REAL</p>
          </div>
          <div class="texto-real-box">
            <p class="small">aaa</p>
          </div>
        </div>
      </div>
    </div>
    <div class="cuadrante-container ss04">
      <p class="small cuadrante-text">
        Si escribimos esa misma letra cuatro veces, accedemos al SS03.
      </p>
      <div class="cuadrante-content">
        <div class="glifo">
          <div class="glifo-text">
            <p class="eyebrow">GLIFO SS03</p>
          </div>
          <div class="glifo-box">
            <svg
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.9902 49.9902L16.6602 41.6602L16.6602 33.3302L33.3302 33.3302L33.3302 16.6602L41.6602 16.6602L49.9902 24.9902L49.9902 49.9902L24.9902 49.9902ZM33.3202 16.6602L33.3202 8.33024L24.9902 0.000234882L16.6602 8.33024L16.6602 16.6602L33.3302 16.6602L33.3202 16.6602ZM16.6602 16.6602L8.33023 16.6602L0.000230511 24.9902L8.33023 33.3202L16.6602 33.3202L16.6602 16.6502L16.6602 16.6602Z"
              />
            </svg>
          </div>
        </div>
        <div class="texto-real">
          <div class="texto-real-text">
            <p class="eyebrow">TEXTO REAL</p>
          </div>
          <div class="texto-real-box">
            <p class="small">aaaa</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.cuadrantes-container {
  // Responsive
  @apply gap-y-16 sm:gap-y-16 md:gap-y-12 lg:gap-y-12 xl:gap-y-12 2xl:gap-y-12;
  
  .ss01 {
    @apply col-start-1 col-end-13;
    @apply sm:col-start-1 sm:col-end-13;
    @apply md:col-start-1 md:col-end-13;
    @apply lg:col-start-1 lg:col-end-6;
    @apply xl:col-start-1 xl:col-end-6;
    @apply 2xl:col-start-1 2xl:col-end-6;
  }
  .ss03 {
    @apply col-start-1 col-end-13;
    @apply sm:col-start-1 sm:col-end-13;
    @apply md:col-start-1 md:col-end-13;
    @apply lg:col-start-1 lg:col-end-6;
    @apply xl:col-start-1 xl:col-end-6;
    @apply 2xl:col-start-1 2xl:col-end-6;
  }
  .ss02 {
    @apply col-start-1 col-end-13;
    @apply sm:col-start-1 sm:col-end-13;
    @apply md:col-start-1 md:col-end-13;
    @apply lg:col-start-8 lg:col-end-13;
    @apply xl:col-start-8 xl:col-end-13;
    @apply 2xl:col-start-8 2xl:col-end-13;
  }
  .ss04 {
    @apply col-start-1 col-end-13;
    @apply sm:col-start-1 sm:col-end-13;
    @apply md:col-start-1 md:col-end-13;
    @apply lg:col-start-8 lg:col-end-13;
    @apply xl:col-start-8 xl:col-end-13;
    @apply 2xl:col-start-8 2xl:col-end-13;
  }

  .cuadrante-container {
    @apply flex flex-col h-full;
    // Responsive
    @apply gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-6;
    .cuadrante-text {
      @apply flex-1;
    }
    .cuadrante-content {
      @apply grid grid-cols-2 gap-3;
      .glifo {
        @apply flex flex-col gap-6 w-full;
        .glifo-text {
          @apply flex-1;
        }
        .glifo-box {
          @apply flex border-2 border-azuloscuro-50 p-4 aspect-square rounded-xl justify-center items-center;
          svg {
            @apply fill-azuloscuro-50 h-2/3;
          }
        }
      }
      .texto-real {
        @apply flex flex-col gap-3 w-full;
        .texto-real-text {
          @apply flex-1;
        }
        .texto-real-box {
          @apply flex border-2 border-azuloscuro-50 p-4 aspect-square rounded-xl;
        }
      }
    }
  }
}
</style>
