import Vue from 'vue';

/** 
 * 自定义指令
 * 指令也有自己的生命周期
*/
Vue.directive('instruction', {
  bind: (el, binding) => {
    el.textContent = Math.pow(binding.value, 2)
  },
  update: (el, binding) => {
    el.textContent = Math.pow(binding.value, 2)
  }
})