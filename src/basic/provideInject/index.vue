<template>
  <ObservableItem />
</template>

<script>
import Vue from "vue";
import ObservableItem from "./ObservableItem";
/**
 * provide-inject
 * Vue.observable 提供部分数据
 */
export default {
  components: { ObservableItem },
  data: () => ({
    theme: {
      color: "#fff",
    },
  }),
  provide() {
    this.theme = new Vue.observable({
      color: "blue",
    });
    return {
      theme: this.theme,
    };
  },
};
</script>

<style>
</style>