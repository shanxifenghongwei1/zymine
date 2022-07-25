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
        <div class="flex-1 flex">
          <!-- 左侧 -->
          <div class="wit20">左侧</div>
          <!-- 中间 -->
          <div class="flex-1">
            <div id="sures"></div>
          </div>
          <!-- 右侧 -->
          <div class="wit30">右侧</div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import cityMap from "@/utils/china-main-city-map.js";

import { mapState } from "vuex";
import sidebar from "@/layout/components/Sidebar/index.vue";
export default {
  name: "bighomes",
  components: { sidebar },
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
    back() {
      console.log(this.mapStack.length != 0, "走进来了");
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
                      color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺为 false
                },

                // borderColor: "#1dc199",
                // areaColor: "rgba(0,0,0,0)",
                borderColor: "rgba(147, 235, 248, .8)",
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
body {
  margin: 0;
  width: 100%;
  height: 100%;
}

.aaas {
  /* background: #333; */
  background-image: url("../../../assets/img/bgimg.png");
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
  width: 800px;
  height: 800px;
  margin: 0 auto;
}
.wit20 {
  width: 20%;
}
.wit30 {
  width: 30%;
}
.wit40 {
  width: 40%;
}
</style>
