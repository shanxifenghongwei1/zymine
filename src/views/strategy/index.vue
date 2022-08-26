<template>
  <div class="mainbox">
    <div class="pl15 pr15 pt20 color-white">
      <collitems title="自发自用">
        <div></div>
      </collitems>

      <collitems title="充放电时段参数">
        <div class="p15">
          <div class="b-a-1 line-color-main1"></div>
        </div>
      </collitems>

      <collitems title="削峰填谷">
        <div class="p15"></div>
      </collitems>
      <collitems title="通用远程设置">
        <div class="p15"></div>
      </collitems>
    </div>
  </div>
</template>

<script>
import collitems from "../transtaion/components/collitems.vue";
export default {
  components: {
    collitems,
  },
  data() {
    return {
      imglist: [
        "https://img0.baidu.com/it/u=1825439388,2560820608&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=383",
        "https://img0.baidu.com/it/u=218098408,2284035082&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=458",
        "https://img2.baidu.com/it/u=1613428194,881886065&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=334",
      ],
      zclist: [
        {
          xh: 1,
          zcmc: "EMS",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 2,
          zcmc: "PCS",
          zcbm: 2100,
          sbsl: 1,
        },
        {
          xh: 3,
          zcmc: "集控",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 4,
          zcmc: "电池堆",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 5,
          zcmc: "电池簇",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 6,
          zcmc: "光伏逆变器",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 7,
          zcmc: "关口电表",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 8,
          zcmc: "光伏并网点电表",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 9,
          zcmc: "ACDC",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 10,
          zcmc: "DCDC",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 11,
          zcmc: "空调",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 12,
          zcmc: "消防",
          zcbm: 2000,
          sbsl: 2,
        },
      ],
    };
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.mainbox {
  height: 830px;
  overflow-y: scroll;
}
.plant1 {
  width: 180px;
}
</style>