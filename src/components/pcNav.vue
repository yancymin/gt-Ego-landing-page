<template>
    <div class="nav">
        <div class="nav_wrap">
          <div class="nav-logo">
          <router-link to="/"><logo/></router-link> 
          </div>
          <div class="right-links">
            <ul>
              <li>
               <router-link to="/">产品与服务</router-link>
              </li>
              <li>
                <a href="https://doc.egoid.me" target="_blank">文档中心</a>
              </li>
              <li></li>
              <li>
                <a href="https://account.egoid.me/signin" target="_blank">登录</a>
              </li>
              <li>
                <a href="https://account.egoid.me/register" target="_blank">加入我们</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
</template>

<script>
import logo from '../components/icons/logo.vue'

export default {
  name: 'pcNav',
  components: {
    logo
  }
}
</script>

<style lang="scss">
@import "../style/mobile.scss";
@import "../style/index.scss";
@import "../style/global.scss";
    .nav {
        z-index: 1000000;
        position: fixed;
        top: -80px;
        width: 100vw;
        height: 60px;
        display: flex;
        justify-content: center;
        align-content: center;
        background-color: #ffffff;
        box-shadow: 0 1px 0 0 rgba(209, 214, 224, 0.6);
        transition: all 0.4s ease;
        opacity: 0;
        .nav_wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1180px;
            margin: 0 20px;
            .right-links {
                ul {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    li {
                        // &:first-child {
                        //     display: none;
                        // }
                        a {
                            text-decoration-line: none;
                            color: #5a6371;
                            margin-right: 24px;
                            transition: $normalTs;
                            @include p(14px, 14px);
                            &:hover {
                                color: $blue;
                            }
                        }
                        &:last-child {
                            a {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                height: 34px;
                                width: 88px;
                                border-radius: 3px;
                                color: #fff;
                                background-color: $blue;
                                margin-right: 0;
                                &:hover {
                                    opacity: 0.8;
                                }
                            }
                        }
                        &:nth-of-type(3) {
                            width: 1px;
                            height: 20px;
                            background-color: #d1d6e0;
                            margin: 0 30px 0 6px;
                        }
                    }
                }
            }
        }
    }
</style>
