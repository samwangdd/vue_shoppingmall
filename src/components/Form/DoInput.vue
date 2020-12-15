<template>
  <div>
    <input :type="type" :value="value" @input="onInput" />
  </div>
</template>

<script>
export default {
  name: 'DoInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    onInput(e) {
      // 通知父组件发生了 input 事件
      this.$emit('input', e.target.value);
      // 通知 FormItem 校验
      this.$parent.$emit('validate');
    },
  },
};
</script>

<style>
</style>