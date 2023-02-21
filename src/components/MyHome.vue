<template>
  <div class="home-container">
    <p class="homeP">后台组件</p>

    <!-- 头部区域 -->
    <MyHeader></MyHeader>

    <!-- 页面主体区域 -->
    <div class="home-main-box">
      <!-- 左侧边栏 -->
      <MyAside> </MyAside>

      <!-- 右侧内容主体区域 -->
      <div class="home-main-body">
        <!-- 右侧 路由地址对应的组件栏 123-->
        <router-view></router-view>
      </div>
      
    </div>
  </div>
</template>

<script>
// 头部区域组件
import MyHeader from "./subcomponents/MyHeader.vue";
// 左侧边栏组件
import MyAside from "./subcomponents/MyAside.vue";

export default {
  name: "MyHome",
  // 注册组件
  components: {
    MyHeader,
    MyAside,
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column;

  .home-main-box {
    height: 100%;
    display: flex;
    .home-main-body {
      padding: 15px;
      flex: 1;
    }
  }

  .homeP {
    display: none;
  }
}
</style>
