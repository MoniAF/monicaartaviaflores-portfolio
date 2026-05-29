<script setup>
import FlowerPJ from '@/assets/svg/FlowerPJ.vue';
</script>

<template>

    <div id="projects" class="container-ap">
        
        <h3>ACADEMIC PROJECTS</h3>

        <div class="apcards-box d-flex justify-content-between">
            <div class="ap-card">
                <section class="flower-apbox">
                    <FlowerPJ >

                        <img draggable="false" src="../assets/img/poppycatsitter.png" alt="">

                    </FlowerPJ>
                </section>
                <div class="infoap-card text-center">
                    <p class="mb-0 ap-title">POPPY CAT SITTER</p>
                    <p class="mb-0 ap-subtitle">Java Developer</p>
                    <RouterLink class="ap-button" to="/project/poppycatsitter">See more</RouterLink>
                </div>
            </div>

            <div class="ap-card">
                <section class="flower-apbox">
                    <FlowerPJ >

                        <img draggable="false" src="../assets/img/bloomrecipes.svg" alt="">

                    </FlowerPJ>
                </section>
                <div class="infoap-card text-center">
                    <p class="mb-0 ap-title">BLOOM RECIPES</p>
                    <p class="mb-0 ap-subtitle">Full Stack Developer</p>
                    <RouterLink class="ap-button" to="/project/bloomrecipes">See more</RouterLink>
                </div>
            </div>

            <div class="ap-card">
                <section class="flower-apbox">
                    <FlowerPJ >

                        <img draggable="false" src="../assets/img/bret.svg" alt="">

                    </FlowerPJ>
                </section>
                <div class="infoap-card text-center">
                    <p class="mb-0 ap-title">BRE-T</p>
                    <p class="mb-0 ap-subtitle">Oracle DBA</p>
                    <RouterLink class="ap-button" to="/project/bret">See more</RouterLink>
                </div>
            </div>
            
            <div class="ap-card">
                <section class="flower-apbox">
                    <FlowerPJ >

                        <img draggable="false" src="../assets/img/hotelbeach.svg" alt="">

                    </FlowerPJ>
                </section>
                <div class="infoap-card text-center">
                    <p class="mb-0 ap-title">HOTEL BEACH</p>
                    <p class="mb-0 ap-subtitle">.NET Developer</p>
                    <RouterLink class="ap-button" to="/project/hotelbeach">See more</RouterLink>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;

.container-ap {
  min-height: 100vh;
  width: 100%;
}

h3 {
  margin-left: 4.5rem;
  font-weight: 500;
  font-style: normal;
  font-size: 2.625rem;
  color: $color-crema;
  text-shadow: 5px 4px 0 $color-oscuro;
  letter-spacing: 0;
  padding-top: 3rem;

  @include tablet {
    font-size: 2rem;
    margin-left: 2rem;
    padding-top: 2rem;
  }
  @include mobile {
    font-size: 1.75rem;
    margin-left: 1.5rem;
    padding-top: 1.5rem;
  }
  @include desktop {
    font-size: 3.4375rem;
    padding-top: 4rem;
  }
}

.apcards-box {
  width: auto;
  height: auto;
  margin-top: 3.8rem;
  padding-left: 4.5rem;
  padding-right: 4.5rem;

  @include tablet {
    flex-wrap: wrap;
    justify-content: center !important;
    gap: 3rem 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @include mobile {
    flex-direction: column !important;
    align-items: center;
    gap: 4rem;
    margin-top: 2rem;
  }
  @include desktop {
    margin-top: 6rem;
  }

  .ap-card {
    display: block;
    width: 22%;
    height: 100%;
    color: $color-crema;
    transition: color 0.2s ease;

    &:hover {
      color: $color-rosa;
    }

    @include tablet {
      width: 45%;
    }
    @include mobile {
      width: 100%;
      max-width: 280px;
    }
  }

  .flower-apbox {
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    height: auto;

    img {
      height: 95%;
    }
  }

  .infoap-card {
    width: 100%;
    height: auto;
    background-color: $color-oscuro;
    margin-top: 1rem;
    padding-top: 0.8rem;
    padding-bottom: 1.2rem;
    border-radius: 80px;

    @include desktop {
      margin-top: 1rem;
      padding-top: 1.3rem;
      padding-bottom: 1.9rem;
    }
  }

  .ap-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: $color-blanco;

    @include desktop {
      font-size: 1.688rem;
    }
  }

  .ap-subtitle {
    font-size: 0.938rem;
    font-weight: 500;
    color: $color-rosa;
    padding-bottom: 0.4rem;

    @include desktop {
      font-size: 1.188rem;
      padding-bottom: 0.7rem;
    }
  }

  .ap-button {
    background-color: $color-crema;
    font-size: 0.938rem;
    font-weight: 500;
    color: $color-oscuro;
    text-decoration: none;
    padding-top: 2px;
    padding-bottom: 3px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-radius: 30px;
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
      background-color: $color-rosa;
      color: $color-oscuro;
    }

    @include desktop {
      font-size: 1.188rem;
    }
  }
}
</style>