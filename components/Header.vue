<template>
  <header class="header">
    <!-- Logo -->
    <p>
      <button><NuxtLink to="/inicio">SgrafoType</NuxtLink></button>
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
            <NuxtLink to="/prueba">Prueba</NuxtLink>
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
        <button @click="toggleMenu" class="close-btn">✕</button>
        <ul class="menuItems">
          <li>
            <button class="button-big">
              <NuxtLink to="/inicio" @click="closeMenu">Inicio</NuxtLink>
            </button>
          </li>
          
          <li>
            <button class="button-big">
              <NuxtLink to="/prueba" @click="closeMenu">Prueba</NuxtLink>
            </button>
          </li>
          <li>
            <button class="button-big">
              <NuxtLink to="/generador" @click="closeMenu">Generador</NuxtLink>
            </button>
          </li>
          <li>
            <button class="button-big">
              <NuxtLink to="/aplicaciones" @click="closeMenu"
                >Aplicaciones</NuxtLink
              >
            </button>
          </li>
          
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
  @apply fixed inset-0 bg-white flex items-center justify-center text-white;
  z-index: 50;

  ul {
    @apply space-y-8 flex flex-col text-center;
  }
}

.close-btn {
  @apply absolute top-8 right-1/2 translate-x-1/2 text-3xl cursor-pointer;
}

/* Media Queries */
@media (max-width: 768px) {
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
