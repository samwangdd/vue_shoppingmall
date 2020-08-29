<template>
  <div>
    手机号
    <input type="number" :value="phoneInfo.phone" @input="handlePhoneChange" />
    区号
    <input type="number" />
    <p class="warnning" v-if="showMessage">{{message}}</p>
  </div>
</template>

<script>
export default {
  name: "PersonalInfo",
  props: {
    phoneInfo: { phone: String },
    message: String,
    zipCode: String,
    validate: Function,
  },
  data: () => ({
    showMessage: false,
  }),
  watch: {
    "phoneInfo.phone": function (val) {
      this.handleValidate(val);
    },
  },
  model: {
    prop: "phoneInfo",
    event: "change",
  },
  methods: {
    handlePhoneChange(e) {
      this.$emit("change", { ...this.phoneInfo, phone: e.target.value });
    },
    handleValidate(val) {
      const res = this.validate(val);
      this.showMessage = !res;
    },
  },
};
</script>

<style scope>
.warnning {
  color: red;
}
</style>