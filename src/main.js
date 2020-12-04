import Vue from 'vue';
// import Antd from 'ant-design-vue';
import store from '@/store';
import router from './router';
import App from './App.vue';

// import 'ant-design-vue/dist/antd.less';
// import 'ant-design-vue/lib/button/style';
Vue.config.productionTip = false;

// Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
