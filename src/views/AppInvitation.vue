<template>
  <div class="invitation">
    <div class="text-content">
      <h1>奖励规则</h1>
      <p>
        为了感谢您邀请好友来共建 Ego 身份奖励生态，我们为您准备了大量的经验奖励。<br><br>
        1、每邀请一位好友成功创建身份，您可以获得 200 经验的奖励；<br>
        2、您邀请的好友，他（她）每邀请一位好友成功创建身份（即二级好友），您可以获得 100 经验的奖励；<br>
        3、您的二级好友每邀请一位好友成功创建身份（即三级好友），您可以获得 50 经验的奖励。
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../style/global.scss";

.invitation {
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


