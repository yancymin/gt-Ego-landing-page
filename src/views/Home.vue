<template>
  <div class="home">
    <div class="main" id="main">
      <pcNav/>
      <mobileNav/>
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
                <a>
                  <ios/>
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

            <p
              id="effect-offset"
            >用户可以在 Ego 应用程序选择不同的认证方进行多类型的身份信息认证，所有经认证的身份信息只会保存在本地，任何第三方未获得用户授权都无法获得该信息，保证您的信息不被泄露。
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
              <div class="form">
                <textField
                  name="name"
                  label="姓名"
                  placeholder="请输入姓名"
                  :value="form.name"
                  v-model="form.name"
                  :tips="isEmptys.name"
                  @againInput="focus"
                />
                <textField
                  name="company"
                  label="公司名称"
                  placeholder="请输入公司名称"
                  :value="form.company"
                  v-model="form.company"
                  :tips="isEmptys.company"
                  @againInput="focus"
                />
                <textField
                  name="position"
                  label="职位"
                  placeholder="请输入职位"
                  :value="form.position"
                  v-model="form.position"
                  :tips="isEmptys.position"
                  @againInput="focus"
                />
                <textField
                  name="work_email"
                  label="工作邮箱"
                  placeholder="请输入工作邮箱"
                  :value="form.work_email"
                  v-model="form.work_email"
                  :tips="isEmptys.work_email"
                  @againInput="focus"
                />
                <textField
                  name="mobile_no"
                  label="手机号码"
                  placeholder="请输入手机号码"
                  :value="form.mobile_no"
                  v-model="form.mobile_no"
                  :tips="isEmptys.mobile_no"
                  @againInput="focus"
                />
                <textArea
                  name="demand"
                  label="需求"
                  placeholder="请描述您想要获得什么样的服务"
                  rows="5"
                  :value="form.demand"
                  v-model="form.demand"
                  :tips="isEmptys.demand"
                  @againInput="focus"
                />
                <button class="button" @click="submitContact">提交</button>
                <em v-if="errorMsg" class="error-msg">{{this.errorMsg}}</em>
              </div>
              <div class="response-info">
                <img src="../assets/success.png">
                <pre>感谢您提交信息</pre>
                <div class="line"></div>
                <em>我们会在五个工作日内给您回复。</em>
              </div>
            </div>
          </section>
        </div>
      </div>

      <globalFooter/>
    </div>
  </div>
</template>

<script>
import mouse from '../components/mouse.vue'
import textField from '../components/textField.vue'
import textArea from '../components/textArea.vue'
import pcNav from '../components/pcNav.vue'
import dots from '../components/icons/dots.vue'
import attestation from '../components/icons/attestation.vue'
import ios from '../components/icons/ios.vue'
import android from '../components/icons/android.vue'
import mobileNav from '../components/mobileNav.vue'
import globalFooter from '../components/globalFooter.vue'

