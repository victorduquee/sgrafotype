<template>
  <body class="">
    <div class="container">
      <div class="keyboard_wrapp">
        <div class="keyboard_lights"></div>
        <div class="keyboard_keys">
          <div class="row">
            <div class="keys tiny unavailable">‎</div>
            <div class="keys tiny">1</div>
            <div class="keys tiny">2</div>
            <div class="keys tiny">3</div>
            <div class="keys tiny">4</div>
            <div class="keys tiny">5</div>
            <div class="keys tiny">6</div>
            <div class="keys tiny">7</div>
            <div class="keys tiny">8</div>
            <div class="keys tiny">9</div>
            <div class="keys tiny">0</div>
            <div class="keys tiny unavailable">‎</div>
            <div class="keys tiny unavailable">‎</div>
            <div class="keys tiny backspace_key">Backspace</div>
          </div>
          <div class="row">
            <div class="keys tiny tab_key unavailable">‎</div>
            <div class="keys tiny">Q</div>
            <div class="keys tiny">W</div>
            <div class="keys tiny">E</div>
            <div class="keys tiny">R</div>
            <div class="keys tiny">T</div>
            <div class="keys tiny">Y</div>
            <div class="keys tiny">U</div>
            <div class="keys tiny">I</div>
            <div class="keys tiny unavailable">‎</div>
            <div class="keys tiny unavailable">‎</div>
            <div class="keys tiny unavailable">‎</div>
            <div class="keys tiny unavailable">‎</div>
            <div class="keys tiny slash_key unavailable">‎</div>
          </div>
          <div class="row">
            <div class="keys tiny caps_lock_key">CapsLock</div>
            <div class="keys tiny">A</div>
            <div class="keys tiny">S</div>
            <div class="keys tiny">D</div>
            <div class="keys tiny">F</div>
            <div class="keys tiny">G</div>
            <div class="keys tiny">H</div>
            <div class="keys tiny">J</div>
            <div class="keys tiny">K</div>
            <div class="keys tiny">L</div>
            <div class="keys tiny">Ñ</div>
            <div class="keys tiny unavailable">‎</div>
            <div class="keys tiny unavailable">‎</div>
            <div class="keys tiny enter_key unavailable">‎</div>
          </div>
          <div class="row">
            <div class="keys tiny shift_key shift_left">Shift</div>
            <div class="keys tiny unavailable">‎</div>
            <div class="keys tiny">Z</div>
            <div class="keys tiny">X</div>
            <div class="keys tiny">C</div>
            <div class="keys tiny">V</div>
            <div class="keys tiny">B</div>
            <div class="keys tiny">N</div>
            <div class="keys tiny">M</div>
            <div class="keys tiny">,</div>
            <div class="keys tiny unavailable">‎</div>
            <div class="keys tiny unavailable">‎</div>
            <div class="keys tiny shift_key shift_right">Shift</div>
          </div>
          <div class="row">
            <div class="keys tiny ctrl_key ctrl_left unavailable">‎</div>
            <div class="keys tiny unavailable">‎</div>
            <div class="keys tiny win_key unavailable">‎</div>
            <div class="keys tiny alt_key alt_left unavailable">‎</div>
            <div class="keys tiny space_key unavailable"></div>
            <div class="keys tiny alt_key alt_right unavailable">‎</div>
            <div class="keys tiny unavailable">‎</div>
            <div class="keys tiny ctrl_key ctrl_right unavailable">‎</div>
          </div>
        </div>
      </div>
      <!-- <input class="text" type="text" /> -->
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      keys: [],
      spaceKey: null,
      shift_left: null,
      shift_right: null,
      caps_lock_key: null,
      toggle_circle: null,
      body: null,
      text_input: null,
      colors_input: null,
      keyboard_lights: null,
      keyboard_wrapp: null,
    };
  },
  mounted() {
    this.keys = document.querySelectorAll(".keys");
    this.spaceKey = document.querySelector(".space_key");
    this.backspace_key_show = document.querySelector(".backspace_key_show");
    this.shift_left = document.querySelector(".shift_left");
    this.shift_right = document.querySelector(".shift_right");
    this.caps_lock_key = document.querySelector(".caps_lock_key");
    this.toggle_circle = document.querySelector(".toggle_circle");
    this.body = document.querySelector("body");
    this.text_input = document.querySelector(".text");
    this.colors_input = document.querySelector(".colors_input");
    this.keyboard_lights = document.querySelector(".keyboard_lights");
    this.keyboard_wrapp = document.querySelector(".keyboard_wrapp");

    // Configura los eventos
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);

    // Añade atributos a las teclas
    this.keys.forEach((key) => {
      key.setAttribute("keyname", key.innerText);
      key.setAttribute("lowerCaseName", key.innerText.toLowerCase());
    });
  },
  methods: {
    handleKeyDown(e) {
      this.keys.forEach((key) => {
        if (
          e.key === key.getAttribute("keyname") ||
          e.key === key.getAttribute("lowerCaseName")
        ) {
          key.classList.add("active");
        }
        if (e.code === "Space") {
          this.spaceKey.classList.add("active");
        }
        if (e.code === "ShiftLeft") {
          this.shift_right.classList.remove("active");
        }
        if (e.code === "ShiftRight") {
          this.shift_left.classList.remove("active");
        }
        if (e.code === "CapsLock") {
          this.caps_lock_key.classList.toggle("active");
        }
      });
    },
    handleKeyUp(e) {
      this.keys.forEach((key) => {
        if (
          e.key === key.getAttribute("keyname") ||
          e.key === key.getAttribute("lowerCaseName")
        ) {
          key.classList.remove("active");
          key.classList.add("remove");
        }
        if (e.code === "Space") {
          this.spaceKey.classList.remove("active");
          this.spaceKey.classList.add("remove");
        }
        if (e.code === "ShiftLeft") {
          this.shift_right.classList.remove("active");
          this.shift_right.classList.remove("remove");
        }
        if (e.code === "ShiftRight") {
          this.shift_left.classList.remove("active");
          this.shift_left.classList.remove("remove");
        }
        setTimeout(() => {
          key.classList.remove("remove");
        }, 200);
      });
    },
  },
  beforeDestroy() {
    // Elimina los eventos para evitar problemas de memoria
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("keyup", this.handleKeyUp);
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  // box-sizing: border-box;
}

