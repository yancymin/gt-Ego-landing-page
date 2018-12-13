<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./style/global.scss";
@import "./style/reset.css";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: $textColor-1;
}
</style>
