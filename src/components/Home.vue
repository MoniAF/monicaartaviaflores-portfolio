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

      @include celular {
        padding-top: 4rem;
      }
    }

    &.jc-s {
      @include celular {
        padding-bottom: 4rem;
      }
    }
  }

  .branchwidth {
    width: 38%;
    
    @include celular {
      width: 75%;
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
    line-height: 1;

    @include tablet { font-size: 70px; }   
    @include celular { font-size: 45px; }  
    @include desktop { font-size: 120px; } 
  }

  .subtitle-position {
    font-weight: 400;
    font-style: normal;
    font-size: 45px;
    color: $color-blanco;

    @include tablet { font-size: 30px; }
    @include celular { font-size: 20px; letter-spacing: 2px; }
    @include desktop { font-size: 55px; }
  }

  .m-fw1 {
    width: 7%;
    margin-top: 7rem;
    margin-left: 8.5rem;

    @include tablet {
      width: 12%;
      margin-top: 4rem;
      margin-left: 3rem;
    }

    @include celular {
      width: 15%;
      margin-top: 15.5rem;
      margin-left: 3rem;
    }
  }
}

</style>