<template>
  <div>
    <div
      class="width-full bg-bgcardcolor color-white p15 flex flex-between"
      @click="toggleExpand"
    >
      <div>{{ title }}</div>
      <div>
        <i
          :class="expanded ? 'actives' : ''"
          class="el-icon-arrow-right boxsa"
        />
      </div>
    </div>
    <CollapseTransition>
      <div class="description" v-show="expanded">
        <slot></slot>
      </div>
    </CollapseTransition>
  </div>
</template>

<script>
import CollapseTransition from "./colapse";
export default {
  components: {
    CollapseTransition,
  },
  props: ["title"],
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    toggleExpand() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style lang="scss" scoped>
.boxsa {
  transition: transform 0.3s;
}
.actives {
  transform: rotate(90deg);
}
</style>