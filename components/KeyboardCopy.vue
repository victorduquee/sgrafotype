<template>
  <body class="">
    <div class="container">
      <div class="keyboard_wrapp">
        <div class="keyboard_lights"></div>
        <div class="keyboard_keys">
          <div class="row">
            <div class="keys">`</div>
            <div class="keys">1</div>
            <div class="keys">2</div>
            <div class="keys">3</div>
            <div class="keys">4</div>
            <div class="keys">5</div>
            <div class="keys">6</div>
            <div class="keys">7</div>
            <div class="keys">8</div>
            <div class="keys">9</div>
            <div class="keys">0</div>
            <div class="keys">-</div>
            <div class="keys">=</div>
            <div class="keys backspace_key">Backspace</div>
          </div>
          <div class="row">
            <div class="keys tab_key">Tab</div>
            <div class="keys">Q</div>
            <div class="keys">W</div>
            <div class="keys">E</div>
            <div class="keys">R</div>
            <div class="keys">T</div>
            <div class="keys">Y</div>
            <div class="keys">U</div>
            <div class="keys">I</div>
            <div class="keys">O</div>
            <div class="keys">P</div>
            <div class="keys">{</div>
            <div class="keys">}</div>
            <div class="keys slash_key">\</div>
          </div>
          <div class="row">
            <div class="keys caps_lock_key">Caps Lock</div>
            <div class="keys">A</div>
            <div class="keys">S</div>
            <div class="keys">D</div>
            <div class="keys">F</div>
            <div class="keys">G</div>
            <div class="keys">H</div>
            <div class="keys">J</div>
            <div class="keys">K</div>
            <div class="keys">L</div>
            <div class="keys">;</div>
            <div class="keys">"</div>
            <div class="keys enter_key">Enter</div>
          </div>
          <div class="row">
            <div class="keys shift_key shift_left">Shift</div>
            <div class="keys">Z</div>
            <div class="keys">X</div>
            <div class="keys">C</div>
            <div class="keys">V</div>
            <div class="keys">B</div>
            <div class="keys">N</div>
            <div class="keys">M</div>
            <div class="keys"></div>
            <div class="keys">></div>
            <div class="keys">/</div>
            <div class="keys">?</div>
            <div class="keys shift_key shift_right">Shift</div>
          </div>
          <div class="row">
            <div class="keys ctrl_key ctrl_left">Ctrl</div>
            <div class="keys win_key">Win</div>
            <div class="keys alt_key alt_left">Alt</div>
            <div class="keys space_key"></div>
            <div class="keys alt_key alt_right">Alt</div>
            <div class="keys">Fn</div>
            <div class="keys ctrl_key ctrl_right">Ctrl</div>
          </div>
        </div>
      </div>
      <input class="text" type="text" />
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
    // Selecciona los elementos del DOM después de que el componente se haya montado
    this.keys = document.querySelectorAll(".keys");
    this.spaceKey = document.querySelector(".space_key");
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
  @apply flex justify-center items-center;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  margin: 0 10px;
}

.keyboard_wrapp {
  max-width: 1008px;
  width: 100%;
  background-color: #e7e7e7;
  overflow: hidden;
  position: relative;
  overflow: hidden;
  order: 2;
}

.row {
  display: flex;
}

.keys {
  width: 60px;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  transition: 0.2s;
  z-index: 5;
}

.backspace_key {
  width: 120px;
}

.tab_key {
  width: 90px;
}

.slash_key {
  width: 90px;
}

.caps_lock_key {
  width: 128px;
}

.enter_key {
  width: 120px;
}

.shift_key {
  width: 124px;
}

.space_key {
  max-width: 600px;
  width: 100%;
}

.text {
  max-width: 1008px;
  width: 100%;
  height: 90px;
  margin-bottom: 30px;
  border: none;
  outline: none;
  font-size: 26px;
  background-color: #f7f7f7;
  padding-left: 10px;
  transition: 0.2s;
}

.keys.active {
  background-color: #333;
  color: #fff;
}

.keys.remove {
  animation: keys_animation 0.5s forwards;
}

@keyframes keys_animation {
  0% {
    background-color: #333;
    color: #fff;
  }
  100% {
    background-color: #fff;
    color: #000;
  }
}

body.active {
  background-color: rgb(54, 54, 54);
}

.night_mode {
  width: 80px;
  height: 30px;
  background-color: #e6e6e6;
  position: absolute;
  right: 25px;
  top: 25px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
}

.night_mode.active {
  background-color: #222222;
}

.toggle_circle {
  width: 20px;
  height: 20px;
  background-color: rgb(54, 54, 54);
  border-radius: 50px;
  margin: 0 5px;
  position: absolute;
  left: 0;
  transition: 0.2s;
}

.toggle_circle.active {
  left: 60%;
  background-color: #fff;
}

.keyboard_wrapp.active {
  background-color: #585858;
}

.keys.keys_night {
  background-color: #3c3c3c;
  color: #fff;
}

.text.active {
  background-color: #2b2b2b;
  color: #fff;
}

.keys.keys_night.active {
  background-color: #fff;
  color: #333;
}

.keys.keys_night.remove {
  animation: keys_night_animation 0.5s forwards;
}

@keyframes keys_night_animation {
  0% {
    background-color: #fff;
    color: #000;
  }
  100% {
    background-color: #333;
    color: #fff;
  }
}

.change_light_color {
  width: 100px;
  height: 50px;
  position: absolute;
  right: 150px;
  top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.colors_input {
  width: 100px;
  height: 50px;
  border: none;
  outline: none;
  background-color: transparent;
}

.keyboard_lights {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
