import Vue from 'vue';
// import Vuex from 'vuex';
import Vuex from '@/utils/min-vuex';

import App from './App.vue';

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  // 状态值
  state: {
    count: 0,
  },
  // 同步操作
  mutations: {
    add(state, n) {
      state.count += n;
    },
    multiply(state) {
      state.count = state.count * 2;
    },
  },
  // 异步操作
  // actions: {
  //   asyncAdd({ state }) {
  //     setTimeout(() => {
  //       state.count++;
  //     }, 2000);
  //   },
  // },
  // // 缓存数据，类似computed
  // getters: {
  //   doubleCount(state) {
  //     // 计算属性并不是改变某个值，而是对值进行加工处理
  //     return state.count * 2;
  //   },
  // },
});

Vue.prototype.$store = store;

new Vue({
  // store,
  render: h => h(App),
}).$mount('#app');
