import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
      path: '/bilibili',
      name: 'bilibili',
      redirect: '/bilibili/home',
      component: () => import("@/views"),
      children: [{
        path: "home",
        name: "home",
        meta: {
          msg: '首页'
        },
        component: () => import("@/views/home")
      }, {
        path: "user",
        name: "user",
        meta: {
          msg: '个人中心',
          authority: true
        },
        component: () => import("@/views/user")
      },{
        path: "editInfo",
        name: "editInfo",
        meta: {
          msg: '修改资料',
          authority: true
        },
        component: () => import("@/views/editInfo")
      },
    ],
  },
  {
    path: '/loginRegister',
    name: 'loginRegister',
    meta: {
      msg: '登录or注册'
    },
    component: () => import("@/views/loginRegister"),
  },

  {
    path: '*',
    redirect: '/bilibili/home',
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
