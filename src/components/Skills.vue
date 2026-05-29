<template>
    <div id="skills" class="container-sk">
        <h3>SKILLS</h3>
        
        <div class="boxsk-cards d-flex justify-content-between">

            <div class="card-boxsk">
                <section class="subtitle-box">
                  <p class="d-mbtb">TECHNICAL SKILLS</p>
                </section>
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
                    <p class="d-dtlt">TECHNICAL SKILLS</p>
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
@use '@/assets/scss/mixins.scss' as *;

.container-sk {
  min-height: 100vh;
  width: 100%;
}

h3 {
  margin-left: 4.5rem;
  font-weight: 500;
  font-style: normal;
  font-size: 42px;
  color: $color-crema;
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

.boxsk-cards {
  width: auto;
  height: auto;
  padding-left: 4.5rem;
  padding-right: 4.5rem;

  @include tablet {
    flex-wrap: wrap;
    justify-content: center !important;
    gap: 3rem 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @include mobile {
    flex-direction: column !important;
    align-items: center;
    gap: 2rem;
  }

  .card-boxsk {
    width: 22%;

    @include tablet {
      width: 45%;
    }
    @include mobile {
      width: 85%;
    }
  }

  .subtitle-box {
    width: 100%;
    height: 4rem;
    font-size: 25px;
    font-weight: 500;
    text-align: center;
    color: $color-blanco;

    @include tablet {
      height: auto;
      margin-bottom: 1rem;
      font-size: 22px;
    }
    @include desktop {
      height: 6rem;
      font-size: 30px;
    }
  }

  .d-mbtb{
    display: none;
    margin-bottom: 2.5rem;

    @include tablet {
      display: block;
    }
    @include mobile {
      display: block;
    }
  }

  .d-dtlt{
    display: block;

    @include tablet {
      display: none;
    }
    @include mobile {
      display: none;
    }
  }

  .mt-sk {
    margin-top: 0.9rem;
  }

  .tscard-container {
    width: 100%;
    height: 21.5rem;

    @include desktop {
      height: 31.5rem;
    }
  }

  .ts-cardbox {
    width: 100%;
    height: 50%;
    position: relative;
  }

  .ts-card {
    width: 100%;
    height: 100%;
    background-color: $color-morado;
    border: 4px solid $color-blanco;
    border-radius: 20px;
    color: $color-blanco;
    font-size: 16px;
    font-weight: 400;
    transition: border-color 0.2s ease;

    &:hover {
      border-color: $color-oscuro;
    }

    @include desktop {
      font-size: 22px;
    }
  }

  .title-tscard {
    width: 80%;
    height: 2rem;
    background-color: $color-rosa;
    color: $color-oscuro;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border-radius: 15px;

    @include desktop {
      width: 75%;
      font-size: 18px;
      padding-top: 0.125rem;
      padding-bottom: 0.125rem;
    }
  }

  .tt-box {
    width: 100%;
    position: absolute;
    top: -0.9rem;
  }

  .ss-card {
    width: 100%;
    height: 21.5rem;
    background-color: $color-morado;
    border: 4px solid $color-oscuro;
    color: $color-blanco;
    border-radius: 20px;
    text-align: center;
    position: relative;

    @include desktop {
      height: 31.5rem;
    }
  }

  .ss-txt {
    width: 100%;
    font-size: 16px;
    font-weight: 400;

    p {
      margin-bottom: 0.5rem;
      
      &:last-child {
        margin-bottom: 0;
      }
    }

    @include desktop {
      font-size: 22px;
    }
  }

  .flower-sk {
    width: 4.2rem;
    height: auto;
    display: flex;
    position: absolute;
    margin-top: -1.5rem;
    margin-right: -1.8rem;
    rotate: 20deg;
    z-index: 3;

    @include desktop {
      width: 5.8rem;
      margin-top: -2.2rem;
      margin-right: -2.4rem;
    }

    @include mobile {
      display: none;
    }
  }
}
</style>