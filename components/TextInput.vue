<template>
  <div>
    <input
      id="customInput"
      type="text"
      autocomplete="off"
      v-model="inputValue"
      @input="validateInput"
      :class="{ shake: isShaking }"
    />
    <p v-if="message" class="message">{{ message }}</p>

    <!-- Caja no interactiva que muestra el texto que el usuario escribe -->
    <div class="display-box">{{ inputValue }}</div>

    <!-- Botón de descarga, visible solo cuando el motivo está completo -->
    <button v-if="canDownload" @click="downloadSVG">Descargar motivo</button>
  </div>
</template>

<script>
import opentype from "opentype.js"; // Importar opentype.js
import fontUrl from "@/public/fonts/SGrafoTypeVF.ttf";

export default {
  data() {
    return {
      inputValue: "",
      isShaking: false, // Controla la vibración del campo de texto
      message: "Introduce la letra que quieras", // Mensaje inicial
      canDownload: false, // Controla si el usuario puede descargar el SVG
    };
  },
  methods: {
    validateInput(event) {
      let value = event.target.value;

      // Solo permite caracteres A-Za-zÑñ0-9 y la coma
      const validCharsPattern = /[^A-Za-zÑñ0-9,]/g;

      // Primero verificar si hay caracteres no válidos
      if (validCharsPattern.test(value)) {
        this.message =
          "Por favor, introduce solo las letras disponibles en el teclado";
        this.triggerShake();
      } else {
        // Si todo es válido, mostramos el mensaje por defecto
        this.message = "Introduce la letra que quieras";
      }

      // Filtra los caracteres no válidos
      value = value.replace(validCharsPattern, "");

      // Actualiza el valor del campo de entrada
      this.inputValue = value;

      // Validación según la longitud de la cadena
      if (value.length === 1) {
        this.message =
          "Ya tienes tu primer cuadrante. Ahora, pulsa una coma para pasar al siguiente.";
        this.canDownload = false; // Ocultar opción de descarga

        if (!/^([A-Za-zÑñ0-9])$/.test(value)) {
          this.triggerShake();
          this.inputValue = "";
          this.message = "Por favor, introduce una letra o un número";
        }
      } else if (value.length === 2) {
        this.message =
          "Ya puedes escribir el segundo cuadrante. Pulsa una misma letra/número dos veces";
        this.canDownload = false; // Ocultar opción de descarga

        if (!/^([A-Za-zÑñ0-9]),$/.test(value)) {
          this.triggerShake();
          this.inputValue = value[0];
          this.message = "Por favor, introduce una coma";
        }
      } else if (value.length === 3) {
        this.message =
          "Ya puedes escribir el segundo cuadrante. Pulsa una misma letra/número dos veces";
        this.canDownload = false; // Ocultar opción de descarga

        if (!/^([A-Za-zÑñ0-9]),([A-Za-zÑñ0-9])$/.test(value)) {
          this.triggerShake();
          this.inputValue = value.slice(0, 2);
          this.message = "Por favor, introduce una letra o un número";
        }
      } else if (value.length === 4) {
        this.message =
          "Ya tienes tu segundo cuadrante. Ahora, pulsa una coma para pasar al siguiente.";
        this.canDownload = false; // Ocultar opción de descarga

        if (!/^([A-Za-zÑñ0-9]),([A-Za-zÑñ0-9])\2$/.test(value)) {
          this.triggerShake();
          this.inputValue = value.slice(0, 3);
          this.message =
            "La letra/número que escribas tiene que ser igual que la anterior";
        }
      } else if (value.length === 5) {
        this.message =
          "Ya puedes escribir el tercer cuadrante. Pulsa una misma letra/número tres veces";
        this.canDownload = false; // Ocultar opción de descarga

        if (!/^([A-Za-zÑñ0-9]),([A-Za-zÑñ0-9])\2,$/.test(value)) {
          this.triggerShake();
          this.inputValue = value.slice(0, 4);
          this.message = "Por favor, introduce una coma";
        }
      } else if (value.length === 6) {
        this.message =
          "Ya puedes escribir el tercer cuadrante. Pulsa una misma letra/número tres veces";
        this.canDownload = false; // Ocultar opción de descarga

        if (
          !/^([A-Za-zÑñ0-9]),([A-Za-zÑñ0-9])\2,([A-Za-zÑñ0-9])$/.test(value)
        ) {
          this.triggerShake();
          this.inputValue = value.slice(0, 5);
          this.message = "Por favor, introduce una letra o un número";
        }
      } else if (value.length === 7) {
        this.message =
          "Ya puedes escribir el tercer cuadrante. Pulsa una misma letra/número tres veces";
        this.canDownload = false; // Ocultar opción de descarga

        if (
          !/^([A-Za-zÑñ0-9]),([A-Za-zÑñ0-9])\2,([A-Za-zÑñ0-9])\3$/.test(value)
        ) {
          this.triggerShake();
          this.inputValue = value.slice(0, 6);
          this.message =
            "La letra/número que escribas tiene que ser igual que la anterior";
        }
      } else if (value.length === 8) {
        this.message =
          "Ya tienes tu tercer cuadrante. Ahora, pulsa una coma para pasar al siguiente.";
        this.canDownload = false; // Ocultar opción de descarga

        if (
          !/^([A-Za-zÑñ0-9]),([A-Za-zÑñ0-9])\2,([A-Za-zÑñ0-9])\3\3$/.test(value)
        ) {
          this.triggerShake();
          this.inputValue = value.slice(0, 7);
          this.message =
            "La letra/número que escribas tiene que ser igual que la anterior";
        }
      } else if (value.length === 9) {
        this.message =
          "Ya puedes escribir el cuarto cuadrante. Pulsa una misma letra/número cuatro veces";
        this.canDownload = false; // Ocultar opción de descarga

        if (
          !/^([A-Za-zÑñ0-9]),([A-Za-zÑñ0-9])\2,([A-Za-zÑñ0-9])\3\3,$/.test(
            value
          )
        ) {
          this.triggerShake();
          this.inputValue = value.slice(0, 8);
          this.message = "Por favor, introduce una coma";
        }
      } else if (value.length === 10) {
        this.message =
          "Ya puedes escribir el cuarto cuadrante. Pulsa una misma letra/número cuatro veces";
        this.canDownload = false; // Ocultar opción de descarga

        if (
          !/^([A-Za-zÑñ0-9]),([A-Za-zÑñ0-9])\2,([A-Za-zÑñ0-9])\3\3,([A-Za-zÑñ0-9])$/.test(
            value
          )
        ) {
          this.triggerShake();
          this.inputValue = value.slice(0, 9);
          this.message = "Por favor, introduce una letra o un número";
        }
      } else if (value.length === 11) {
        this.message =
          "Ya puedes escribir el cuarto cuadrante. Pulsa una misma letra/número cuatro veces";
        this.canDownload = false; // Ocultar opción de descarga

        if (
          !/^([A-Za-zÑñ0-9]),([A-Za-zÑñ0-9])\2,([A-Za-zÑñ0-9])\3\3,([A-Za-zÑñ0-9])\4$/.test(
            value
          )
        ) {
          this.triggerShake();
          this.inputValue = value.slice(0, 10);
          this.message =
            "La letra/número que escribas tiene que ser igual que la anterior";
        }
      } else if (value.length === 12) {
        this.message =
          "Ya puedes escribir el cuarto cuadrante. Pulsa una misma letra/número cuatro veces";
        this.canDownload = false; // Ocultar opción de descarga
        if (
          !/^([A-Za-zÑñ0-9]),([A-Za-zÑñ0-9])\2,([A-Za-zÑñ0-9])\3\3,([A-Za-zÑñ0-9])\4\4$/.test(
            value
          )
        ) {
          this.triggerShake();
          this.inputValue = value.slice(0, 11);
          this.message =
            "La letra/número que escribas tiene que ser igual que la anterior";
        }
      } else if (value.length === 13) {
        this.message =
          "Ya tienes tu último cuadrante. Disfruta de el motivo creado :)";
        this.canDownload = true; // Habilitar opción de descarga
        if (
          !/^([A-Za-zÑñ0-9]),([A-Za-zÑñ0-9])\2,([A-Za-zÑñ0-9])\3\3,([A-Za-zÑñ0-9])\4\4\4$/.test(
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

<style scoped>
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
.message {
  color: blue;
  font-size: 14px;
  margin-top: 10px;
}

input {
  width: 100%;
  font-size: 24px;
  line-height: 24px;
  padding: 1rem;
  margin: 1rem 0;
  font-family: "SGrafoType";
}

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
.display-box {
  font-size: 24px;
  padding: 1rem;
  margin: 1rem 0;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  color: black;
  pointer-events: none; /* Desactiva la interacción */
  user-select: none; /* Desactiva la selección de texto */
}
</style>
