<template>
  <div class="home">
    <div class="main" id="main">
      <div class="nav" id="nav">
        <div class="nav_wrap">
          <div class="nav-logo">
            <logo/>
          </div>
          <div class="right-links">
            <ul>
              <li>
                <a href>产品与服务</a>
              </li>
              <li>
                <a href>文档中心</a>
              </li>
              <li></li>
              <li>
                <a href>登录</a>
              </li>
              <li>
                <a href>加入我们</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mobile-menu">
        <div class="menu-wrap">
          <div class="menu-logo">
            <img src="../assets/ego_logo.svg" alt>
            <img src="../assets/ego_logo2.svg" alt id="black-logo">
          </div>
          <div class="menu-icon">
            <menuIcon/>
          </div>
        </div>

        <div class="menu-content">
          <ul>
            <li>
              <a href>产品与服务</a>
            </li>
            <li>
              <a href>文档中心</a>
            </li>
            <li>
              <a href>登录</a>
            </li>
            <li>
              <a href>加入我们</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="header" id="wrapper">
        <div class="section-wrap">
          <section>
            <div class="logo">
              <img src="../assets/logo.svg" alt>
              <img src="../assets/logo_text.svg" alt>
            </div>
            <h1>区块链身份安全平台</h1>
            <p>Ego 是新一代去中心化的用户身份解决方案。我们提供多类型的身份验证，并将身份信息认证记录上传到区块链。用户通过 Ego 可以安全便捷的使用其它第三方的相关服务，而无需反复注册账号或者认证身份信息。</p>
            <ul>
              <li>
                <a href="/">
                 <ios />
                </a>
              </li>
              <li>
                <a href="https://download.egoid.me/app/download/ego-newest.apk">
                 <android/>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div class="hero-wrap">
          <main>
            <section id="hero-section">
              <div class="container">
                <div class="space"></div>
                <div class="space"></div>
                <a class="iphonex" id="iphone-1">
                  <img src="../assets/hero-5.jpg">
                </a>
              </div>
              <div class="container">
                <div class="space"></div>
                <a class="iphonex" id="iphone-2">
                  <img src="../assets/hero-4.jpg">
                </a>
                <a class="iphonex" id="iphone-3">
                  <img src="../assets/hero-2.jpg">
                </a>
              </div>
              <div class="container">
                <a class="iphonex" id="iphone-4">
                  <img src="../assets/hero-3.jpg">
                </a>
                <a class="iphonex" id="iphone-5">
                  <img src="../assets/hero-1.jpg">
                </a>
              </div>
            </section>
          </main>
        </div>

        <mouse/>
      </div>

      <div class="primary">
        <section>
          <span>中心化系统的固有劣势</span>
          <h2 id="h2">中心化的身份系统既不利于保护隐私又消耗大量认证成本</h2>
          <div class="card-wrap">
            <div class="card">
              <div class="card-content">
                <img src="../assets/card-1.svg" alt>
                <h3>信息滥用</h3>
                <p>用户在互联网世界中，提交个人的各类信息享受到各种便利的同时，也可能被滥用于后续的营销，被贩卖给灰黑产，用户被骚扰，被诈骗等问题层出不穷。</p>
              </div>
            </div>
            <div class="card" id="card2">
              <div class="card-content">
                <img src="../assets/card-2.svg" alt>
                <h3>风控需求</h3>
                <p>企业处于风控的需求，被迫对用户的信息做充分的认证，在此花费了大量的 KYC、AML 等成本，来防止提交了虚假信息的用户的“薅羊毛”等行为。</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="secondary" id="secondary">
        <div class="section-wrap">
          <section class="effect">
            <span>可复用的 KYC</span>
            <h2 id="animate2">Ego 帮助满足用户隐私保护的要求和企业 KYC 需求</h2>
            <attestation/>

            <p id="effect-offset">用户可以在 Ego 应用程序选择不同的认证方进行多类型的身份信息认证，所有经认证的身份信息只会保存在本地，任何第三方未获得用户授权都无法获得该信息，保证您的信息不被泄露。
              <br>
              <br>企业用户可以选择不同的身份信息，在获得用户的许可后即可或者经过认证的各类身份信息，满足您的 KYC 需求。
            </p>

            <div class="effect-app">
              <div class="app">
                <img class="effect-img" src="../assets/hero-5.jpg" alt>
              </div>
              <div class="bg-dots">
                <dots/>
              </div>
            </div>
          </section>
          <section class="scene" id="scene">
            <span>多场景通用</span>
            <h2>打造网络通用身份，助您享受互联网生活</h2>
            <div class="pic-flow">
              <div class="column">
                <div class="pic">
                  <div class="pic-info">
                    <div class="pic_info-wrap">
                      <img src="../assets/renting.svg" alt>
                      <p>居住</p>
                    </div>
                  </div>
                  <img src="../assets/renting.jpg" alt>
                </div>
                <div class="pic pic2">
                  <div class="pic-info">
                    <div class="pic_info-wrap">
                      <img src="../assets/med.svg" alt>
                      <p>医疗</p>
                    </div>
                  </div>
                  <img src="../assets/med.jpg" alt>
                </div>
              </div>
              <div class="column">
                <div class="pic">
                  <div class="pic-info">
                    <div class="pic_info-wrap">
                      <img src="../assets/finance.svg" alt>
                      <p>金融</p>
                    </div>
                  </div>
                  <img src="../assets/finance.jpg" alt>
                </div>
                <div class="pic pic2">
                  <div class="pic-info">
                    <div class="pic_info-wrap">
                      <img src="../assets/social.svg" alt>
                      <p>社交</p>
                    </div>
                  </div>
                  <img src="../assets/social.jpg" alt>
                </div>
              </div>
              <div class="column">
                <div class="pic">
                  <div class="pic-info">
                    <div class="pic_info-wrap">
                      <img src="../assets/trans.svg" alt>
                      <p>出行</p>
                    </div>
                  </div>
                  <img src="../assets/trans.jpg" alt>
                </div>
              </div>
              <div class="column">
                <div class="pic">
                  <div class="pic-info">
                    <div class="pic_info-wrap">
                      <img src="../assets/shopping.svg" alt>
                      <p>购物</p>
                    </div>
                  </div>
                  <img src="../assets/shop.jpg" alt>
                </div>
              </div>
            </div>

            <div class="pic-blur">
              <img src="../assets/med.jpg" alt>
              <img src="../assets/finance.jpg" alt>
              <img src="../assets/shop.jpg" alt>
              <img src="../assets/finance.jpg" alt>
            </div>
          </section>
          <section class="contact">
            <span>与我们联系</span>
            <h2>Ego 邀请更多企业和我们一起完善身份安全生态</h2>
            <p>获取更私密安全的 KYC 服务，请留下您的联系方式，我们会尽快与您联系。</p>
            <div class="form-wrap">
              <textField tittle="姓名" placeholder="请输入姓名"/>
              <textField tittle="公司名称" placeholder="请输入公司名称"/>
              <textField tittle="职位" placeholder="请输入职位"/>
              <textField tittle="工作邮箱" placeholder="请输入工作邮箱"/>
              <textField tittle="手机号码" placeholder="请输入手机号码"/>
              <textField tittle="需求" placeholder="请描述您想要获得什么样的服务"/>
              <button>提交</button>
            </div>
          </section>
        </div>
      </div>

      <footer>
        <div class="footer-wrap">
          <div class="copyright-info">
            <img src="../assets/footer_logo.svg" alt>
            <p>Copyright © 2018 EGO
              <br>
              <br>武汉极意网络科技有限公司
              <br>鄂 ICP 备 12016193 号 -1
              <br>增值电信业务经营许可证鄂 B2-20170058
            </p>
          </div>
          <div class="info">
            <ul>
              <li>
                <a href>服务条款</a>
              </li>
              <li>
                <a href>隐私声明</a>
              </li>
              <li>
                合作请发送邮件至
                <a href="mailto:contact@egoid.me">contact@egoid.me</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import mouse from "../components/mouse.vue";
