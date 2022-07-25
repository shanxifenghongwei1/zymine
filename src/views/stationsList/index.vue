<template>
  <div class="bg-assist4 width-full app-main cloor-white p30">
    <!-- 搜索 -->
    <div class="sech flex">
      <div class="b-a-1 line-color-assist10">
        <el-select v-model="value" placeholder="按代码排序">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>

      <div class="b-a-1 line-color-assist10 flex-1">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>

      <div class="b-a-1 line-color-assist10">
        <el-select v-model="value1" placeholder="以代码查询">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="b-a-1 line-color-assist10">
        <el-button>查询</el-button>
      </div>
    </div>

    <div class="colblock flex mt15">
      <div class="colblock-1 p10 pr15 pl15 color-white">
        <svg-icon icon-class="rightcolor" /> 全部
      </div>
      <div class="colblock-2 p10 pr15 pl15 color-white">
        <svg-icon icon-class="rightcolor" /> 正常
      </div>
      <div class="colblock-3 p10 pr15 pl15 color-white">
        <svg-icon icon-class="rightcolor" /> 警告
      </div>
      <div class="colblock-4 p10 pr15 pl15 color-white">
        <svg-icon icon-class="rightcolor" /> 故障
      </div>
      <div class="colblock-5 p10 pr15 pl15 color-white">
        <svg-icon icon-class="rightcolor" /> 离线
      </div>
      <div class="colblock-6 p10 pr15 pl15 color-white">
        <svg-icon icon-class="rightcolor" /> 规划
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "按代码排序",
        },
        {
          value: "选项2",
          label: "按容量排序",
        },
      ],
      options1: [
        {
          value: "选项1",
          label: "以代码查询",
        },
        {
          value: "选项2",
          label: "以容量查询",
        },
      ],
      value: "",
      value1: "",
      input: "",
    };
  },
};
</script>

<style lang="scss" >
.colblock-1 {
  width: 100px;
  background: #19a3c7;
}
.colblock-2 {
  width: 100px;
  background: #04cd18;
}
.colblock-3 {
  width: 100px;
  background: #c38a18;
}
.colblock-4 {
  width: 100px;
  background: #c30e18;
}
.colblock-5 {
  width: 100px;
  background: #999999;
}
.colblock-6 {
  width: 100px;
  background: #040ed7;
}

.sech {
  width: 50%;
  .el-button {
    background: #204767;
    border: none;
    color: #fff;
  }
}
</style>