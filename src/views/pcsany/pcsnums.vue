<template>
  <div class="emsx">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      topdataList: [
        { name: "遥测量", id: 0 },
        { name: "遥信量", id: 1 },
        { name: "电度量", id: 2 },
      ],
      active: 0,
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
// @keyframes clipAnimate {
//   from {
//     transform: translateX(0%);
//   }
//   to {
//     transform: translateX(-50%);
//   }
// }
</style>