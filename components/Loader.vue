<template>
  <div v-if="loading" class="loader">
    <!-- Texto que se escribe -->
    <div class="animated-text-box">
      <div class="animated-text">{{ animatedText }}</div>
    </div>
    <!-- Barra de progreso -->
    <!-- <div class="progress-bar" :style="{ width: progress + '%' }"></div> -->

    <!-- Número de progreso -->
    <div class="progress-number big">{{ Math.round(progress) }}%</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const progress = ref(0); // Progreso de la barra
const animatedText = ref(""); // Texto que se va escribiendo
const loading = ref(true); // Controla la visibilidad del loader

const fullText = "a,aa,aaa,aaaa"; // El texto completo que se va a escribir
const totalCharacters = fullText.length; // Número de caracteres en el texto
const duration = 4000; // Duración total en milisegundos (4 segundos)
let charIndex = 0; // Índice para recorrer el texto

onMounted(() => {
  // Incremento para la barra de progreso
  const progressIncrement = 100 / (duration / 100); // Aumenta cada 100ms
  const textInterval = duration / totalCharacters; // Escribe un carácter cada este intervalo de tiempo (300ms)

  // Variable de inicio para controlar el tiempo transcurrido
  const startTime = Date.now();

  let progressInterval = setInterval(() => {
    // Aumenta el progreso de la barra
    if (progress.value < 100) {
      progress.value += progressIncrement;
    }

    // Escribir caracteres a medida que pasa el tiempo
    if (
      Date.now() - startTime >= charIndex * textInterval &&
      charIndex < totalCharacters
    ) {
      animatedText.value += fullText[charIndex];
      charIndex++;
    }

    // Cuando el progreso llega al 100%, detener el intervalo
    if (progress.value >= 100) {
      clearInterval(progressInterval);

      // Esperar 1 segundo antes de ocultar el loader y pasar al contenido
      setTimeout(() => {
        loading.value = false; // Oculta el loader
      }, 1000); // 1 segundo de espera
    }
  }, 100); // Se ejecuta cada 100ms para actualizar tanto la barra como el texto
});
</script>

<style lang="scss" scoped>
.loader {
  @apply flex flex-col justify-center items-center fixed top-0 left-0 w-full h-full bg-azuloscuro-50 text-white gap-6;
  @apply px-6 sm:px-6 md:px-12 lg:px-12 xl:px-16 2xl:px-16;
  z-index: 9999;
}

.progress-bar {
  @apply w-0 h-2 bg-white rounded-full;
  transition: width 0.1s linear;
}

.progress-number {
  @apply text-white;
}

.animated-text {
  @apply aspect-square leading-none font-sgrafotype break-words text-left text-white;
  @apply w-[40vw] sm:w-[40vw] md:w-[20vw] lg:w-[20vw] xl:w-[10vw] 2xl:w-[10vw];
  @apply text-[20vw] sm:text-[20vw] md:text-[10vw] lg:text-[10vw] xl:text-[5vw] 2xl:text-[5vw];

  font-variation-settings: "wdth" 0;
  .animated-text {

  }
}
</style>
