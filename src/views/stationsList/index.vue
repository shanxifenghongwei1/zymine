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
    <!-- 颜色样例 -->
    <div class="colblock flex mt15">
      <div
        v-for="(item, index) in colorblack"
        :key="index"
        class="colblock-1 bgcolor1 p10 pr15 pl15 color-white"
        :class="'bgcolor' + (index + 1)"
        @click="chnagcolorlist(index)"
      >
        <svg-icon
          icon-class="rightcolor"
          :class="index == colorblackcurrent ? 'svgcloor' : 'svgcloor1'"
        />
        {{ item.name }}
      </div>
    </div>
    <!-- 电站列表的表格 -->
    <div class="pt20">
      <el-table
        :data="tableData"
        :header-row-style="handstyles"
        style="width: 50%"
      >
        <el-table-column label="状态" width="100">
          <template slot-scope="scope">
            <div class="flex">
              <span
                v-if="scope.row.date == '全部'"
                class="rodivs bgcolor1"
              ></span>
              <div
                v-if="scope.row.date == '正常'"
                class="rodivs bgcolor1"
              ></div>
              <div
                v-if="scope.row.date == '警告'"
                class="rodivs bgcolor2"
              ></div>
              <div
                v-if="scope.row.date == '故障'"
                class="rodivs bgcolor3"
              ></div>
              <div
                v-if="scope.row.date == '离线'"
                class="rodivs bgcolor4"
              ></div>
              <div
                v-if="scope.row.date == '规划'"
                class="rodivs bgcolor1"
              ></div>

              <!-- <span style="margin-left: 10px">{{ scope.row.date }}</span> -->
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="电站代码" width="180">
        </el-table-column>
        <el-table-column prop="address" label="电站容量"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorblack: [
        { name: "全部", id: 0 },
        { name: "正常", id: 1 },
        { name: "警告", id: 2 },
        { name: "故障", id: 3 },
        { name: "离线", id: 4 },
        { name: "规划", id: 5 },
      ],
      colorblackcurrent: 0,
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
      tableData: [
        {
          date: "正常",
          name: "KSA3222117",
          address: "3000kWh",
          soa: "6",
        },
        {
          date: "警告",
          name: "KSA3222885",
          address: "80kWh",
          soa: "6",
        },
        {
          date: "故障",
          name: "KSA3222336",
          address: "500kWh",
          soa: "6",
        },
        {
          date: "离线",
          name: "KSA3222117998",
          address: "900kWh",
          soa: "6",
        },
      ],
      handstyles: {
        backgroundColor: "#333",
      },
      value: "",
      value1: "",
      input: "",
    };
  },
  methods: {
    chnagcolorlist(index) {
      this.colorblackcurrent = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.svgcloor {
  fill: currentColor;
  color: #fff;
}
.svgcloor1 {
  fill: currentColor;
  color: #999999;
}
.colblock-1 {
  width: 100px;
  margin-right: 1px;
  cursor: pointer;
}

.bgcolor1 {
  background: #19a3c7;
}
.bgcolor2 {
  background: #04cd18;
}
.bgcolor3 {
  background: #c38a18;
}
.bgcolor4 {
  background: #c30e18;
}
.bgcolor5 {
  background: #999999;
}
.bgcolor6 {
  background: #040ed7;
}

.rodivs {
  width: 20px;
  height: 20px;
  border-radius: 50%;
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