<template>
  <div>
    <input :value="phoneInfo.phone" type="number" placeholder="手机号码" @input="handlePhoneChange" />
    <input :value="zipCode" type="number" placeholder="邮编" @input="handlZipCodeChange" />
  </div>
</template>

<script>
/**
 * v-model 数据双向绑定
 */
import { isPhone } from "../utils/regexp";
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
      const val = e.target.value;
      if (!val) {
        // console.log("手机号不能为空");
      } else if (!isPhone.test(val)) {
        // console.log("请输入正确的手机号");
      }
      this.$emit("change", {
        ...this.phoneInfo,
        phone: val,
      });
    },

    handlZipCodeChange(e) {
      this.$emit("update:zipCode", e.target.value); // $emit 将事件名及参数传递给实例
    },
  },
};
</script>