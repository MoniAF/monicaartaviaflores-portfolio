<template>
    <div id="about">
        <h3>ABOUT ME</h3>
        <div class="container-am d-flex flex-column justify-content-center">
            <div class="d-flex justify-content-between align-items-center">
                <div class="box-am ps-5 pe-5" >
                    <section class="txt-am d-flex align-items-center">
                        <p class="m-0">Graduate in Computer Science and Multimedia Technology, with a focus on web development and database administration. Experienced in developing applications using C# and .NET, building APIs, and managing both relational (Oracle and SQL Server) and non-relational databases (MongoDB). Focused on creating efficient, scalable solutions that improve user experience, while following best development practices and prioritizing performance and maintainability. Interested in joining a team where I can apply my skills and contribute to team growth.</p>
                    </section>
                </div>
                <div class="fl-am">
                    <img class="flower-img user-select-none" draggable="false" src="../assets/img/flowers2.svg" alt="flower2">
                    <div class="girl-am user-select-none">
                        <img draggable="false" src="../assets/img/girl.png" alt="girl">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/mixins.scss' as *;

h3 {
  position: absolute;
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
  @include celular {
    font-size: 26px;
    margin-left: 1.5rem;
    padding-top: 1.5rem;
  }
  @include desktop {
    font-size: 55px;
    padding-top: 4rem;
  }
}

.container-am {
  width: 100%;
  min-height: 100vh;

  .box-am {
    width: 52%;
    height: 58vh;
    margin-left: 4.5rem;
    background-image: url("../assets/img/box1.svg");
    background-size: 100% 100%;
    background-repeat: no-repeat;

    @include tablet {
      width: 90%;
      height: auto;
      margin-left: 0;
      background-image: none;
      padding: 0;
    }
  }

  .txt-am {
    width: 100%;
    height: 100%;
    text-align: justify;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 23px;

    @include desktop {
      font-size: 24px;
      line-height: 32px;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  .fl-am {
    position: relative;
    width: 39%;
  }

  .flower-img {
    width: 100%;
    display: block;
  }

  .girl-am {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 65%;
      margin-left: 3rem;
    }
  }
}
</style>