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
.container-ed {
    min-height: 100vh;
    display: block;
}

h3{
    margin-left: 4.5rem;
    font-weight: 500;
    font-style: normal;
    font-size: 42px;
    color: #F7C8D8;
    text-shadow: 5px 4px 0 #2B2238;
    letter-spacing: 0;
    padding-top: 3rem;
}

.box-content-ed{
    width: 100%;
    height: 30rem;
}

.branch-ed{
    width: 22%;
    display: flex;
    align-items: end;
}

.branch-ed img{
    width: 100%;
}

.card-space-ed{
    width: 56%;
    height: auto;
    margin-bottom: 3.5rem;
}

.bxcard-ed{
    width: 36%;
    position: relative;
}

.card-circle{
    width: 80%;
    height: auto;
    position: absolute;
    margin-left: 10%;
    margin-right: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.card-circle svg{
    width: 100%;
    height: 100%;
    color: #2B2238;
}

.card-circle img{
    width: 80%;
    position: absolute;
}

.card-ed{
    width: 100%;
    height: 100%;
    margin-top: 40%;
    background-color: #F7C8D8;
    border-radius: 20%;
    padding-top: 45%;
}

h4{
    font-weight: 600;
    color: #2B2238;
    text-align: center;
    line-height: 23px;
    letter-spacing: 0;
    font-size: 17px;
}

h5{
    font-weight: 400;
    color: #2B2238;
    text-align: center;
    line-height: 23px;
    letter-spacing: 0;
    font-size: 17px;
}

h6{
    font-weight: 500;
    color: #7A5C7B;
    text-align: center;
    line-height: 23px;
    letter-spacing: 0;
    font-size: 17px;
}

@media (min-width: 1800px){
    h3{
        font-size: 55px;
        padding-top: 4rem;
    }

    .box-content-ed{
        height: 45rem;
    }

    .card-space-ed{
        margin-bottom: 7rem;
    }

    h4{
        font-size: 25px;
        line-height: 30px;
    }

    h5{
        font-size: 25px;
        line-height: 30px;
    }

    h6{
        font-size: 25px;
        line-height: 30px;
    }
}
</style>