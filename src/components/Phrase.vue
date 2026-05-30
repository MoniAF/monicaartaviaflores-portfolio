<template>
    <div class="container-ph d-flex flex-column justify-content-center align-items-center">
        <p class="txtc-ph">Small<span class="txtn-ph">STEPS,<br>BIG</span>growth.</p>
        <img class="user-select-none" draggable="false" src="../assets/img/flowers3.svg" alt="">
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;

.container-ph {
  min-height: 100vh;
  font-size: 100px;
  line-height: 85px;
  text-align: center;

  @include desktop {
    font-size: 120px;
    line-height: 100px;
  }

  @include tablet {
    min-height: auto;
    font-size: 70px;
    line-height: 60px;
    margin-top: 10rem;
    margin-bottom: 10rem;
  }

  @include mobile {
    min-height: auto;
    font-size: 55px;
    line-height: 45px;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  img {
    width: 43%;
    height: auto;

    @include mobile {
      width: 90%;
      margin-top: 1.5rem;
    }
  }

  .txtc-ph {
    font-family: $fuente-elegante;
    font-weight: 400;
    font-style: normal;
    color: $color-rosa;
  }

  .txtn-ph {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-style: normal;
    padding-left: 2.5rem;
    color: $color-blanco;

    @include mobile {
      padding-left: 1.3rem;
      margin-top: 0.5rem;
    }
  }
}
</style>