// 导入 vue 、vue-router
import Vue from "vue";
import VueRouter from "vue-router";

// 导入需要的组件
import Login from "@/components/MyLogin.vue";

// 安装 路由
Vue.use(VueRouter);

// 创建路由实例对象
const router = new VueRouter({
  routes: [
    // 登录路由规则
    {path:'/login',component:Login}
  ],
}); 

// 向外导出路由
export default router;