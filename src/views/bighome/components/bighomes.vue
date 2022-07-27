<template>
  <div class="aaa">
    <dv-full-screen-container>
      <div class="aaas flex">
        <div>
          <sidebar class="sidebar-container" />
        </div>
        <!-- <router-link to="/"
          >返回首sssssssssssssssssssssssssssssssssssssssssssssssss页</router-link
        > -->

        <div class="flex-1 pl15 pr15">
          <!-- 上面 -->
          <div class="handertop flex flex-between">
            <!-- 左面文字 -->
            <div>
              <div class="fs23 pt20">卓阳能源集团综合能源管理平台</div>
              <div class="pt10 color-colortexts">
                <i class="el-icon-location-outline fs20" /> 中国
                <span>数据跟新时间 20222年</span>
              </div>
            </div>
            <!-- 右边头像 -->
            <div class="flex align-items-center">
              <!-- 放大 -->
              <screenfull id="screenfull" class="mr20 fs20" />
              <el-dropdown trigger="click">
                <div class="flex align-items-center color-white changheand">
                  <img
                    :src="avatar + '?imageView2/1/w/80/h/80'"
                    class="user-avatar"
                  />

                  <div class="fs15 ml20">冯宏伟</div>
                  <i class="el-icon-caret-bottom fs20" />
                </div>

                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="logout">
                    <span style="display: block">退出登录</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <!-- 中间 -->
          <div class="flex flex-between mt20 cencard">
            <!-- 第一个 -->
            <div class="wit32 bg-bgcardcolor height pl15 pr15 pt10 pb10">
              <!-- 标题数据 -->
              <div class="flex align-items-center">
                <div class="left-small-box bg-main1 mr20"></div>
                <div class="fs20">光伏数据</div>
              </div>
              <!-- 接入等数据 -->
              <div class="pt30 flex flex-between pl25 pr25">
                <div class="flex flex-col align-items-center">
                  <div class="fs17 color-textnocolor">接入容量</div>
                  <div class="fs20 pt20 pb10 fw600">450</div>
                  <div class="fs17 color-colortexts">MWp</div>
                </div>

                <div class="flex flex-col align-items-center">
                  <div class="fs17 color-textnocolor">接入电站数量</div>
                  <div class="fs20 pt20 pb10 fw600">2</div>
                  <div class="fs17 color-colortexts">座</div>
                </div>
              </div>
              <!-- 下面那三条数据 -->
              <div class="pt30 pl25 pr25">
                <!-- 1 -->
                <div class="flex flex-between">
                  <div class="color-textnocolor">今日发电量</div>
                  <div class="flex flex-between">
                    <div class="pr20 fw600">23.44</div>
                    <div class="color-colortexts">万kWh</div>
                  </div>
                </div>
                <!-- 2 -->
                <div class="flex flex-between pt30">
                  <div class="color-textnocolor">当月发电量</div>
                  <div class="flex flex-between">
                    <div class="pr20 fw600">1658.11</div>
                    <div class="color-colortexts">万kWh</div>
                  </div>
                </div>
                <!-- 3 -->
                <div class="flex flex-between pt30">
                  <div class="color-textnocolor">累计发电量</div>
                  <div class="flex flex-between">
                    <div class="pr20 fw600">90844.23</div>
                    <div class="color-colortexts">万kWh</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 第二个 -->
            <div class="wit32 bg-bgcardcolor height pl15 pr15 pt10 pb10">
              <!-- 标题数据 -->
              <div class="flex align-items-center">
                <div class="left-small-box bg-main2 mr20"></div>
                <div class="fs20">光伏数据</div>
              </div>
              <!-- 接入等数据 -->
              <div class="pt30 flex flex-between pl25 pr25">
                <div class="flex flex-col align-items-center">
                  <div class="fs17 color-textnocolor">装机容量</div>
                  <div class="fs20 pt20 pb10 fw600">450</div>
                  <div class="fs17 color-colortexts">MWp</div>
                </div>

                <div class="flex flex-col align-items-center">
                  <div class="fs17 color-textnocolor">装机功率</div>
                  <div class="fs20 pt20 pb10 fw600">8.1</div>
                  <div class="fs17 color-colortexts">MWp</div>
                </div>

                <div class="flex flex-col align-items-center">
                  <div class="fs17 color-textnocolor">接入电站数量</div>
                  <div class="fs20 pt20 pb10 fw600">2</div>
                  <div class="fs17 color-colortexts">座</div>
                </div>
              </div>
              <!-- 下面那三条数据 -->
              <div class="pt30 pl20 pr25">
                <!-- 1 -->
                <div class="flex flex-between">
                  <div class="color-textnocolor">总交易次数</div>
                  <div class="flex flex-between">
                    <div class="pr20 fw600">23.44</div>
                    <div class="color-colortexts">次</div>
                  </div>
                </div>
                <div class="flex flex-between pt20">
                  <div class="color-textnocolor">总桩数</div>
                  <div class="flex flex-between">
                    <div class="pr20 fw600">5824</div>
                    <div class="color-colortexts">个</div>
                  </div>
                </div>
                <!-- 2 -->
                <div class="flex flex-between pt20">
                  <div class="color-textnocolor">总电站数量</div>
                  <div class="flex flex-between">
                    <div class="pr20 fw600">566</div>
                    <div class="color-colortexts">座</div>
                  </div>
                </div>
                <!-- 3 -->
                <div class="flex flex-between pt20">
                  <div class="color-textnocolor">故障数</div>
                  <div class="flex flex-between">
                    <div class="pr20 fw600">23</div>
                    <div class="color-colortexts">个</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 第三个 -->
            <div class="wit32 bg-bgcardcolor height pl15 pr15 pt10 pb10">
              <!-- 标题数据 -->
              <div class="flex align-items-center">
                <div class="left-small-box bg-assist1 mr20"></div>
                <div class="fs20">充电桩数据</div>
              </div>
              <!-- 接入等数据 -->
              <div class="pt30 flex flex-between pl25 pr25">
                <div class="flex flex-col align-items-center">
                  <div class="fs17 color-textnocolor">总收费</div>
                  <div class="fs20 pt20 pb10 fw600">2387.09</div>
                  <div class="fs17 color-colortexts">元</div>
                </div>

                <div class="flex flex-col align-items-center">
                  <div class="fs17 color-textnocolor">今日充电电量</div>
                  <div class="fs20 pt20 pb10 fw600">450</div>
                  <div class="fs17 color-colortexts">MWp</div>
                </div>
              </div>
              <!-- 下面那三条数据 -->
              <div class="pt30 pl25 pr25">
                <!-- 1 -->
                <div class="flex flex-between">
                  <div class="color-textnocolor">总交易次数</div>
                  <div class="flex flex-between">
                    <div class="pr20 fw600">179</div>
                    <div class="color-colortexts">次</div>
                  </div>
                </div>
                <div class="flex flex-between pt20">
                  <div class="color-textnocolor">总桩数</div>
                  <div class="flex flex-between">
                    <div class="pr20 fw600">5824</div>
                    <div class="color-colortexts">个</div>
                  </div>
                </div>
                <!-- 2 -->
                <div class="flex flex-between pt20">
                  <div class="color-textnocolor">总电站数量</div>
                  <div class="flex flex-between">
                    <div class="pr20 fw600">566</div>
                    <div class="color-colortexts">座</div>
                  </div>
                </div>
                <!-- 3 -->
                <div class="flex flex-between pt20">
                  <div class="color-textnocolor">故障数</div>
                  <div class="flex flex-between">
                    <div class="pr20 fw600">23</div>
                    <div class="color-colortexts">个</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 最下面 -->
          <div class="flex flex-between hit53 pt20">
            <!-- 左边的地图盒子 -->
            <div class="bg-bgcardcolor wit66">
              <div class="hit80 bgmaptop pl25 pr25 pt10">地图查询</div>
              <div class="pl25 pr25 flex flex-betwween">
                <div id="sures"></div>
                <div>CO2 减排</div>
              </div>
            </div>
          </div>

          <!-- 右侧 -->
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import cityMap from "@/utils/china-main-city-map.js";

