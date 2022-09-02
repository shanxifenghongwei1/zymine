<template>
  <div>
    <div id="chartsz"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.initcharts();
  },
  methods: {
    initcharts() {
      var myChart = this.$echarts.init(
        document.getElementById("chartsz"),
        "dark"
      );
      let option = {
        // title: {
        //   text: "Stacked Line",
        // },
        tooltip: {
          trigger: "axis",
        },

        legend: {
          data: [
            "理论SCO",
            "SCO",
            "电网功率",
            "PV发电功率",
            "负载用电功率",
            "并网点功率",
            "储能电量",
          ],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.timelist(),
        },
        yAxis: [
          {
            type: "value",
          },
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "理论SCO",
            type: "line",
            data: this.dataLists(),
            areaStyle: {},
          },
          {
            name: "SCO",
            type: "line",
            data: this.dataLists(),
            areaStyle: {},
          },
          {
            name: "电网功率",
            type: "line",
            data: this.dataLists(),
            areaStyle: {},
          },
          {
            name: "PV发电功率",
            type: "line",
            data: this.dataLists(),
            areaStyle: {},
          },
          {
            name: "负载用电功率",
            type: "line",
            data: this.dataLists(),
            areaStyle: {},
          },
          {
            name: "并网点功率",
            type: "line",
            data: this.dataLists(),
            areaStyle: {},
          },
          {
            name: "储能电量",
            type: "line",
            data: this.dataLists(),
            areaStyle: {},
          },
        ],
      };

      myChart.setOption(option);
    },
    timelist() {
      let a = [];
      for (let i = 0; i < 24; i++) {
        if (i < 10) {
          a.push("0" + i + ":00");
        } else {
          a.push(i + ":00");
        }
      }
      return a;
    },
    dataLists() {
      let a = [];
      for (let i = 0; i < 24; i++) {
        a.push(Math.floor(Math.random() * 90 + 60));
      }
      return a;
    },
  },
};
</script>

<style lang="scss" scoped>
#chartsz {
  width: 100%;
  height: 800px;
}
</style>