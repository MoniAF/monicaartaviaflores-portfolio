<template>
    <div id="about">
        <h3>ABOUT ME</h3>
        <div class="container-am d-flex flex-column justify-content-center">
            <div class="am-extrac d-flex justify-content-between align-items-center">
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
    position: relative;
    font-size: 32px;
    margin-left: 2rem;
    padding-top: 2rem;
  }

  @include celular {
    position: relative;
    font-size: 35px;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    text-align: center;
    padding-top: 1.5rem;
    margin-bottom: 2.5rem;
  }
  
  @include desktop {
    font-size: 55px;
    padding-top: 4rem;
  }
}

.container-am {
  width: 100%;
  min-height: 100vh;

  @include celular {
    display: block !important;
  }

    .am-extrac {
      @include celular {
        flex-direction: column !important;
      }
    }

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

    @include celular {
      width: 100%;
      background-color: $color-crema;
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      box-shadow: inset 0 0 15px #a58862;
      margin-bottom: 4rem;

      &.ps-5{
        padding-left: 0 !important;
      }

      &.pe-5{
        padding-right: 0 !important;
      }
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
    color: $color-oscuro;

    @include celular {
      width: auto;
      //font-size: 17px;
      //line-height: 26px;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

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

    @include celular {
      width: 100%;
      margin-top: 2rem;
      display: flex;
      justify-content: end;
    }
  }

  .flower-img {
    width: 100%;
    display: block;

    @include celular {
      width: 90%;
    }
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

      @include celular {
        width: 55%;
        margin-left: 5rem;
      }
    }
  }
}
</style>