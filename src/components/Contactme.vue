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

.container-cm {
  min-height: 100vh;
  width: 100%;
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

.cm-image{
    width: 57%;
    height: 100vh;
}

.cm-image img{
    width: 100%;
}

.cm-box{
    width: 43%;
}

.fondo-cmbox{
    width: 57%;
    height: auto;
}

.title-cm{
    font-size: 17px;
    font-weight: 600;
    color: #F7C8D8;
}

.content-cm{
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: #FFF9F6;
}

.content-cm:hover{
    color: #2B2238;
}

@media (min-width: 1800px){

    h3{
        font-size: 55px;
        padding-top: 4rem;
    }

    .title-cm{
        font-size: 23px;
    }

    .content-cm{
        font-size: 18px;
    }
    
}

</style>