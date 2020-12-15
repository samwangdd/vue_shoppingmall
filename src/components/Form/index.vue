<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DoForm',
  provide() {
    return {
      form: this, // 将 form 传递给子孙组件
    };
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
};
</script>

<style>
</style>