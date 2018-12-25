<template>
  <div class="eda">
    <div class="text-content">
      <h1>奖励规则</h1>
      <p>
        毛豆是你授权第三方网站/ APP 使用您的身份数据时，第三方支付给你的奖励。第三方请求您的不同身份数据时，会支付给您不同数量的毛豆。<br><br>
        毛豆同样可用于后续的抽奖和兑换活动。
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../style/global.scss";

.eda {
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


