<template>
  <div class="mainhomes">
    <!-- 上面的盒子 -->
    <div
      class="bg-main1 color-white pt30 pb30 flex flex-around text-center fs20"
    >
      <div>
        <div class="fs15 pb15 color-main2">总充电量</div>
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
      <!-- <img
        style="width: 100%; height: 100%"
        src="@/assets/img/sltp/slpts1.jpg"
      /> -->
      <div class="linetest"></div>

      <canvas id="canvas"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainhome",
  components: {},
  data() {
    return {
      context: {},
    };
  },
  mounted() {
    this.canvasinit();
  },
  methods: {
    canvasinit() {
      var canvas = document.getElementById("canvas");

      var ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.strokeStyle = "#ff5043";
      ctx.lineWidth = 8;
      ctx.lineCap = "butt";
      ctx.moveTo(10, 20);
      ctx.lineTo(310, 20);

      ctx.moveTo(80, 20);
      ctx.lineTo(80, 300);

      ctx.font = "15px serif";
      ctx.fillStyle = "#fff";
      ctx.fillText("P:2.7kw", 10, 60);
      ctx.fillText("U:394.8V", 10, 80);
      ctx.fillText("I:4.9A", 10, 100);
      ctx.stroke();
    },
  },
  computed: {},
  created() {},
};
</script>
<style scoped lang="scss">
.linetest {
  height: 10px;
  width: 100px;
  background: #fff;
  position: relative;
}
.linetest::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  animation: infinite nobiru linear 5s none !important;
  background-color: rgb(68, 47, 255);
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

@keyframes nobiru {
  0% {
    left: 0px;
  }
  99% {
    left: 100px;
  }
  100% {
    left: 0px;
  }
}
.mainhomes {
  /* background: #000; */
  /* width: 100%; */
  /* height: 100%; */
}
</style>
