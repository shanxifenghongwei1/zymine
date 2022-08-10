<template>
  <div class="mainhomes">
    <!-- 上面的盒子 -->
    <!-- <div
      class="bg-main1 color-white pt30 pb30 flex flex-around text-center fs20"
    >
      <div>
        <div class="fs15 pb15 color-main2">总充电量</div>
        <div>10134.00 <span class="fs10">kwh</span></div>
      </div>
      <div>
        <div class="fs15 pb15 color-main2">总放电量</div>
        <div>8647.00 <span class="fs10">kwh</span></div>
      </div>
      <div>
        <div class="fs15 pb15 color-main2">总充电量</div>
        <div>44.00 <span class="fs10">kwh</span></div>
      </div>
      <div>
        <div class="fs15 pb15 color-main2">日放电量</div>
        <div>34.00 <span class="fs10">kwh</span></div>
      </div>
    </div> -->
    <!-- 下面的盒子 -->
    <div class="pt30 flex flex-between">
      <!-- <img
        style="width: 100px; height: 100px"
        src="../../assets/img/zhyd.png"
      /> -->
      <!-- <div class="linetest"></div> -->

      <canvas id="canvas"></canvas>
      <div
        class="
          p30
          bg-bgcardcolor
          width-30
          mr30
          flex flex-wrap flex-between
          align-items-start
        "
      >
        <div
          v-for="(item, index) in rightnum"
          :key="index"
          class="text-center width-30 pt10"
          style="height: 100px"
        >
          <div class="color-textnocolor">{{ item.name }}</div>
          <div class="pt20 color-white">{{ item.muns }}</div>
        </div>
      </div>
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
      rightnum: [
        { name: "电网功率KW", muns: 179 },
        { name: "电网电压V", muns: 179 },
        { name: "电网电流A", muns: 179 },
        { name: "负载功率KW", muns: 179 },
        { name: "负载电压V", muns: 179 },
        { name: "负载电流KW", muns: 179 },
        { name: "储能功率KW", muns: 179 },
        { name: "储能电压V", muns: 179 },
        { name: "储能电流A", muns: 179 },
        { name: "光伏功率KW", muns: 179 },
        { name: "光伏电压V", muns: 179 },
        { name: "光伏电流A", muns: 179 },
      ],
      intervals: null,
      intervals1: null,
    };
  },
  mounted() {
    var ele = document.getElementById("canvas");
    ele.width = "900"; //注意：没有单位
    ele.height = "660"; //注意：没有单位
    this.canvasinit();
  },
  methods: {
    canvasinit() {
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");

      // 坐标系构建

      // for (let i = 0; i < 100; i++) {
      //   ctx.font = "normal bold  10px serif";
      //   ctx.fillStyle = "#ff5043";
      //   this.toline(1500, 2, "rgba(255,255,255,0.1)", { x: 0, y: 30 * i }, "h");
      //   ctx.fillText("" + 30 * i, 30 * i, 10);
      //   this.toline(1500, 2, "rgba(255,255,255,0.1)", { x: 30 * i, y: 0 }, "s");
      //   ctx.fillText("" + 10 * i, 10, 10 * i);
      // }

      ctx.font = "normal bold  17px serif";

      // 母线
      this.toline(300, 8, "#ff5043", { x: 10, y: 20 }, "h");

      // 信号线
      this.toline(300, 6, "#ff5043", { x: 50, y: 20 }, "s");
      this.toline(40, 20, "#ff5043", { x: 50, y: 130 }, "s");
      this.toline(80, 6, "#ff5043", { x: 10, y: 320 }, "h");

      // 停机圆点
      this.toslices("#ff5043", { x: 20, y: 360 });
      this.toslices("#fdb64c", { x: 20, y: 390 });
      this.toslices("#00c707", { x: 20, y: 420 });

      // 综合用电
      // this.toline(500, 6, "#ff5043", { x: 160, y: 20 }, "s");
      this.toline(40, 20, "#ff5043", { x: 160, y: 130 }, "s");

      // 两个母线的连接
      this.toline(130, 6, "#ff5043", { x: 250, y: 20 }, "s");
      this.toline(120, 6, "#ff5043", { x: 247, y: 150 }, "h");
      this.toline(40, 20, "#ff5043", { x: 340, y: 150 }, "h");
      this.toline(100, 6, "#ff5043", { x: 380, y: 150 }, "h");
      this.toline(130, 6, "#ff5043", { x: 477, y: 20 }, "s");
      // 母线
      this.toline(450, 8, "#ff5043", { x: 430, y: 20 }, "h");

      // 储能 pcs 和 上面的柜子
      this.toline(300, 6, "#ff5043", { x: 550, y: 20 }, "s");
      this.toline(40, 20, "#ff5043", { x: 550, y: 130 }, "s"); // 电阻
      // 储能 pcs 下面的电池
      this.toline(100, 6, "#00c707", { x: 550, y: 370 }, "s");
      this.toline(335, 6, "#00c707", { x: 300, y: 470 }, "h");

      //光伏的线路
      this.toline(300, 6, "#ff5043", { x: 800, y: 20 }, "s");
      this.toline(40, 20, "#ff5043", { x: 800, y: 130 }, "s"); // 电阻
      // this.toline(170, 6, "#00c707", { x: 800, y: 410 }, "s");

      // ctx.stroke();
      ctx.fillStyle = "#fff";
      ctx.fillText("停机", 35, 367);
      ctx.fillText("故障", 35, 397);
      ctx.fillText("运行", 35, 427);

      ctx.fillText("P:", 10, 60);
      ctx.fillText("U:", 10, 90);
      ctx.fillText("I:", 10, 120);

      // ctx.textAlign = "right";  // 母线的主线数据
      ctx.fillStyle = "#00c707";
      ctx.fillText("2.7", 60, 60);
      ctx.fillText("394.8", 60, 90);
      ctx.fillText("4.9", 60, 120);

      ctx.fillStyle = "#1558a0";
      ctx.fillText("KW", 130, 60);
      ctx.fillText("V", 130, 90);
      ctx.fillText("A", 130, 120);

      // 综合用电  160
      {
        ctx.fillStyle = "#00c707";
        ctx.fillText("2.7", 160, 60);
        ctx.fillText("384.8", 160, 90);
        ctx.fillText("4.9", 160, 120);

        ctx.fillStyle = "#1558a0";
        ctx.fillText("KW", 220, 60);
        ctx.fillText("V", 220, 90);
        ctx.fillText("A", 220, 120);
      }

      // 储能pcs  550
      {
        ctx.fillStyle = "#00c707";
        ctx.fillText("2.9", 550, 60);
        ctx.fillText("394.8", 550, 90);
        ctx.fillText("4.9", 550, 120);

        ctx.fillStyle = "#1558a0";
        ctx.fillText("KW", 630, 60);
        ctx.fillText("V", 630, 90);
        ctx.fillText("A", 630, 120);
        // 储能pcs 指示灯
        for (let i = 0; i < 3; i++) {
          let cols = "#213b58";
          if (i == 1) {
            cols = "#fdb64c";
          }
          this.toslices(cols, { x: 600, y: 340 + i * 25 });
        }
      }

      // 光伏  为了防止以后变多，用循环合适 800
      for (let i = 0; i < 1; i++) {
        ctx.fillStyle = "#00c707";
        ctx.fillText("3.7", 800 + i * 190, 60);
        ctx.fillText("394.8", 800 + i * 190, 90);
        ctx.fillText("4.9", 800 + i * 190, 120);

        ctx.fillStyle = "#1558a0";
        ctx.fillText("KW", 870 + i * 190, 60);
        ctx.fillText("V", 870 + i * 190, 90);
        ctx.fillText("A", 870 + i * 190, 120);
      }

      ctx.fillStyle = "#fff";
      ctx.fillText("综合用电", 135, 640);

      ctx.fillText("储能PCS", 560, 430);
      ctx.fillText("光伏", 810, 430);
      // 光伏  800
      ctx.fillText("光伏", 785, 640);

      // ctx.stroke();

      // 实例化一个小球

      //动态x,y坐标  小球起始点坐标
      var x = 160;
      var y = 170;

      var speedY = 3; // 前进

      //综合用电 让小球动起来，定时器
      this.intervals = setInterval(() => {
        // 开始之前先清除画布
        ctx.clearRect(150, 170, 20, 380);
        y += speedY;
        if (y <= 170) {
          //向下移动
          speedY = -speedY;
        }
        if (y >= 540 || y + 100 >= 540) {
          //向上移动
          y = 190;
        }
        //绘制一个小球
        ctx.beginPath();
        // ctx.arc(圆心x,圆心y，半径r,开始弧度，结束弧度，true);
        ctx.arc(x, y, 8, 0, 2 * Math.PI);
        ctx.arc(x, y + 100, 8, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(255, 165, 0,0.6)";
        // 绘制实心
        ctx.fill();
        ctx.closePath();
        this.toline(530, 6, "#ff5043", { x: 160, y: 20 }, "s");
      }, 30);

      var a = 800;
      var b = 550;
      var speedY1 = 3; // 前进
      //光伏的                让小球动起来，定时器
      this.intervals1 = setInterval(() => {
        // 开始之前先清除画布
        ctx.clearRect(790, 415, 20, 161);
        b += speedY1;
        if (b <= 423) {
          b = 550;
        }
        if (b >= 560) {
          //向上移动
          speedY1 = -speedY1;
        }
        //绘制一个小球
        ctx.beginPath();
        // ctx.arc(圆心x,圆心y，半径r,开始弧度，结束弧度，true);
        ctx.arc(a, b, 8, 0, 2 * Math.PI);
        // ctx.arc(a, b + 100, 8, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(255, 165, 0,0.6)";
        // 绘制实心
        ctx.fill();
        ctx.closePath();
        this.toline(161, 6, "#00c707", { x: 800, y: 415 }, "s");
      }, 30);

      // // 充电桩 的线路
      // for (let i = 1; i < 3; i++) {
      //   this.toline(300, 6, "#ff5043", { x: 800 + i * 190, y: 20 }, "s");
      //   this.toline(40, 20, "#ff5043", { x: 800 + i * 190, y: 130 }, "s"); // 电阻
      //   this.toline(170, 6, "#00c707", { x: 800 + i * 190, y: 380 }, "s");

      //   // 充电桩的图片
      //   this.toimg(require("@/assets/img/cdzgz.png"), {
      //     x: 770 + i * 190,
      //     y: 318,
      //   });
      //   for (let a = 0; a < 3; a++) {
      //     let cols = "#213b58";
      //     if (a == 0) {
      //       cols = "#ff5043";
      //     }
      //     this.toslices(cols, { x: 850 + i * 190, y: 340 + a * 25 });
      //   }
      //   // 充电桩车位 图片
      //   this.toimg(require("@/assets/img/cdzcw.png"), {
      //     x: 770 + i * 190,
      //     y: 530,
      //   });
      //   ctx.fillStyle = "#1558a0";
      //   ctx.fillText("0%", 785 + i * 190, 640);
      //   ctx.fillStyle = "#fff";
      //   ctx.fillText(i + "#充电桩", 810 + i * 190, 430);
      // }

      // 综合用电图片
      this.toimg(require("@/assets/img/zhyd.png"), {
        x: 130,
        y: 550,
      });

      // psc 配电柜 图片
      this.toimg(require("@/assets/img/pcsg.png"), {
        x: 520,
        y: 320,
      });

      // 光伏电柜 图片
      this.toimg(require("@/assets/img/gfbdg.png"), {
        x: 775,
        y: 320,
      });

      // 光伏版 图片
      this.toimg(require("@/assets/img/gfbtp.png"), {
        x: 755,
        y: 550,
      });
      // 光伏的指示灯
      for (let i = 0; i < 3; i++) {
        let cols = "#213b58";
        if (i == 2) {
          cols = "#00c707";
        }
        this.toslices(cols, { x: 840, y: 340 + i * 25 });
      }
      // 下面的电池
      for (let i = 0; i < 5; i++) {
        this.toline(53, 6, "#00c707", { x: 300 + i * 83, y: 467 }, "s");
        this.toimg(require("@/assets/img/pcsdc.png"), {
          x: 273 + i * 83,
          y: 520,
        });
        ctx.fillStyle = "#1558a0";
        ctx.fillText("90%", 285 + i * 83, 640);
      }
    },
    // 一条直线
    // len 长度
    // wid 线条 高度/宽度 默认 8
    // col 颜色：默认 #ff5043
    // 起点坐标 pon:{x,y}
    //  h/s  横线/竖线
    toline(len, wid, col, pon, h) {
      var ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.strokeStyle = col;
      ctx.lineWidth = wid;
      ctx.lineCap = "butt";
      if (h == "h") {
        ctx.moveTo(pon.x, pon.y);
        ctx.lineTo(pon.x + len, pon.y);
      }
      if (h == "s") {
        ctx.moveTo(pon.x, pon.y);
        ctx.lineTo(pon.x, pon.y + len);
      }

      ctx.stroke();
    },
    // @/assets/img/zhyd.png
    // 一个图片
    toimg(arc, pon) {
      var ctx = document.getElementById("canvas").getContext("2d");
      var img = new Image();

      img.onload = (e) => {
        ctx.drawImage(img, pon.x, pon.y);
        ctx.beginPath();
        ctx.stroke();
      };
      img.src = arc;
    },
    // 一个圆点
    toslices(col, pon) {
      //       ctx.arc(x, y, radius, startAngle, endAngle, Boolean)
      // 圆心坐标: (x, y)
      // 半径: radius
      // 起始角度: startAngle
      // 结束角度: endAngle
      // 是否逆时针旋转: false 代表顺时针旋转
      var ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.fillStyle = col;
      ctx.strokeStyle = col;
      ctx.arc(pon.x, pon.y, 10, 0, Math.PI * 2);
      ctx.fill();
      // ctx.stroke();
    },
  },
  computed: {},
  created() {},

  // 消除定时器
  destroyed() {
    window.clearInterval(this.intervals);
    window.clearInterval(this.intervals1);
  },
};
</script>
<style scoped lang="scss">
#canvas {
  margin: 0 auto;
}
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
  height: 100%;
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
  // background: #2d2d2d;
  /* width: 100%; */
  /* height: 100%; */
}
</style>
