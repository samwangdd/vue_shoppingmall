<template>
  <div>
    <h1>InjectItem</h1>
    <p :style="{color: theme.color}">E节点</p>
    <button @click="handleClick">改变颜色</button>
  </div>
</template>

<script>
export default {
  name: "InjectItem",
  inject: {
    theme: {
      default: () => ({}),
    },
  },
  methods: {
    handleClick() {
      if (this.theme.changeColor) {
        this.theme.changeColor("green");
      }
    },
  },
};
</script>

<style>
</style>