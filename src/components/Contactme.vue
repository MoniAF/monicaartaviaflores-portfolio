<template>

    <div id="contact" class="container-cm">
        <div class="d-flex justify-content-between">

            <div class="cm-box">
                <h3>CONTACT ME</h3>

                <div class="d-flex justify-content-center align-items-center">
                    <img class="fondo-cmbox user-select-none" draggable="false" src="../assets/img/branch3left.svg" alt="">

                    <div class="position-absolute d-flex flex-column justify-content-center">
                        <section class="pb-3">
                            <p class="title-cm mb-0"><i class="bi bi-envelope-at-fill"></i> E-MAIL:</p>
                            <a class="content-cm" href="mailto:artaviafloresmonica@gmail.com">artaviafloresmonica@gmail.com</a>
                        </section>

                        <section class="pb-3">
                            <p class="title-cm mb-0"><i class="bi bi-telephone-forward-fill"></i> PHONE NUMBER:</p>
                            <a class="content-cm" href="tel:+50685190107">(+506) 8519 0107</a>
                        </section>
                            
                        <section>
                            <p class="title-cm mb-0"><i class="bi bi-linkedin"></i> LINKEDIN:</p>
                            <a class="content-cm" href="https://www.linkedin.com/in/monica-artavia-flores/">Mónica Artavia Flores</a>
                        </section>
                    </div>
                </div>
            </div>

            <div class="cm-image d-flex align-items-center">
                <img class="user-select-none" draggable="false" src="../assets/img/branch3right.svg" alt="">
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;

.container-cm {
  min-height: 100vh;
  width: 100%;
}

h3 {
  margin-left: 4.5rem;
  font-weight: 500;
  font-style: normal;
  font-size: 2.625rem;
  color: $color-rosa;
  text-shadow: 5px 4px 0 $color-oscuro;
  letter-spacing: 0;
  padding-top: 3rem;

  @include tablet {
    font-size: 2rem;
    margin-left: 2rem;
  }
  @include mobile {
    font-size: 1.75rem;
    margin-left: 0;
    text-align: center;
  }
  @include desktop {
    font-size: 3.4375rem;
    padding-top: 4rem;
  }
}

.cm-box {
  width: 43%;

  @include tablet {
    width: 100%;
  }
}

.fondo-cmbox {
  width: 57%;
  height: auto;

  @include mobile {
    display: none !important;
  }
}

.title-cm {
  font-size: 1.0625rem;
  font-weight: 600;
  color: $color-rosa;

  @include desktop {
    font-size: 1.4375rem;
  }
}

.content-cm {
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  color: $color-blanco;

  &:hover {
    color: $color-oscuro;
  }

  @include desktop {
    font-size: 1.125rem;
  }
}

.cm-image {
  width: 57%;
  height: 100vh;

  img {
    width: 100%;
  }

  @include tablet {
    display: none !important;
  }
}

.container-cm > .d-flex {
  @include tablet {
    flex-direction: column !important;
    align-items: center;
    justify-content: center !important;
    min-height: 100vh;
    padding: 0 1.5rem;
  }
}

.cm-box .d-flex.justify-content-center.align-items-center {
  @include mobile {
    position: relative;
    
    .position-absolute {
      position: relative !important;
      text-align: center;
      width: 100%;
    }
  }
}
</style>