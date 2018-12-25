<template>
  <div class="ego">
    <div class="text-content">
      <h1>奖励规则</h1>
      <p>
        EGO 是基于区块链技术产生的奖励，根据经验值的不同你每天能获取不同数量的 EGO，经验值越高能获取的EGO越多。<br><br>
        EGO 的总量固定，随着时间获取难度增加，因此参与 Ego 生态越早获取 EGO 的优势越大。<br><br>
        EGO 可以参与兑换和抽奖活动等。<br>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../style/global.scss";

.ego {
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


