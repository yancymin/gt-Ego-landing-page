<template>
  <div class="footer">
    <div class="footer-wrap">
      <div class="copyright-info">
       <!-- <footerLogo /> -->
       <img src="../assets/footer_logo.svg" alt="">
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
            <a href="/service">服务条款</a>
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
  </div>
</template>
<script>
export default {
  name: 'globalFooter'
}
</script>

<style lang="scss">
@import "../style/mobile.scss";
@import "../style/index.scss";
@import "../style/global.scss";
.footer {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: $dark;
  .footer-wrap {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 1180px;
    padding: 40px 0 24px 0;
    .copyright-info {
      img {
        margin-bottom: 32px;
      }
      p {
        font-family: source-han-sans-simplified-c, sans-serif;
        font-weight: 300;
        font-style: normal;
        width: 218px;
        font-size: 12px;
        line-height: 19px;
        color: $textColor-3;
        opacity: 0.5;
      }
    }
  }
  .info {
    width: 390px;
    ul {
      display: flex;
      justify-content: space-between;
      li {
        margin-left: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $textColor-3 !important;
        opacity: 0.5;
        @include p(12px, 12px);
        &:last-child {
          display: flex;
          flex-direction: row;
          align-items: center;
          a {
            margin-left: 8px;
          }
        }
        a {
          text-decoration-line: none;
          transition: $normalTs;
          color: $textColor-3 !important;
          @include p(13px, 13px);
          &:hover {
            opacity: 1 !important;
            color: $textColor-3;
            text-decoration-line: underline;
          }
        }
      }
    }
  }
}
</style>