import { mapState, mapGetters } from "vuex";
import sidebar from "@/layout/components/Sidebar/index.vue";
import Screenfull from "@/components/Screenfull";
export default {
  name: "bighomes",
  components: { sidebar, Screenfull },
  props: {
    msg: String,
  },
  data() {
    return {
      //中国地图（第一级地图）的ID、Name、Json数据
      chinaId: 100000,
      chinaName: "china",
      chinaJson: null,
      //记录父级ID、Name
      mapStack: [],
      parentId: null,
      parentName: null,
      //Echarts地图全局变量，主要是在返回上级地图的方法中会用到
      myChart: null,
    };
  },
  methods: {
    // 退出登录
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
    back() {
      if (this.mapStack.length != 0) {
        //如果有上级目录则执行
        var map = this.mapStack.pop();
        let response = require(`/static/json/map/${map.mapId}.json`);
        const mapJson = response;
        this.registerAndsetOption(
          this.myChart,
          map.mapId,
          map.mapName,
          mapJson,
          false
        );

        //返回上一级后，父级的ID、Name随之改变
        this.parentId = map.mapId;
        this.parentName = map.mapName;
        // });
      }
    },

    mapChart() {
      let response = require(`/static/json/map/${this.chinaId}.json`);
      console.log(response, "这是文件");
      // axios
      //   .get("./static/json/map/" + this.chinaId + ".json", {})
      // .then((response) => {
      const mapJson = response;
      this.chinaJson = mapJson;
      this.myChart = this.$echarts.init(document.getElementById("sures"));
      this.registerAndsetOption(
        this.myChart,
        this.chinaId,
        this.chinaName,
        mapJson,
        false
      );
      this.parentId = this.chinaId;
      this.parentName = "china";
      this.myChart.on("click", (param) => {
        var cityId = cityMap[param.name];
        if (cityId) {
          //代表有下级地图
          let response = require(`/static/json/map/${cityId}.json`);
          const mapJson = response;
          this.registerAndsetOption(
            this.myChart,
            cityId,
            param.name,
            mapJson,
            true
          );
        } else {
          //没有下级地图，回到一级中国地图，并将mapStack清空
          this.registerAndsetOption(
            this.myChart,
            this.chinaId,
            this.chinaName,
            this.chinaJson,
            false
          );
          this.mapStack = [];
          this.parentId = this.chinaId;
          this.parentName = this.chinaName;
        }
      });
      // });
    },

    registerAndsetOption(myChart, id, name, mapJson, flag) {
      this.$echarts.registerMap(name, mapJson);
      myChart.setOption({
        series: [
          {
            type: "map",
            map: name,
            zoom: 1,
            roam: true,
            aspectScale: 0.75,
            scaleLimit: {
              min: 0.1,
              max: 10,
            },
            // 地图上的标签
            label: {
              show: true,
              position: "top",
              distance: 5,
              color: "#fff",
              fontSize: "10",
              align: "center",
              verticalAlign: "middle",
            },

            // name: 'name',
            // colorBy: "series",
            center: undefined,
            // 地图本身
            itemStyle: {
              normal: {
                areaColor: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#0f0f1c", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#353542", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺为 false
                },

                // borderColor: "#1dc199",
                // areaColor: "rgba(0,0,0,0)",bbbbc8
                borderColor: "#b2b2bf",
                borderWidth: 1,
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10,
                shadowColor: "rgba(128, 217, 248, .3)",
                emphasis: {
                  areaColor: "#1dc199",
                  borderWidth: 1,
                },
              },
            },
            // 选中
            select: {
              disabled: false,
              label: {
                color: "#fff",
                backgroundColor: "#389BB7",
              },
            },
            data: this.initMapData(mapJson),
            markPoint: {
              symbol: "pin",
              symbolSize: "50",
              data: [{ name: "你是", coord: [112.733538, 38.41769] }],
              // symbol:'image://https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsrc.sotu114.com%2Fdata%2Fattachment%2Fforum%2F202006%2F09%2F190518g9jrk7x9d4ccpb0b.item.jpg-ture&refer=http%3A%2F%2Fsrc.sotu114.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660981387&t=8becdef19f9d181145f1528e86dd065b'
            },
          },
        ],
      });

      if (flag) {
        //往this.mapStack里添加this.parentId，this.parentName,返回上一级使用
        this.mapStack.push({
          mapId: this.parentId,
          mapName: this.parentName,
        });
        this.parentId = id;
        this.parentName = name;
      }
    },

    initMapData(mapJson) {
      var mapData = [];
      for (var i = 0; i < mapJson.features.length; i++) {
        mapData.push({
          name: mapJson.features[i].properties.name,
          id: mapJson.features[i].id,
          // emphasis: {
          //   disabled: false,
          //   areaColor: "#fff",
          //   backgroundColor: "#fff",
          // },
        });
      }
      return mapData;
    },
  },
  mounted() {
    setTimeout(() => {
      this.mapChart();
    }, 500);
  },
  computed: {
    ...mapState({
      sidebar: (state) => state.app.sidebar,
    }),
    ...mapGetters(["avatar"]),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile",
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.left-small-box {
  width: 5px;
  height: 30px;
}
.cencard {
  // height: calc(45% - 80px);
  height: 350px;
}

.user-avatar {
  width: 40px;
  height: 40px;
}
.handertop {
  height: 80px;
  background: #2d2d2d;
}
body {
  margin: 0;
  width: 100%;
  height: 100%;
}

.aaas {
  background: #2d2d2d;
  // background-image: url("../../../assets/img/bgimg.png");
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  box-shadow: 0 0 3px #00f;
  color: #fff;
  .sidebar-container {
    position: static !important;
  }
}
#sures {
  width: 500px;
  height: 380px;
  // margin: 0 auto;
}
.wit32 {
  width: 32%;
}

.wit66 {
  width: 66%;
}
.hit53 {
  height: 480px;
}
.hit80 {
  height: 80px;
}
.bgmaptop {
  background: #393948;
}
</style>
