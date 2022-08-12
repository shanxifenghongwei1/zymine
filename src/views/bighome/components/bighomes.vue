<template>
  <div class="aaa" :class="classObj">
    <dv-full-screen-container>
      <div class="aaas flex">
        <div v-if="leftshow">
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
              <div class="fs23 pt20">
                <div class="flex align-items-center">
                  <hamburger
                    id="hamburger-container"
                    :is-active="sidebar.opened"
                    class="hamburger-container"
                    @toggleClick="toggleSideBar"
                  />
                  <div>卓阳能源集团综合能源管理平台</div>
                </div>
              </div>
              <div class="pt10 color-colortexts">
                <i class="el-icon-location-outline fs20" /> 中国
                <span>数据跟新时间 {{ timetotop }}</span>
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
                <div class="fs20">储能数据</div>
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
              <!-- 地图查询的搜索模块 -->
              <div class="hit90 bgmaptop pl25 pr25 pt10 pb10 flex flex-between">
                <div>
                  <div class="flex align-items-center">
                    <div class="mr10" style="line-height: 40px; width: 90px">
                      地图查询
                    </div>
                    <el-input
                      placeholder="请输入电站名称或者级联SN"
                      class="bg-bgcardcolor"
                      prefix-icon="el-icon-search"
                      v-model="input2"
                    >
                    </el-input>
                  </div>
                  <div style="height: 30px"></div>
                </div>
                <!-- 级联选择 -->
                <div>
                  <div class="flex">
                    <el-select
                      class="bg-bgcardcolor mr15"
                      v-model="value1"
                      placeholder="全部控制策略"
                    >
                      <el-option
                        v-for="item in optionsa"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                    <!-- 省 -->
                    <el-select
                      class="bg-bgcardcolor mr15"
                      v-model="value"
                      placeholder="请选择省"
                      @change="changeproview"
                    >
                      <el-option
                        v-for="item in anysityList"
                        :key="item.id"
                        :label="item.name"
                        :value="item.indexlit"
                      >
                      </el-option>
                    </el-select>

                    <!-- 市 -->
                    <el-select
                      class="bg-bgcardcolor"
                      v-model="value2"
                      placeholder="请选择市"
                      @change="changechengshi"
                    >
                      <el-option
                        v-for="item in chengshiList"
                        :key="item.id"
                        :label="item.name"
                        :value="item.indexlit"
                      >
                      </el-option>
                    </el-select>
                  </div>
                  <!-- 下面的选择日期 -->
                  <div class="nishi mt10 bg-bgcardcolor" @click="changetime">
                    <el-date-picker
                      v-model="input4"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                    >
                    </el-date-picker>
                  </div>
                </div>
                <div class="text-center bloker">查询</div>
              </div>

              <div class="pl25 pr25 flex flex-betwween">
                <div id="sures"></div>
                <!-- CO₂减排 -->
                <div style="width: 50%">
                  <div class="flex pt15">
                    <div class="flex flex-col text-center flex-1">
                      <div class="fs18 color-textnocolor">CO₂减排</div>
                      <div class="fs20 pt15 pb10 fw600">117.78</div>
                      <div class="fs17 color-colortexts">t</div>
                    </div>

                    <div class="flex flex-col text-center flex-1">
                      <div class="fs17 color-textnocolor">累计节碳</div>
                      <div class="fs20 pt15 pb10 fw600">54.78</div>
                      <div class="fs17 color-colortexts">t</div>
                    </div>

                    <div class="flex flex-col text-center flex-1">
                      <div class="fs17 color-textnocolor">等效造林</div>
                      <div class="fs20 pt15 pb10 fw600">23.45</div>
                      <div class="fs17 color-colortexts">ha</div>
                    </div>
                  </div>
                  <!-- 下面的环形图 -->
                  <div id="piebox"></div>
                </div>
              </div>
            </div>

            <!-- 右下角的图 -->
            <div class="bg-bgcardcolor wit32">
              <div class="flex flex-between bgmaptop p25 align-items-center">
                <div class="fs20">车辆soc分布</div>
                <div>{{ timetotop }}</div>
              </div>
              <div id="categorysoc"></div>
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
import chinamaps from "/static/json/map/100000.json";
import { mapState, mapGetters } from "vuex";
import sidebar from "@/layout/components/Sidebar/index.vue";
import Screenfull from "@/components/Screenfull";
import Hamburger from "@/components/Hamburger";
export default {
  name: "bighomes",
  components: { sidebar, Screenfull, Hamburger },
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
      anysityList: [], //省级的数据
      chengshiList: [], //市级的数据
      // 策略
      optionsa: [
        {
          value: "选项1",
          label: "自发自用",
        },
        {
          value: "选项2",
          label: "峰谷套利",
        },
        {
          value: "选项3",
          label: "削峰填谷",
        },
      ],

      value1: "", // 策略选中数据

      input2: "", // 地图查询
      options: {},
      value: "", //省级的选中数据
      value2: "", // 市级的选中数据
      input4: "", //下面的日历开始时间
      input5: "", //下面日历的结束时间
      timetotop: "获取中..", // 时间
      intervals: null,
      ischengshi: false,
      issheng: false,
      clickcityname: "",
      leftshow: true,
    };
  },
  methods: {
    changetime() {},
    // 选择省之后的结果
    changeproview(e) {
      this.ischengshi = false;
      this.issheng = true;
      let name = this.anysityList[e].name;
      let cityId = cityMap[name];
      if (cityId) {
        //代表有下级地图
        let response = require(`/static/json/map/${cityId}.json`);
        this.chengshiList = this.initDataList(response);
        const mapJson = response;
        // console.log(response, "市级的数据");
        this.registerAndsetOption(this.myChart, cityId, name, mapJson, true);
      }
    },
    // 选择市级以后的
    changechengshi(e) {
      // console.log(e, "市级下面的数据");
      this.ischengshi = true;
      this.issheng = false;
      let name = this.chengshiList[e].name;
      let cityId = cityMap[name];
      if (cityId) {
        //代表有下级地图
        let response = require(`/static/json/map/${cityId}.json`);
        // this.chengshiList = this.initDataList(response)
        const mapJson = response;
        // console.log(response, "市级下面的数据");
        this.registerAndsetOption(this.myChart, cityId, name, mapJson, true);
      }
    },
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

        // this.ischengshi = true;
        // });
      }
    },

    mapChart() {
      let response = require(`/static/json/map/${this.chinaId}.json`);

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

        // console.log("map.mapName", cityId);
        // let cityId = cityMap[name];
        // if (cityId) {}
        if (cityId) {
          //代表有下级地图

          let response = require(`/static/json/map/${cityId}.json`);
          const mapJson = response;

          this.clickcityname = cityMap[mapJson.features[0].properties.name];
          if (cityMap[mapJson.features[0].properties.name]) {
            this.ischengshi = false;
            this.issheng = true;
          } else {
            this.ischengshi = true;
            this.issheng = false;
          }
          this.registerAndsetOption(
            this.myChart,
            cityId,
            param.name,
            mapJson,
            true
          );
        } else {
          //没有下级地图，回到一级中国地图，并将mapStack清空
          this.ischengshi = false;
          this.issheng = false;
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
    havenextcity() {},
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
              position: ["50%", "50%"],
              color: "#fff",
              fontSize: "10",
              formatter: "{b}",
            },
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
                },
                borderColor: "#b2b2bf",
                borderWidth: 1,
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10,
                shadowColor: "rgba(128, 217, 248, .3)",
              },
              emphasis: {
                areaColor: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#7fb926", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#04614f", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺为 false
                },
                color: "#fff",
                borderWidth: 1,
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
              // this.ischengshi
              // symbol: this.issheng ? "pin" : this.ischengshi ? "pin" : "none",
              symbol: "pin",
              // symbolSize: this.issheng ? "50" : "30",
              symbolSize: this.ischengshi ? "30" : "50",
              selected: true,
              data: [
                {
                  name: "山西电站名称",
                  codsr: "电站代码：KSA32222117",
                  codsr1: "电站容量：3000KW",
                  value: this.ischengshi ? "" : "15",
                  coord: [112.733538, 38.41769],
                },
                {
                  name: "江苏电站名称",
                  codsr: "电站代码：KSA32222117",
                  codsr1: "电站容量：3000KW",
                  // value: this.issheng ? "35" : "",
                  value: this.ischengshi ? "" : "20",

                  coord: [119.97, 31.83],
                },
              ],
              label: {
                show: true,
                itemStyle: {
                  color: "#fff",
                },
                formatter: "{c}",
              },
              tooltip: {
                show: this.ischengshi,
                trigger: "item",
                formatter: (params) => {
                  console.log(params);
                  let str = " ";
                  str = `
                  <div class="bg-bgcardcolor fs15 br5 float-hidden m10">
                    <div class="bg-main1 b-b-1 line-color-divider p10"> ${params.data.name}</div>
                    <div class='b-b-1 line-color-divider p10' >${params.data.codsr}</div>
                    <div class=" p10">${params.data.codsr1} </div>
                 </div>`;
                  return str;
                },
              },
            },
          },
        ],
        tooltip: {
          show: false,
          trigger: "item",
        },
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
        if (
          mapJson.features[i].properties.name == "山西" ||
          mapJson.features[i].properties.name == "忻州市" ||
          mapJson.features[i].properties.name == "忻府区" ||
          mapJson.features[i].properties.name == "江苏" ||
          mapJson.features[i].properties.name == "常州市" ||
          mapJson.features[i].properties.name == "新北区"
        ) {
          mapData.push({
            name: mapJson.features[i].properties.name,
            groupId: mapJson.features[i].id,
            selected: true,
            value: 100,
            labelLine: {
              show: true,
              showAbove: true,
            },
          });
        } else {
          mapData.push({
            name: mapJson.features[i].properties.name,
            id: mapJson.features[i].id,
            value: 0,
          });
        }
      }
      return mapData;
    },
    initDataList(datain) {
      console.log(datain, "这是文件");
      let a = [];
      datain.features.forEach((item, index) => {
        a.push({
          id: item.id,
          name: item.properties.name,
          listlength: item.properties.childNum,
          cp: item.properties.cp,
          indexlit: index,
        });
      });
      return a;
    },

    // categorysoc
    initCategorySoc() {
      let chartDom = document.getElementById("categorysoc");
      let myChart = this.$echarts.init(chartDom);

      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: {
          type: "category",
          show: true,
          nameTextStyle: {
            color: "#fff",
            fontSize: 15,
            backgroundColor: "#fff",
          },
          lineStyle: {
            color: "#7fb926",
            width: 10,
            type: "solid",
          },

          // 是否展示坐标轴
          axisLine: {
            show: true,
          },
          axisTick: {
            show: true,
            alignWithLabel: true,
          },
          axisLabel: {
            color: "#fff",
          },
          data: ["10", "20", "30", "40", "50", "60", "70"],
        },
        yAxis: {
          type: "value",
          show: true,
          axisLabel: {
            color: "#fff",
          },
          alignTicks: false,
          position: "left",
          // axisLine: {
          //   show: false,
          // },
          // axisTick: {
          //   show: false,
          // },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: [200, 400, 600, 800, 1000, 1200, 1300],
            type: "bar",
            barWidth: 15,
            // showBackground: true,
            // backgroundStyle: {
            //   color: "#7fb926",
            // },
            color: "#7fb926",
          },
        ],
      };

      myChart.setOption(option);
    },

    initCategoryPie() {
      // piebox
      let chartDom = document.getElementById("piebox");
      let myChart = this.$echarts.init(chartDom);
      let option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          icon: "circle",
          bottom: "1px",
          textStyle: {
            color: "#fff",
          },
        },

        series: [
          {
            name: "状态",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              formatter: "{b} {c}",
            },
            data: [
              { value: 10, name: "运行", itemStyle: { color: "#7fb926" } },
              { value: 10, name: "规划中", itemStyle: { color: "#04614f" } },
              { value: 3, name: "离网", itemStyle: { color: "#999898" } },
              { value: 1, name: "故障", itemStyle: { color: "#d4cd1b" } },
            ],
          },
          {
            name: "状态",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "center",
              fontSize: "10",
              color: "#fff",
              formatter: "10/24",
            },
            // 环形中间的字
            emphasis: {
              // label: {
              //   show: true,
              //   fontSize: "10",
              //   color: "#fff",
              //   fontWeight: "bold",
              //   position: "center",
              //   formatter: "{@Direct}/{c}",
              // },
            },

            data: [
              { value: 10, name: "运行", itemStyle: { color: "#7fb926" } },
              { value: 10, name: "规划中", itemStyle: { color: "#04614f" } },
              { value: 3, name: "离网", itemStyle: { color: "#999898" } },
              { value: 1, name: "故障", itemStyle: { color: "#d4cd1b" } },
            ],
          },
        ],
      };

      myChart.setOption(option);
    },
    timetotops() {
      this.intervals = setInterval(() => {
        this.timetotop = new Date().Format("yyyy.MM.dd hh:mm:ss");
      }, 1000);
    },

    // toggleSideBar() {
    //   this.leftshow = !this.leftshow;
    // },
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
  },
  mounted() {
    setTimeout(() => {
      // 地图
      this.mapChart();
      // 右下角的图
      this.initCategorySoc();
      // 分析饼图
      this.initCategoryPie();
    }, 500);
  },
  computed: {
    ...mapState({
      sidebar: (state) => state.app.sidebar,
    }),

    ...mapGetters(["avatar", "sidebar"]),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile",
      };
    },
  },
  created() {
    this.anysityList = this.initDataList(chinamaps);
    // 每秒进行时间切换
    this.timetotops();
  },
  destroyed() {
    window.clearInterval(this.intervals);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
/* // 日期选择 */
.nishi {
  .el-date-editor {
    width: 600px;
  }
  .el-range-input {
    background: #353542;
  }
  .el-range-separator {
    color: #fff;
  }
}
</style>
<style scoped lang="scss">
#categorysoc {
  width: 530px;
  height: 380px;
}

#piebox {
  width: 400px;
  height: 220px;
}
.bloker {
  width: 80px;
  height: 80px;
  line-height: 80px;
  background: #353542;
}
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
  width: 700px;
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
.hit90 {
  height: 100px;
}
.bgmaptop {
  background: #393948;
}
</style>
