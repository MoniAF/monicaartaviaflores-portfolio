<template>
    <div class="ft-container d-flex justify-content-center align-items-center">
        <a class="content-ft" href="">© 2026 Monica Artavia Flores. All rights reserved.</a>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;

.ft-container {
  width: 100%;
  height: 16.7vh;

  @include celular {
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
  }

  @include desktop {
    height: 9.8vh;
  }

  .content-ft {
    font-size: 0.875rem;
    font-weight: 600;
    text-decoration: none;
    color: $color-blanco;
    transition: color 0.2s ease;

    &:hover {
      color: $color-rosa;
    }
  }
}
</style>