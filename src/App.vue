<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import { toggleClass } from "@/utils";
export default {
  name: "App",
  created() {
    // #304156
  },
  mounted() {
    // // 修改整体文档颜色
    // toggleClass(document.body, "custom-theme");
    // // 修改主题色
    // this.$store.dispatch("settings/changeSetting", {
    //   key: "theme",
    //   value: "#00c8c8",
    // });
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

.el-select-dropdown {
  border-color: #00c8c8;
  // 下拉框出来的每个item
  .el-select-dropdown__item.hover {
    background: #00c8c8;
    color: #fff;
  }
  .el-select-dropdown__item {
    color: #fff;
  }
}
.popper__arrow::after {
  border-bottom-color: #00c8c8 !important;
}
.el-popper {
  background: #7fb926 !important;
  color: #fff;
  .el-dropdown-menu__item {
    color: #fff;
  }
}
.el-input__inner {
  background: #204767;
  color: #fff;
  border: none;
  border-radius: 0;
}

// 表格
.el-table {
  tr {
    background: #204767;
    color: #fff;
  }
  td {
    border: none !important;
  }
  th {
    background: #204767;
    border: none !important;
  }
  .slecleRowColor {
    background: #204767 !important;
  }
  tbody tr:hover > td {
    background-color: #00c8c8 !important;
  }
}
.el-table::before {
  background: none !important;
}
</style>
