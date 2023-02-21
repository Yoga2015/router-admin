<template>
  <div id="app">
    <!--组件占位符 ，此时放置 Mylogin组件-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MyApp",
};
</script>

<style lang="less" scoped>
#app {
    padding: 20px;
}
</style>
