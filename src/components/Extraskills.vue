<template>
    <div class="container-es d-flex justify-content-between">
        <div class="box-clm d-flex align-items-center user-select-none" ><img src="../assets/img/flowers4.svg" draggable="false" alt=""></div>

        <div class="box-clm">
            <div class="box-txtes">
                <h6>Languages</h6>
                <img class="user-select-none" draggable="false" src="../assets/img/separator.svg" alt="">
                <p class="txt-lg pt-4 mt-3">English<br><span class="txt-lv">Intermediate - B2</span></p>
                <p class="txt-lg pt-4">Spanish<br><span class="txt-lv">Native</span></p>
            </div>
        </div>

        <div class="box-clm">
            <div class="box-txtes">
                <h6>Certifications</h6>
                <img class="user-select-none" draggable="false" src="../assets/img/separator.svg" alt="">
                <p class="txt-lg mt-3 pt-4">Artificial Intelligence<br>Fundamentals <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><br><span class="txt-lv">IBM SkillsBuild | 2025</span></p>
            </div>
        </div>

        <div class="box-clm d-flex align-items-center user-select-none" ><img draggable="false" src="../assets/img/flowers5.svg" alt=""></div>
    </div>
</template>

<style lang="scss" scoped>

.container-es {
  min-height: 100vh;
  margin-left: 4.5rem;
  margin-right: 4.5rem;
}

.box-clm{
    width: 20%;
    height: 100vh;
}

.box-clm img{
    width: 100%;
    height: auto;
}

.box-txtes{
    margin-top: 9.5rem;
    text-align: center;
}

h6{
    font-family: "Fleur De Leah", cursive;
    font-weight: 400;
    font-style: normal;
    color: #F7C8D8;
    font-size: 4rem;
}

.box-txtes img{
    width: 100%;
}

.txt-lg{
    font-size: 1.25rem;
    font-weight: 600;
    color: #E8CFAE;
    line-height: 23px;
}

.txt-lg svg{
    color: #F7C8D8;
    width: 18px;
    height: 18px;
}

.txt-lv{
    font-size: 0.938rem;
    font-weight: 500;
    color: #FFF9F6;
}

@media (min-width: 1800px){
    .box-txtes{
        margin-top: 15rem;
    }

    h6{
        font-size: 5.5rem;
        padding-bottom: 1rem;
    }

    .txt-lg{
        font-size: 1.8rem;
        line-height: 32px;
    }

    .txt-lg svg{
        width: 23px;
        height: 23px;
    }

    .txt-lv{
        font-size: 1.2rem;
    }
    
}

</style>