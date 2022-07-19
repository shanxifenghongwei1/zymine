<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { toggleClass } from "@/utils";
export default {
  name: "App",
  created() {
    // 修改整体文档颜色
    toggleClass(document.body, "custom-theme");
    // 修改主题色
    this.$store.dispatch("settings/changeSetting", {
      key: "theme",
      value: "#304156",
    });
    // #304156
  },
};
</script>
<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
@import "styles/anminestyle/base.scss";
</style>
