<template>
  <header class="header">
    <!-- Logo -->
    <p>
      <NuxtLink class="main-button" to="/inicio">SGrafoType</NuxtLink>
    </p>

    <!-- Menú de Escritorio -->
    <nav class="menu-desktop">
      <ul class="menuItems">
        <li>
          <button>
            <NuxtLink to="/inicio">Inicio</NuxtLink>
          </button>
        </li>

        <li>
          <button>
            <NuxtLink to="/aprende">Aprende</NuxtLink>
          </button>
        </li>
        <li>
          <button>
            <NuxtLink to="/generador">Generador</NuxtLink>
          </button>
        </li>
        <li>
          <button>
            <NuxtLink to="/aplicaciones">Aplicaciones</NuxtLink>
          </button>
        </li>
      </ul>
    </nav>

    <!-- Botón de Menú Hamburguesa -->
    <button @click="toggleMenu" class="menu-hamburguesa">
      <span>☰</span>
    </button>

    <!-- Transición del Menú Hamburguesa -->
    <Transition name="fade">
      <div v-if="isMenuOpen" class="menu-overlay">
        <div class="top-section">
          <p>
            <NuxtLink class="main-button" to="/inicio">SGrafoType</NuxtLink>
          </p>

          <button @click="toggleMenu" class="close-btn">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L15 15" />
              <path d="M15 1L0.999999 15" />
            </svg>
          </button>
        </div>

        <ul class="menuItems">
          <NuxtLink to="/inicio" @click="closeMenu">
            <li>
              <button class="button-big">Inicio</button>
              <svg
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1H29V29" />
                <path d="M29 1L1 29" />
              </svg>
            </li>
          </NuxtLink>

          <NuxtLink to="/aprende" @click="closeMenu">
            <li>
              <button class="button-big">Aprende</button>
              <svg
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1H29V29" />
                <path d="M29 1L1 29" />
              </svg>
            </li>
          </NuxtLink>

          <NuxtLink to="/generador" @click="closeMenu">
            <li>
              <button class="button-big">Generador</button>
              <svg
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1H29V29" />
                <path d="M29 1L1 29" />
              </svg>
            </li>
          </NuxtLink>
          <NuxtLink to="/aplicaciones" @click="closeMenu">
            <li>
              <button class="button-big">Aplicaciones</button>
              <svg
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1H29V29" />
                <path d="M29 1L1 29" />
              </svg></li
          ></NuxtLink>
        </ul>

        <div class="deco">
          <svg
            viewBox="0 0 2400 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25 25L50 0L75 25L50 50L25 25ZM25 75L0 50L25 25H0V0H50H150L125 25H100H75L100 50L75 75L50 50L25 75ZM50 100L75 75H100H125L150 100H50ZM175 75L150 100H250H350H400H450H550H650H750H800H850H950H1050H1150H1200H1250H1350H1450H1550H1600H1650H1750H1850H1950H2000H2050H2150H2250H2350H2400V75H2375L2400 50L2375 25H2400V0H2350H2250H2150H2050H2000H1950H1850H1750H1650H1600H1550H1450H1350H1250H1200H1150H1050H950H850H800H750H650H550H450H400H350H250H150L175 25L150 50L125 25L100 50L125 75L150 50L175 75ZM200 50L175 75H200H225L250 100L275 75H300H325L350 100L375 75H400H425L450 100L475 75H500H525L550 100L575 75H600H625L650 100L675 75H700H725L750 100L775 75H800H825L850 100L875 75H900H925L950 100L975 75H1000H1025L1050 100L1075 75H1100H1125L1150 100L1175 75H1200H1225L1250 100L1275 75H1300H1325L1350 100L1375 75H1400H1425L1450 100L1475 75H1500H1525L1550 100L1575 75H1600H1625L1650 100L1675 75H1700H1725L1750 100L1775 75H1800H1825L1850 100L1875 75H1900H1925L1950 100L1975 75H2000H2025L2050 100L2075 75H2100H2125L2150 100L2175 75H2200H2225L2250 100L2275 75H2300H2325L2350 100L2375 75L2350 50L2375 25L2350 0L2325 25H2300H2275L2250 0L2225 25H2200H2175L2150 0L2125 25H2100H2075L2050 0L2025 25H2000H1975L1950 0L1925 25H1900H1875L1850 0L1825 25H1800H1775L1750 0L1725 25H1700H1675L1650 0L1625 25H1600H1575L1550 0L1525 25H1500H1475L1450 0L1425 25H1400H1375L1350 0L1325 25H1300H1275L1250 0L1225 25H1200H1175L1150 0L1125 25H1100H1075L1050 0L1025 25H1000H975L950 0L925 25H900H875L850 0L825 25H800H775L750 0L725 25H700H675L650 0L625 25H600H575L550 0L525 25H500H475L450 0L425 25H400H375L350 0L325 25H300H275L250 0L225 25H200H175L200 50ZM250 50L225 75L200 50L225 25L250 50ZM300 50L275 75L250 50L275 25L300 50ZM350 50L325 75L300 50L325 25L350 50ZM400 50L425 75L450 50L475 75L500 50L525 75L550 50L575 75L600 50L625 75L650 50L675 75L700 50L725 75L750 50L775 75L800 50L825 75L850 50L875 75L900 50L925 75L950 50L975 75L1000 50L1025 75L1050 50L1075 75L1100 50L1125 75L1150 50L1175 75L1200 50L1225 75L1250 50L1275 75L1300 50L1325 75L1350 50L1375 75L1400 50L1425 75L1450 50L1475 75L1500 50L1525 75L1550 50L1575 75L1600 50L1625 75L1650 50L1675 75L1700 50L1725 75L1750 50L1775 75L1800 50L1825 75L1850 50L1875 75L1900 50L1925 75L1950 50L1975 75L2000 50L2025 75L2050 50L2075 75L2100 50L2125 75L2150 50L2175 75L2200 50L2225 75L2250 50L2275 75L2300 50L2325 75L2350 50L2325 25L2300 50L2275 25L2250 50L2225 25L2200 50L2175 25L2150 50L2125 25L2100 50L2075 25L2050 50L2025 25L2000 50L1975 25L1950 50L1925 25L1900 50L1875 25L1850 50L1825 25L1800 50L1775 25L1750 50L1725 25L1700 50L1675 25L1650 50L1625 25L1600 50L1575 25L1550 50L1525 25L1500 50L1475 25L1450 50L1425 25L1400 50L1375 25L1350 50L1325 25L1300 50L1275 25L1250 50L1225 25L1200 50L1175 25L1150 50L1125 25L1100 50L1075 25L1050 50L1025 25L1000 50L975 25L950 50L925 25L900 50L875 25L850 50L825 25L800 50L775 25L750 50L725 25L700 50L675 25L650 50L625 25L600 50L575 25L550 50L525 25L500 50L475 25L450 50L425 25L400 50ZM400 50L375 25L350 50L375 75L400 50ZM50 100L25 75H0V100H50Z"
            />
          </svg>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style lang="scss" scoped>
