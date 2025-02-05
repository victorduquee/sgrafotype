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
              <button class="button-big">
                <p>Inicio</p>
              </button>
            </li>
          </NuxtLink>

          <NuxtLink to="/aprende" @click="closeMenu">
            <li>
              <button class="button-big">
                <p>Aprende</p>
              </button>
            </li>
          </NuxtLink>

          <NuxtLink to="/generador" @click="closeMenu">
            <li>
              <button class="button-big">
                <p>Generador</p>
              </button>
            </li>
          </NuxtLink>
          <NuxtLink to="/aplicaciones" @click="closeMenu">
            <li>
              <button class="button-big">
                <p>Aplicaciones</p>
              </button>
            </li>
          </NuxtLink>
        </ul>
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
  @apply flex flex-row justify-between border-2 border-azuloscuro-50 bg-white z-50 m-6 rounded-xl;
  /* Responsive */
  @apply px-6 sm:px-6 md:px-6 lg:px-6 xl:px-10 2xl:px-10;
  @apply py-4 sm:py-4 md:py-4 lg:py-4 xl:py-4 2xl:py-3;
}

.menu-desktop {
  .menuItems {
    @apply flex flex-row gap-x-4;

    .router-link-active {
      @apply bg-orange-500 text-white rounded-full px-6 py-1;
      @apply hover:bg-orange-500;
    }

    a {
      @apply rounded-full px-6 py-1;
      @apply hover:bg-azuloscuro-800;
    }
  }
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
    @apply fixed w-screen flex justify-center;

    /* Responsive */
    @apply py-6;
    .close-btn {
      @apply text-2xl cursor-pointer;

      svg {
        @apply stroke-[2px] stroke-azuloscuro-50 w-4;
      }
    }
  }

  ul {
    @apply flex flex-col w-full flex-grow justify-center items-center gap-y-6;

    p {
      cursor: pointer;
      position: relative;
    }

    p::after {
      content: "";
      position: absolute;
      height: 4px;
      width: 100%;
      transform: scaleX(0);
      left: 0;
      bottom: 0;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
      @apply bg-naranja-50;      
    }

    p:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
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
