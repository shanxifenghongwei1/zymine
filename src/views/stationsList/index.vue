<template>
  <div class="width-full app-main cloor-white p30">
    <!-- 搜索 -->
    <div class="sech flex bg-bgcardcolor">
      <div class="b-a-1 line-color-main2">
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

      <div class="b-a-1 line-color-main2 flex-1">
        <el-input
          class="bg-bgcardcolor"
          v-model="input"
          placeholder="请输入内容"
        ></el-input>
      </div>

      <div class="b-a-1 line-color-main2">
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
      <div class="b-a-1 line-color-main2 ml20">
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
          :class="item.ischicked ? 'svgcloor' : 'svgcloor1'"
        />
        {{ item.name }}
      </div>
    </div>
    <!-- 电站列表的表格 -->
    <div class="pt20">
      <el-table
        :data="tableData"
        :show-header="true"
        :row-style="handstyles"
        style="width: 70%"
      >
        <el-table-column label="状态" width="100">
          <template slot-scope="scope">
            <div class="flex">
              <div
                v-if="scope.row.date == '运行'"
                class="rodivs bgcolor2"
              ></div>
              <div
                v-if="scope.row.date == '规划'"
                class="rodivs bgcolor3"
              ></div>
              <div
                v-if="scope.row.date == '故障'"
                class="rodivs bgcolor4"
              ></div>
              <div
                v-if="scope.row.date == '离网'"
                class="rodivs bgcolor5"
              ></div>

              <!-- <span style="margin-left: 10px">{{ scope.row.date }}</span> -->
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="电站代码" width="180">
        </el-table-column>
        <el-table-column prop="name" label="电站名称" width="300">
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
        { name: "全部", id: 0, ischicked: true },
        { name: "运行", id: 1, ischicked: true },
        { name: "规划", id: 2, ischicked: true },
        { name: "故障", id: 3, ischicked: true },
        { name: "离网", id: 4, ischicked: true },
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
          date: "运行",
          name: "KSA3222117",
          address: "3000kWh",
          soa: "6",
        },
        {
          date: "运行",
          name: "KSA3222117",
          address: "3000kWh",
          soa: "6",
        },
        {
          date: "运行",
          name: "KSA3222117",
          address: "3000kWh",
          soa: "6",
        },
        {
          date: "规划",
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
          date: "离网",
          name: "KSA3222117998",
          address: "900kWh",
          soa: "6",
        },
      ],
      handstyles: {
        backgroundColor: "#363543",
        color: "#c2c3c9",
      },
      value: "",
      value1: "",
      input: "",
    };
  },
  methods: {
    chnagcolorlist(index) {
      let any = this.colorblack[index];
      console.log(any);
      if (any.id == 0) {
        if (any.ischicked) {
          this.colorblack.forEach((items) => {
            items.ischicked = false;
          });
        } else {
          this.colorblack.forEach((items) => {
            items.ischicked = true;
          });
        }
      } else {
        this.colorblack[index].ischicked = !this.colorblack[index].ischicked;
        if (!this.colorblack[index].ischicked) {
          this.colorblack[0].ischicked = false;
        }
      }
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
  color: rgba($color: #fff, $alpha: 0.5);
}
.colblock-1 {
  width: 172px;
  margin-right: 1px;
  cursor: pointer;
}

.bgcolor1 {
  background: #0d386d;
}
.bgcolor2 {
  background: #7fb926;
}
.bgcolor3 {
  background: #02634f;
}
.bgcolor4 {
  background: #d4cd1c;
}
.bgcolor5 {
  background: #a0a0a0;
}

.rodivs {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.sech {
  width: 70%;
  .el-button {
    background: #353542;
    border: none;
    color: #fff;
  }
}
</style>