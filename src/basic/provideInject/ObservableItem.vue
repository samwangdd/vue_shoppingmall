<template>
  <p :style="{color: theme.color}">this is a observable templete demo</p>
</template>

<script>
export default {
  name: "ObservableItem",
  inject: ["theme"],
};
</script>

<style>
</style>