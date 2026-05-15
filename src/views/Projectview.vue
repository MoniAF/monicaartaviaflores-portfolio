<script setup>
import Navbar from '../components/Navbar.vue';
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
        <div class="img-container">
            <img src="../assets/img/branch1left.svg" class="branchwidth" alt="branchleft">
        </div>
        <div class="position-absolute z-1 top-0 txt-container d-flex justify-content-center align-items-center">
            <Div class="text-center">
                <h1 class="title-name m-0">{{ currentProject.title }}</h1>
                <p class="subtitle-position m-0">More information about this project <span>coming soon.</span><br>In the meantime, visit my <a class="git-link" :href="currentProject.plink">GitHub Repository <i class="bi bi-box-arrow-up-right icon-pj"></i></a> for details.</p>
            </Div>
        </div>
        <img class="position-absolute z-2 top-0 m-fw1" src="../assets/img/flowers1.svg" alt="flowers1">
    </div>

</template>

<style lang="scss" scoped>

.git-link{
    text-decoration: none;
    color: #F7C8D8;
}

.git-link i{
     font-size: 18px;
    -webkit-text-stroke: 0.5px;
}

.container-hm {
  min-height: 100vh;
}

.img-container{
    width: 100%;
    height: auto;
    display: flex;
}

.jc-e{
    justify-content: end;
    padding-top: 15px;
}

.branchwidth{
    width: 38%;
}

.txt-container{
    width: 100%;
    height: 100%;
}

.title-name{
    font-family: "Fleur De Leah", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 100px;
    color: #F7C8D8;
    line-height: 1.4;
}

.subtitle-position{
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    color: #FFF9F6;
}

.m-fw1{
    width: 7%;
    margin-top: 7rem;
    margin-left: 8.5rem;
}

@media (min-width: 1800px){

    .title-name{
        font-size: 120px;
        line-height: 1;
    }

    .subtitle-position{
        font-size: 55px;
    }
}

</style>