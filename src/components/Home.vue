<template>
    <div id="home" class="container-hm d-flex flex-column justify-content-between user-select-none">
        <div class="img-container jc-e">
            <img src="../assets/img/branch1right.svg" class="branchwidth" alt="branchright">
        </div>
        <div class="img-container jc-s">
            <img src="../assets/img/branch1left.svg" class="branchwidth" alt="branchleft">
        </div>
        <div class="position-absolute z-1 top-0 txt-container d-flex justify-content-center align-items-center">
            <Div class="text-center">
                <h1 class="title-name m-0">Mónica Artavia Flores</h1>
                <h2 class="subtitle-position m-0">FULL STACK DEVELOPER</h2>
            </Div>
        </div>
        <img  draggable="false" class="position-absolute z-2 top-0 m-fw1" src="../assets/img/flowers1.svg" alt="flowers1">
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;

.container-hm {
  min-height: 100vh;

  .img-container {
    width: 100%;
    height: auto;
    display: flex;

    &.jc-e {
      justify-content: flex-end;
      padding-top: 15px;

      @include tablet {
        padding-top: 3rem;
      }

      @include tablet-landscape {
        padding-top: 2rem;
      }

      @include mobile {
        padding-top: 2rem;
      }

      @include mobile-landscape {
        padding-top: 1rem;
      }

      @include desktop {
        padding-top: 2rem;
      }
    }

    &.jc-s {
      @include tablet {
        padding-bottom: 5rem; 
      }

      @include tablet-landscape {
        padding-bottom: 4rem;
      }

      @include mobile {
        padding-bottom: 6rem;
      }

      @include mobile-landscape {
        padding-bottom: 3rem;
      }

      @include desktop {
        padding-bottom: 2rem;
      }
    }
  }

  .branchwidth {
    width: 38%;

    @include tablet {
      width: 55%;
    }

    @include tablet-landscape {
      width: 40%;
    }
    
    @include mobile {
      width: 75%;
    }

    @include mobile-landscape {
      width: 25%;
    }

    @include desktop {
      width: 35%;
    }
  }

  .txt-container {
    width: 100%;
    height: 100%;
  }

  .title-name {
    font-family: $fuente-elegante;
    font-weight: 400;
    font-style: normal;
    font-size: 100px;
    color: $color-rosa;          
    line-height: 1.2;

    @include tablet { 
      font-size: 5rem; 
    }

    @include tablet-landscape {
      font-size: 6rem;
    }

    @include mobile { 
      font-size: 45px; 
    }

    @include mobile-landscape { 
      font-size: 55px; 
    }

    @include desktop { 
      font-size: 8rem; 
    } 
  }

  .subtitle-position {
    font-weight: 400;
    font-style: normal;
    font-size: 45px;
    color: $color-blanco;

    @include tablet { 
      font-size: 2.2rem; 
    }

    @include tablet-landscape {
      font-size: 2.8rem;
    }

    @include mobile { 
      font-size: 20px; 
      letter-spacing: 2px; 
    }

    @include mobile-landscape { 
      font-size: 25px; 
    }

    @include desktop { 
      font-size: 3.5rem; 
    }
  }

  .m-fw1 {
    width: 7%;
    margin-top: 7rem;
    margin-left: 8.5rem;

    @include tablet {
      width: 15%;
      margin-top: 10rem;
      margin-left: 5rem;
    }

    @include tablet-landscape {
      width: 8%;
      margin-top: 4rem;
      margin-left: 6rem;
    }

    @include mobile {
      width: 15%;
      margin-top: 12rem;
      margin-left: 3rem;
    }

    @include mobile-landscape {
      width: 6%;
      margin-top: 3rem;
      margin-left: 5.5rem;
    }

    @include desktop {
      width: 7%;
      margin-top: 7rem;
      margin-left: 8.5rem;
    }
  }
}

</style>