<template>
  <div
    ref="desplegableRef"
    class="desplegable-container"
    @click="toggleDesplegable"
  >
    <!-- Botón del desplegable -->
    <button class="desplegable">
      <p>
        {{ optionNames[selectedOption] }}
      </p>
      <svg
        width="26"
        height="15"
        viewBox="0 0 26 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 1L13 13L1 0.999999" stroke-width="2" />
      </svg>
    </button>

    <!-- Menú desplegable -->
    <div v-if="isOpen" class="desplegable-menu">
      <button
        v-for="(name, index) in optionNames"
        :key="index"
        class="desplegable-menu-item"
        @click.stop="selectOption(index)"
      >
        {{ name }}
      </button>
    </div>

    <!-- Divs dependientes de la opción seleccionada -->

    <div class="option-content">
      <div v-if="selectedOption === 0">
        <slot name="content1">
          <div class="grid-main">
            <div class="grid-container container-1">
              <div class="grid-item">
                <p class="glyph">1</p>
                <p class="real-letter tiny">1</p>
              </div>
              <div class="grid-item">
                <p class="glyph">2</p>
                <p class="real-letter tiny">2</p>
              </div>
              <div class="grid-item">
                <p class="glyph">3</p>
                <p class="real-letter tiny">3</p>
              </div>
              <div class="grid-item">
                <p class="glyph">4</p>
                <p class="real-letter tiny">4</p>
              </div>
              <div class="grid-item">
                <p class="glyph">5</p>
                <p class="real-letter tiny">5</p>
              </div>
              <div class="grid-item">
                <p class="glyph">6</p>
                <p class="real-letter tiny">6</p>
              </div>
              <div class="grid-item">
                <p class="glyph">7</p>
                <p class="real-letter tiny">7</p>
              </div>
              <div class="grid-item">
                <p class="glyph">8</p>
                <p class="real-letter tiny">8</p>
              </div>
              <div class="grid-item">
                <p class="glyph">9</p>
                <p class="real-letter tiny">9</p>
              </div>
              <div class="grid-item">
                <p class="glyph">0</p>
                <p class="real-letter tiny">0</p>
              </div>
            </div>
            <div class="grid-container container-2">
              <div class="grid-item">
                <p class="glyph">a</p>
                <p class="real-letter tiny">a</p>
              </div>
              <div class="grid-item">
                <p class="glyph">b</p>
                <p class="real-letter tiny">b</p>
              </div>
              <div class="grid-item">
                <p class="glyph">c</p>
                <p class="real-letter tiny">c</p>
              </div>
              <div class="grid-item">
                <p class="glyph">d</p>
                <p class="real-letter tiny">d</p>
              </div>
              <div class="grid-item">
                <p class="glyph">e</p>
                <p class="real-letter tiny">e</p>
              </div>
              <div class="grid-item">
                <p class="glyph">f</p>
                <p class="real-letter tiny">f</p>
              </div>
              <div class="grid-item">
                <p class="glyph">g</p>
                <p class="real-letter tiny">g</p>
              </div>
              <div class="grid-item">
                <p class="glyph">h</p>
                <p class="real-letter tiny">h</p>
              </div>
              <div class="grid-item">
                <p class="glyph">i</p>
                <p class="real-letter tiny">i</p>
              </div>
              <div class="grid-item">
                <p class="glyph">j</p>
                <p class="real-letter tiny">j</p>
              </div>
              <div class="grid-item">
                <p class="glyph">k</p>
                <p class="real-letter tiny">k</p>
              </div>
              <div class="grid-item">
                <p class="glyph">l</p>
                <p class="real-letter tiny">l</p>
              </div>
              <div class="grid-item">
                <p class="glyph">m</p>
                <p class="real-letter tiny">m</p>
              </div>
              <div class="grid-item">
                <p class="glyph">n</p>
                <p class="real-letter tiny">n</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ñ</p>
                <p class="real-letter tiny">ñ</p>
              </div>
              <div class="grid-item">
                <p class="glyph">o</p>
                <p class="real-letter tiny">o</p>
              </div>
              <div class="grid-item">
                <p class="glyph">p</p>
                <p class="real-letter tiny">p</p>
              </div>
              <div class="grid-item">
                <p class="glyph">q</p>
                <p class="real-letter tiny">q</p>
              </div>
              <div class="grid-item">
                <p class="glyph">r</p>
                <p class="real-letter tiny">r</p>
              </div>
              <div class="grid-item">
                <p class="glyph">s</p>
                <p class="real-letter tiny">s</p>
              </div>
              <div class="grid-item">
                <p class="glyph">t</p>
                <p class="real-letter tiny">t</p>
              </div>
              <div class="grid-item">
                <p class="glyph">u</p>
                <p class="real-letter tiny">u</p>
              </div>
              <div class="grid-item">
                <p class="glyph">v</p>
                <p class="real-letter tiny">v</p>
              </div>
              <div class="grid-item">
                <p class="glyph">w</p>
                <p class="real-letter tiny">w</p>
              </div>
              <div class="grid-item">
                <p class="glyph">x</p>
                <p class="real-letter tiny">x</p>
              </div>
              <div class="grid-item">
                <p class="glyph">y</p>
                <p class="real-letter tiny">y</p>
              </div>
              <div class="grid-item">
                <p class="glyph">z</p>
                <p class="real-letter tiny">z</p>
              </div>
            </div>
            <div class="grid-container container-3">
              <div class="grid-item">
                <p class="glyph">a</p>
                <p class="real-letter tiny">a</p>
              </div>
              <div class="grid-item">
                <p class="glyph">b</p>
                <p class="real-letter tiny">b</p>
              </div>
              <div class="grid-item">
                <p class="glyph">c</p>
                <p class="real-letter tiny">c</p>
              </div>
              <div class="grid-item">
                <p class="glyph">d</p>
                <p class="real-letter tiny">d</p>
              </div>
              <div class="grid-item">
                <p class="glyph">e</p>
                <p class="real-letter tiny">e</p>
              </div>
              <div class="grid-item">
                <p class="glyph">f</p>
                <p class="real-letter tiny">f</p>
              </div>
              <div class="grid-item">
                <p class="glyph">g</p>
                <p class="real-letter tiny">g</p>
              </div>
              <div class="grid-item">
                <p class="glyph">h</p>
                <p class="real-letter tiny">h</p>
              </div>
              <div class="grid-item">
                <p class="glyph">i</p>
                <p class="real-letter tiny">i</p>
              </div>
              <div class="grid-item">
                <p class="glyph">j</p>
                <p class="real-letter tiny">j</p>
              </div>
              <div class="grid-item">
                <p class="glyph">k</p>
                <p class="real-letter tiny">k</p>
              </div>
              <div class="grid-item">
                <p class="glyph">l</p>
                <p class="real-letter tiny">l</p>
              </div>
              <div class="grid-item">
                <p class="glyph">m</p>
                <p class="real-letter tiny">m</p>
              </div>
              <div class="grid-item">
                <p class="glyph">n</p>
                <p class="real-letter tiny">n</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ñ</p>
                <p class="real-letter tiny">ñ</p>
              </div>
              <div class="grid-item">
                <p class="glyph">o</p>
                <p class="real-letter tiny">o</p>
              </div>
              <div class="grid-item">
                <p class="glyph">p</p>
                <p class="real-letter tiny">p</p>
              </div>
              <div class="grid-item">
                <p class="glyph">q</p>
                <p class="real-letter tiny">q</p>
              </div>
              <div class="grid-item">
                <p class="glyph">r</p>
                <p class="real-letter tiny">r</p>
              </div>
              <div class="grid-item">
                <p class="glyph">s</p>
                <p class="real-letter tiny">s</p>
              </div>
              <div class="grid-item">
                <p class="glyph">t</p>
                <p class="real-letter tiny">t</p>
              </div>
              <div class="grid-item">
                <p class="glyph">u</p>
                <p class="real-letter tiny">u</p>
              </div>
              <div class="grid-item">
                <p class="glyph">v</p>
                <p class="real-letter tiny">v</p>
              </div>
              <div class="grid-item">
                <p class="glyph">w</p>
                <p class="real-letter tiny">w</p>
              </div>
              <div class="grid-item">
                <p class="glyph">x</p>
                <p class="real-letter tiny">x</p>
              </div>
              <div class="grid-item">
                <p class="glyph">y</p>
                <p class="real-letter tiny">y</p>
              </div>
              <div class="grid-item">
                <p class="glyph">z</p>
                <p class="real-letter tiny">z</p>
              </div>
            </div>
          </div>
        </slot>
      </div>

      <div v-else-if="selectedOption === 1">
        <slot name="content2">
          <div class="grid-main">
            <div class="grid-container container-1">
              <div class="grid-item">
                <p class="glyph">11</p>
                <p class="real-letter tiny">1</p>
              </div>
              <div class="grid-item">
                <p class="glyph">22</p>
                <p class="real-letter tiny">2</p>
              </div>
              <div class="grid-item">
                <p class="glyph">33</p>
                <p class="real-letter tiny">3</p>
              </div>
              <div class="grid-item">
                <p class="glyph">44</p>
                <p class="real-letter tiny">4</p>
              </div>
              <div class="grid-item">
                <p class="glyph">55</p>
                <p class="real-letter tiny">5</p>
              </div>
              <div class="grid-item">
                <p class="glyph">66</p>
                <p class="real-letter tiny">6</p>
              </div>
              <div class="grid-item">
                <p class="glyph">77</p>
                <p class="real-letter tiny">7</p>
              </div>
              <div class="grid-item">
                <p class="glyph">88</p>
                <p class="real-letter tiny">8</p>
              </div>
              <div class="grid-item">
                <p class="glyph">99</p>
                <p class="real-letter tiny">9</p>
              </div>
              <div class="grid-item">
                <p class="glyph">00</p>
                <p class="real-letter tiny">0</p>
              </div>
            </div>
            <div class="grid-container container-2">
              <div class="grid-item">
                <p class="glyph">aa</p>
                <p class="real-letter tiny">a</p>
              </div>
              <div class="grid-item">
                <p class="glyph">bb</p>
                <p class="real-letter tiny">b</p>
              </div>
              <div class="grid-item">
                <p class="glyph">cc</p>
                <p class="real-letter tiny">c</p>
              </div>
              <div class="grid-item">
                <p class="glyph">dd</p>
                <p class="real-letter tiny">d</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ee</p>
                <p class="reeal-letter tiny">e</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ff</p>
                <p class="real-letter tiny">f</p>
              </div>
              <div class="grid-item">
                <p class="glyph">gg</p>
                <p class="real-letter tiny">g</p>
              </div>
              <div class="grid-item">
                <p class="glyph">hh</p>
                <p class="real-letter tiny">h</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ii</p>
                <p class="real-letter tiny">i</p>
              </div>
              <div class="grid-item">
                <p class="glyph">jj</p>
                <p class="real-letter tiny">j</p>
              </div>
              <div class="grid-item">
                <p class="glyph">kk</p>
                <p class="real-letter tiny">k</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ll</p>
                <p class="real-letter tiny">l</p>
              </div>
              <div class="grid-item">
                <p class="glyph">mm</p>
                <p class="real-letter tiny">m</p>
              </div>
              <div class="grid-item">
                <p class="glyph">nn</p>
                <p class="real-letter tiny">n</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ññ</p>
                <p class="real-letter tiny">ñ</p>
              </div>
              <div class="grid-item">
                <p class="glyph">o</p>
                <p class="real-letter tiny">o</p>
              </div>
              <div class="grid-item">
                <p class="glyph">p</p>
                <p class="real-letter tiny">p</p>
              </div>
              <div class="grid-item">
                <p class="glyph">qq</p>
                <p class="real-letter tiny">q</p>
              </div>
              <div class="grid-item">
                <p class="glyph">rr</p>
                <p class="real-letter tiny">r</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ss</p>
                <p class="real-letter tiny">s</p>
              </div>
              <div class="grid-item">
                <p class="glyph">tt</p>
                <p class="real-letter tiny">t</p>
              </div>
              <div class="grid-item">
                <p class="glyph">uu</p>
                <p class="real-letter tiny">u</p>
              </div>
              <div class="grid-item">
                <p class="glyph">vv</p>
                <p class="real-letter tiny">v</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ww</p>
                <p class="real-letter tiny">w</p>
              </div>
              <div class="grid-item">
                <p class="glyph">xx</p>
                <p class="real-letter tiny">x</p>
              </div>
              <div class="grid-item">
                <p class="glyph">yy</p>
                <p class="real-letter tiny">y</p>
              </div>
              <div class="grid-item">
                <p class="glyph">zz</p>
                <p class="real-letter tiny">z</p>
              </div>
            </div>
            <div class="grid-container container-3">
              <div class="grid-item">
                <p class="glyph">aa</p>
                <p class="real-letter tiny">a</p>
              </div>
              <div class="grid-item">
                <p class="glyph">bb</p>
                <p class="real-letter tiny">b</p>
              </div>
              <div class="grid-item">
                <p class="glyph">cc</p>
                <p class="real-letter tiny">c</p>
              </div>
              <div class="grid-item">
                <p class="glyph">dd</p>
                <p class="real-letter tiny">d</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ee</p>
                <p class="reeal-letter tiny">e</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ff</p>
                <p class="real-letter tiny">f</p>
              </div>
              <div class="grid-item">
                <p class="glyph">gg</p>
                <p class="real-letter tiny">g</p>
              </div>
              <div class="grid-item">
                <p class="glyph">hh</p>
                <p class="real-letter tiny">h</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ii</p>
                <p class="real-letter tiny">i</p>
              </div>
              <div class="grid-item">
                <p class="glyph">jj</p>
                <p class="real-letter tiny">j</p>
              </div>
              <div class="grid-item">
                <p class="glyph">kk</p>
                <p class="real-letter tiny">k</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ll</p>
                <p class="real-letter tiny">l</p>
              </div>
              <div class="grid-item">
                <p class="glyph">mm</p>
                <p class="real-letter tiny">m</p>
              </div>
              <div class="grid-item">
                <p class="glyph">nn</p>
                <p class="real-letter tiny">n</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ññ</p>
                <p class="real-letter tiny">ñ</p>
              </div>
              <div class="grid-item">
                <p class="glyph">o</p>
                <p class="real-letter tiny">o</p>
              </div>
              <div class="grid-item">
                <p class="glyph">p</p>
                <p class="real-letter tiny">p</p>
              </div>
              <div class="grid-item">
                <p class="glyph">qq</p>
                <p class="real-letter tiny">q</p>
              </div>
              <div class="grid-item">
                <p class="glyph">rr</p>
                <p class="real-letter tiny">r</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ss</p>
                <p class="real-letter tiny">s</p>
              </div>
              <div class="grid-item">
                <p class="glyph">tt</p>
                <p class="real-letter tiny">t</p>
              </div>
              <div class="grid-item">
                <p class="glyph">uu</p>
                <p class="real-letter tiny">u</p>
              </div>
              <div class="grid-item">
                <p class="glyph">vv</p>
                <p class="real-letter tiny">v</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ww</p>
                <p class="real-letter tiny">w</p>
              </div>
              <div class="grid-item">
                <p class="glyph">xx</p>
                <p class="real-letter tiny">x</p>
              </div>
              <div class="grid-item">
                <p class="glyph">yy</p>
                <p class="real-letter tiny">y</p>
              </div>
              <div class="grid-item">
                <p class="glyph">zz</p>
                <p class="real-letter tiny">z</p>
              </div>
            </div>
          </div>
        </slot>
      </div>

      <div v-else-if="selectedOption === 2">
        <slot name="content3">
          <div class="grid-main">
            <div class="grid-container container-1">
              <div class="grid-item">
                <p class="glyph">111</p>
                <p class="real-letter tiny">1</p>
              </div>
              <div class="grid-item">
                <p class="glyph">222</p>
                <p class="real-letter tiny">2</p>
              </div>
              <div class="grid-item">
                <p class="glyph">333</p>
                <p class="real-letter tiny">3</p>
              </div>
              <div class="grid-item">
                <p class="glyph">444</p>
                <p class="real-letter tiny">4</p>
              </div>
              <div class="grid-item">
                <p class="glyph">555</p>
                <p class="real-letter tiny">5</p>
              </div>
              <div class="grid-item">
                <p class="glyph">666</p>
                <p class="real-letter tiny">6</p>
              </div>
              <div class="grid-item">
                <p class="glyph">777</p>
                <p class="real-letter tiny">7</p>
              </div>
              <div class="grid-item">
                <p class="glyph">888</p>
                <p class="real-letter tiny">8</p>
              </div>
              <div class="grid-item">
                <p class="glyph">999</p>
                <p class="real-letter tiny">9</p>
              </div>
              <div class="grid-item">
                <p class="glyph">000</p>
                <p class="real-letter tiny">0</p>
              </div>
            </div>
            <div class="grid-container container-2">
              <div class="grid-item">
                <p class="glyph">aaa</p>
                <p class="real-letter tiny">a</p>
              </div>
              <div class="grid-item">
                <p class="glyph">bbb</p>
                <p class="real-letter tiny">b</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ccc</p>
                <p class="real-letter tiny">c</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ddd</p>
                <p class="real-letter tiny">d</p>
              </div>
              <div class="grid-item">
                <p class="glyph">eee</p>
                <p class="reeal-letter tiny">e</p>
              </div>
              <div class="grid-item">
                <p class="glyph">fff</p>
                <p class="real-letter tiny">f</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ggg</p>
                <p class="real-letter tiny">g</p>
              </div>
              <div class="grid-item">
                <p class="glyph">hhh</p>
                <p class="real-letter tiny">h</p>
              </div>
              <div class="grid-item">
                <p class="glyph">iii</p>
                <p class="real-letter tiny">i</p>
              </div>
              <div class="grid-item">
                <p class="glyph">jjj</p>
                <p class="real-letter tiny">j</p>
              </div>
              <div class="grid-item">
                <p class="glyph">kkk</p>
                <p class="real-letter tiny">k</p>
              </div>
              <div class="grid-item">
                <p class="glyph">lll</p>
                <p class="real-letter tiny">l</p>
              </div>
              <div class="grid-item">
                <p class="glyph">mmm</p>
                <p class="real-letter tiny">m</p>
              </div>
              <div class="grid-item">
                <p class="glyph">nnn</p>
                <p class="real-letter tiny">n</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ñññ</p>
                <p class="real-letter tiny">ñ</p>
              </div>
              <div class="grid-item">
                <p class="glyph">o</p>
                <p class="real-letter tiny">o</p>
              </div>
              <div class="grid-item">
                <p class="glyph">p</p>
                <p class="real-letter tiny">p</p>
              </div>
              <div class="grid-item">
                <p class="glyph">qqq</p>
                <p class="real-letter tiny">q</p>
              </div>
              <div class="grid-item">
                <p class="glyph">rrr</p>
                <p class="real-letter tiny">r</p>
              </div>
              <div class="grid-item">
                <p class="glyph">sss</p>
                <p class="real-letter tiny">s</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ttt</p>
                <p class="real-letter tiny">t</p>
              </div>
              <div class="grid-item">
                <p class="glyph">uuu</p>
                <p class="real-letter tiny">u</p>
              </div>
              <div class="grid-item">
                <p class="glyph">vvv</p>
                <p class="real-letter tiny">v</p>
              </div>
              <div class="grid-item">
                <p class="glyph">www</p>
                <p class="real-letter tiny">w</p>
              </div>
              <div class="grid-item">
                <p class="glyph">xxx</p>
                <p class="real-letter tiny">x</p>
              </div>
              <div class="grid-item">
                <p class="glyph">yyy</p>
                <p class="real-letter tiny">y</p>
              </div>
              <div class="grid-item">
                <p class="glyph">zzz</p>
                <p class="real-letter tiny">z</p>
              </div>
            </div>
            <div class="grid-container container-3">
              <div class="grid-item">
                <p class="glyph">aaa</p>
                <p class="real-letter tiny">a</p>
              </div>
              <div class="grid-item">
                <p class="glyph">bbb</p>
                <p class="real-letter tiny">b</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ccc</p>
                <p class="real-letter tiny">c</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ddd</p>
                <p class="real-letter tiny">d</p>
              </div>
              <div class="grid-item">
                <p class="glyph">eee</p>
                <p class="reeal-letter tiny">e</p>
              </div>
              <div class="grid-item">
                <p class="glyph">fff</p>
                <p class="real-letter tiny">f</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ggg</p>
                <p class="real-letter tiny">g</p>
              </div>
              <div class="grid-item">
                <p class="glyph">hhh</p>
                <p class="real-letter tiny">h</p>
              </div>
              <div class="grid-item">
                <p class="glyph">iii</p>
                <p class="real-letter tiny">i</p>
              </div>
              <div class="grid-item">
                <p class="glyph">jjj</p>
                <p class="real-letter tiny">j</p>
              </div>
              <div class="grid-item">
                <p class="glyph">kkk</p>
                <p class="real-letter tiny">k</p>
              </div>
              <div class="grid-item">
                <p class="glyph">lll</p>
                <p class="real-letter tiny">l</p>
              </div>
              <div class="grid-item">
                <p class="glyph">mmm</p>
                <p class="real-letter tiny">m</p>
              </div>
              <div class="grid-item">
                <p class="glyph">nnn</p>
                <p class="real-letter tiny">n</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ñññ</p>
                <p class="real-letter tiny">ñ</p>
              </div>
              <div class="grid-item">
                <p class="glyph">o</p>
                <p class="real-letter tiny">o</p>
              </div>
              <div class="grid-item">
                <p class="glyph">p</p>
                <p class="real-letter tiny">p</p>
              </div>
              <div class="grid-item">
                <p class="glyph">qqq</p>
                <p class="real-letter tiny">q</p>
              </div>
              <div class="grid-item">
                <p class="glyph">rrr</p>
                <p class="real-letter tiny">r</p>
              </div>
              <div class="grid-item">
                <p class="glyph">sss</p>
                <p class="real-letter tiny">s</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ttt</p>
                <p class="real-letter tiny">t</p>
              </div>
              <div class="grid-item">
                <p class="glyph">uuu</p>
                <p class="real-letter tiny">u</p>
              </div>
              <div class="grid-item">
                <p class="glyph">vvv</p>
                <p class="real-letter tiny">v</p>
              </div>
              <div class="grid-item">
                <p class="glyph">www</p>
                <p class="real-letter tiny">w</p>
              </div>
              <div class="grid-item">
                <p class="glyph">xxx</p>
                <p class="real-letter tiny">x</p>
              </div>
              <div class="grid-item">
                <p class="glyph">yyy</p>
                <p class="real-letter tiny">y</p>
              </div>
              <div class="grid-item">
                <p class="glyph">zzz</p>
                <p class="real-letter tiny">z</p>
              </div>
            </div>
          </div>
        </slot>
      </div>

      <div v-else-if="selectedOption === 3">
        <slot name="content4">
          <div class="grid-main">
            <div class="grid-container container-1">
              <div class="grid-item">
                <p class="glyph">1111</p>
                <p class="real-letter tiny">1</p>
              </div>
              <div class="grid-item">
                <p class="glyph">2222</p>
                <p class="real-letter tiny">2</p>
              </div>
              <div class="grid-item">
                <p class="glyph">3333</p>
                <p class="real-letter tiny">3</p>
              </div>
              <div class="grid-item">
                <p class="glyph">4444</p>
                <p class="real-letter tiny">4</p>
              </div>
              <div class="grid-item">
                <p class="glyph">5555</p>
                <p class="real-letter tiny">5</p>
              </div>
              <div class="grid-item">
                <p class="glyph">6666</p>
                <p class="real-letter tiny">6</p>
              </div>
              <div class="grid-item">
                <p class="glyph">7777</p>
                <p class="real-letter tiny">7</p>
              </div>
              <div class="grid-item">
                <p class="glyph">8888</p>
                <p class="real-letter tiny">8</p>
              </div>
              <div class="grid-item">
                <p class="glyph">9999</p>
                <p class="real-letter tiny">9</p>
              </div>
              <div class="grid-item">
                <p class="glyph">0000</p>
                <p class="real-letter tiny">0</p>
              </div>
            </div>
            <div class="grid-container container-2">
              <div class="grid-item">
                <p class="glyph">aaaa</p>
                <p class="real-letter tiny">a</p>
              </div>
              <div class="grid-item">
                <p class="glyph">bbbb</p>
                <p class="real-letter tiny">b</p>
              </div>
              <div class="grid-item">
                <p class="glyph">cccc</p>
                <p class="real-letter tiny">c</p>
              </div>
              <div class="grid-item">
                <p class="glyph">dddd</p>
                <p class="real-letter tiny">d</p>
              </div>
              <div class="grid-item">
                <p class="glyph">eeee</p>
                <p class="reeal-letter tiny">e</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ffff</p>
                <p class="real-letter tiny">f</p>
              </div>
              <div class="grid-item">
                <p class="glyph">gggg</p>
                <p class="real-letter tiny">g</p>
              </div>
              <div class="grid-item">
                <p class="glyph">hhhh</p>
                <p class="real-letter tiny">h</p>
              </div>
              <div class="grid-item">
                <p class="glyph">iiii</p>
                <p class="real-letter tiny">i</p>
              </div>
              <div class="grid-item">
                <p class="glyph">jjjj</p>
                <p class="real-letter tiny">j</p>
              </div>
              <div class="grid-item">
                <p class="glyph">kkkk</p>
                <p class="real-letter tiny">k</p>
              </div>
              <div class="grid-item">
                <p class="glyph">llll</p>
                <p class="real-letter tiny">l</p>
              </div>
              <div class="grid-item">
                <p class="glyph">mmmm</p>
                <p class="real-letter tiny">m</p>
              </div>
              <div class="grid-item">
                <p class="glyph">nnnn</p>
                <p class="real-letter tiny">n</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ññññ</p>
                <p class="real-letter tiny">ñ</p>
              </div>
              <div class="grid-item">
                <p class="glyph">o</p>
                <p class="real-letter tiny">o</p>
              </div>
              <div class="grid-item">
                <p class="glyph">p</p>
                <p class="real-letter tiny">p</p>
              </div>
              <div class="grid-item">
                <p class="glyph">qqqq</p>
                <p class="real-letter tiny">q</p>
              </div>
              <div class="grid-item">
                <p class="glyph">rrrr</p>
                <p class="real-letter tiny">r</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ssss</p>
                <p class="real-letter tiny">s</p>
              </div>
              <div class="grid-item">
                <p class="glyph">tttt</p>
                <p class="real-letter tiny">t</p>
              </div>
              <div class="grid-item">
                <p class="glyph">uuuu</p>
                <p class="real-letter tiny">u</p>
              </div>
              <div class="grid-item">
                <p class="glyph">vvvv</p>
                <p class="real-letter tiny">v</p>
              </div>
              <div class="grid-item">
                <p class="glyph">wwww</p>
                <p class="real-letter tiny">w</p>
              </div>
              <div class="grid-item">
                <p class="glyph">xxxx</p>
                <p class="real-letter tiny">x</p>
              </div>
              <div class="grid-item">
                <p class="glyph">yyyy</p>
                <p class="real-letter tiny">y</p>
              </div>
              <div class="grid-item">
                <p class="glyph">zzzz</p>
                <p class="real-letter tiny">z</p>
              </div>
            </div>
            <div class="grid-container container-3">
              <div class="grid-item">
                <p class="glyph">aaaa</p>
                <p class="real-letter tiny">a</p>
              </div>
              <div class="grid-item">
                <p class="glyph">bbbb</p>
                <p class="real-letter tiny">b</p>
              </div>
              <div class="grid-item">
                <p class="glyph">cccc</p>
                <p class="real-letter tiny">c</p>
              </div>
              <div class="grid-item">
                <p class="glyph">dddd</p>
                <p class="real-letter tiny">d</p>
              </div>
              <div class="grid-item">
                <p class="glyph">eeee</p>
                <p class="reeal-letter tiny">e</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ffff</p>
                <p class="real-letter tiny">f</p>
              </div>
              <div class="grid-item">
                <p class="glyph">gggg</p>
                <p class="real-letter tiny">g</p>
              </div>
              <div class="grid-item">
                <p class="glyph">hhhh</p>
                <p class="real-letter tiny">h</p>
              </div>
              <div class="grid-item">
                <p class="glyph">iiii</p>
                <p class="real-letter tiny">i</p>
              </div>
              <div class="grid-item">
                <p class="glyph">jjjj</p>
                <p class="real-letter tiny">j</p>
              </div>
              <div class="grid-item">
                <p class="glyph">kkkk</p>
                <p class="real-letter tiny">k</p>
              </div>
              <div class="grid-item">
                <p class="glyph">llll</p>
                <p class="real-letter tiny">l</p>
              </div>
              <div class="grid-item">
                <p class="glyph">mmmm</p>
                <p class="real-letter tiny">m</p>
              </div>
              <div class="grid-item">
                <p class="glyph">nnnn</p>
                <p class="real-letter tiny">n</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ññññ</p>
                <p class="real-letter tiny">ñ</p>
              </div>
              <div class="grid-item">
                <p class="glyph">o</p>
                <p class="real-letter tiny">o</p>
              </div>
              <div class="grid-item">
                <p class="glyph">p</p>
                <p class="real-letter tiny">p</p>
              </div>
              <div class="grid-item">
                <p class="glyph">qqqq</p>
                <p class="real-letter tiny">q</p>
              </div>
              <div class="grid-item">
                <p class="glyph">rrrr</p>
                <p class="real-letter tiny">r</p>
              </div>
              <div class="grid-item">
                <p class="glyph">ssss</p>
                <p class="real-letter tiny">s</p>
              </div>
              <div class="grid-item">
                <p class="glyph">tttt</p>
                <p class="real-letter tiny">t</p>
              </div>
              <div class="grid-item">
                <p class="glyph">uuuu</p>
                <p class="real-letter tiny">u</p>
              </div>
              <div class="grid-item">
                <p class="glyph">vvvv</p>
                <p class="real-letter tiny">v</p>
              </div>
              <div class="grid-item">
                <p class="glyph">wwww</p>
                <p class="real-letter tiny">w</p>
              </div>
              <div class="grid-item">
                <p class="glyph">xxxx</p>
                <p class="real-letter tiny">x</p>
              </div>
              <div class="grid-item">
                <p class="glyph">yyyy</p>
                <p class="real-letter tiny">y</p>
              </div>
              <div class="grid-item">
                <p class="glyph">zzzz</p>
                <p class="real-letter tiny">z</p>
              </div>
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
// Importar funciones de Vue
import { ref, onMounted, onBeforeUnmount } from "vue";

