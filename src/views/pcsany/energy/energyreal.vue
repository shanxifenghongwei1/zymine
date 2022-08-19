<template>
  <div class="emsx">
    <!-- 上面的tab   PCS 页面-->
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
      <!-- // 下面的PCS -->
      <div class="flex align-items-center ml50">
        <div class="color-white1">PCS</div>
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
        <div class="bglu pl20 pr20 pt10 pb10">DCDC</div>
        <div class="pl20 pr20 pt30">
          <div
            class="flex flex-between align-items-center pb3"
            v-for="(item, index) in contentList"
            :key="index"
          >
            <div>{{ item.name }}</div>
            <div
              :class="index % 2 == 0 ? 'hui' : 'hei'"
              class="sonsbox pt10 pb10 text-center"
            >
              {{ item.value }} <span>{{ item.plase }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="w40 h700p bg-bgcardcolor ml65 mt30 color-white1">
        <div class="bglu pl20 pr20 pt10 pb10">DCDC</div>
        <div class="pl20 pr20 pt30">
          <div
            class="flex flex-between align-items-center pb3"
            v-for="(item, index) in contentList"
            :key="index"
          >
            <div>{{ item.name }}</div>
            <div
              :class="index % 2 == 0 ? 'hui' : 'hei'"
              class="sonsbox pt10 pb10 text-center"
            >
              {{ item.value }} <span>{{ item.plase }}</span>
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
          label: "选项1",
        },
        {
          value: "选项2",
          label: "选项2",
        },
      ],
      value: "",
      contentList: [
        {
          name: "电池电压",
          value: "100",
          plase: "kw",
          id: 0,
        },
        {
          name: "电池电流",
          value: "1625.0 ",
          plase: "V",
          id: 1,
        },
        {
          name: "电池功率",
          value: "100",
          plase: "W",
          id: 2,
        },
        {
          name: "IGBT温度",
          value: "30",
          plase: "℃",
          id: 3,
        },
        {
          name: "环境温度",
          value: "28",
          plase: "℃",
          id: 4,
        },
        {
          name: "当前可用容量",
          value: "10",
          plase: "kw",
          id: 5,
        },
        {
          name: "最大可充电功率",
          value: "1625",
          plase: "kw",
          id: 6,
        },
        {
          name: "最大可放电功率",
          value: "125",
          plase: "kw",
          id: 7,
        },
        {
          name: "最大可用感性无功功率",
          value: "125",
          plase: "kw",
          id: 8,
        },
        {
          name: "最大可用容性无功功率",
          value: "125",
          plase: "kw",
          id: 9,
        },
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

.sonsbox {
  width: 200px;
  background: #fff;
}

.hui {
  background: #464652;
}

.hei {
  background: #2f2f37;
}
</style>