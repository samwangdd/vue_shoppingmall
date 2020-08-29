<template>
  <div>
    <Proxy :info="info" @change="handleProxyChange" />
    <SlotTemp>
      <template #suf="user">span, {{user}}</template>
    </SlotTemp>
  </div>
</template>

<script>
/**
 * 模拟vue代理，插槽
 */
import Proxy from "./Proxy.vue";
import SlotTemp from "./SlotTemp";

export default {
  name: "EventDemo",
  components: {
    Proxy,
    SlotTemp,
  },
  data: () => ({
    info: {},
    title: "title",
  }),
  methods: {
    handleProxyChange(val, callback) {
      window.isUpdatingChildComponent = true;
      this.info.name = val;
      this.info = { name: val };
      callback("hello callback");
    },
  },
};
</script>

<style>
</style>