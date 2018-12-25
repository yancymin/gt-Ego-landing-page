<template>
  <div class="version">
    <div class="content" v-for="content,index in shots" :key="index">
      <h1>{{index+1}}. {{content.h1}}</h1>
      <div class="screenshots">
        <img :src="content.imgSrc" alt>
        <img :src="content.imgSrc2" alt>
      </div>
    </div>
  </div>
</template>

<script>
import shot_1 from "../assets/shot_1.jpg";
import shot_2 from "../assets/shot_2.jpg";
import shot_3 from "../assets/shot_3.jpg";
import shot_4 from "../assets/shot_4.jpg";
import shot_5 from "../assets/shot_5.jpg";
import shot_6 from "../assets/shot_6.jpg";

export default {
  name: "version",
  data() {
    return {
      shots: [
        { h1: "在身份页进行各种认证可获得经验奖励", imgSrc: shot_1},
        {
          h1: "通过邀请好友、每日签到可获得经验奖励",
          imgSrc: shot_2,
          imgSrc2: shot_3
        },
        { h1: "可通过挖矿来获取 EGO，并在活动中心进行兑换", imgSrc: shot_4 },
        {
          h1: "对第三方进行数据授权可获得毛豆",
          imgSrc: shot_5,
          imgSrc2: shot_6
        }
      ]
    };
  },
  mounted: function() {
    let img = document.getElementsByTagName("img");

    for (var i = 0; i < img.length; i++) {
      let imgSrc = img[i].src;
      let srcLength = imgSrc.length
    if (srcLength <= 0) {
      img[i].style.display = "none";
    }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/global.scss";

.version {
  width: 100vw;
  background-color: #0d1424;
  padding: 0 0 20px 0;

  .content {
    padding: 15px;
    margin-bottom: 10px;

    h1 {
      margin-bottom: 15px;
      font-weight: 400 !important;
      color: #b8c7e0 !important;
      @include h1(15px, 21px);
    }

    .screenshots {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  img {
    width: 48%;
    border: 1px solid #2a3b57;
  }
}
</style>