export default {
  name: 'home',
  data () {
    return {
      one: true,
      requestId: {},
      preScrollHeight: 0,
      nextScrollHeight: 0,
      doms: {},
      form: {
        name: '',
        company: '',
        position: '',
        work_email: '',
        mobile_no: '',
        demand: ''
      },
      isEmptys: {
        name: false,
        company: false,
        position: false,
        work_email: false,
        mobile_no: false,
        demand: false
      },
      errorMsg: ''
    }
  },
  components: {
    mouse,
    textField,
    dots,
    attestation,
    android,
    ios,
    textArea,
    pcNav,
    mobileNav,
    globalFooter
  },
  mounted: function () {
    const self = this
    this.doms.secondary = document.querySelector('#main')

    const h2 = document.querySelector('#h2')
    this.doms.offset2 = h2.offsetTop + h2.offsetHeight

    const card2 = document.querySelector('#card2')
    this.doms.offset = card2.offsetTop + (card2.offsetHeight - 200)

    const header = document.querySelector('.header')
    this.doms.navOffset = header.offsetTop + header.offsetHeight

    this.doms.nav = document.querySelector('.nav')
    this.doms.menuContent = document.querySelector('.menu-content')
    this.doms.menuIcon = document.querySelector('.menu-icon')
    this.doms.mobileMenu = document.querySelector('.mobile-menu')
    this.doms.scene = document.querySelector('#scene')

    const effectOffset = document.querySelector('#effect-offset')
    this.doms.offset3 = effectOffset.offsetTop + effectOffset.offsetHeight

    this.doms.onePageHeight = document.querySelector('.header').offsetHeight
    let ticking = false
    window.addEventListener('scroll', function (e) {
      if (!self.one) {
        e.preventDefault()
      }
      self.nextScrollHeight = window.scrollY
      if (!ticking) {
        window.requestAnimationFrame(function () {
          self.doSomething(self.nextScrollHeight, self.doms.onePageHeight)

          ticking = false
        })
      }
      ticking = true
    })

    this.doms.menuIcon.addEventListener('click', function () {
      self.doms.menuContent.classList.toggle('menu-show')
    })
  },
  methods: {
    focus (key) {
      this.isEmptys[key] = false
    },
    submitContact () {
      let checkResult = true
      for (let f in this.form) {
        let v = this.form[f]
        if (v.replace(/(^\s*)|(\s*$)/g, '').length === 0) {
          this.isEmptys[f] = true
          checkResult = false
        }
      }
      if (checkResult) {
        let emailRex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
        let phoneRex = /^[0-9]*[1-9][0-9]*$/

        if (
          emailRex.test(this.form.work_email) &&
          phoneRex.test(this.form.mobile_no)
        ) {
          checkResult = true
        } else {
          checkResult = false
        }

        this.isEmptys.work_email = !emailRex.test(this.form.work_email)
        this.isEmptys.mobile_no = !phoneRex.test(this.form.mobile_no)
      }

      if (!checkResult) return
      const contactForm = this.form
      this.$http
        .post('https://account.egoid.me/www/contact_us', contactForm)
        .then(res => {
          if (res.data && res.data.status === 1) {
            document.querySelector('.form').classList.add('hide')
            document.querySelector('.response-info').classList.add('show')
          } else {
            this.errorMsg = res.data.err_msg
          }
        })
    },
    doSomething (scrollPos, onePageHeight) {
      // this.nextScrollHeight = scrollPos
      // this.preScrollHeight = scrollPos

      if (this.doms.offset - scrollPos <= 0) {
        this.doms.secondary.classList.add('main-dark')
      } else {
        this.doms.secondary.classList.remove('main-dark')
      }
      if (this.doms.offset2 - scrollPos <= 0) {
        this.doms.secondary.classList.add('main-white-motion')
      } else {
        this.doms.secondary.classList.remove('main-white-motion')
      }
      if (this.doms.navOffset - scrollPos <= 0) {
        this.doms.nav.style.top = '0'
        this.doms.nav.style.opacity = '1'
        this.doms.mobileMenu.style.top = '0'
        this.doms.mobileMenu.style.opacity = '1'
      } else {
        this.doms.nav.style.top = '-80px'
        this.doms.nav.style.opacity = '0'
        this.doms.mobileMenu.style.top = '-80px'
        this.doms.mobileMenu.style.opacity = '0'
      }

      if (this.doms.offset3 - scrollPos <= -1700) {
        this.doms.scene.classList.add('scene-show')
      }
    }
  }
}
</script>

<style lang="scss">
@import "../style/mobile.scss";
@import "../style/index.scss";

.response-info {
  position: absolute;
  top: -10px;
  right: 0;
  height: 265px;
  width: 483px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 3px;
  background-color: #1b2638;
  box-shadow: 0 20px 25px 0 rgba(13, 23, 39, 0.55);
  z-index: -1;
  opacity: 0;
  text-align: center;
  transition: all 0.8s;
  img {
    display: block;
    margin: auto;
    margin-top: 40px;
    width: 74px;
    height: auto;
  }
  pre {
    color: #b8c7e0;
    font-size: 18px;
    line-height: 18px;
    margin-top: 30px;
    margin-bottom: 22px;
  }
  .line {
    margin: auto;
    margin-bottom: 24px;
    height: 1px;
    width: 78.88px;
    border-bottom: 1px solid #e1e7ff;
    opacity: 0.14;
  }
  em {
    color: #808da4;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }
}
.error-msg {
  color: $blue;
  font-style: normal;
  font-family: source-han-sans-simplified-c, sans-serif;
  font-weight: 700;
  font-style: normal;
}
</style>
