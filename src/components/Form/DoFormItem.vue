<template>
  <div class="do-form-item">
    <label v-if="label">{{label}}：</label>
    <slot></slot>
    <p v-if="errorMessage" class="iserror">{{errorMessage}}</p>
  </div>
</template>

<script>
import Schema from 'async-validator';
/*
 * 渲染 input 等组件
 * 显示label，message
 * 校验输入内容
 */
export default {
  name: 'DoFormItem',
  inject: ['form'],
  props: {
    prop: { type: String, default: '' },
    label: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
  },
  data() {
    return { errorMessage: '' };
  },
  created() {
    this.$on('validate', this.validate);
  },
  methods: {
    validate() {
      return new Promise((resolve) => {
        const descriptor = { [this.prop]: this.form.rules[this.prop] };
        const validator = new Schema(descriptor);
        validator.validate({ [this.prop]: this.form.model[this.prop] }, (errors) => {
          if (errors) {
            this.errorMessage = errors[0].message;
            resolve(false);
          } else {
            this.errorMessage = '';
            resolve(true);
          }
        });
      });
    },
  },
};
</script>

<style>
.iserror {
  border-color: tomato;
  color: tomato;
}
</style>