<template>
  <div class="home">
    <div class="main">
      <div class="header">
        <div class="section-wrap">
          <section>
            <div class="logo">
              <img
                src="../assets/logo.svg"
                alt=""
              >
              <img
                src="../assets/logo_text.svg"
                alt=""
              >
            </div>
            <h1>区块链身份安全平台</h1>
            <p>Ego 是新一代去中心化的用户身份解决方案。我们提供多类型的身份验证，并将身份信息认证记录上传到区块链。用户通过 Ego 可以安全便捷的使用其它第三方的相关服务，而无需反复注册账号或者认证身份信息。</p>
            <ul>
              <li><a href="">
                  <img
                    src="../assets/ios.svg"
                    alt=""
                  ></a> </li>
              <li><a href=""><img
                    src="../assets/android.svg"
                    alt=""
                  >
                </a></li>
            </ul>
          </section>
        </div>
        <div class="hero-wrap">

        </div>
        <mouse />
      </div>
      <div class="primary">
        <section>
          <span>传统劣势</span>
          <h2>中心化的身份系统既不利于保护隐私又消耗大量认证成本</h2>
          <div class="card-wrap">
            <div class="card">
              <div class="card-content"><img
                  src="../assets/card-1.png"
                  alt=""
                >
                <h3>信息滥用</h3>
                <p>用户在互联网世界中，提交个人的各类信息享受到各种便利的同时，也可能被滥用于后续的营销，被贩卖给灰黑产，用户被骚扰，被诈骗等问题层出不穷。</p>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <img
                  src="../assets/card-2.png"
                  alt=""
                >
                <h3>风控需求</h3>
                <p>企业处于风控的需求，被迫对用户的信息做充分的认证，在此花费了大量的 KYC、AML 等成本，来防止提交了虚假信息的用户的“薅羊毛”等行为。</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import mouse from "../components/mouse.vue";

export default {
  name: "home",
  components: { mouse }
};
</script>

<style lang="scss">
@import "../style/global.scss";

.main {
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .section-wrap {
      width: 55%;
      display: flex;
      justify-content: center;
      section {
        display: flex;
        justify-content: center;
        flex-direction: column;
        .logo {
          display: flex;
          align-items: center;
          margin-bottom: 40px;

          img {
            &:last-child {
              position: relative;
              top: -4px;
              margin-left: 10px;
            }
          }
        }

        h1 {
          margin-bottom: 24px;
          @include h1(46px, 46px);
        }

        p {
          width: 497px;
          margin-bottom: 60px;
          @include p(15px, 26px);
        }

        ul {
          display: flex;
          justify-content: flex-start;
          li {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 178px;
            height: 62px;
            border: 1px solid $borderColor;
            border-radius: 6px;

            &:first-child {
              margin-right: 14px;
            }
          }
        }
      }
    }
    .hero-wrap {
      width: 45%;
      height: 100vh;
      background-color: $bgColor;
    }
    .mouse {
      position: absolute;
      left: 50%;
      bottom: 20px;
    }
  }

  .primary {
    display: flex;
    justify-content: center;
    width: 1180px;
    padding: 120px 0;

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      span {
        text-align: center;
        font-size: 18px;
        line-height: 18px;
        color: $blue;
        margin-left: -24px;
        @include fontMedium;

        &:before {
          content:'';
          display: inline-block;
          width: 24px;
          height: 3px;
          background-color: $blue;
          position: relative;
          top: 20px;
          left: 48px;
          border-radius: 3px 3px 0 0;
        }
      }
      h2 {
        width: 640px;
        text-align: center;
        align-self: center;
        margin-bottom: 70px;
        margin-top: 36px;
        @include h2(36px, 54px);
      }
      .card-wrap {
        width: 1180px;
        display: flex;
        justify-content: space-between;

        .card {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 420px;
          width: 588px;
          background-color: #f0f4fa;

          .card-content {
            img {
              width: 120px;
              height: 120px;
              margin-bottom: 36px;
            }
            h3 {
              margin-bottom: 22px;
              @include h3(24px, 24px);
            }
            p {
              width: 400px;
              @include p(16px, 26px);
            }
          }
        }
      }
    }
  }
}

p {
  @include fontNormal;

  &:first-child {
    @include h1(46px, 46px);
    @include fontBold;
  }
  &:last-child {
    @include h2(36px, 36px);
    @include fontLight;
  }
}
</style>
