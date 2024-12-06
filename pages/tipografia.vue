<template>
  <section>
    <h2>Modificar Tipografía</h2>
    <p>
      Escribe en el cuadro de abajo y ajusta el peso de la tipografía usando el
      control deslizante.
    </p>

    <!-- Campo de texto donde el usuario escribe -->
    <textarea
      v-model="textContent"
      :style="textStyles"
      placeholder=""
      rows="4"
      @input="handleInput"
    ></textarea>

    <!-- Mensaje de advertencia -->
    <p v-if="invalidInput" class="warning-message">
      Caracter no permitido. Por favor, usa solo los caracteres válidos.
    </p>

   <!-- Teclado visual siempre visible con teclas permitidas -->
   <div class="keyboard">
      <div class="row">
        <span 
          v-for="(key, index) in allowedCharacters" 
          :key="index" 
          class="key"
        >
          {{ key }}
        </span>
      </div>
    </div>

    <!-- Control deslizante para el peso de la tipografía -->
    <div class="controls">
      <label for="width">Peso:</label>
      <input
        id="width"
        type="range"
        min="0"
        max="1000"
        step="1"
        v-model="fontWidth"
      />
      <span>{{ fontWidth }}</span>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

// Caracteres permitidos
const allowedCharacters = "A B C D E F G H I J K L M N Ñ Q R S T U V W X Y Z a b c d e f g h i j k l m n ñ q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9 ,".split(" ");

//// Estado de la entrada y validación. Definimos el texto del usuario y el peso de la tipografía
const textContent = ref("");
const fontWidth = ref(0);
const invalidInput = ref(false)

// Computed para aplicar los estilos de la tipografía variable
const textStyles = computed(() => ({
  fontFamily: "'SGrafoType', sans-serif",
  fontVariationSettings: `'wdth' ${fontWidth.value}`,
}));

// Manejador de evento input
const handleInput = (event) => {
  const inputValue = event.target.value
  // Comprobar si algún caracter no permitido ha sido ingresado
  const lastChar = inputValue.slice(-1)
  if (!allowedCharacters.includes(lastChar)) {
    invalidInput.value = true
  } else {
    invalidInput.value = false
  }
  
  // Filtrar el texto para mantener solo los caracteres permitidos
  textContent.value = inputValue.split('').filter(char => allowedCharacters.includes(char)).join('')
}


</script>

<style scoped>
section {
  padding: 1rem;
}
textarea {
  width: 100%;
  font-size: 24px;
  line-height: 24px;
  padding: 1rem;
  margin: 1rem 0;
  font-family: "SGrafoType";
  font-variation-settings: "wdth" var(--widthText);
}
.controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.warning-message {
  color: red;
  font-size: 1rem;
  margin-top: 10px;
}
.keyboard {
  display: grid;
  grid-template-columns: repeat(10, 1fr); /* Define un grid con 10 columnas */
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
}
.row {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.key {
  display: inline-block;
  padding: 10px;
  background-color: #ddd;
  border-radius: 5px;
  cursor: not-allowed;
  text-align: center;
  color: #333;
}
.key:hover {
  background-color: #bbb;
}
</style>
