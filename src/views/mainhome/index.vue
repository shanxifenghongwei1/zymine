<template>
  <div class="mainhomes">
    <!-- 上面的盒子 -->
    <div
      class="bg-main1 color-white pt30 pb30 flex flex-around text-center fs20"
    >
      <div>
        <div class="fs15 pb15 color-main2">总充电量1</div>
        <div class="color-assist1">10134.00 <span class="fs10">kwh</span></div>
      </div>
      <div>
        <div class="fs15 pb15 color-main2">总放电量</div>
        <div class="color-assist1">8647.00 <span class="fs10">kwh</span></div>
      </div>
      <div>
        <div class="fs15 pb15 color-main2">总充电量</div>
        <div class="color-assist1">44.00 <span class="fs10">kwh</span></div>
      </div>
      <div>
        <div class="fs15 pb15 color-main2">日放电量</div>
        <div class="color-assist1">34.00 <span class="fs10">kwh</span></div>
      </div>
    </div>
    <!-- 下面的盒子 -->
    <div>
      <img :src="ulsb" />
      <el-image :src="ulsb"></el-image>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainhome",
  components: {},
  data() {
    return {
      ulsb: "../../assets/img/sltp/slpts1.jpg",
      urlsa:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242306111155-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660729026&t=e76b76e9f71dabcb7e181eff580a8053",
    };
  },
  computed: {},
  created() {},
};
</script>
<style scoped lang="scss">
.mainhomes {
  /* background: #000; */
  /* width: 100%; */
  /* height: 100%; */
}
</style>