// Definir las propiedades (props) usando `defineProps`
const props = defineProps({
  optionNames: {
    type: Array,
    required: true,
    default: () => ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
  },
  defaultSelected: {
    type: Number,
    default: 0, // Índice de la opción predeterminada
  },
});

// Variables reactivas
const isOpen = ref(false);
const selectedOption = ref(props.defaultSelected); // Usar valor de props para inicializar

// Referencia para detectar clics fuera del componente
const desplegableRef = ref(null);

// Funciones del componente
const toggleDesplegable = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (index) => {
  selectedOption.value = index;
  isOpen.value = false;
};

// Detectar clics fuera del componente
const handleClickOutside = (event) => {
  if (desplegableRef.value && !desplegableRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

// Añadir y limpiar eventos de clic en el ciclo de vida
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
/* Contenedor principal */
.desplegable-container {
  @apply relative text-left col-span-12;
}

.option-content {
  @apply col-span-12 mt-12;
}

.grid-main {
  @apply flex flex-col gap-20;
  /* Responsive */
  @apply gap-12 sm:gap-16 md:gap-16 lg:gap-16 xl:gap-16 2xl:gap-16;
}

.grid-container {
  @apply grid gap-4;

  /* Responsive */
  @apply grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10;
}

.grid-item {
  @apply flex flex-col justify-center items-center border-[2px] border-azuloscuro-50 p-4 gap-4 aspect-square rounded-xl;
  @apply hover:bg-azuloscuro-800;
  @apply transition duration-300;
  font-variation-settings: "wdth" 0;
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
}

.container-3 {
  @apply uppercase;
}

.glyph {
  @apply font-sgrafotype text-7xl text-azuloscuro-50;

  /* Responsive */
  @apply text-[15vw] sm:text-[6vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw] 2xl:text-[3vw];
}

/* Estilo para el texto dentro de los items */
.flex-item p {
  @apply text-center text-white font-bold;
}
</style>
