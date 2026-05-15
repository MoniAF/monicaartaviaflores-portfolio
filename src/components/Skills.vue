<template>
    <div id="skills" class="container-sk">
        <h3>SKILLS</h3>
        
        <div class="boxsk-cards d-flex justify-content-between">

            <div class="card-boxsk">
                <section class="subtitle-box"></section>
                <section class="mt-sk">
                    <div class="tscard-container d-flex flex-column justify-content-between gap-5">
                        <section class="ts-cardbox">
                            <div class="tt-box d-flex justify-content-center">
                                <p class="title-tscard">Programming Languages</p>
                            </div>
                            <div class="ts-card d-flex justify-content-center align-items-center text-center">
                                <p class="mb-0">Java, PHP, JavaScript,<br>C#, Python</p>
                            </div>
                        </section>
                        <section class="ts-cardbox d-flex justify-content-end">
                            <img class="flower-sk user-select-none" draggable="false" src="../assets/img/flowers6.svg" alt="">
                            <div class="tt-box d-flex justify-content-center">
                                <p class="title-tscard">Web Development</p>
                            </div>
                            <div class="ts-card d-flex justify-content-center align-items-center text-center">
                                <p class="mb-0">HTML, CSS, SASS<br>Wordpress (CMS)</p>
                            </div>
                        </section>
                    </div>
                </section>
            </div>

            <div class="card-boxsk">
                <section class="subtitle-box">
                    <p>TECHNICAL SKILLS</p>
                </section>

                <section class="mt-sk">
                    <div class="tscard-container d-flex flex-column justify-content-between gap-5">
                        <section class="ts-cardbox d-flex justify-content-end">
                            <img class="flower-sk user-select-none" draggable="false" src="../assets/img/flowers6.svg" alt="">
                            <div class="tt-box d-flex justify-content-center">
                                <p class="title-tscard">Frameworks | Technologies</p>
                            </div>
                            <div class="ts-card d-flex justify-content-center align-items-center text-center">
                                <p class="mb-0">ASP.NET / .NET, React,<br>Angular, Vue</p>
                            </div>
                        </section>
                        <section class="ts-cardbox">
                            <div class="tt-box d-flex justify-content-center">
                                <p class="title-tscard">Tools</p>
                            </div>
                            <div class="ts-card d-flex justify-content-center align-items-center text-center">
                                <p class="mb-0">GitHub, Microsoft 365,<br>Figma, Adobe Photoshop,<br>Illustrator, After Effects</p>
                            </div>
                        </section>
                    </div>
                </section>
            </div>

            <div class="card-boxsk">
                <section class="subtitle-box"></section>

                <section class="mt-sk">
                    <div class="tscard-container d-flex flex-column justify-content-between gap-5">
                        <section class="ts-cardbox">
                            <div class="tt-box d-flex justify-content-center">
                                <p class="title-tscard">Databases</p>
                            </div>
                            <div class="ts-card d-flex justify-content-center align-items-center text-center">
                                <p class="mb-0">Oracle, SQL Server,<br>MongoDB</p>
                            </div>
                        </section>
                        <section class="ts-cardbox d-flex justify-content-end">
                            <img class="flower-sk user-select-none" draggable="false" src="../assets/img/flowers6.svg" alt="">
                            <div class="tt-box d-flex justify-content-center">
                                <p class="title-tscard">Additional Knowledge</p>
                            </div>
                            <div class="ts-card d-flex justify-content-center align-items-center text-center">
                                <p class="mb-0">Networking, Server<br>Management,<br>Cybersecurity</p>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
            
            <div class="card-boxsk d-flex flex-column justify-content-between">
                <section class="subtitle-box">
                    <p>SOFT SKILLS</p>
                </section>
                <section class="ss-card d-flex justify-content-end">
                    <img class="flower-sk user-select-none" draggable="false" src="../assets/img/flowers7.svg" alt="">
                    <section class="ss-txt d-flex flex-column justify-content-center align-items-center gap-2">
                        <p>Teamwork</p>
                        <p>Effective<br>Communication</p>
                        <p>Attention to Detail</p>
                        <p>Problem Solving</p>
                        <p>Adaptability</p>
                    </section>
                </section>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>

.container-sk {
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

.boxsk-cards{
    width: auto;
    height: auto;
    padding-left: 4.5rem;
    padding-right: 4.5rem;
}

.card-boxsk{
    width: 22%;
}

.subtitle-box{
    width: 100%;
    height: 4rem;
    font-size: 25px;
    font-weight: 500;
    text-align: center;
    color: #FFF9F6;
}

.ss-card{
    width: 100%;
    height: 21.5rem;
    background-color: #7A5C7B;
    border: 4px solid #2B2238;
    color: #FFF9F6;
    border-radius: 20px;
    text-align: center;
}

.ss-txt{
    width: 100%;
    font-size: 16px;
    font-weight: 400;
}

.tscard-container{
    width: 100%;
    height: 21.5rem;
}

.mt-sk{
    margin-top: 0.9rem;
}

.title-tscard{
    width: 80%;
    height: 2rem;
    background-color: #F7C8D8;
    color: #2B2238;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border-radius: 15px;
}

.tt-box{
    width: 100%;
    position: absolute;
    top: -0.9rem;
}

.ts-cardbox{
    width: 100%;
    height: 50%;
    position: relative;
}

.ts-card{
    width: 100%;
    height: 100%;
    background-color: #7A5C7B;
    border: 4px solid #FFF9F6;
    border-radius: 20px;
    color: #FFF9F6;
    font-size: 16px;
    font-weight: 400;
}

.ts-card:hover{
    border-color: #2B2238;
}

.flower-sk{
    width: 4.2rem;
    height: auto;
    display: flex;
    position: absolute;
    margin-top: -1.5rem;
    margin-right: -1.8rem;
    rotate: 20deg;
    z-index: 3;
}

@media (min-width: 1800px){

    h3{
        font-size: 55px;
        padding-top: 4rem;
    }

    .subtitle-box{
        height: 6rem;
        font-size: 30px;
    }

    .ss-card{
        height: 31.5rem;
    }

    .tscard-container{
        width: 100%;
        height: 31.5rem;
    }

    .title-tscard{
        width: 75%;
        font-size: 18px;
        padding-top: 0.125rem;
        padding-bottom: 0.125rem;
    }

    .ts-card{
        font-size: 22px;
    }

    .flower-sk{
        width: 5.8rem;
        margin-top: -2.2rem;
        margin-right: -2.4rem;
    }

    .ss-txt{
        font-size: 22px;
    }
}

</style>