<template>
  <div>
    <input :value="phoneInfo.phone" type="number" placeholder="手机号码" @input="handlePhoneChange" />
    <input :value="zipCode" type="number" placeholder="邮编" @input="handlZipCodeChange" />
  </div>
</template>

<script>
export default {
  name: "ModelItem",
  model: {
    prop: "phoneInfo", // 默认为 value
    event: "change", // 默认为 input
  },
  props: {
    phoneInfo: { phone: String },
    zipCode: String,
  },
  methods: {
    handlePhoneChange(e) {
      this.$emit("change", {
        ...this.phoneInfo,
        phone: e.target.value,
      });
    },

    handlZipCodeChange(e) {
      this.$emit("update:zipCode", e.target.value); // $emit 将事件名及参数传递给实例
    },
  },
};
</script>