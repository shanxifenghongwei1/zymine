<template>
  <div class="aaa">
    <dv-full-screen-container>
      <div class="aaas">
        <router-link to="/">返回首页</router-link>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
export default {
  name: "bighomes",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin: 0;
  width: 100%;
  height: 100%;
}
.aaa {
  width: 100%;
  height: 100%;
}
.aaas {
  /* background: #333; */
  background-image: url("../../../assets/img/bgimg.png");
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  box-shadow: 0 0 3px #00f;
  color: #fff;
}
</style>
