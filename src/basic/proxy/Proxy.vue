<template>
  <div>
    info: {{info}}
    <input type="text" :value="info.name" @input="handleChange" />
  </div>
</template>

<script>
/**
 * 模拟vue响应式更新原理
 */
import proxy from "./proxy";

export default {
  name: "Proxy",
  props: {
    info: Object,
  },
  created() {
    this.temp = { name: "" };
    Object.keys(this.temp).forEach((key) => {
      proxy(this.info, this.temp, key);
    });
  },
  methods: {
    handleChange(e) {
      this.$emit("change", e.target.value, (val) =>
        console.log("cb val :>> ", val)
      );
    },
  },
};
</script>

<style>
</style>