/* Estilos Base */
.header {
  @apply flex flex-row justify-between border-b-2 border-azuloscuro-50 bg-white z-50;
  /* Responsive */
  @apply px-6 sm:px-6 md:px-12 lg:px-12 xl:px-16 2xl:px-16;
  @apply py-4 sm:py-4 md:py-6 lg:py-6 xl:py-6 2xl:py-6;
}

.menuItems {
  @apply flex flex-row gap-x-12;
}

/* Botón Hamburguesa Oculto por Defecto */
.menu-hamburguesa {
  @apply hidden cursor-pointer;
}

/* Estilo del Menú Overlay */
.menu-overlay {
  @apply fixed inset-0 bg-white flex flex-col  justify-between text-white;
  z-index: 50;

  .top-section {
    @apply flex flex-row justify-between border-b-2 border-azuloscuro-50;

    /* Responsive */
    @apply px-6 sm:px-6 md:px-12 lg:px-12 xl:px-16 2xl:px-16;
    @apply py-4 sm:py-4 md:py-6 lg:py-6 xl:py-6 2xl:py-6;
    .close-btn {
      @apply text-2xl cursor-pointer;

      svg {
        @apply stroke-[2px] stroke-azuloscuro-50 w-4;
      }
    }
  }

  ul {
    @apply flex flex-col w-full flex-grow justify-start;
    li {
      @apply flex flex-row  items-center justify-between border-b-2 border-b-azuloscuro-800;
      @apply px-6 sm:px-6 md:px-12 lg:px-12 xl:px-16 2xl:px-16;
      @apply py-8 sm:py-8 md:py-6 lg:py-6 xl:py-6 2xl:py-6;
      @apply hover:bg-azuloscuro-800;
      svg {
        @apply stroke-[2px] stroke-azuloscuro-50  h-full;

        // Responsive
        @apply w-6 sm:w-12 md:w-12 lg:w-12 xl:w-12 2xl:w-12;
        @apply stroke-[4px] sm:stroke-[2px] md:stroke-[2px] lg:stroke-[2px] xl:stroke-[2px] 2xl:stroke-[2px];
      }
    }
  }

  .deco {
    svg {
      @apply h-24 fill-azuloscuro-50;
    }
  }
}

/* Media Queries */
@media (max-width: 1024px) {
  .menu-desktop {
    @apply hidden;
  }

  .menu-hamburguesa {
    @apply block;
  }
}

/* Transiciones */
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-300;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
