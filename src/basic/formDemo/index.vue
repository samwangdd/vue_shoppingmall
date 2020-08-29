<template>
  <div>
    <PersonalInfo v-model="phoneInfo" :validate="validate" message="手机号为空或不合法" />
    phoneInfo: {{phoneInfo}}
    <!-- 
      <ModelItem v-model="phoneInfo" :zip-code.sync="zipCode" />
      <ModelItem
      :phone-info="phoneInfo"
      @change="val => (phoneInfo=val)"
      :zip-code="zipCode"
      @update:zipCode="val => (zipCode = val)"
    />-->
  </div>
</template>

<script>
/**
 * v-model 练习
 */
import PersonalInfo from "./PersonalInfo";

export default {
  components: {
    PersonalInfo,
  },
  data: () => ({
    phoneInfo: {
      areaCode: "+86",
      phone: "",
    },
    zipCode: "",
  }),
  methods: {
    validate(phone) {
      return phone && /^1[0-9]{10}$/.test(phone);
    },
  },
};
</script>

<style>
</style>