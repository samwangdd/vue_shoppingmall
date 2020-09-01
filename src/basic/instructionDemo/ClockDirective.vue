<template>
  <div>
    <button @click="show = !show">{{show ? '销毁':'挂载'}}</button>
    {{now}}
    <button v-if="show" v-append-text="`hello ${number}`" @click="number ++">按钮</button>
  </div>
</template>

<script>
/**
 * 指令生命周期练习
 */
import moment from "moment";

export default {
  data: function () {
    this.moment = moment;
    this.log = window.console.log;
    return {
      now: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      start: false,
      show: true,
      number: 0,
    };
  },
  beforeCreate: () => {
    console.log("beforeCreate :>> ");
  },
  created: () => {
    console.log("created :>> ");
  },
  beforeMount: () => {
    console.log("beforeMount :>> ");
  },
  mounted: () => {
    console.log("mounted :>> ");
  },
  beforeUpdate: () => {
    console.log("beforeUpdate :>> ");
  },
  updated: () => {
    console.log("updated :>> ");
  },
  beforeDestroy: () => {
    console.log("beforeDestroy :>> ");
  },
  destroyed: () => {
    console.log("destroyed :>> ");
  },
  directives: {
    appendText: {
      bind() {
        console.log("bind :>> ");
      },
      inserted(el, binding) {
        el.appendChild(document.createTextNode(binding.value));
        console.log("inserted :>> ", el, binding);
      },
      update(el, binding) {
        console.log("update :>> ", el, binding);
      },
      componentUpdated(el, binding) {
        el.removeChild(el.childNodes[el.childNodes.length - 1]);
        el.appendChild(document.createTextNode(binding.value));
        console.log("componentUpdated :>> ", el, binding);
      },
      unbind(el, binding) {
        console.log("unbind :>> ", el, binding);
      },
    },
  },
};
</script>

<style>
</style>