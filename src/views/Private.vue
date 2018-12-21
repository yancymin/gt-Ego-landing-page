<template>
  <div class="service main" id="main">
    <mobileNav/>
    <pcNav/>
    <div class="content">
      <h1>Ego 用户隐私协议</h1>
      <pre>
极验验证（以下简称极验）非常重视对您的个人隐私保护，有时候我们需要某些信息才能为您提供您请求的服务， 本隐私声明解释了这些情况下的数据收集和使用情况。本隐私声明适用于极验的所有相关服务，随着极验服务范围的扩大， 隐私声明的内容可由极验随时更新，且毋须另行通知。更新后的隐私声明一旦在网页上公布即有效代替原来的隐私声明。
一、我们收集哪些信息
目前极验的基础版本只对如下数据进行收集：
当前网站的网址；
本次验证拖动时用户的轨迹；
本次验证时所处的浏览器平台；
本次拖动时用户的IP及验证时间。
极验不会对网站的隐私信息有任何侵犯。当我们需要能识别您的个人信息或者可以与您联系的信息时，我们会征求您的同意。 通常，在您注册极验或申请开通新的功能时，我们可能收集这些信息：姓名，Email地址，电话号码等；在进行G币提现等操作时， 会需要您提供一些公司基本的财务信息，这些信息的收集都会征求您的确认。
二、关于您的个人信息
极验严格保护您个人信息的安全。我们使用各种安全技术和程序来保护您的个人信息不被未经授权的访问、使用或泄露。
极验会在法律要求或符合极验的相关服务条款、软件许可使用协议约定的情况下透露您的个人信息，或者有充分理由相信必须这样做才能：(a) 满足法律或行政法规的明文规定，或者符合极验适用的法律程序；
(b) 符合极验相关服务条款、软件许可使用协议的约定；
(c) 保护极验的权利或财产
(d) 在紧急情况下保护极验员工、产品或服务的用户或大众的个人安全。
我们所收集的信息将用于修改和改进我们的服务、产品；极验不会未经您的允许将这些信息与第三方共享，本声明已经列出的上述情况除外。
三、Cookie的使用
使用 Cookie 能帮助您实现您的联机体验的个性化，您可以接受或拒绝 Cookie ，大多数 Web 浏览器会自动接受 Cookie，但您通常可根据自己的需要来修改浏览器的设置以拒绝Cookie。
当您注册极验时，极验亦会使用 Cookie。在这种情况下，我们会收集并存储有用信息，当您再次访问极验网站时，我们可辨认您的身份。来自极验的 Cookie 只能被极验读取。
如果您的浏览器被设置为拒绝 Cookie，您仍然能够访问极验的大多数网页。
四、关于免责说明
就下列相关事宜的发生，极验不承担任何法律责任：
* 由于您将用户密码告知他人或与他人共享注册帐户，由此导致的任何个人信息的泄露，或其他非因极验原因导致的个人信息的泄露；
* 极验根据法律规定或政府相关政策要求提供您的个人信息；
* 任何第三方根据极验各服务条款及声明中所列明的情况使用您的个人信息，由此所产生的纠纷；
* 任何由于黑客攻击、电脑病毒侵入或政府管制而造成的暂时性网站关闭；
* 因不可抗力导致的任何后果；
* 极验在各服务条款及声明中列明的使用方式或免责情形。

                                                                                                                                                                                                                                                                                                                                   武汉极意网络科技有限公司

    </pre>
    </div>
    <globalFooter/>
  </div>
</template>

<script>
import pcNav from "../components/pcNav.vue";
import mobileNav from "../components/mobileNav.vue";
import globalFooter from "../components/globalFooter.vue";

export default {
  name: "service",
  components: {
    pcNav,
    mobileNav,
    globalFooter
  },
  mounted: function() {
    let mobileMenu = document.querySelector(".mobile-menu");
    let menuIcon = document.querySelector(".menu-icon");
    let menuContent = document.querySelector(".menu-content");
    menuIcon.addEventListener("click", function() {
      menuContent.classList.toggle("menu-show");
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../style/mobile.scss";
@import "../style/index.scss";
@import "../style/global.scss";

.main,
#main {
  .nav {
    opacity: 1;
    top: 0 !important;
  }
  .mobile-menu {
    opacity: 1;
    top: 0;
  }
}
.service {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 85vw;
    padding: 100px 0 80px 0;
    h1 {
      @include h3(26px, 26px);
      margin-bottom: 40px;
    }
    pre {
      @include p(14px, 26px);
      white-space: pre-wrap;

      @media screen and (min-width: 1180px) {
        width: 1180px;
      }
    }

    p {
        width: 100%;
       text-align: right;
    }
  }
}
</style>
