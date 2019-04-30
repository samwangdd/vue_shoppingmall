import Vue from 'vue';

/** 
 * 自定义指令
*/
Vue.directive('n', {
  bind: (el, binding) => {
    el.textContent = Math.pow(binding.value, 2)
  },
  update: (el, binding) => {
    el.textContent = Math.pow(binding.value, 2)
  }
})