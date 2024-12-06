<template>
  <div class="typevariability-container">
    <div class="subsection">
      <div class="text-subsection">
        <h2>Ejes</h2>
        <!-- Mensaje de advertencia -->
        <!-- <p v-if="invalidInput" class="warning-message small">
          Caracter no permitido. Por favor, usa solo los caracteres válidos.
        </p> -->
      </div>
      <div class="typevariability-tester">
        <div class="controls">
          <div class="variable-axis axis">
            <div class="axis-info">
              <div class="small">Anchura</div>
              <span class="small">{{ fontWidth }}</span>
            </div>
            <input
              id="width"
              type="range"
              min="0"
              max="1000"
              step="1"
              v-model="fontWidth"
            />
          </div>
          <div class="size-axis axis">
            <div class="axis-info">
              <div class="small">Tamaño</div>
              <span class="small">{{ fontSize }} px</span>
            </div>
            <input
              id="fontSize"
              type="range"
              min="16"
              max="72"
              v-model="fontSize"
            />
          </div>
        </div>
        <!-- Campo de texto donde el usuario escribe -->
        <textarea
          spellcheck="false"
          v-model="textContent"
          :style="textStyles"
          placeholder="a,aa,aaa,aaaa"
          rows="4"
          @input="handleInput"
        >
        </textarea>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Caracteres permitidos
const allowedCharacters =
  "A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z a b c d e f g h i j k l m n ñ o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9 ,".split(
    " "
  );

//// Estado de la entrada y validación. Definimos el texto del usuario y el peso de la tipografía
const textContent = ref("");
const fontWidth = ref(0);
const fontSize = ref(16);
const invalidInput = ref(false);

// Computed para aplicar los estilos de la tipografía variable
const textStyles = computed(() => ({
  fontFamily: "'SGrafoType', sans-serif",
  fontVariationSettings: `'wdth' ${fontWidth.value}`,
  fontSize: `${fontSize.value}px`,
}));

// Manejador de evento input
const handleInput = (event) => {
  const inputValue = event.target.value;
  // Comprobar si algún caracter no permitido ha sido ingresado
  const lastChar = inputValue.slice(-1);
  if (!allowedCharacters.includes(lastChar)) {
    invalidInput.value = true;
  } else {
    invalidInput.value = false;
  }

  // Filtrar el texto para mantener solo los caracteres permitidos
  textContent.value = inputValue
    .split("")
    .filter((char) => allowedCharacters.includes(char))
    .join("");
};
</script>

<style lang="scss" scoped>
.typevariability-container {
  @apply col-span-12;
  .typevariability-tester {

    /* Responsive */
    @apply col-start-1 col-end-13;
    @apply sm:col-start-1 sm:col-end-13;
    @apply md:col-start-1 md:col-end-13;
    @apply lg:col-start-7 lg:col-end-13;
    @apply xl:col-start-7 xl:col-end-13;
    @apply 2xl:col-start-5 2xl:col-end-13;
    .controls {
      @apply flex flex-col gap-8 mb-8;
      .axis {
        @apply w-full;
        .axis-info {
          @apply flex flex-row justify-between;
        }

        input[type="range"] {
          -webkit-appearance: none; /* Elimina el estilo por defecto en navegadores WebKit */
          @apply w-full h-2 bg-transparent outline-none cursor-pointer;
        }

        /* Estilo de la pista antes del pulgar */
        input[type="range"]::-webkit-slider-runnable-track {
          @apply bg-azuloscuro-50 h-[2px];
        }

        input[type="range"]::-moz-range-track {
          @apply bg-azuloscuro-50 h-[2px];
        }

        input[type="range"]::-ms-track {
          @apply bg-azuloscuro-50 h-[2px] border-transparent text-transparent;
        }

        /* Estilo del pulgar */
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          @apply w-4 h-4 bg-azuloscuro-50 rounded-full cursor-pointer;
          margin-top: -7px; /* Centra el pulgar en la pista (ajustar si es necesario) */
        }

        input[type="range"]::-moz-range-thumb {
          @apply w-4 h-4 bg-azuloscuro-50 rounded-full cursor-pointer border-none;
        }

        input[type="range"]::-ms-thumb {
          @apply w-4 h-4 bg-azuloscuro-50 rounded-full cursor-pointer border-none;
        }
      }
    }

    textarea {
      @apply leading-none aspect-square overflow-hidden border-2 border-azuloscuro-50 p-4 rounded-xl font-sgrafotype w-full text-azuloscuro-50;
      height: 400px;
      font-size: 4vw;
      font-variation-settings: "wdth" var(--widthText);
    }
  }
}

.warning-message {
  @apply text-red-500;
}
</style>
