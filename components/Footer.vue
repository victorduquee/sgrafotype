<template>
  <footer class="footer">
    <div class="footer-info">
      <h1>SGrafoType</h1>
      <div class="footer-info-copy">
        <p class="small">&copy; 2023 Víctor Duque</p>

      </div>
    </div>
    <div class="footer-links">
      <a class="small" href="https://www.instagram.com/victorduque.ai/">Instagram</a>
      <a class="small" href="victorduque.com">My portfolio</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @apply flex bg-azuloscuro-50 w-full ;

  /* Responsive */

  @apply px-6 sm:px-6 md:px-12 lg:px-12 xl:px-16 2xl:px-16;
  @apply py-8 sm:py-8 md:py-14 lg:py-14 xl:py-20 2xl:py-20;
  @apply flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row;
  @apply justify-center sm:justify-center md:justify-between lg:justify-between xl:justify-between 2xl:justify-between;
  @apply gap-y-20 sm:gap-y-20 md:gap-y-0 lg:gap-y-0 xl:gap-y-0 2xl:gap-y-0;
  .footer-info {
    @apply flex flex-col;
    @apply text-center sm:text-center md:text-left lg:text-left xl:text-left 2xl:text-left;

    h1 {
      /* Responsive */
      @apply mb-4 sm:mb-4 md:mb-10 lg:mb-10 xl:mb-10 2xl:mb-10 text-white;
    }
    .footer-info-copy {
      @apply flex flex-col;
      p {
        @apply text-white;
        margin-bottom: 0 !important;
      }
    }
  }
  .footer-links {
    @apply flex flex-col;

    /* Responsive */
    @apply text-center sm:text-center md:text-right lg:text-right xl:text-right 2xl:text-right;
    @apply flex-row sm:flex-row md:flex-col lg:flex-col xl:flex-col 2xl:flex-col;
    @apply justify-center sm:justify-center md:justify-start lg:justify-start xl:justify-start 2xl:justify-start;
    @apply gap-6 sm:gap-6 md:gap-0 lg:gap-0 xl:gap-0 2xl:gap-0;

    a {
      @apply text-white hover:text-naranja-50;
      margin-bottom: 0 !important;
    }
  }
}
</style>
