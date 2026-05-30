<script setup>
import Circle from '../assets/img/circle.svg';
</script>

<template>
    <div id="education" class="container-ed d-flex flex-column justify-content-between">
        <h3>EDUCATION</h3>
        <div class="d-flex justify-content-between box-content-ed">
            <div class="branch-ed user-select-none"><img draggable="false" src="../assets/img/branch2left.svg" alt=""></div>

            <section class="d-flex gap-5 card-space-ed justify-content-center">
                <div class="bxcard-ed d-flex flex-column">
                    <div class="card-circle user-select-none">
                        <svg width="227" height="227" viewBox="0 0 227 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="113.5" cy="113.5" r="113.5" fill="currentColor"/>
                        </svg>
                        <img draggable="false" src="../assets/img/ucr-icon.png" alt="">
                    </div>
                    <div class="card-ed">
                        <h4>BACHELLOR'S DEGREE IN<br>COMPUTER SCIENCE AND<br>MULTIMEDIA TECHNOLOGY</h4>
                        <h5>UNIVERSITY OF COSTA RICA<br>2021 - 2025</h5>
                        <h6>Weighted Average:<br>9.53 / 10</h6>
                    </div>
                </div>

                <div class="bxcard-ed d-flex flex-column">
                    <div class="card-circle user-select-none">
                        <svg width="227" height="227" viewBox="0 0 227 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="113.5" cy="113.5" r="113.5" fill="currentColor"/>
                        </svg>
                        <img draggable="false" src="../assets/img/intensa-icon.png" alt="">
                    </div>
                    <div class="card-ed">
                        <h4>INTENSIVE ENGLISH<br>PROGRAM<br>(15 HOURS PER WEEK)</h4>
                        <h5>INTENSA LANGUAGE INSTITUTE<br>2025 - PRESENT</h5>
                        <h6>Currently in the<br>Intermediate level</h6>
                    </div>
                </div>
            </section>

            <div class="branch-ed user-select-none"><img draggable="false" src="../assets/img/branch2right.svg" alt=""></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;

.container-ed {
  min-height: 100vh;
  display: block;

  @include tablet {
    min-height: auto;
  }

  @include mobile {
    min-height: auto;
  }
}

h3 {
  color: $color-rosa;
}

.box-content-ed {
  width: 100%;
  height: 30rem;

  @include tablet {
    height: auto;
    margin-bottom: 2rem;
  }

  @include mobile {
    height: auto;
    margin-bottom: 4rem;
  }

  @include desktop {
    height: 45rem;
  }

  .branch-ed {
    width: 22%;
    display: flex;
    align-items: flex-end;

    img {
      width: 100%;
    }

    @include tablet {
      width: 22%;
    }

    @include mobile {
      display: none;
    }

  }

  .card-space-ed {
    width: 56%;
    height: auto;
    margin-bottom: 3.5rem;

    @include desktop {
      margin-bottom: 8rem;
    }

    @include tablet {
      width: 100%;
      align-items: center;
      gap: 2rem !important;
      margin-bottom: 3rem;
    }

    @include mobile {
      flex-direction: column;
      width: 100%; 
      margin-bottom: 0;
      gap: 2rem !important;
    }
  }

  .bxcard-ed {
    width: 36%;
    position: relative;

    @include tablet {
      width: 45%;
    }

    @include mobile {
      width: 100%;
      max-width: 260px;
    }

    .card-circle {
      width: 80%;
      height: auto;
      position: absolute;
      margin-left: 10%;
      margin-right: 10%;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 100%;
        height: 100%;
        color: $color-oscuro;
      }

      img {
        width: 80%;
        position: absolute;
      }
    }

    .card-ed {
      width: 100%;
      height: 100%;
      margin-top: 40%;
      background-color: $color-rosa;
      border-radius: 20%;
      padding: 45% 1rem 1.5rem 1rem;
    }
  }
}

h4, h5, h6 {
  text-align: center;
  line-height: 23px;
  letter-spacing: 0;
  font-size: 17px;

   @include desktop {
    font-size: 23px;
    line-height: 28px;
  }

  @include tablet {
    font-size: 15px;
    line-height: 18px;
  }
  
  @include mobile {
    font-size: 14px;
    line-height: 18px;
  }
}

h4 {
  font-weight: 600;
  color: $color-oscuro;
}

h5 {
  font-weight: 400;
  color: $color-oscuro;
}

h6 {
  font-weight: 500;
  color: $color-morado;
}
</style>