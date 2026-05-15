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

.container-ap {
  min-height: 100vh;
  width: 100%;
}

h3{
    margin-left: 4.5rem;
    font-weight: 500;
    font-style: normal;
    font-size: 42px;
    color: #E8CFAE;
    text-shadow: 5px 4px 0 #2B2238;
    letter-spacing: 0;
    padding-top: 3rem;
}

.apcards-box{
    width: auto;
    height: auto;
    margin-top: 3.8rem;
    padding-left: 4.5rem;
    padding-right: 4.5rem;
}

.ap-card{
    display: block;
    width: 22%;
    height: 100%;
    color: #E8CFAE;
}

.ap-card:hover{
    color: #F7C8D8;
}

.flower-apbox{
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    height: auto;
}

.flower-apbox img{
    height: 95%;
}

.infoap-card{
    width: 100%;
    height: auto;
    background-color: #2B2238;
    margin-top: 1rem;
    padding-top: 0.8rem;
    padding-bottom: 1.2rem;
    border-radius: 80px;
}

.ap-title{
    font-size: 1.125rem;
    font-weight: 600;
    color: #FFF9F6;
}

.ap-subtitle{
    font-size: 0.938rem;
    font-weight: 500;
    color: #F7C8D8;
    padding-bottom: 0.4rem;
}

.ap-button{
    background-color: #E8CFAE;
    font-size: 0.938rem;
    font-weight: 500;
    color: #2B2238;
    text-decoration: none;
    padding-top: 2px;
    padding-bottom: 3px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-radius: 30px;
}

.ap-button:hover{
    background-color: #F7C8D8;
    color: #2B2238;
}

@media (min-width: 1800px){

    h3{
        font-size: 55px;
        padding-top: 4rem;
    }

    .apcards-box{
        margin-top: 6rem;
    }

    .infoap-card{
        margin-top: 1rem;
        padding-top: 1.3rem;
        padding-bottom: 1.9rem;
    }

    .ap-title{
        font-size: 1.688rem;
    }

    .ap-subtitle{
        font-size: 1.188rem;
        padding-bottom: 0.7rem;
    }

    .ap-button{
        font-size: 1.188rem;
    }

}

</style>