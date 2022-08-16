<template>
  <div class="emsx">
    <!-- 上面的tab   电池簇 页面-->
    <div class="flex">
      <div class="flex align-items-center">
        <div class="color-white1">系统</div>
        <div class="bg-bgcardcolor ml30">
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
    <!-- 下面的DCDC DCAC  -->
    <div class="flex flex-start">
      <div class="w40 h700p bg-bgcardcolor ml65 mt30 color-white1">
        <div
          class="
            bglu
            pl20
            pr20
            pt15
            pb15
            color-white
            flex flex-between
            align-items-center
          "
        >
          <div>DCDC</div>
          <div class="flex align-items-center">
            <div class="sericesa"></div>
            <div class="ml15">正常</div>
          </div>
        </div>
        <div class="pl20 pr20 pt30 flex">
          <!-- 左面的盒子的电池 -->
          <div class="b-a-5 line-color-main1 pt10 pl5 pr5 pb10">
            <div
              class="cubox flex flex-between align-items-end pb5 pl5 mb3"
              v-for="(item, index) in pcsbosone"
              :key="index"
            >
              <div class="flex">
                <div class="cubox-son mr5"></div>
                <div class="cubox-son mr5"></div>
                <div class="cubox-son"></div>
              </div>
              <div
                class="cubox-son1 mr5"
                :class="item.zt == 1 ? 'noactive' : 'actives'"
              ></div>
            </div>
          </div>
          <!-- 右面的盒子数据 -->
          <div class="flex-1">
            <div
              class="flex flex-between align-items-center pb15 pt15 ml20"
              v-for="(item, index) in contentList"
              :key="index"
            >
              <div>{{ item.name }}</div>
              <div class="pt10 pb10 flex flex-between smallbox">
                <div class="text-left color-main1 fw600">{{ item.value }}</div>
                <div class="text-right">{{ item.plase }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      contentList: [
        {
          name: "电压",
          value: "100",
          plase: "kw",
          id: 0,
        },
        {
          name: "电流",
          value: "1625.0 ",
          plase: "V",
          id: 1,
        },
        {
          name: "SHO",
          value: "100",
          plase: "W",
          id: 2,
        },
        {
          name: "SOC",
          value: "30",
          plase: "℃",
          id: 3,
        },
      ],
      pcsbosone: [
        { name: "1", zt: 1 },
        { name: "1", zt: 1 },
        { name: "1", zt: 1 },
        { name: "1", zt: 1 },
        { name: "1", zt: 1 },
        { name: "1", zt: 1 },
        { name: "1", zt: 0 },
        { name: "1", zt: 1 },
      ],
    };
  },
  methods: {
    changeactive(index) {
      this.active = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.emsx {
  padding: 50px;
  height: 100%;
}
.w40 {
  width: 30%;
}
.h700p {
  height: 650px;
}
.bglu {
  background: #49651b;
}

.sericesa {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgb(127, 185, 38);
}

.smallbox {
  width: 100px;
}

.cubox {
  width: 100px;
  height: 30px;
  background: rgb(20, 83, 74);
  .cubox-son {
    width: 10px;
    height: 10px;
    background: #486417;
  }
  .cubox-son1 {
    width: 10px;
    height: 10px;
  }
  .noactive {
    background: #84c327;
    // background: #486417;
  }
  .actives {
    background: #e01c1b;
  }
}
// .hui {
//   background: #464652;
// }

// .hei {
//   background: #2f2f37;
// }
</style>