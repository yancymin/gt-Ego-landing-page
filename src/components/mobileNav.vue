<template>
  <div class="mobile-menu">
    <div class="menu-wrap">
      <a href="/">
        <div class="menu-logo">
          <img src="../assets/ego_logo.svg" alt>
          <img src="../assets/ego_logo2.svg" alt id="black-logo">
        </div>
      </a>
      <div class="menu-icon">
        <menuIcon/>
      </div>
    </div>

    <div class="menu-content">
      <ul>
        <li>
          <a href="/">产品与服务</a>
        </li>
        <li>
          <a href="https://doc.egoid.me" target="_blank">文档中心</a>
        </li>
        <li>
          <a href="https://account.egoid.me/signin" target="_blank">登录</a>
        </li>
        <li>
          <a href="https://account.egoid.me/register" target="_blank">加入我们</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import menuIcon from "../components/icons/menuIcon.vue";

export default {
  name: "pcNav",
  components: {
    menuIcon
  },
//   mounted: function() {
 
//   }
};
</script>

<style lang="scss">
@import "../style/mobile.scss";
@import "../style/index.scss";
@import "../style/global.scss";
.menu-show {
  opacity: 1 !important;
  transform: scale(1) !important;
  pointer-events: all !important;
  ul {
    li {
      opacity: 1 !important;
      transition: all 0.4s ease-in-out !important;
      transform: translateY(0) !important;

      &:nth-of-type(2) {
        transition-delay: 0.06s !important;
      }
      &:nth-of-type(3) {
        transition-delay: 0.15s !important;
      }
      &:nth-of-type(4) {
        transition-delay: 0.24s !important;
      }
    }
  }
}
.mobile-menu {
  opacity: 0;
  top: -50px;
  z-index: 10000;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 48px;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgba(209, 214, 224, 0.6);
  transition: all 0.4s ease;
  .menu-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    .menu-logo {
      display: flex;
      align-items: center;
      width: 200px;
      height: 100%;
      img {
        position: absolute;
        &:first-child {
          z-index: 2;
        }
        &:last-child {
          z-index: 1;
        }
      }
    }
    .menu-icon {
      cursor: pointer;
    }
  }
  .menu-content {
    opacity: 0;
    z-index: 10000;
    position: fixed;
    top: 54px;
    width: 90%;
    height: auto;
    border-radius: 6px;
    background-color: #243449;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 8px 24px 0 rgba(14, 21, 37, 0.7);
    transition: all 0.3s ease;
    transform: scale(0.95);
    perspective: 2000px;
    transform-origin: 100% 0;
    pointer-events: none;
    ul {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      margin: 10px 20px;
      li {
        opacity: 0;
        width: 100%;
        padding: 20px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        transform: translateY(-3px);
        a {
          text-decoration-line: none;
          color: #b8c7e0;
          transition: all 0.3s ease;
          font-size: 16px;
          line-height: 16px;
          text-align: left;
          font-family: source-han-sans-simplified-c, sans-serif;
          font-weight: 300;
          font-style: normal;
          &:hover {
            color: #4c9aff;
          }
        }
        &:last-child {
          border: none;
          a {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 34px;
            width: 100%;
            border-radius: 3px;
            color: #fff;
            background-color: #4c9aff;
            padding-bottom: 2px;
          }
        }
      }
    }
  }
}
</style>
