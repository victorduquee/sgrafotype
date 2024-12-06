<template>
  <div class="typetester-container subsection">
    <div class="text-subsection">
      <h2>Instrucciones</h2>
      <p v-if="message" class="small">{{ message }}</p>
    </div>

    <div class="tester-container">
      <textarea
        spellcheck="false"
        ref="inputRef"
        type="text"
        class="small"
        placeholder="Escribe aquí..."
        autocomplete="off"
        v-model="inputValue"
        @input="validateInput"
        :class="{ shake: isShaking }"
      />

      <!-- Caja no interactiva que muestra el texto que el usuario escribe -->
      <div :style="{ fontSize: fontSize + 'px' }" class="display-box">
        {{ inputValue }}
      </div>
      <Keyboard class="keyboard" />

      <!-- Botón de descarga, visible solo cuando el motivo está completo -->
      <!-- <button v-if="canDownload" @click="downloadSVG">Descargar motivo</button> -->
    </div>
  </div>
</template>

<script>
import TextInput from "~/components/TextInput.vue";
import Keyboard from "~/components/Keyboard.vue";
import Carousel from "~/components/Carousel.vue";

import opentype from "opentype.js"; // Importar opentype.js
import fontUrl from "@/public/fonts/SGrafoTypeVF.ttf";
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  components: {
    TextInput,
    Keyboard,
    Carousel,
  },
  setup() {
    const inputRef = ref(null);
    const fontSize = ref(16); // Tamaño de fuente inicial

    const ajustarTamanoFuente = () => {
      if (inputRef.value) {
        const anchoInput = inputRef.value.clientWidth;
        fontSize.value = anchoInput * 0.4999; // Calcula el tamaño de la fuente como el 50% del ancho
      }
    };

    onMounted(() => {
      ajustarTamanoFuente(); // Ajuste inicial
      window.addEventListener("resize", ajustarTamanoFuente); // Ajuste en cambio de tamaño
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", ajustarTamanoFuente);
    });

    return { inputRef, fontSize, ajustarTamanoFuente };
  },

  data() {
    return {
      inputValue: "",
      isShaking: false, // Controla la vibración del campo de texto
      message: "Introduce la letra / número que quieras. Ejemplo: 'a'", // Mensaje inicial
      canDownload: false, // Controla si el usuario puede descargar el SVG
    };
  },

  methods: {
    validateInput(event) {
      let value = event.target.value;

      // Solo permite caracteres A-NQ-Za-nq-zÑñ0-9 y la coma
      const validCharsPattern = /[^A-NQ-Za-nq-zÑñ0-9,]/g;

      // Primero verificar si hay caracteres no válidos
      if (validCharsPattern.test(value)) {
        this.message =
          "Por favor, introduce solo las letras / números disponibles en el teclado.";
        this.triggerShake();
      } else {
        // Si todo es válido, mostramos el mensaje por defecto
        this.message = "Introduce la letra / número que quieras. Ejemplo: 'a'";
      }

      // Filtra los caracteres no válidos
      value = value.replace(validCharsPattern, "");

      // Actualiza el valor del campo de entrada
      this.inputValue = value;

      // Validación según la longitud de la cadena
      if (value.length === 1) {
        this.message =
          "Ya tienes el glifo del primer cuadrante. Ahora, pulsa una coma para pasar al siguiente cuadrante (,)";
        this.canDownload = false; // Ocultar opción de descarga

        if (!/^([A-NQ-Za-nq-zÑñ0-9])$/.test(value)) {
          this.triggerShake();
          this.inputValue = "";
          this.message =
            "Por favor, introduce una letra / número. Ejemplo: 'a'";
        }
      } else if (value.length === 2) {
        this.message =
          "Ya puedes escribir el glifo del segundo cuadrante. Pulsa una misma letra / número dos veces. Ejemplo: 'aa'";
        this.canDownload = false; // Ocultar opción de descarga

        if (!/^([A-NQ-Za-nq-zÑñ0-9]),$/.test(value)) {
          this.triggerShake();
          this.inputValue = value[0];
          this.message = "Por favor, introduce una coma (,)";
        }
      } else if (value.length === 3) {
        this.message =
          "Ya puedes escribir el glifo del segundo cuadrante. Pulsa una misma letra / número dos veces. Ejemplo: 'aa'";
        this.canDownload = false; // Ocultar opción de descarga

        if (!/^([A-NQ-Za-nq-zÑñ0-9]),([A-NQ-Za-nq-zÑñ0-9])$/.test(value)) {
          this.triggerShake();
          this.inputValue = value.slice(0, 2);
          this.message =
            "Por favor, introduce una letra / número. Ejemplo: 'a'";
        }
      } else if (value.length === 4) {
        this.message =
          "Ya tienes el glifo del segundo cuadrante. Ahora, pulsa una coma para pasar al siguiente cuadrante (,)";
        this.canDownload = false; // Ocultar opción de descarga

        if (!/^([A-NQ-Za-nq-zÑñ0-9]),([A-NQ-Za-nq-zÑñ0-9])\2$/.test(value)) {
          this.triggerShake();
          this.inputValue = value.slice(0, 3);
          this.message =
            "La letra / número que escribas tiene que ser igual que la anterior. Ejemplo: 'aa'";
        }
      } else if (value.length === 5) {
        this.message =
          "Ya puedes escribir el glifo del tercer cuadrante. Pulsa una misma letra / número tres veces. Ejemplo: 'aaa'";
        this.canDownload = false; // Ocultar opción de descarga

        if (!/^([A-NQ-Za-nq-zÑñ0-9]),([A-NQ-Za-nq-zÑñ0-9])\2,$/.test(value)) {
          this.triggerShake();
          this.inputValue = value.slice(0, 4);
          this.message = "Por favor, introduce una coma (,)";
        }
      } else if (value.length === 6) {
        this.message =
          "Ya puedes escribir el glifo del tercer cuadrante. Pulsa una misma letra / número tres veces. Ejemplo: 'aaa'";
        this.canDownload = false; // Ocultar opción de descarga

        if (
          !/^([A-NQ-Za-nq-zÑñ0-9]),([A-NQ-Za-nq-zÑñ0-9])\2,([A-NQ-Za-nq-zÑñ0-9])$/.test(
            value
          )
        ) {
          this.triggerShake();
          this.inputValue = value.slice(0, 5);
          this.message =
            "Por favor, introduce una letra / número. Ejemplo: 'a'";
        }
      } else if (value.length === 7) {
        this.message =
          "Ya puedes escribir el glifo del tercer cuadrante. Pulsa una misma letra / número tres veces. Ejemplo: 'aaa'";
        this.canDownload = false; // Ocultar opción de descarga

        if (
          !/^([A-NQ-Za-nq-zÑñ0-9]),([A-NQ-Za-nq-zÑñ0-9])\2,([A-NQ-Za-nq-zÑñ0-9])\3$/.test(
            value
          )
        ) {
          this.triggerShake();
          this.inputValue = value.slice(0, 6);
          this.message =
            "La letra / número que escribas tiene que ser igual que la anterior. Ejemplo: 'aaa'";
        }
      } else if (value.length === 8) {
        this.message =
          "Ya tienes el glifo del tercer cuadrante. Ahora, pulsa una coma para pasar al siguiente cuadrante (,)";
        this.canDownload = false; // Ocultar opción de descarga

        if (
          !/^([A-NQ-Za-nq-zÑñ0-9]),([A-NQ-Za-nq-zÑñ0-9])\2,([A-NQ-Za-nq-zÑñ0-9])\3\3$/.test(
            value
          )
        ) {
          this.triggerShake();
          this.inputValue = value.slice(0, 7);
          this.message =
            "La letra / número que escribas tiene que ser igual que la anterior. Ejemplo: 'aaa'";
        }
      } else if (value.length === 9) {
        this.message =
          "Ya puedes escribir el glifo del cuarto cuadrante. Pulsa una misma letra / número cuatro veces. Ejemplo: 'aaaa'";
        this.canDownload = false; // Ocultar opción de descarga

        if (
          !/^([A-NQ-Za-nq-zÑñ0-9]),([A-NQ-Za-nq-zÑñ0-9])\2,([A-NQ-Za-nq-zÑñ0-9])\3\3,$/.test(
            value
          )
        ) {
          this.triggerShake();
          this.inputValue = value.slice(0, 8);
          this.message = "Por favor, introduce una coma (,)";
        }
      } else if (value.length === 10) {
        this.message =
          "Ya puedes escribir el glifo del cuarto cuadrante. Pulsa una misma letra / número cuatro veces. Ejemplo: 'aaaa'";
        this.canDownload = false; // Ocultar opción de descarga

        if (
          !/^([A-NQ-Za-nq-zÑñ0-9]),([A-NQ-Za-nq-zÑñ0-9])\2,([A-NQ-Za-nq-zÑñ0-9])\3\3,([A-NQ-Za-nq-zÑñ0-9])$/.test(
            value
          )
        ) {
          this.triggerShake();
          this.inputValue = value.slice(0, 9);
          this.message =
            "Por favor, introduce una letra / número. Ejemplo: 'a'";
        }
      } else if (value.length === 11) {
        this.message =
          "Ya puedes escribir el glifo del cuarto cuadrante. Pulsa una misma letra / número cuatro veces. Ejemplo: 'aaaa'";
        this.canDownload = false; // Ocultar opción de descarga

        if (
          !/^([A-NQ-Za-nq-zÑñ0-9]),([A-NQ-Za-nq-zÑñ0-9])\2,([A-NQ-Za-nq-zÑñ0-9])\3\3,([A-NQ-Za-nq-zÑñ0-9])\4$/.test(
            value
          )
        ) {
          this.triggerShake();
          this.inputValue = value.slice(0, 10);
          this.message =
            "La letra / número que escribas tiene que ser igual que la anterior. Ejemplo: 'aaaa'";
        }
      } else if (value.length === 12) {
        this.message =
          "Ya puedes escribir el glifo del cuarto cuadrante. Pulsa una misma letra / número cuatro veces. Ejemplo: 'aaaa'";
        this.canDownload = false; // Ocultar opción de descarga
        if (
          !/^([A-NQ-Za-nq-zÑñ0-9]),([A-NQ-Za-nq-zÑñ0-9])\2,([A-NQ-Za-nq-zÑñ0-9])\3\3,([A-NQ-Za-nq-zÑñ0-9])\4\4$/.test(
            value
          )
        ) {
          this.triggerShake();
          this.inputValue = value.slice(0, 11);
          this.message =
            "La letra / número que escribas tiene que ser igual que la anterior. Ejemplo: 'aaaa'";
        }
      } else if (value.length === 13) {
        this.message =
          "Ya tienes el último cuadrante. Disfruta de el motivo creado :)";
        this.canDownload = true; // Habilitar opción de descarga
        if (
          !/^([A-NQ-Za-nq-zÑñ0-9]),([A-NQ-Za-nq-zÑñ0-9])\2,([A-NQ-Za-nq-zÑñ0-9])\3\3,([A-NQ-Za-nq-zÑñ0-9])\4\4\4$/.test(
            value
          )
        ) {
          this.triggerShake();
          this.inputValue = value.slice(0, 12);
          this.message =
            "La letra/número que escribas tiene que ser igual que la anterior";
        }
      } else {
        this.inputValue = value.slice(0, 13);
      }
    },

    // Método para generar y descargar el SVG con contornos
    downloadSVG() {
      // Cargar la fuente (puedes usar cualquier fuente ttf, otf, etc. alojada en tu proyecto)
      opentype.load(fontUrl, (err, font) => {
        if (err) {
          alert("Error al cargar la fuente");
          return;
        }

        // Crear el path con opciones avanzadas
        const path = font.getPath(this.inputValue, 10, 40, 40, {
          features: {
            liga: true, // Activar ligaduras
            calt: true, // Activar alternativas contextuales
          },
        });

        // Crear el SVG con los paths
        const svgContent = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 100">
            <g transform="scale(1, -1) translate(0, -100)">
              ${path.toSVG()}
            </g>
          </svg>
        `;

        // Crear un Blob con el contenido SVG
        const blob = new Blob([svgContent], { type: "image/svg+xml" });

        // Crear un enlace para descargar el archivo SVG
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "motivo.svg";

        // Simular el clic en el enlace para iniciar la descarga
        link.click();
      });
    },

    triggerShake() {
      this.isShaking = true;
      // Remueve la clase de vibración después de 500 ms
      setTimeout(() => {
        this.isShaking = false;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
/* Estilo de vibración */
.shake {
  animation: shake-animation 0.3s ease;
}

@keyframes shake-animation {
  0%,
  100% {
    transform: translateX(0);
  }
  20%,
  60% {
    transform: translateX(-5px);
  }
  40%,
  80% {
    transform: translateX(5px);
  }
}

/* Estilo del mensaje */

button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}

/* Estilos para la caja de texto no interactiva */
.typetester-container {

  .text-subsection{
    .small{
      @apply min-h-[120px];
    }
  }
  .tester-container {
    @apply grid grid-cols-2 gap-6;

    /* Responsive */
    @apply col-start-1 col-end-13;
    @apply sm:col-start-1 sm:col-end-13;
    @apply md:col-start-1 md:col-end-13;
    @apply lg:col-start-8 lg:col-end-13;
    @apply xl:col-start-8 xl:col-end-13;
    @apply 2xl:col-start-8 2xl:col-end-13;

    textarea {
      @apply leading-none aspect-square overflow-hidden border border-2 border-azuloscuro-50 p-4 rounded-xl;

      font-variation-settings: "wdth" 0;
    }
    .display-box {
      @apply aspect-square leading-none font-sgrafotype break-words text-azuloscuro-50;
      font-variation-settings: "wdth" 0;
    }

    .keyboard {
      @apply col-span-2 min-w-full;
    }
  }
}
</style>
