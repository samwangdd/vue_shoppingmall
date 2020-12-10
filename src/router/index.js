import VueRouter from 'vue-router';
import Home from '@/pages/Home';

const router = new VueRouter({
  routes: [{ path: '/', redirect: '/home' }, { path: '/home', component: Home }],
});

export default router;
