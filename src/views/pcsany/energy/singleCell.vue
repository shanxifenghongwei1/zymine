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

    <div class="flex">
      <!-- 左边的电池簇热力图 -->
      <div class="width-70 bg-bgcardcolor mt30">
        <div class="bglu color-white p15 flex flex-between">
          <div>电池簇热力图</div>
          <div class="flex">
            <div>显示电压温度图表</div>
            <div>导出</div>
          </div>
        </div>
        <!-- 下面的大方框 -->
        <div class="pt20 pb20 pl10 pr10 hi650 align-content-start">
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
            pt5
            pb5
            flex flex-between
            align-items-center
          "
        >
          <div>电池簇热力图</div>

          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </div>
      </div>
    </div>

    <div class="color-white">
      <div id="chartsz"></div>
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
    };
  },
  mounted() {
    this.initcharts();

    console.log(this.liefor(), "当前素组");
  },
  methods: {
    initcharts() {
      var myChart = this.$echarts.init(
        document.getElementById("chartsz"),
        "dark"
      );
      let option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.xlist().x,
        },
        yAxis: {
          type: "value",
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
      let a = {
        values: "40.000℃",
        numid: 1,
        children: [
          { dy: "3.161", xh: 1 },
          { dy: "3.161", xh: 2 },
          { dy: "3.161", xh: 3 },
          { dy: "3.161", xh: 4 },
          { dy: "3.161", xh: 5 },
          { dy: "3.161", xh: 6 },
          { dy: "3.161", xh: 7 },
          { dy: "3.161", xh: 8 },
          { dy: "3.161", xh: 9 },
          { dy: "3.161", xh: 10 },
          { dy: "3.161", xh: 11 },
          { dy: "3.161", xh: 12 },
          { dy: "3.161", xh: 13 },
        ],
      };

      let b = [];
      let children = [];
      for (let i = 0; i < 33; i++) {
        for (let m = 0; m < 20; m++)
          // b.push(a);
          b.push({
            values: "40.000℃",
            numid: 1,
            children: [
              { dy: "3.161", xh: 1 },
              { dy: "3.161", xh: 2 },
              { dy: "3.161", xh: 3 },
              { dy: "3.161", xh: 4 },
              { dy: "3.161", xh: 5 },
              { dy: "3.161", xh: 6 },
              { dy: "3.161", xh: 7 },
              { dy: "3.161", xh: 8 },
              { dy: "3.161", xh: 9 },
              { dy: "3.161", xh: 10 },
              { dy: "3.161", xh: 11 },
              { dy: "3.161", xh: 12 },
              { dy: "3.161", xh: 13 },
            ],
          });
      }

      return b;
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
.dcfather {
  width: 650px;
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
  overflow: auto;
  &::-webkit-scrollbar {
    display: block !important;
    width: 10px;
    height: 10px;
  }

  /* 设置滚动条的轨道 */
  &::-webkit-scrollbar-track {
    background: #04614f;
    border-radius: 2px;
  }
  /* 设置滚动条里面的小方块 */
  &::-webkit-scrollbar-thumb {
    background: rgba($color: #fff, $alpha: 0.5);
    border-radius: 10px;
  }
}
</style>