<template>
  <div class="emsx">
    <!-- 上面的tab -->
    <div class="flex color-white1 fathertab">
      <div
        class="p10 fs18 changheand"
        :class="active == index ? 'acticve' : ''"
        v-for="(item, index) in topdataList"
        :key="index"
        @click="changeactive(index)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="color-white pl10 pt20">
      <div v-for="(item, index) in blockList" :key="index">
        <div class="disrackion flex flex-wrap flex-col">
          <div
            v-for="(andnum, listnum) in item"
            :key="listnum"
            class="flex flex-between align-items-center fatherbox"
          >
            <div class="">{{ andnum.name }}</div>
            <div
              class="bg-bgcardcolor text-center rightbox b-a-1 line-color-main2"
            >
              {{ andnum.value }}
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
      topdataList: [
        { name: "遥测量", id: 0 },
        { name: "遥信量", id: 1 },
      ],
      active: 0,
      blockList: [
        [
          { name: "系统SN", id: 0, value: "1" },
          { name: "EMS硬件版本号", id: 1, value: "1.0.0" },
          { name: "EMS软件版本号", id: 2, value: "1.0.0" },
          { name: "EMS通信协议版本号", id: 3, value: "1.0.0" },
          { name: "Sys Tick", id: 4, value: "36" },
        ],
        [
          { name: "系统SN", id: 0, value: "1" },
          { name: "EMS硬件版本号", id: 1, value: "1.0.0" },
          { name: "EMS软件版本号", id: 2, value: "1.0.0" },
          { name: "EMS通信协议版本号", id: 3, value: "1.0.0" },
          { name: "系统SN", id: 0, value: "1" },
          { name: "EMS硬件版本号", id: 1, value: "1.0.0" },
          { name: "EMS软件版本号", id: 2, value: "1.0.0" },
          { name: "EMS通信协议版本号", id: 3, value: "1.0.0" },
        ],
        [
          { name: "系统SN", id: 0, value: "1" },
          { name: "EMS硬件版本号", id: 1, value: "1.0.0" },
          { name: "EMS软件版本号", id: 2, value: "1.0.0" },
          { name: "EMS通信协议版本号", id: 3, value: "1.0.0" },
          { name: "Sys Tick", id: 4, value: "36" },
        ],
        [
          { name: "系统SN", id: 0, value: "1" },
          { name: "EMS硬件版本号", id: 1, value: "1.0.0" },
          { name: "EMS软件版本号", id: 2, value: "1.0.0" },
          { name: "EMS通信协议版本号", id: 3, value: "1.0.0" },
          { name: "Sys Tick", id: 4, value: "36" },
        ],
        [
          { name: "系统SN", id: 0, value: "1" },
          { name: "EMS硬件版本号", id: 1, value: "1.0.0" },
          { name: "EMS软件版本号", id: 2, value: "1.0.0" },
          { name: "EMS通信协议版本号", id: 3, value: "1.0.0" },
          { name: "Sys Tick", id: 4, value: "36" },
        ],
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
}
.disrackion {
  height: 250px;
}
.rightbox {
  width: 250px;
  line-height: 50px;
}
.fatherbox {
  width: 30%;
}
.acticve {
  color: #fff;
  position: relative;
  &::after {
    display: block;
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    // animation: clipAnimate 3s linear infinite;
    width: 35px;
    height: 5px;
    border-radius: 10px;
    background: #7fb926;
  }
}
</style>