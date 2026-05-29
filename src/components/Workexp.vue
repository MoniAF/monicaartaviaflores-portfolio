<script setup>
import FlowerIcon from '@/assets/svg/FlowerIcon.vue';
</script>

<template>
    <div id="experience" class="container-we">
        <div class="d-flex justify-content-between we-decoration z-n1 align-items-end">
            <img class="circle-we user-select-none" draggable="false" src="../assets/img/circle2.svg" alt="">
            <img class="line-we user-select-none" draggable="false" src="../assets/img/line.svg" alt="">
        </div>

        <h3>WORK EXPERIENCE</h3>

        <div class="box-wkcards">
            <div class="d-flex justify-content-center">
                <div class="position-absolute d-flex gap-4 align-items-end">
                    <img class="star-one user-select-none" draggable="false" src="../assets/img/star1.svg" alt="">
                    <img class="star-two user-select-none" draggable="false" src="../assets/img/star2.svg" alt="">
                </div>
            </div>

            <div class="d-flex justify-content-between">
                <div class="wk-card">

                    <p class="mb-0 wecard-title">CUSTOMER SERVICE</p>

                    <P class="mb-0 wecard-subtitle">SG BOX CR | January 2026 - March 2026</P>
                    
                    <p class="mb-0 wecard-text"><FlowerIcon class="fw-we" /> Handling and resolving customer inquiries in high-demand environments<br><FlowerIcon class="fw-we" /> Problem identification and resolution, with follow-up on each case<br><FlowerIcon class="fw-we" /> Data management and validation using Excel<br><FlowerIcon class="fw-we" /> Handling confidential information, ensuring accuracy and privacy</p>

                </div>
                



                <div class="wk-card">

                    <p class="mb-0 wecard-title">Programming and Web Development Intern</p>

                    <P class="mb-0 wecard-subtitle">Cubo Latam | August 2024 - November 2024</P>
                    
                    <p class="mb-0 wecard-text"><FlowerIcon class="fw-we" /> Development and implementation of web interfaces using tools such as Framer<br><FlowerIcon class="fw-we" /> Design and structuring of websites with a focus on user experience (UX/UI)<br><FlowerIcon class="fw-we" /> Implementation of functionalities through code, including React components<br><FlowerIcon class="fw-we" /> Development of forms with validation and verification systems (CAPTCHA)</p>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;

.container-we {
  min-height: 100vh;
  width: 100%;
  position: relative; 
}

h3 {
  margin-left: 4.5rem;
  font-weight: 500;
  font-style: normal;
  font-size: 42px;
  color: $color-rosa;
  text-shadow: 5px 4px 0 $color-oscuro;
  letter-spacing: 0;
  padding-top: 3rem;

  @include tablet {
    font-size: 32px;
    margin-left: 2rem;
    padding-top: 2rem;
  }
  @include mobile {
    font-size: 28px;
    margin-left: 1.5rem;
    padding-top: 1.5rem;
  }
  @include desktop {
    font-size: 55px;
    padding-top: 4rem;
  }
}

.box-wkcards {
  width: auto;
  height: auto;
  margin-left: 4.5rem;
  margin-right: 4.5rem;

  @include tablet {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  @include mobile {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  @include desktop {
    padding-top: 1rem;
  }

  & > .d-flex.justify-content-between {
    @include tablet {
      flex-direction: column !important;
      align-items: center;
      gap: 2rem;
    }
  }

  .wk-card {
    width: 48.7%;
    height: auto;
    margin-top: 4.8rem;
    background-color: $color-oscuro;
    padding: 2.2rem 1.2rem;
    border-radius: 45px;

    @include tablet {
      width: 100%;
      max-width: 550px;
      margin-top: 2rem;
    }
    @include mobile {
      border-radius: 30px;
      padding: 1.8rem 1rem;
    }
    @include desktop {
      margin-top: 6.8rem;
      padding: 4.2rem 2.2rem;
    }
  }

  .wecard-title {
    font-size: 1.42rem;
    font-weight: 700;
    color: $color-blanco;
    text-transform: uppercase;

    @include mobile {
      font-size: 1.25rem;
    }
    @include desktop {
      font-size: 2rem;
    }
  }

  .wecard-subtitle {
    font-size: 1.25rem;
    font-weight: 500;
    color: $color-rosa;
    padding-bottom: 0.5rem;

    @include mobile {
      font-size: 1rem;
    }
    @include desktop {
      font-size: 1.6rem;
      padding-bottom: 1rem;
    }
  }

  .wecard-text {
    font-size: 0.813rem;
    font-weight: 400;
    line-height: 20px;
    color: $color-blanco; 

    @include desktop {
      font-size: 1.15rem;
      line-height: 28px;
    }
  }

  .fw-we {
    color: $color-rosa;
    width: 14px;
    height: 14px;
    transform: rotate(45deg);
    display: inline-block;
    margin-right: 4px;

    @include desktop {
      width: 18px;
      height: 18px;
    }
  }

  .star-one {
    width: 5rem;
    height: auto;

    @include mobile {
      width: 3.5rem;
    }
    @include desktop {
      width: 6.6rem;
    }
  }

  .star-two {
    width: 4.6rem;
    height: auto;

    @include mobile {
      width: 3.1rem;
    }
    @include desktop {
      width: 5.4rem;
    }
  }
}

.we-decoration {
  position: absolute;
  width: 100%;
  height: 100%;

  @include tablet {
    display: none;
  }

  .circle-we {
    width: 11%;
    height: auto;
    padding-bottom: 0.7rem;
  }

  .line-we {
    width: 20%;
    height: auto;
  }
}
</style>