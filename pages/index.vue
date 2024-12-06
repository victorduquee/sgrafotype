<template>
  <!-- Mostrar el loader si isLoading está activo -->
  <div class="loader" ref="container" :class="{'fade-out': isFading}">
    <!-- Muestra el Loader mientras está activo -->
    <Loader />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import { navigateTo } from '#app';
import { useRouter } from "vue-router"; // Importamos el router de Vue

// Obtener el router para poder hacer la redirección
const router = useRouter();
// const isFading = ref(false) Estado para manejar la clase de fade-out


onMounted(() => {
 
  // setTimeout(() => {
  //   isFading.value = true // Activa la clase de fade-out
  // }, 4700); // Ajusta el tiempo si es necesario
  setTimeout(() => {
    router.push({ name: "inicio" }); // Asegúrate de que 'home' es el nombre correcto de la ruta
  }, 5000); // Ajusta el tiempo si es necesario
});


definePageMeta({
  pageTransition: false
})
</script>


<style>
/* Transición de fade-out
.fade-out {
  animation: fadeOut 0.3s forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
} */
</style>
