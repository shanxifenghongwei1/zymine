<template>
  <div class="emsx">
    <!-- 上面的tab   PCS 页面-->
    <div class="flex">
      <div class="flex align-items-center">
        <div class="color-white1">系统</div>
        <div class="bg-bgcardcolor ml30 b-a-1 line-color-main2">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <!-- // 下面的PCS -->
      <div class="flex align-items-center ml50">
        <div class="color-white1">电池簇</div>
        <div class="bg-bgcardcolor ml30 b-a-1 line-color-main2">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
    </div>

    <div class="flex" v-show="pmlook">
      <!-- 左边的电池簇热力图 -->
      <div class="width-70 bg-bgcardcolor mt30">
        <div class="bglu color-white p15 flex flex-between align-items-center">
          <div>电池簇热力图</div>
          <div class="flex align-items-center">
            <div
              class="bgheands pt5 pb5 pl10 pr10 mr10 changheand"
              @click="lookdy"
            >
              显示电压温度图表
            </div>
            <div class="flex align-items-center bgheands pt5 pb5 pl10 pr10">
              <svg-icon class="fs18 mr5" icon-class="xiazhai" /> 导出
            </div>
          </div>
        </div>
        <!-- 下面的大方框 -->
        <div class="pt20 pb20 pl10 pr10 hi650 other align-content-start">
          <!-- 一个纵向电池组 -->
          <div
            class="dcfather flex"
            v-for="(hed, inlie) in liefor()"
            :key="inlie"
          >
            <!-- 一个横向的电池组 -->
            <div
              class="mr5 mb5 w25 flex relative"
              v-for="(item, index) in hed.chi"
              :key="index"
            >
              <div
                class="
                  onedianchi
                  flex flex-col flex-between
                  align-items-center
                  relative
                  fs6
                  pt10
                "
                v-for="quer in item.children"
                :key="quer.xh"
                :class="acid == quer.id ? 'active' : ''"
                @click="changeacid(quer)"
              >
                <div class="smsmtext absolute left top text-center">
                  {{ quer.dy }}
                </div>
                <div class="absolute axis-x-center top10 color-white">v</div>
                <div class="bg-main1 absolute bottom axis-x-center sssss">
                  {{ quer.xh }}
                </div>
              </div>

              <div
                class="
                  absolute
                  axis-x-center
                  bottom30
                  color-white
                  fs6
                  fdson
                  pt5
                  pb5
                  pl50
                  pr50
                "
              >
                {{ item.values }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右面的 -->
      <div class="mt30 ml15 width-30">
        <div
          class="
            bglu
            color-white
            pl15
            pr15
            pt10
            pb10
            flex flex-between
            align-items-center
          "
        >
          <div>电池簇热力图</div>

          <el-date-picker
            class="bgheands"
            v-model="value1"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <!-- 参数 -->
        <div
          class="
            pt20
            pb20
            pl10
            pr10
            hi650
            bg-bgcardcolor
            align-content-start
            color-white1
          "
        >
          <div class="flex width-full text-center pt10 pb10 bghui">
            <div class="flex-1">参数</div>
            <div class="flex-1">最大值</div>
            <div class="flex-1">最小值</div>
          </div>
          <!-- 第二行的 -->
          <div class="flex width-full text-center pt10 pb10 bghei">
            <div class="flex-1">电压</div>
            <div class="flex-1">3.349</div>
            <div class="flex-1">3.231</div>
          </div>
          <!-- 第三行的 -->
          <div class="flex width-full text-center pt10 pb10 bghui">
            <div class="flex-1">温度</div>
            <div class="flex-1">-40</div>
            <div class="flex-1">-40</div>
          </div>

          <!-- 电压图表 -->
          <div class="pt10">
            <div class="pt10">电压（V）</div>
            <div id="dytb"></div>
          </div>

          <!-- 温度图表 -->
          <div class="pb10">
            <div class="pt10">温度（℃）</div>
            <div id="wdtb"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="color-white mt20 width-full" v-if="!pmlook">
      <div class="bglu color-white p15 flex flex-between align-items-center">
        <div>当前电压温度图表</div>
        <div class="flex align-items-center">
          <div
            class="bgheands pt5 pb5 pl10 pr10 mr10 changheand"
            @click="lookreli"
          >
            显示热力图
          </div>
          <div class="flex align-items-center bgheands pt5 pb5 pl10 pr10">
            <svg-icon class="fs18 mr5" icon-class="xiazhai" /> 导出
          </div>
        </div>
      </div>
      <div id="chartsz"></div>
      <div id="chartsx"></div>
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
          label: "选项1",
        },
        {
          value: "选项2",
          label: "选项2",
        },
      ],
      value: "",
      value1: "",
      acid: "0151",
      pmlook: true,
    };
  },
  mounted() {
    console.log(this.liefor(), "当前素组");
    setTimeout(() => {
      this.initdytub();
      this.initwdtub();
    }, 300);
  },
  methods: {
    lookdy() {
      this.pmlook = false;
      setTimeout(() => {
        this.initcharts();
        this.initcharts1();
      }, 300);
    },
    lookreli() {
      this.pmlook = true;

      setTimeout(() => {
        this.initdytub();
        this.initwdtub();
      }, 300);
    },
    changeacid(quer) {
      this.acid = quer.id;
    },
    // 电压图表放大
    initcharts() {
      var myChart = this.$echarts.init(
        document.getElementById("chartsz"),
        "dark"
      );
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        color: "#527f3e",
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.xlist().x,
        },
        yAxis: {
          type: "value",
          name: "电压（V）",
        },
        series: [
          {
            data: this.xlist().y,
            type: "line",
            areaStyle: {},
          },
        ],
      };

      myChart.setOption(option);
    },
    // 温度图表放大
    initcharts1() {
      var myChart = this.$echarts.init(
        document.getElementById("chartsx"),
        "dark"
      );
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        color: "#527f3e",
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.xlist().x,
        },
        yAxis: {
          type: "value",
          name: "温度（℃）",
        },
        series: [
          {
            data: this.xlist().y,
            type: "line",
            areaStyle: {},
          },
        ],
      };

      myChart.setOption(option);
    },
    // 电压图表
    initdytub() {
      var myChart = this.$echarts.init(document.getElementById("dytb"));
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        color: "#527f3e",
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.xlist().x,

          show: true,
          nameTextStyle: {
            color: "#fff",
            fontSize: 15,
            backgroundColor: "#fff",
          },

          // 是否展示坐标轴
          axisLine: {
            show: true,
            lineStyle: {
              color: "#fff",
              width: 1,
              type: "solid",
            },
          },
          axisTick: {
            show: true,
            alignWithLabel: true,
          },
          axisLabel: {
            color: "#fff",
          },
        },
        yAxis: {
          type: "value",

          show: true,
          nameTextStyle: {
            color: "#fff",
            fontSize: 15,
            backgroundColor: "#fff",
          },

          // 是否展示坐标轴
          axisLine: {
            show: true,
            lineStyle: {
              color: "#fff",
              width: 1,
              type: "solid",
            },
          },
          axisTick: {
            show: true,
            alignWithLabel: true,
          },
          axisLabel: {
            color: "#fff",
          },
        },
        series: [
          {
            data: this.xlist().y,
            type: "line",
            areaStyle: {},
          },
        ],
      };

      myChart.setOption(option);
    },
    // 电压温度图表
    initwdtub() {
      var myChart = this.$echarts.init(document.getElementById("wdtb"));
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        color: "#527f3e",
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.xlist().x,

          show: true,
          nameTextStyle: {
            color: "#fff",
            fontSize: 15,
            backgroundColor: "#fff",
          },

          // 是否展示坐标轴
          axisLine: {
            show: true,
            lineStyle: {
              color: "#fff",
              width: 1,
              type: "solid",
            },
          },
          axisTick: {
            show: true,
            alignWithLabel: true,
          },
          axisLabel: {
            color: "#fff",
          },
        },
        yAxis: {
          type: "value",

          show: true,
          nameTextStyle: {
            color: "#fff",
            fontSize: 15,
            backgroundColor: "#fff",
          },

          // 是否展示坐标轴
          axisLine: {
            show: true,
            lineStyle: {
              color: "#fff",
              width: 1,
              type: "solid",
            },
          },
          axisTick: {
            show: true,
            alignWithLabel: true,
          },
          axisLabel: {
            color: "#fff",
          },
        },
        series: [
          {
            data: this.xlist().y,
            type: "line",
            areaStyle: {},
          },
        ],
      };

      myChart.setOption(option);
    },
    xlist() {
      let a = {
        x: [],
        y: [],
      };
      for (let i = 0; i < 47; i++) {
        a.x.push(1 + 5 * i);
        a.y.push(500 + 5 * i);
      }
      return a;
    },
    // 总数据
    mokeList() {
      let b = [];

      for (let i = 0; i < 33; i++) {
        b.push({
          values: "40.000℃",
          numid: 1,
          children: this.chiles(i),
        });
      }

      return b;
    },
    // 13 节电池
    chiles(i) {
      let children = [];
      for (let m = 0; m < 13; m++) {
        children.push({ dy: "3.161", xh: m + 1, id: m + "15" + i });
      }
      return children;
    },
    //  分布成列
    liefor() {
      let p = [];
      for (let i = 1; i < 32; i = i + 4) {
        p.push({
          chi: this.mokeList().slice(i, i + 4),
          name: "" + i + "_" + (i + 4),
        });
      }
      return p;
    },
    showbig() {
      this.isshow = !this.isshow;
    },
    // 1he2g  1400/年      // 50
  },
};
</script>

