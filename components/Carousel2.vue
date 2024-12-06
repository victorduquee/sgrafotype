<template>
  <div class="carousel-container">
    <div class="arrows">
      <button class="arrow pastilla_icon icon-1" @click="prevSlide">
        <svg
          width="15"
          height="27"
          viewBox="0 0 15 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 25.3999L2 13.3999L14 1.3999" />
        </svg>
      </button>
      <button class="arrow pastilla_icon icon-2" @click="nextSlide">
        <svg
          width="15"
          height="27"
          viewBox="0 0 15 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1.3999L13 13.3999L1 25.3999" />
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
          <p class="small">
            Son cada uno de los puntos en los que convergen las líneas
            horizontales y verticales que conforman la región unidad cuadrada
          </p>
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
          <p class="small">
            La región unidad se divide en 4 cuadrantes, numerados del 1 al 4.
            Los dos superiores son 1 y 2, y los dos inferiores, 3 y 4.
          </p>
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
          <div class="stylistic-sets-container">
            <p class="small">
              Cada letra de la familia tipográfica contiene un glifo. Cada uno
              de los sets estilísticos del glifo tiene que ir en uno de los
              cuadrantes de la región unidad.
            </p>
            <div class="stylistic-sets-content">
              <p class="small-grid">SS00 🡢 C1</p>
              <p class="small-grid">SS01 🡢 C2</p>
              <p class="small-grid">SS02 🡢 C3</p>
              <p class="small-grid">SS03 🡢 C4</p>
            </div>
          </div>
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
          <p class="small">
            Es el diseño completo contenido en la región unidad. Lo obtenemos
            cuando juntamos los cuatro glifos de los cuatro cuadrantes de la
            región unidad.
          </p>
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

      <!-- Div 6 -->
      <div class="carousel-slide subsection" v-show="currentSlide === 5">
        <div class="text-subsection">
          <h2>Frisos</h2>
          <p class="small">
            Cuando el motivo se traslada en horizontal, se obtiene un friso.
          </p>
        </div>
        <div class="graph graph6">
          <div class="frisos-container">
            <svg
              viewBox="0 0 401 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.25 0L25.25 25H0.25V0H50.25ZM0.25 75V100H50.25L25.25 75H0.25ZM25.25 25L0.25 50L25.25 75L50.25 50L25.25 25ZM75.25 25L50.25 50L75.25 75L100.25 50L75.25 25ZM100.25 25H125.25L150.25 0H50.25L75.25 25H100.25ZM100.25 50L125.25 75L150.25 50L125.25 25L100.25 50ZM100.25 75H75.25L50.25 100H150.25L125.25 75H100.25ZM200.25 25H225.25L250.25 0H150.25L175.25 25H200.25ZM175.25 25L150.25 50L175.25 75L200.25 50L175.25 25ZM300.25 25H325.25L350.25 0H250.25L275.25 25H300.25ZM200.25 75H175.25L150.25 100H250.25L225.25 75H200.25ZM200.25 50L225.25 75L250.25 50L225.25 25L200.25 50ZM275.25 25L250.25 50L275.25 75L300.25 50L275.25 25ZM300.25 75H275.25L250.25 100H350.25L325.25 75H300.25ZM375.25 75L400.25 50L375.25 25L350.25 50L375.25 75ZM400.25 100V75H375.25L350.25 100H400.25ZM400.25 0H350.25L375.25 25H400.25V0ZM325.25 75L350.25 50L325.25 25L300.25 50L325.25 75Z"
              />
            </svg>
            <svg
              viewBox="0 0 400 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 50.8398L0 75.8398V25.8398L25 50.8398ZM100 25.8398L75 0.839844H25L0 25.8398H25L50 50.8398L25 75.8398H0L25 100.84H75L100 75.8398L125 50.8398L100 25.8398ZM200 25.8398L175 0.839844H125L100 25.8398H125L150 50.8398L125 75.8398H100L125 100.84H175L200 75.8398L225 50.8398L200 25.8398ZM300 25.8398L275 0.839844H225L200 25.8398H225L250 50.8398L225 75.8398H200L225 100.84H275L300 75.8398L325 50.8398L300 25.8398ZM375 0.839844H325L300 25.8398H325L350 50.8398L325 75.8398H300L325 100.84H375L400 75.8398V25.8398L375 0.839844Z"
              />
            </svg>
            <svg
              viewBox="0 0 401 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M400.25 0.860352V75.8604L375.25 50.8604L387.75 38.3604V13.3604H362.75L350.25 25.8604L337.75 13.3604H312.75V38.3604L325.25 50.8604L300.25 75.8604L275.25 50.8604L287.75 38.3604V13.3604H262.75L250.25 25.8604L237.75 13.3604H212.75V38.3604L225.25 50.8604L200.25 75.8604L175.25 50.8604L187.75 38.3604V13.3604H162.75L150.25 25.8604L137.75 13.3604H112.75V38.3604L125.25 50.8604L100.25 75.8604L75.25 50.8604L87.75 38.3604V13.3604H62.75L50.25 25.8604L37.75 13.3604H12.75V38.3604L25.25 50.8604L0.25 75.8604V0.860352H400.25ZM362.75 88.3604V63.3604L375.25 50.8604L350.25 25.8604L325.25 50.8604L337.75 63.3604V88.3604H312.75L300.25 75.8604L287.75 88.3604H262.75V63.3604L275.25 50.8604L250.25 25.8604L225.25 50.8604L237.75 63.3604V88.3604H212.75L200.25 75.8604L187.75 88.3604H162.75V63.3604L175.25 50.8604L150.25 25.8604L125.25 50.8604L137.75 63.3604V88.3604H112.75L100.25 75.8604L87.75 88.3604H62.75V63.3604L75.25 50.8604L50.25 25.8604L25.25 50.8604L37.75 63.3604V88.3604H12.75L0.25 75.8604V100.86H400.25V75.8604L387.75 88.3604H362.75Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Div 7 -->
      <div class="carousel-slide subsection" v-show="currentSlide === 6">
        <div class="text-subsection">
          <h2>Mosaicos</h2>
          <p class="small">
            Cuando el motivo se traslada en horizontal y vertical, se obtiene un
            mosaico.
          </p>
        </div>
        <div class="graph graph7">
          <div class="mosaicos-container">
            <svg
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 125H88.91C87 118.29 81.71 113 75 111.09V88.91C81.71 87 87 81.71 88.91 75H111.09C113 81.71 118.29 87 125 88.91V111.09C118.29 113 113 118.29 111.09 125H100ZM175 111.09C181.71 113 187 118.29 188.91 125H211.09C213 118.29 218.29 113 225 111.09V88.91C218.29 87 213 81.71 211.09 75H188.91C187 81.71 181.71 87 175 88.91V111.09ZM250 124.97C247.58 116.51 239.79 110.32 230.55 110.32C228.63 110.32 226.77 110.59 225 111.1V125.01H211.09C210.59 126.77 210.31 128.63 210.31 130.55C210.31 139.8 216.52 147.6 224.99 150.01C216.51 152.42 210.31 160.22 210.31 169.47C210.31 171.39 210.58 173.25 211.09 175.01H225V188.92C226.76 189.42 228.62 189.7 230.55 189.7C239.79 189.7 247.58 183.51 250 175.05C252.42 183.51 260.21 189.7 269.45 189.7C271.37 189.7 273.23 189.43 275 188.92V175.01H288.91C289.41 173.25 289.69 171.39 289.69 169.47C289.69 160.22 283.48 152.42 275.01 150.01C283.49 147.6 289.69 139.8 289.69 130.55C289.69 128.63 289.42 126.77 288.91 125.01H275V111.1C273.24 110.6 271.38 110.32 269.45 110.32C260.21 110.32 252.42 116.51 250 124.97ZM25 111.09V88.91C18.29 87 13 81.71 11.09 75H0V125H11.09C13 118.29 18.29 113 25 111.09ZM150 175.03C152.42 183.49 160.21 189.68 169.45 189.68C171.37 189.68 173.23 189.41 175 188.9V174.99H188.91C189.41 173.23 189.69 171.37 189.69 169.45C189.69 160.2 183.48 152.4 175.01 149.99C183.49 147.58 189.69 139.78 189.69 130.53C189.69 128.61 189.42 126.75 188.91 124.99H175V111.08C173.24 110.58 171.38 110.3 169.45 110.3C160.21 110.3 152.42 116.49 150 124.95C147.58 116.49 139.79 110.3 130.55 110.3C128.63 110.3 126.77 110.57 125 111.08V124.99H111.09C110.59 126.75 110.31 128.61 110.31 130.53C110.31 139.78 116.52 147.58 124.99 149.99C116.51 152.4 110.31 160.2 110.31 169.45C110.31 171.37 110.58 173.23 111.09 174.99H125V188.9C126.76 189.4 128.62 189.68 130.55 189.68C139.79 189.68 147.58 183.49 150 175.03ZM188.91 175C187 181.71 181.71 187 175 188.91V211.09C181.71 213 187 218.29 188.91 225H211.09C213 218.29 218.29 213 225 211.09V188.91C218.29 187 213 181.71 211.09 175H188.91ZM375 188.91V211.09C381.71 213 387 218.29 388.91 225H400V175H388.91C387 181.71 381.71 187 375 188.91ZM25 88.91C26.76 89.41 28.62 89.69 30.55 89.69C39.79 89.69 47.58 83.5 50 75.04C52.42 83.5 60.21 89.69 69.45 89.69C71.37 89.69 73.23 89.42 75 88.91V75H88.91C89.41 73.24 89.69 71.38 89.69 69.46C89.69 60.21 83.48 52.41 75.01 50C83.49 47.59 89.69 39.79 89.69 30.54C89.69 28.62 89.42 26.76 88.91 25H75V11.09C73.24 10.59 71.38 10.31 69.45 10.31C60.21 10.31 52.42 16.5 50 24.96C47.58 16.5 39.79 10.31 30.55 10.31C28.63 10.31 26.77 10.58 25 11.09V25H11.09C10.59 26.76 10.31 28.62 10.31 30.54C10.31 39.79 16.52 47.59 24.99 50C16.51 52.41 10.31 60.21 10.31 69.46C10.31 71.38 10.58 73.24 11.09 75H25V88.91ZM25 188.91C26.76 189.41 28.62 189.69 30.55 189.69C39.79 189.69 47.58 183.5 50 175.04C52.42 183.5 60.21 189.69 69.45 189.69C71.37 189.69 73.23 189.42 75 188.91V175H88.91C89.41 173.24 89.69 171.38 89.69 169.46C89.69 160.21 83.48 152.41 75.01 150C83.49 147.59 89.69 139.79 89.69 130.54C89.69 128.62 89.42 126.76 88.91 125H75V111.09C73.24 110.59 71.38 110.31 69.45 110.31C60.21 110.31 52.42 116.5 50 124.96C47.58 116.5 39.79 110.31 30.55 110.31C28.63 110.31 26.77 110.58 25 111.09V125H11.09C10.59 126.76 10.31 128.62 10.31 130.54C10.31 139.79 16.52 147.59 24.99 150C16.51 152.41 10.31 160.21 10.31 169.46C10.31 171.38 10.58 173.24 11.09 175H25V188.91ZM400 0H375V11.09C381.71 13 387 18.29 388.91 25H400V0ZM375 11.09C373.24 10.59 371.38 10.31 369.45 10.31C360.21 10.31 352.42 16.5 350 24.96C347.58 16.5 339.79 10.31 330.55 10.31C328.63 10.31 326.77 10.58 325 11.09V25H311.09C310.59 26.76 310.31 28.62 310.31 30.54C310.31 39.79 316.52 47.59 324.99 50C316.51 52.41 310.31 60.21 310.31 69.46C310.31 71.38 310.58 73.24 311.09 75H325V88.91C326.76 89.41 328.62 89.69 330.55 89.69C339.79 89.69 347.58 83.5 350 75.04C352.42 83.5 360.21 89.69 369.45 89.69C371.37 89.69 373.23 89.42 375 88.91V75H388.91C389.41 73.24 389.69 71.38 389.69 69.46C389.69 60.21 383.48 52.41 375.01 50C383.49 47.59 389.69 39.79 389.69 30.54C389.69 28.62 389.42 26.76 388.91 25H375V11.09ZM375 111.09C373.24 110.59 371.38 110.31 369.45 110.31C360.21 110.31 352.42 116.5 350 124.96C347.58 116.5 339.79 110.31 330.55 110.31C328.63 110.31 326.77 110.58 325 111.09V125H311.09C310.59 126.76 310.31 128.62 310.31 130.54C310.31 139.79 316.52 147.59 324.99 150C316.51 152.41 310.31 160.21 310.31 169.46C310.31 171.38 310.58 173.24 311.09 175H325V188.91C326.76 189.41 328.62 189.69 330.55 189.69C339.79 189.69 347.58 183.5 350 175.04C352.42 183.5 360.21 189.69 369.45 189.69C371.37 189.69 373.23 189.42 375 188.91V175H388.91C389.41 173.24 389.69 171.38 389.69 169.46C389.69 160.21 383.48 152.41 375.01 150C383.49 147.59 389.69 139.79 389.69 130.54C389.69 128.62 389.42 126.76 388.91 125H375V111.09ZM375 88.91V111.09C381.71 113 387 118.29 388.91 125H400V75H388.91C387 81.71 381.71 87 375 88.91ZM25 11.09V0H0V25H11.09C13 18.29 18.29 13 25 11.09ZM288.91 25H311.09C313 18.29 318.29 13 325 11.09V0H275V11.09C281.71 13 287 18.29 288.91 25ZM288.91 75C287 81.71 281.71 87 275 88.91V111.09C281.71 113 287 118.29 288.91 125H311.09C313 118.29 318.29 113 325 111.09V88.91C318.29 87 313 81.71 311.09 75H288.91ZM288.91 175C287 181.71 281.71 187 275 188.91V211.09C281.71 213 287 218.29 288.91 225H311.09C313 218.29 318.29 213 325 211.09V188.91C318.29 187 313 181.71 311.09 175H288.91ZM211.09 25C210.59 26.76 210.31 28.62 210.31 30.54C210.31 39.79 216.52 47.59 224.99 50C216.51 52.41 210.31 60.21 210.31 69.46C210.31 71.38 210.58 73.24 211.09 75H225V88.91C226.76 89.41 228.62 89.69 230.55 89.69C239.79 89.69 247.58 83.5 250 75.04C252.42 83.5 260.21 89.69 269.45 89.69C271.37 89.69 273.23 89.42 275 88.91V75H288.91C289.41 73.24 289.69 71.38 289.69 69.46C289.69 60.21 283.48 52.41 275.01 50C283.49 47.59 289.69 39.79 289.69 30.54C289.69 28.62 289.42 26.76 288.91 25H275V11.09C273.24 10.59 271.38 10.31 269.45 10.31C260.21 10.31 252.42 16.5 250 24.96C247.58 16.5 239.79 10.31 230.55 10.31C228.63 10.31 226.77 10.58 225 11.09V25H211.09ZM88.91 25H111.09C113 18.29 118.29 13 125 11.09V0H75V11.09C81.71 13 87 18.29 88.91 25ZM188.91 25H211.09C213 18.29 218.29 13 225 11.09V0H175V11.09C181.71 13 187 18.29 188.91 25ZM111.09 25C110.59 26.76 110.31 28.62 110.31 30.54C110.31 39.79 116.52 47.59 124.99 50C116.51 52.41 110.31 60.21 110.31 69.46C110.31 71.38 110.58 73.24 111.09 75H125V88.91C126.76 89.41 128.62 89.69 130.55 89.69C139.79 89.69 147.58 83.5 150 75.04C152.42 83.5 160.21 89.69 169.45 89.69C171.37 89.69 173.23 89.42 175 88.91V75H188.91C189.41 73.24 189.69 71.38 189.69 69.46C189.69 60.21 183.48 52.41 175.01 50C183.49 47.59 189.69 39.79 189.69 30.54C189.69 28.62 189.42 26.76 188.91 25H175V11.09C173.24 10.59 171.38 10.31 169.45 10.31C160.21 10.31 152.42 16.5 150 24.96C147.58 16.5 139.79 10.31 130.55 10.31C128.63 10.31 126.77 10.58 125 11.09V25H111.09ZM175 250C183.48 247.59 189.68 239.79 189.68 230.54C189.68 228.62 189.41 226.76 188.9 225H174.99V211.09C173.23 210.59 171.37 210.31 169.44 210.31C160.2 210.31 152.41 216.5 149.99 224.96C147.57 216.5 139.78 210.31 130.54 210.31C128.62 210.31 126.76 210.58 124.99 211.09V225H111.08C110.58 226.76 110.3 228.62 110.3 230.54C110.3 239.79 116.51 247.59 124.98 250C116.5 252.41 110.3 260.21 110.3 269.46C110.3 271.38 110.57 273.24 111.08 275H124.99V288.91C126.75 289.41 128.61 289.69 130.54 289.69C139.78 289.69 147.57 283.5 149.99 275.04C152.41 283.5 160.2 289.69 169.44 289.69C171.36 289.69 173.22 289.42 174.99 288.91V275H188.9C189.4 273.24 189.68 271.38 189.68 269.46C189.68 260.21 183.47 252.41 175 250ZM211.09 375H188.91C187 381.71 181.71 387 175 388.91V400H225V388.91C218.29 387 213 381.71 211.09 375ZM188.91 375C189.41 373.24 189.69 371.38 189.69 369.46C189.69 360.21 183.48 352.41 175.01 350C183.49 347.59 189.69 339.79 189.69 330.54C189.69 328.62 189.42 326.76 188.91 325H175V311.09C173.24 310.59 171.38 310.31 169.45 310.31C160.21 310.31 152.42 316.5 150 324.96C147.58 316.5 139.79 310.31 130.55 310.31C128.63 310.31 126.77 310.58 125 311.09V325H111.09C110.59 326.76 110.31 328.62 110.31 330.54C110.31 339.79 116.52 347.59 124.99 350C116.51 352.41 110.31 360.21 110.31 369.46C110.31 371.38 110.58 373.24 111.09 375H125V388.91C126.76 389.41 128.62 389.69 130.55 389.69C139.79 389.69 147.58 383.5 150 375.04C152.42 383.5 160.21 389.69 169.45 389.69C171.37 389.69 173.23 389.42 175 388.91V375H188.91ZM311.09 375H288.91C287 381.71 281.71 387 275 388.91V400H325V388.91C318.29 387 313 381.71 311.09 375ZM288.91 375C289.41 373.24 289.69 371.38 289.69 369.46C289.69 360.21 283.48 352.41 275.01 350C283.49 347.59 289.69 339.79 289.69 330.54C289.69 328.62 289.42 326.76 288.91 325H275V311.09C273.24 310.59 271.38 310.31 269.45 310.31C260.21 310.31 252.42 316.5 250 324.96C247.58 316.5 239.79 310.31 230.55 310.31C228.63 310.31 226.77 310.58 225 311.09V325H211.09C210.59 326.76 210.31 328.62 210.31 330.54C210.31 339.79 216.52 347.59 224.99 350C216.51 352.41 210.31 360.21 210.31 369.46C210.31 371.38 210.58 373.24 211.09 375H225V388.91C226.76 389.41 228.62 389.69 230.55 389.69C239.79 389.69 247.58 383.5 250 375.04C252.42 383.5 260.21 389.69 269.45 389.69C271.37 389.69 273.23 389.42 275 388.91V375H288.91ZM111.09 375H88.91C87 381.71 81.71 387 75 388.91V400H125V388.91C118.29 387 113 381.71 111.09 375ZM375 388.91V400H400V375H388.91C387 381.71 381.71 387 375 388.91ZM88.91 375C89.41 373.24 89.69 371.38 89.69 369.46C89.69 360.21 83.48 352.41 75.01 350C83.49 347.59 89.69 339.79 89.69 330.54C89.69 328.62 89.42 326.76 88.91 325H75V311.09C73.24 310.59 71.38 310.31 69.45 310.31C60.21 310.31 52.42 316.5 50 324.96C47.58 316.5 39.79 310.31 30.55 310.31C28.63 310.31 26.77 310.58 25 311.09V325H11.09C10.59 326.76 10.31 328.62 10.31 330.54C10.31 339.79 16.52 347.59 24.99 350C16.51 352.41 10.31 360.21 10.31 369.46C10.31 371.38 10.58 373.24 11.09 375H25V388.91C26.76 389.41 28.62 389.69 30.55 389.69C39.79 389.69 47.58 383.5 50 375.04C52.42 383.5 60.21 389.69 69.45 389.69C71.37 389.69 73.23 389.42 75 388.91V375H88.91ZM375 211.09C373.24 210.59 371.38 210.31 369.45 210.31C360.21 210.31 352.42 216.5 350 224.96C347.58 216.5 339.79 210.31 330.55 210.31C328.63 210.31 326.77 210.58 325 211.09V225H311.09C310.59 226.76 310.31 228.62 310.31 230.54C310.31 239.79 316.52 247.59 324.99 250C316.51 252.41 310.31 260.21 310.31 269.46C310.31 271.38 310.58 273.24 311.09 275H325V288.91C326.76 289.41 328.62 289.69 330.55 289.69C339.79 289.69 347.58 283.5 350 275.04C352.42 283.5 360.21 289.69 369.45 289.69C371.37 289.69 373.23 289.42 375 288.91V275H388.91C389.41 273.24 389.69 271.38 389.69 269.46C389.69 260.21 383.48 252.41 375.01 250C383.49 247.59 389.69 239.79 389.69 230.54C389.69 228.62 389.42 226.76 388.91 225H375V211.09ZM375 288.91V311.09C381.71 313 387 318.29 388.91 325H400V275H388.91C387 281.71 381.71 287 375 288.91ZM250 224.97C247.58 216.51 239.79 210.32 230.55 210.32C228.63 210.32 226.77 210.59 225 211.1V225.01H211.09C210.59 226.77 210.31 228.63 210.31 230.55C210.31 239.8 216.52 247.6 224.99 250.01C216.51 252.42 210.31 260.22 210.31 269.47C210.31 271.39 210.58 273.25 211.09 275.01H225V288.92C226.76 289.42 228.62 289.7 230.55 289.7C239.79 289.7 247.58 283.51 250 275.05C252.42 283.51 260.21 289.7 269.45 289.7C271.37 289.7 273.23 289.43 275 288.92V275.01H288.91C289.41 273.25 289.69 271.39 289.69 269.47C289.69 260.22 283.48 252.42 275.01 250.01C283.49 247.6 289.69 239.8 289.69 230.55C289.69 228.63 289.42 226.77 288.91 225.01H275V211.1C273.24 210.6 271.38 210.32 269.45 210.32C260.21 210.32 252.42 216.51 250 224.97ZM375 311.09C373.24 310.59 371.38 310.31 369.45 310.31C360.21 310.31 352.42 316.5 350 324.96C347.58 316.5 339.79 310.31 330.55 310.31C328.63 310.31 326.77 310.58 325 311.09V325H311.09C310.59 326.76 310.31 328.62 310.31 330.54C310.31 339.79 316.52 347.59 324.99 350C316.51 352.41 310.31 360.21 310.31 369.46C310.31 371.38 310.58 373.24 311.09 375H325V388.91C326.76 389.41 328.62 389.69 330.55 389.69C339.79 389.69 347.58 383.5 350 375.04C352.42 383.5 360.21 389.69 369.45 389.69C371.37 389.69 373.23 389.42 375 388.91V375H388.91C389.41 373.24 389.69 371.38 389.69 369.46C389.69 360.21 383.48 352.41 375.01 350C383.49 347.59 389.69 339.79 389.69 330.54C389.69 328.62 389.42 326.76 388.91 325H375V311.09ZM125 288.91C118.29 287 113 281.71 111.09 275H88.91C87 281.71 81.71 287 75 288.91V311.09C81.71 313 87 318.29 88.91 325H111.09C113 318.29 118.29 313 125 311.09V288.91ZM288.91 275C287 281.71 281.71 287 275 288.91V311.09C281.71 313 287 318.29 288.91 325H311.09C313 318.29 318.29 313 325 311.09V288.91C318.29 287 313 281.71 311.09 275H288.91ZM225 288.91C218.29 287 213 281.71 211.09 275H188.91C187 281.71 181.71 287 175 288.91V311.09C181.71 313 187 318.29 188.91 325H211.09C213 318.29 218.29 313 225 311.09V288.91ZM111.09 225C113 218.29 118.29 213 125 211.09V188.91C118.29 187 113 181.71 111.09 175H88.91C87 181.71 81.71 187 75 188.91V211.09C81.71 213 87 218.29 88.91 225H111.09ZM25 311.09V288.91C18.29 287 13 281.71 11.09 275H0V325H11.09C13 318.29 18.29 313 25 311.09ZM11.09 375H0V400H25V388.91C18.29 387 13 381.71 11.09 375ZM25 288.91C26.76 289.41 28.62 289.69 30.55 289.69C39.79 289.69 47.58 283.5 50 275.04C52.42 283.5 60.21 289.69 69.45 289.69C71.37 289.69 73.23 289.42 75 288.91V275H88.91C89.41 273.24 89.69 271.38 89.69 269.46C89.69 260.21 83.48 252.41 75.01 250C83.49 247.59 89.69 239.79 89.69 230.54C89.69 228.62 89.42 226.76 88.91 225H75V211.09C73.24 210.59 71.38 210.31 69.45 210.31C60.21 210.31 52.42 216.5 50 224.96C47.58 216.5 39.79 210.31 30.55 210.31C28.63 210.31 26.77 210.58 25 211.09V225H11.09C10.59 226.76 10.31 228.62 10.31 230.54C10.31 239.79 16.52 247.59 24.99 250C16.51 252.41 10.31 260.21 10.31 269.46C10.31 271.38 10.58 273.24 11.09 275H25V288.91ZM25 211.09V188.91C18.29 187 13 181.71 11.09 175H0V225H11.09C13 218.29 18.29 213 25 211.09Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 7;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + 7) % 7;
};
</script>