import textField from "../components/textField.vue";
import dots from "../components/icons/dots.vue";
import attestation from "../components/icons/attestation.vue";
import logo from "../components/icons/logo.vue";
import menuIcon from "../components/icons/menuIcon.vue";
import ios from "../components/icons/ios.vue";
import android from "../components/icons/android.vue";

export default {
  name: "home",
  components: {
    mouse,
    textField,
    dots,
    attestation,
    logo,
    menuIcon,
    android,
    ios
  },
  mounted: function() {
    let secondary = document.querySelector("#main");
    let card2 = document.querySelector("#card2");
    let h2 = document.querySelector("#h2");
    let header = document.querySelector(".header");
    let nav = document.querySelector("#nav");

    let offset = card2.offsetTop + (card2.offsetHeight - 200);
    let offset2 = h2.offsetTop + h2.offsetHeight;
    let navOffset = header.offsetTop + header.offsetHeight;

    let menuContent = document.querySelector(".menu-content");
    let menuIcon = document.querySelector(".menu-icon");
    let mobileMenu = document.querySelector(".mobile-menu");

    let scene = document.querySelector("#scene");
    let effectOffset = document.querySelector("#effect-offset");
    let offset3 = effectOffset.offsetTop + effectOffset.offsetHeight;

    console.log(offset3 - window.scrollY)

    window.addEventListener("scroll", function() {
      if (offset - window.scrollY <= 0) {
        secondary.classList.add("main-dark");
      } else {
        secondary.classList.remove("main-dark");
      }
      if (offset2 - window.scrollY <= 0) {
        secondary.classList.add("main-white-motion");
      } else {
        secondary.classList.remove("main-white-motion");
      }
      if (navOffset - window.scrollY <= 0) {
        nav.style.top = "0";
        nav.style.opacity = "1";
        mobileMenu.style.top = "0";
        mobileMenu.style.opacity = "1";
      } else {
        nav.style.top = "-80px";
        nav.style.opacity = "0";
        mobileMenu.style.top = "-80px";
        mobileMenu.style.opacity = "0";
      }

      if(offset3 - window.scrollY <= -1700 ) {
        scene.classList.add("scene-show")
      }
      
    });

    menuIcon.addEventListener("click", function() {
      menuContent.classList.toggle("menu-show");
    });
  }
};
</script>

<style lang="scss">
@import "../style/mobile.scss";
@import "../style/index.scss";
</style>
