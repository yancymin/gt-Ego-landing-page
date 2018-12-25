<template>
  <div class="exp">
    <div class="text-content">
      <h1>奖励规则</h1>
      <p>经验是你在 Ego 中进行各种操作如：身份信息认证、社交账号绑定、邀请好友、签到等产生的奖励。
        <br><br>为了奖励早期参与的用户，进行同一操作，越早参与的用户所能得到的经验会越多。<br>
        <br>经验是挖宝得到 EGO 的影响因素之一，经验越高所能挖得的 EGO 越多。
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../style/global.scss";

.exp {
  width: 100vw;
  height: 100vh;
  background: url(../assets/rule_bg_2.png) #1b2638 no-repeat fixed;
  background-size: 90%;
  background-position: bottom 20px right 16px;
  .text-content {
    padding: 30px 20px;
    background: url(../assets/rule_bg_1.png) no-repeat center/50% fixed;
    background-position: center 5px;
    h1 {
      color: #fff !important;
      margin-bottom: 20px;
      @include h1(24px, 24px);
    }

    p {
      height: 100vh;
      color: #b8c7e0 !important;
      @include p(15px, 21px);
    }
  }
}
</style>


