<template>
    <div class="container-ph d-flex flex-column justify-content-center align-items-center">
        <p class="txtc-ph">Small<span class="txtn-ph">STEPS,<br>BIG</span>growth.</p>
        <img class="user-select-none" draggable="false" src="../assets/img/flowers3.svg" alt="">
    </div>
</template>

<style lang="scss" scoped>

.space{
    background-color: #1c00bb;
    width: 100%;
    height: 6.5rem;
}

.container-ph {
  min-height: 100vh;
  font-size: 100px;
  line-height: 85px;
  text-align: center;
}

.container-ph img{
    width: 43%;
    height: auto;
}

.txtc-ph{
    font-family: "Fleur De Leah", cursive;
    font-weight: 400;
    font-style: normal;
    color: #F7C8D8;
}

.txtn-ph{
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-style: normal;
    padding-left: 2.5rem;
    color: #FFF9F6;
}

@media (min-width: 1800px){

    .container-ph {
        font-size: 120px;
        line-height: 100px;
        text-align: center;
    }

}

</style>