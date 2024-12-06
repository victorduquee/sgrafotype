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
      <!-- Frisos -->

      <div class="grupo-container" v-if="selectedOption === 0">
        <slot name="content1">
          <div class="grupo-items-container">
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_245)">
                    <path
                      d="M0 49.84C0 42.93 5.6 37.34 12.5 37.34C19.4 37.34 25 43.1 25 50H50C50 43.09 44.4 37.5 37.5 37.5C30.6 37.5 25 31.9 25 25C38.81 25 50 36.19 50 50V0H0V49.84Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_245">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="motivo-text tiny">1</div>
            </div>
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M50 0H0V25H50V0Z" />
                </svg>
              </div>
              <div class="motivo-text tiny">2</div>
            </div>
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M25 50L50 0V50H25Z" />
                </svg>
              </div>
              <div class="motivo-text tiny">3</div>
            </div>
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 50V0H25V12.5H37.5C37.5 34.68 27.61 38.8 25 50H50Z"
                  />
                </svg>
              </div>
              <div class="motivo-text tiny">4</div>
            </div>
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_236)">
                    <path
                      d="M25 0L37.5 25H25L0 50V0H25ZM50 25H37.5L50 50V25Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_236">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="motivo-text tiny">5</div>
            </div>
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_227)">
                    <path d="M50 0L25 25H0V0H50ZM50 50L25 25L0 50H50Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_227">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="motivo-text tiny">6</div>
            </div>
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_221)">
                    <path
                      d="M12.5 25C8.24 31.1 2.68 41.74 0 50V0C2.76 0 12.5 11.19 12.5 25ZM37.5 25C37.5 11.19 45 0 50 0C30.79 0 17.21 18.27 12.5 25C19.4 25 25 36.19 25 50C25 36.19 30.6 25 37.5 25Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_221">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="motivo-text tiny">7</div>
            </div>
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_215)">
                    <path d="M0 25L25 50H0V25ZM25 25L50 50V0H25L0 25H25Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_215">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="motivo-text tiny">8</div>
            </div>
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_224)">
                    <path
                      d="M25 0L37.5 25L25 50L12.5 25H0V0H25ZM37.5 25L50 50V0L37.5 25Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_224">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="motivo-text tiny">9</div>
            </div>
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_248)">
                    <path
                      d="M25 50L50 25V50H25ZM0 0V50H25L12.5 37.5V12.5H37.5L50 25V0H0Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_248">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="motivo-text tiny">0</div>
            </div>
          </div>
        </slot>
      </div>

      <!-- Mosaicos 1 -->

      <div class="grupo-container" v-else-if="selectedOption === 1">
        <slot name="content2">
          <div class="grupo-items-container">
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_212)">
                    <path
                      d="M0 50C27.61 50 50 27.61 50 0C22.39 0 0 22.39 0 50Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_212">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="motivo-text tiny">q</div>
            </div>

            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_209)">
                    <path
                      d="M25 25C38.81 25 50 13.81 50 0V25C50 33.76 42.5 34.89 42.5 42.53C42.5 46.66 45.86 50 50 50H0C0 36.19 11.19 25 25 25Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_209">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="motivo-text tiny">w</div>
            </div>

            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_206)">
                    <path
                      d="M25 50C25 36.19 36.19 25 50 25V50H25ZM50 0C22.39 0 0 22.39 0 50C0 43.1 5.6 37.5 12.5 37.5C19.4 37.5 25 43.1 25 50V25C25 11.19 36.19 0 50 0Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_206">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="motivo-text tiny">e</div>
            </div>

            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_203)">
                    <path
                      d="M31.25 43.76C27.8 43.76 25 46.56 25 50H0C0 40.97 7.2 33.62 16.17 33.36V16.7H33.33C33.33 7.5 40.76 0.04 49.97 0.04L50 0L49.97 25.02C46.52 25.02 43.75 27.82 43.75 31.26C40.3 31.26 37.53 34.04 37.53 37.49C34.08 37.49 31.26 40.3 31.26 43.75L31.25 43.76ZM50 50C50 43.1 44.4 37.5 37.5 37.5C37.5 44.4 43.1 50 50 50Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_203">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="motivo-text tiny">r</div>
            </div>

            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_197)">
                    <path
                      d="M0 50C0 43.02 1.43 36.37 4.02 30.34C7.45 34.7 12.77 37.5 18.75 37.5C29.11 37.5 37.5 29.11 37.5 18.75C37.5 12.77 34.7 7.45 30.34 4.02C36.37 1.43 43.02 0 50 0V50H0Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_197">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="motivo-text tiny">t</div>
            </div>

            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_194)">
                    <path
                      d="M33.33 33.33C28.73 33.33 25 37.06 25 41.66V47.49H24.97C15.87 47.49 8.47 40.06 8.47 30.96V27.8C14.57 20.96 23.46 16.66 33.34 16.66C33.33 7.46 40.8 0 50 0V16.67C50 21.27 46.27 25 41.67 25C41.67 29.6 37.94 33.33 33.34 33.33H33.33ZM24.96 50C14.46 49.98 5.96 41.47 5.96 30.97C2.2 36.37 0 42.92 0 50H24.97H24.96Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_194">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="motivo-text tiny">y</div>
            </div>

            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_191)">
                    <path
                      d="M50 25V0C40.13 0 32.12 8 32.12 17.88L14.02 14.02L17.88 32.12C8 32.12 0 40.13 0 50H25C25 43.1 30.6 37.5 37.5 37.5C37.5 30.6 43.1 25 50 25Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_191">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="motivo-text tiny">u</div>
            </div>

            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_188)">
                    <path
                      d="M50 0V50H0C0 46.55 2.8 43.75 6.25 43.75H12.5V37.5C12.5 34.05 15.3 31.25 18.75 31.25C22.2 31.25 25 34.05 25 37.5V43.75C35.36 43.75 43.75 35.36 43.75 25H37.5C34.05 25 31.25 22.2 31.25 18.75C31.25 15.3 34.05 12.5 37.5 12.5H43.75V6.25C43.75 2.8 46.55 0 50 0Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_188">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="motivo-text tiny">i</div>
            </div>
          </div>
        </slot>
      </div>

      <!-- Mosaicos 2 -->

      <div class="grupo-container" v-else-if="selectedOption === 2">
        <slot name="content3">
          <div class="grupo-items-container">
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 0L33.33 8.33V16.66H16.66V33.33H8.33L0 25V0H25ZM16.67 33.33V41.66L25 49.99L33.33 41.66V33.33H16.66H16.67ZM33.33 33.33H41.66L49.99 25L41.66 16.67H33.33V33.34V33.33Z"
                  />
                </svg>
              </div>
              <div class="motivo-text tiny">a</div>
            </div>

            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_184)">
                    <path
                      d="M50 25V0H25C25 13.81 13.81 25 0 25V50H25C25 36.19 36.19 25 50 25Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_184">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="motivo-text tiny">s</div>
            </div>

            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 0C36.19 0 25 11.19 25 25C25 11.19 13.81 0 0 0V50H25C25 36.19 36.19 25 50 25V0Z"
                  />
                </svg>
              </div>
              <div class="motivo-text tiny">d</div>
            </div>

            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.23 42.47C9.51 42.47 0 32.96 0 21.23V0H21.23C32.96 0 42.46 9.51 42.46 21.23C42.46 22.52 42.34 23.77 42.12 25H24.99V42.13C23.77 42.35 22.51 42.47 21.22 42.47H21.23ZM50 50V25H42.13C40.57 33.71 33.71 40.57 25 42.13V50H50Z"
                  />
                </svg>
              </div>
              <div class="motivo-text tiny">f</div>
            </div>

            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_62_175)">
                    <path d="M0 0L25 50L50 0H0Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_62_175">
                      <rect width="50" height="50" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="motivo-text tiny">g</div>
            </div>

            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.55 10.32C39.79 10.32 47.58 16.51 50 24.97V50H25C16.52 47.59 10.32 39.79 10.32 30.54C10.32 28.62 10.59 26.76 11.1 25H25.01V11.09C26.77 10.59 28.63 10.31 30.56 10.31L30.55 10.32ZM25 11.09V0H0V25H11.09C13 18.29 18.29 13 25 11.09Z"
                  />
                </svg>
              </div>
              <div class="motivo-text tiny">h</div>
            </div>

            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.23 31.46L18.54 16.77C22.55 12.33 25 6.45 25 0H0V25C6.45 25 12.34 22.55 16.77 18.54L31.46 33.23C27.45 37.67 25 43.55 25 50H50V25C43.55 25 37.66 27.45 33.23 31.46Z"
                  />
                </svg>
              </div>
              <div class="motivo-text tiny">j</div>
            </div>

            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 37.5C5.6 37.5 0 43.1 0 50C0 42.31 1.74 35.02 4.84 28.51C9.41 18.93 7.51 7.51 0 0C7.51 7.51 18.93 9.41 28.51 4.84C35.02 1.74 42.31 0 50 0C43.1 0 37.5 5.6 37.5 12.5C37.5 25 50 50 50 50C50 50 25 37.5 12.5 37.5Z"
                  />
                </svg>
              </div>
              <div class="motivo-text tiny">k</div>
            </div>

            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 25V0H25C25 13.81 13.81 25 0 25ZM50 50V0L37.5 12.5V37.5H12.5L0 50H50Z"
                  />
                </svg>
              </div>
              <div class="motivo-text tiny">l</div>
            </div>

            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 25C6.9 25 12.5 19.4 12.5 12.5C12.5 5.6 6.9 0 0 0H50C50 13.81 25 25 0 25ZM50 0C50 27.61 27.61 50 0 50H50V0Z"
                  />
                </svg>
              </div>
              <div class="motivo-text tiny">ñ</div>
            </div>
          </div>
        </slot>
      </div>

      <!-- Mosaicos 3 -->

      <div class="grupo-container" v-else-if="selectedOption === 3">
        <slot name="content4">
          <div class="grupo-items-container">
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 37.5V50L33.33 41.67L50 50L41.67 33.33L50 25H37.5L25 0V25H0L25 37.5Z"
                  />
                </svg>
              </div>
              <div class="motivo-text tiny">z</div>
            </div>
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 24.99C0 11.19 11.19 0 25 0C25 13.8 36.19 24.99 50 24.99V25.02C50 38.82 38.81 50.01 25 50.01C25 36.21 13.81 25.02 0 25.02V24.99Z"
                  />
                </svg>
              </div>
              <div class="motivo-text tiny">x</div>
            </div>
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 18.75C19.82 18.75 15.62 14.55 15.62 9.38C15.62 4.21 19.82 0 25 0C38.81 0 50 11.19 50 25C50 30.18 45.8 34.38 40.62 34.38C35.44 34.38 31.25 30.18 31.25 25C31.25 21.55 28.45 18.75 25 18.75ZM25 50H50V25C50 38.81 38.81 50 25 50ZM25 50C30.18 50 34.38 45.8 34.38 40.63C34.38 35.46 30.18 31.26 25 31.26C21.55 31.26 18.75 28.46 18.75 25.01C18.75 19.83 14.55 15.64 9.37 15.64C4.19 15.64 0 19.82 0 25V50H25Z"
                  />
                </svg>
              </div>
              <div class="motivo-text tiny">c</div>
            </div>
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 25C0 18.1 5.6 12.5 12.5 12.5C12.5 5.6 18.1 0 25 0C25 9.2 32.46 16.67 41.67 16.67C46.27 16.67 50 20.4 50 25C46.55 25 43.75 27.8 43.75 31.25C43.75 34.7 46.55 37.5 50 37.5V50H37.5C37.5 46.55 34.7 43.75 31.25 43.75C27.8 43.75 25 46.55 25 50C20.4 50 16.67 46.27 16.67 41.67C16.67 32.47 9.21 25 0 25Z"
                  />
                </svg>
              </div>
              <div class="motivo-text tiny">v</div>
            </div>
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 50H0V25L25 50ZM50 25V0H25L50 25ZM25 31.25C28.45 31.25 31.25 28.45 31.25 25C31.25 21.55 28.45 18.75 25 18.75C21.55 18.75 18.75 21.55 18.75 25C18.75 28.45 21.55 31.25 25 31.25ZM33.75 25C33.75 29.82 29.82 33.75 25 33.75V50H50V25H33.75Z"
                  />
                </svg>
              </div>
              <div class="motivo-text tiny">b</div>
            </div>
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 50V37.49C50 30.59 44.4 24.99 37.5 24.99H50V12.5C50 5.6 44.4 0 37.5 0H25C18.1 0 12.5 5.6 12.5 12.5C5.6 12.5 0 18.1 0 25C0 31.9 5.6 37.5 12.5 37.5H31.25C34.7 37.5 37.5 40.3 37.5 43.75C37.5 47.2 40.3 50 43.75 50H50Z"
                  />
                </svg>
              </div>
              <div class="motivo-text tiny">n</div>
            </div>
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 25V50H25C25 43.1 22.2 36.85 17.68 32.32L32.32 17.68C36.84 22.2 43.09 25 50 25ZM50 0H25C25 6.9 27.8 13.15 32.32 17.68L50 0ZM0 25V50L17.68 32.32C13.16 27.8 6.91 25 0 25Z"
                  />
                </svg>
              </div>
              <div class="motivo-text tiny">m</div>
            </div>
          </div>
        </slot>
      </div>

      <!-- Triángulos -->
      <div class="grupo-container" v-else-if="selectedOption === 4">
        <slot name="content5">
          <div class="grupo-items-container">
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.81 44.38H8.42L5.61 50H0L2.81 44.38ZM18.13 44.37V38.62L13.01 35.21L8.42 44.39H18.13V44.37ZM8.8 32.4L13.01 35.21L20.41 20.42L16.2 17.61L8.8 32.4ZM47.19 44.38H41.58L44.39 50H50.01L47.2 44.38H47.19ZM41.58 44.38L36.99 35.2L31.87 38.61V44.36L41.58 44.37V44.38ZM33.8 17.61L29.59 20.42L36.99 35.21L41.2 32.4L33.8 17.61ZM25 11.23L27.81 5.62L25 0L22.19 5.62L25 11.23ZM31.87 44.37H18.13V49.99H31.87V44.37ZM25 11.23L20.41 20.41L25 23.47L29.59 20.41L25 11.23Z"
                  />
                </svg>
              </div>
              <div class="motivo-text tiny">o</div>
            </div>
            <div class="grupo-item">
              <div class="motivo-box">
                <svg
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.38 50L47.19 44.38L50 50H44.38ZM25 37.63C23.31 37.63 21.65 37.47 20.03 37.18C18.8 41.18 18.13 45.5 18.13 50H31.87C31.87 45.5 31.2 41.18 29.97 37.18C28.35 37.48 26.69 37.63 25 37.63ZM16.2 17.6L8.79 32.41C12.18 34.78 15.98 36.43 20.03 37.18C21.21 33.35 22.9 29.81 25 26.67C22.57 23.05 19.59 19.97 16.2 17.6ZM25 0L22.19 5.62H27.81L25 0ZM5.62 50L2.81 44.38L0 50H5.62ZM33.8 17.6C30.42 19.96 27.43 23.04 25 26.67C27.1 29.81 28.79 33.35 29.97 37.18C34.02 36.43 37.81 34.78 41.21 32.41L33.8 17.6Z"
                  />
                </svg>
              </div>
              <div class="motivo-text tiny">p</div>
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
    default: () => ["Opción 1", "Opción 2", "Opción 3", "Opción 4", "Opción 5"],
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

<style lang="scss" scoped>
/* Contenedor principal */
.desplegable-container {
  @apply relative text-left col-span-12;
}

.option-content {
  @apply col-span-12 mt-12;
}

.grupo-container {
  .grupo-items-container {
    @apply grid p-4 gap-4 rounded-xl;
    @apply border-2 border-azuloscuro-50;

    /* Responsive */
    @apply grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10;
    .grupo-item {
      @apply flex flex-col justify-center gap-2 p-4 aspect-square rounded-md;
      @apply border-2 border-azuloscuro-50;
      .motivo-box {
        @apply flex justify-center;
        svg {
          @apply fill-azuloscuro-50 w-1/2;
        }
      }

      .motivo-text {
        @apply text-center;
      }
    }
  }
}
</style>