// body {
//   transition: 0.2s;
// }

.container {
  @apply flex justify-center items-center min-w-full border-2 border-azuloscuro-50 p-4  rounded-xl;

  // Responsive
  @apply p-2 sm:p-2 md:p-2 lg:p-2 xl:p-4 2xl:p-4;
}

.keyboard_wrapp {
  @apply w-full overflow-hidden relative order-2;
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
}

.row {
  @apply flex;
}

.keys {
  @apply bg-azuloscuro-50 text-white;
  @apply flex justify-center items-center grow overflow-visible text-ellipsis;
  @apply rounded-md;

  // Responsive
  @apply py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1 2xl:py-1;
  @apply m-px sm:m-px md:m-1 lg:m-px xl:m-1 2xl:m-1;

  transition: 0.2s;
}

.unavailable {
  @apply text-white bg-azuloscuro-800;
}

.backspace_key {
  @apply basis-[20%];
}

.tab_key {
  @apply basis-[5%];
}

.slash_key {
  @apply basis-[5%];
}

.caps_lock_key {
  @apply basis-[10%];
}

.enter_key {
  @apply basis-[10%];
}

.shift_key {
  @apply basis-[5%];
}

.space_key {
  @apply basis-[30%];
}

.keys.active {
  @apply bg-azuloscuro-600;
}

.keys.remove {
  animation: keys_animation 0.5s forwards;
}
</style>
