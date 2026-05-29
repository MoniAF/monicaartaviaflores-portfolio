<template>
    <div class="container-es d-flex justify-content-between">
        <div class="box-clm d-flex align-items-center user-select-none" ><img src="../assets/img/flowers4.svg" draggable="false" alt=""></div>

        <div class="box-clm">
            <div class="box-txtes">
                <h6>Languages</h6>
                <img class="user-select-none" draggable="false" src="../assets/img/separator.svg" alt="">
                <p class="txt-lg pt-4 mt-3">English<br><span class="txt-lv">Intermediate - B2</span></p>
                <p class="txt-lg pt-4">Spanish<br><span class="txt-lv">Native</span></p>
            </div>
        </div>

        <div class="box-clm">
            <div class="box-txtes">
                <h6>Certifications</h6>
                <img class="user-select-none" draggable="false" src="../assets/img/separator.svg" alt="">
                <p class="txt-lg mt-3 pt-4"> <a href="https://www.credly.com/badges/93b0f923-caab-4509-a1b2-562abdee5c88/public_url">Artificial Intelligence<br>Fundamentals <i class="bi bi-box-arrow-up-right"></i></a><br><span class="txt-lv">IBM SkillsBuild | 2025</span></p> 
            </div>
        </div>

        <div class="box-clm d-flex align-items-center user-select-none" ><img draggable="false" src="../assets/img/flowers5.svg" alt=""></div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;

.container-es {
  min-height: 100vh;
  margin-left: 4.5rem;
  margin-right: 4.5rem;

  @include tablet {
    margin-left: 2rem;
    margin-right: 2rem;
    align-items: center;
  }
  @include mobile {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    flex-direction: column !important;
    justify-content: center !important;
    gap: 4rem;
  }

  .box-clm {
    width: 20%;
    height: 100vh;

    @include tablet {
      width: 23%;
    }
    @include mobile {
      width: 100%;
      height: auto;
    }

    img {
      width: 100%;
      height: auto;
    }

    &.align-items-center {
      @include mobile {
        display: none !important;
      }
    }
  }

  .box-txtes {
    margin-top: 9.5rem;
    text-align: center;

    @include tablet {
      margin-top: 12rem;
    }
    @include mobile {
      margin-top: 0;
    }
    @include desktop {
      margin-top: 15rem;
    }

    img {
      width: 100%;
    }
  }

  h6 {
    font-family: $fuente-elegante;
    font-weight: 400;
    font-style: normal;
    color: $color-rosa;
    font-size: 4rem;
    margin-bottom: 0.5rem;

    @include mobile {
      font-size: 3.2rem;
    }
    @include desktop {
      font-size: 5.5rem;
      padding-bottom: 1rem;
    }
  }

  .txt-lg {
    font-size: 1.25rem;
    font-weight: 600;
    color: $color-crema;
    line-height: 23px;

    svg {
      color: $color-rosa;
      width: 18px;
      height: 18px;
      vertical-align: middle;
      margin-left: 4px;

      @include desktop {
        width: 23px;
        height: 23px;
      }
    }

    i{
      font-size: 1.3rem;
      -webkit-text-stroke: 1px;
    }

    @include desktop {
      font-size: 1.8rem;
      line-height: 32px;
    }

    &:hover {
      color: $color-rosa;
    }
  }

  .txt-lv {
    font-size: 0.938rem;
    font-weight: 500;
    color: $color-blanco;

    @include desktop {
      font-size: 1.2rem;
    }
  }
}
</style>