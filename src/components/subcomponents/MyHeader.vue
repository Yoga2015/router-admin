<template>
  <div
    class="layout-header-container d-flex justify-content-between align-items-center p-3"
  >
    <!-- 左侧 logo 和 标题区域 -->
    <div class="layout-header-left d-flex align-items-center user-select-none">
      <!-- logo -->
      <img class="layout-header-left-img" src="../../assets/logo.png" alt="" />
      <!-- 标题 -->
      <h4 class="layout-header-left-title ml-3">walking 后台管理系统</h4>
    </div>

    <!-- 右侧按钮区域 -->
    <div class="layout-header-right">
      <button type="button" class="btn btn-light" @click="logout">
        退出登录
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  methods: {
    // 退出登录
    logout() {
      if (window.confirm("确认退出么？")) {
        // 移除 loaclStorage 本地存储中的 token
        localStorage.removeItem("token");
        // 重新跳转到 登录页面
        this.$router.push("/login");
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.layout-header-container {
  height: 60px;
  border-bottom: 1px solid #eaeaea;
}

.layout-header-left-img {
  height: 50px;
}
</style>
