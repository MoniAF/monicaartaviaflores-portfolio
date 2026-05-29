<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const projects = {

    poppycatsitter: {
        title: 'Poppy Cat Sitter',
        plink: 'https://github.com/MoniAF/Poppy-Cat-Sitter'
    },

    bloomrecipes: {
        title: 'Bloom Recipes',
        plink: 'https://github.com/MoniAF/BloomRecipesWebsite'
    },

    bret: {
        title: 'Bre - T',
        plink: 'https://github.com/MoniAF/Bre-T-Database'
    },

    hotelbeach: {
        title: 'Hotel Beach',
        plink: 'https://github.com/MoniAF/HotelBeach.NET'
    }

}

const currentProject = projects[route.params.name]

</script>

<template>
    <Navbar />

    <div class="container-hm d-flex flex-column justify-content-between">
        <div class="img-container jc-e">
            <img src="../assets/img/branch1right.svg" class="branchwidth" alt="branchright">
        </div>
        <div class="img-container jc-s">
            <img src="../assets/img/branch1left.svg" class="branchwidth" alt="branchleft">
        </div>
        <div class="position-absolute z-1 top-0 txt-container d-flex justify-content-center align-items-center">
            <Div class="text-center">
                <h1 class="title-name m-0">{{ currentProject.title }}</h1>
                <p class="subtitle-position m-0">More information about this project <span>coming soon.</span><br>In the meantime, visit my <a class="git-link" :href="currentProject.plink">GitHub Repository <i class="bi bi-box-arrow-up-right"></i></a> for details.</p>
            </Div>
        </div>
        <img class="position-absolute z-2 top-0 m-fw1" src="../assets/img/flowers1.svg" alt="flowers1">
        <section class="position-absolute z-3 bottom-0 w-100">
          <Footer />
        </section>
    </div>

</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;

.container-hm {
  min-height: 100vh;
  position: relative;

  .img-container {
    width: 100%;
    height: auto;
    display: flex;

    &.jc-e {
      justify-content: end;
      padding-top: 15px;
    }

    &.jc-s {
      @include mobile {
        padding-bottom: 6rem;
      }
    }
  }

  .branchwidth {
    width: 38%;

    @include mobile {
      width: 75%;
    }
  }

  .txt-container {
    width: 100%;
    height: 100%;
    padding: 0 1.5rem;

    .git-link {
      text-decoration: none;
      color: $color-rosa;

      i {
        font-size: 1.125rem;
        -webkit-text-stroke: 0.5px;

        @include mobile {
            font-size: 0.75rem;
            -webkit-text-stroke: 0.3px;
        }
      }
    }
  }

  .title-name {
    font-family: "Fleur De Leah", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 6.25rem;
    color: $color-rosa;
    line-height: 1.4;

    @include desktop {
      font-size: 7.5rem;
      line-height: 1.2;
    }
    @include tablet {
      font-size: 5rem;
    }
    @include mobile {
      font-size: 3.75rem;
      line-height: 1.2;
    }
  }

  .subtitle-position {
    font-weight: 400;
    font-style: normal;
    font-size: 1.25rem;
    color: $color-blanco;

    @include mobile {
      font-size: 0.8rem;
      margin-top: 1rem !important;
    }
    @include desktop {
      font-size: 2rem;
    }
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

    @include mobile {
      width: 15%;
      margin-top: 12rem;
      margin-left: 3rem;
    }
  }
}
</style>