<style lang="scss" scoped>
.carousel-container {
  @apply flex flex-col col-span-12;
}

.graph {
  @apply grid grid-cols-4 relative aspect-square;

  /* Responsive */
  @apply col-start-2 col-end-12;
  @apply sm:col-start-3 sm:col-end-11;
  @apply md:col-start-4 md:col-end-10;
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
  /* Responsive */
  @apply w-3 sm:w-3 md:w-4 lg:w-4 xl:w-5 2xl:w-5;
  @apply h-3 sm:h-3 md:h-4 lg:h-4 xl:h-5 2xl:h-5;
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

  /* Responsive */
  @apply gap-3 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-6 2xl:gap-6;
}

.arrow {
  @apply cursor-pointer;
}

.frisos-container {
  @apply flex flex-col justify-between  col-span-4 aspect-square;
  svg {
    @apply fill-azuloscuro-50;
  }
}

.mosaicos-container {
  @apply flex flex-col gap-6 col-span-4;

  svg {
    @apply fill-azuloscuro-50;
  }
}

.icon-1 {
  svg {
    @apply top-1/2 left-1/2 -translate-x-2/3 -translate-y-1/2;
  }
}

.icon-2 {
  svg {
    @apply top-1/2 right-1/2 translate-x-2/3 -translate-y-1/2;
  }
}

.stylistic-sets-content {
  @apply grid grid-cols-2 w-full gap-x-6;
}


</style>
