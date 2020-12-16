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
    rules: Object,
  },
  methods: {
    async validate(cb) {
      const tasks = this.$children.filter((item) => item.prop).map((item) => item.validate());
      const results = await Promise.all(tasks);
      if (results.some((valid) => !valid)) {
        cb(false);
      } else {
        cb(true);
      }
    },
  },
};
</script>

<style>
</style>