<template>
  <div class="mainbox">
    <div class="pl15 pr15 pt20 color-white">
      <collitems title="基本信息">
        <div>
          <div class="p15">阿里公交储能站</div>
          <div class="p15">场站ID : <span>KSA13052851</span></div>
          <div class="p15">投运状态 : <span>投运</span></div>
          <div class="p15 flex flex-between width-50">
            <div>总装机功率 : <span>100KW</span></div>
            <div class="plant1">装机容量 : <span>100KWh</span></div>
          </div>
          <div class="p15 flex flex-between width-50">
            <div>经度 : <span>120.7000282</span></div>
            <div class="plant1">纬度 : <span>31.136235</span></div>
          </div>

          <div class="p15 flex flex-between width-50">
            <div>
              行政区域 : <span>中国</span> <span>江苏</span> <span>苏州</span>
              <span>吴江</span>
            </div>
            <div class="plant1">邮编 : <span>134567</span></div>
          </div>
          <div class="p15">详细地址 : <span>吴江区同津大道</span></div>

          <div class="flex p15 flex-between">
            <el-image
              v-for="(item, index) in imglist"
              :key="index"
              :src="item"
              class="width-30"
              :preview-src-list="imglist"
            ></el-image>
          </div>
        </div>
      </collitems>

      <collitems title="系统介绍">
        <div class="p15">
          <div class="b-a-1 line-color-main1">
            <div class="flex text-center p15 bg-hui">
              <div class="flex-1">序号</div>
              <div class="flex-1">系统名称</div>
              <div class="flex-1">系统编码</div>
              <div class="flex-1">系统设备数量</div>
            </div>
            <div class="flex text-center p15 bg-hei">
              <div class="flex-1">1</div>
              <div class="flex-1">资方能源系统</div>
              <div class="flex-1">HT6010589762</div>
              <div class="flex-1">10</div>
            </div>
          </div>
        </div>
      </collitems>

      <collitems title="资产介绍">
        <div class="p15">
          <div class="b-a-1 line-color-main1">
            <div class="flex text-center p15 bg-hui">
              <div class="flex-1">序号</div>
              <div class="flex-1">资产名称</div>
              <div class="flex-1">资产编码</div>
              <div class="flex-1">设备数量</div>
            </div>
            <div
              class="flex text-center p15 bg-hei"
              v-for="(item, index) in zclist"
              :key="index"
            >
              <div class="flex-1">{{ item.xh }}</div>
              <div class="flex-1">{{ item.zcmc }}</div>
              <div class="flex-1">{{ item.zcbm }}</div>
              <div class="flex-1">{{ item.sbsl }}</div>
            </div>
          </div>
        </div>
      </collitems>
    </div>
  </div>
</template>

<script>
import collitems from "./components/collitems";
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
          xh: 1,
          zcmc: "EMS",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 1,
          zcmc: "EMS",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 1,
          zcmc: "EMS",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 1,
          zcmc: "EMS",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 1,
          zcmc: "EMS",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 1,
          zcmc: "EMS",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 1,
          zcmc: "EMS",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 1,
          zcmc: "EMS",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 1,
          zcmc: "EMS",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 1,
          zcmc: "EMS",
          zcbm: 2000,
          sbsl: 2,
        },
        {
          xh: 1,
          zcmc: "EMS",
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