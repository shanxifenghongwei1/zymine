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

.el-picker-panel__icon-btn {
  color: #fff;
}

// 日历中的背景颜色
.el-date-table td.in-range div {
  background: #7fb926;
}

// select 弹窗的scc 设置
.el-select-dropdown {
  // border-color: #00c8c8;
  border: none;
  // 下拉框出来的每个item
  .el-select-dropdown__item.hover {
    background: #393948;
    color: #fff;
  }
  .el-select-dropdown__item {
    color: #fff;
  }
}

// 上面那个小三角形
.popper__arrow {
  border: none !important;
}

.popper__arrow::after {
  border-bottom: 0px !important;
  // border-bottom-color: #00c8c8 !important;
  border: none;
}
// 下面选项
.el-popper {
  background: #2d2d2d;
  color: #fff;
  .el-dropdown-menu__item {
    color: #fff;
  }
}

.el-input__inner {
  background: rgba($color: #000000, $alpha: 0);
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
