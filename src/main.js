import Vue from 'vue';
import Router from 'vue-router';
// import Antd from 'ant-design-vue';
import store from '@/store';
import router from '@/router';
import App from './App';

// const User = {
//   template: '<div>User</div>',
// };

Vue.use(Router);

// const router = new Router({
//   routes: [
//     // 动态路径参数 以冒号开头
//     { path: '/user', component: User },
//   ],
// });
// import 'ant-design-vue/dist/antd.less';
// import 'ant-design-vue/lib/button/style';
Vue.config.productionTip = false;

// Vue.use(Antd);

new Vue({ el: '#app', router, store, render: h => h(App) });
