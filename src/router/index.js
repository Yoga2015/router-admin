//1、 导入 vue 、vue-router
import Vue from "vue";
import VueRouter from "vue-router";

//5、 导入需要的组件
import Login from "@/components/MyLogin.vue";
import Home from "@/components/MyHome.vue";
import Users from "@/components/menus/MyUsers.vue";
import Rights from "@/components/menus/MyRights.vue";
import Goods from "@/components/menus/MyGoods.vue";
import Orders from "@/components/menus/MyOrders.vue";
import Settings from "@/components/menus/MySettings.vue";


//2、 通过全局方法 Vue.use() 使用 路由 插件
Vue.use(VueRouter);

//3、 创建路由实例对象
const router = new VueRouter({
  routes: [
    // 重定向路由
    { path: "/", redirect: "/login" },
    // 登录路由规则
    { path: "/login", component: Login },

    // 后台主页路由规则，  登录成功进入用户个人主页
    { path: "/home",
      component: Home,
      redirect:'/home/users', //同时默认显示 用户管理页，使用重定向实现
      children: [
      {path:'users',component:Users},
      {path:'rights',component:Rights},
      {path:'goods',component:Goods},
      {path:'orders',component:Orders},
      {path:'settings',component:Settings},
      ]
    },
    
  ],
});

// 6、为 router 实例对象  ，声明 “全局前置守卫” ，用于设置 访问权限
router.beforeEach(function (to, from, next) {
  if (to.path === "/home" || to.path === "/home/users" || to.path === "/home/rights" || to.path === "/home/goods") {
    const token = localStorage.getItem("token");
    if (token) {
      next(); // 访问的是 后台主页 /home ,且有 token 的值
    } else {
      //没有 token 的 值, 跳转到 /login 登录页面
      next("/login");
    }
  } else {
    // 访问的不是 后台主页 ，直接放行
    next();
  }
});

//4、 向外导出路由
export default router;
