<template>
  <div>
    <div class="lateral-nav-desktop">
      <NuxtLink to="#sets">
        <a class="small">Sets estilísticos</a>
      </NuxtLink>
      <NuxtLink to="#terminos">
        <a class="small">Términos</a>
      </NuxtLink>
      <NuxtLink to="#escribe">
        <a class="small">Prueba a escribir</a>
      </NuxtLink>
      <NuxtLink to="#clasificacion">
        <a class="small">Clasificación</a>
      </NuxtLink>
      <NuxtLink to="#variabilidad">
        <a class="small">Variabilidad</a>
      </NuxtLink>
    </div>

    <!-- Pestaña con transición -->
    <transition name="tab-slide">
      <div
        v-if="!lateralNavCompressedVisible"
        class="tab"
        @click="toggleLateralNavCompressed"
      >
        <span class="arrow"
          ><svg
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L5 5.5L1 10" />
          </svg>
        </span>
      </div>
    </transition>

    <!-- Menú Lateral con Transición -->
    <transition name="slide">
      <div v-if="lateralNavCompressedVisible" class="lateral-nav-compressed">
        <div class="lateral-nav-compressed-content">
          <!-- Botón de cerrar -->
          <div class="lateral-nav-compressed-footer">
            <button class="close-button big" @click="toggleLateralNavCompressed">
                ✕
            </button>
          </div>
          <!-- Opciones del Menú -->
          <div class="lateral-nav-compressed-options">
            <NuxtLink to="#sets">
              <a class="small">Sets estilísticos</a>
            </NuxtLink>
            <NuxtLink to="#terminos">
              <a class="small">Términos</a>
            </NuxtLink>
            <NuxtLink to="#escribe">
              <a class="small">Prueba a escribir</a>
            </NuxtLink>
            <NuxtLink to="#clasificacion">
              <a class="small">Clasificación</a>
            </NuxtLink>
            <NuxtLink to="#variabilidad">
              <a class="small">Variabilidad</a>
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const lateralNavCompressedVisible = ref(false);

const toggleLateralNavCompressed = () => {
  lateralNavCompressedVisible.value = !lateralNavCompressedVisible.value;
};
</script>

<style lang="scss" scoped>
.lateral-nav-desktop {
  @apply h-screen fixed flex flex-col z-40;
  @apply pt-[58px] sm:pt-[58px] md:pt-[74px] lg:pt-32 xl:pt-40 2xl:pt-40;
  @apply px-16 sm:px-16 md:px-16 lg:px-12 xl:px-16 2xl:px-16;
}

/* Pestaña */
.tab {
  @apply hidden fixed left-0 top-1/2 transform -translate-y-1/2 z-40 bg-naranja-50 text-white p-4 rounded-r-full cursor-pointer shadow-md;

  
}

.arrow {
  svg{
    @apply stroke-white w-4;
  }
}

/* Menú Lateral */
.lateral-nav-compressed {
  @apply hidden fixed top-1/2 transform -translate-y-1/2 left-20 bg-azuloscuro-50  text-white z-50 py-6 px-7 border-2 border-azuloscuro-50 rounded-xl shadow-md;
  @apply left-6 sm:left-6 md:left-12;

  a{
    color: white ;
    @apply hover:text-naranja-50;
  }
}

.lateral-nav-compressed-content {
  @apply flex flex-col gap-y-4;
}

.lateral-nav-compressed-options {
  @apply  flex flex-col;
}

/* Botón de cerrar */
.lateral-nav-compressed-footer {
}

.close-button {
  @apply  text-white rounded;
}

/* Media Queries */
@media (max-width: 1024px) {
  .tab {
    @apply block;
  }

  .lateral-nav-compressed {
    @apply block;
  }

  .lateral-nav-desktop {
    @apply hidden;
  }
}

/* Transición del menú */
.slide-enter-active,
.slide-leave-active {
  @apply transition-transform duration-300;
}

.slide-enter-from {
  transform: translate(-150%, -50%); /* Fuera de la pantalla */
}

.slide-enter-to {
  transform: translate(0, -50%); /* Entra desde la izquierda */
}

.slide-leave-from {
  transform: translate(0, -50%); /* Posición visible */
}

.slide-leave-to {
  transform: translate(-150%, -50%); /* Sale hacia la izquierda */
}

/* Transición de la pestaña */
.tab-slide-enter-active,
.tab-slide-leave-active {
  @apply transition-transform duration-300;
}

.tab-slide-enter-from {
  transform: translate(-100%, -50%);
}

.tab-slide-enter-to {
  transform: translate(0, -50%);
}

.tab-slide-leave-from {
  transform: translate(0, -50%);
}

.tab-slide-leave-to {
  transform: translate(-100%, -50%);
}
</style>
