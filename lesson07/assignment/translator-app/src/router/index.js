import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import TranslatorApp from '../views/TranslatorApp.vue';
import Gallery from '../views/Gallery.vue';
import Philology from '../views/Philology.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/translator",
    name: "TranslatorApp",
    component: TranslatorApp,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/philology",
    name: "Philology",
    component: Philology,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});



export default router;