<style lang="scss" scoped>
.bgheands {
  background: rgb(88, 139, 36);
}
.dcfather {
  width: 650px;
  .active {
    background: rgb(20, 83, 74);
  }
}
.bghui {
  background: rgb(70, 70, 82);
}
.bghei {
  background: rgb(47, 47, 55);
}
.sssss {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
}
.smsmtext {
  font-size: 12px;
  // -webkit-transform-origin-x: 0;
  // transform: scale(0.5);
  width: 15px;
  color: #fff;
}
.fdson {
  background: rgba($color: #000000, $alpha: 0.6);
}
.w25 {
  width: 500px;
}
.onedianchi {
  width: 50px;
  height: 90px;
  border: 2px solid #49651b;
  background: #7f9483;
}

#chartsz {
  width: 100%;
  height: 350px;
}
#chartsx {
  width: 100%;
  height: 350px;
}
#dytb {
  width: 100%;
  height: 230px;
}
#wdtb {
  width: 100%;
  height: 230px;
}
.emsx {
  padding: 50px;
  height: 100%;
}
.bglu {
  background: #49651b;
}

.width-70 {
  width: 70%;
}
.hi650 {
  height: 650px;

  // overflow: hidden;
  // overflow-y: scroll;
}

.other {
  overflow: auto;
  &::-webkit-scrollbar {
    display: block !important;
    width: 10px;
    height: 10px;
  }

  /* 设置滚动条的轨道 */
  &::-webkit-scrollbar-track {
    background: #606866;
    border-radius: 2px;
  }
  /* 设置滚动条里面的小方块 */
  &::-webkit-scrollbar-thumb {
    background: rgba($color: #fff, $alpha: 0.5);
    border-radius: 10px;
  }
}
</style>