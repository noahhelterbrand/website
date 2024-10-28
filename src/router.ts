import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';

export enum RouteNames {
  Home = 'Home',
  About = 'About',
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: RouteNames.Home,
    component: HomeView,
  },
  {
    path: '/about',
    name: RouteNames.About,
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
