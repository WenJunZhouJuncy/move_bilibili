import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/1",
    name: "loginRegister",
    component: () => import("@/views/loginRegister")
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/user")
  },
  {
    path: '*',
    redirect: '/user',
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
