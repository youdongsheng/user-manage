<template>
  <div class="app-container">
    <el-container>
      <el-aside width="200px" class="sidebar">
        <div class="logo">用户管理系统</div>
        <el-menu
          :default-active="$route.path"
          router
          class="el-menu-vertical"
          background-color="#304156"
          text-color="#bfcbd9"
          active-text-color="#409EFF"
        >
          <el-menu-item index="/users">
            <el-icon><User /></el-icon>
            <span>用户管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main-content">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const $route = useRoute()
</script>

<style scoped>
.app-container {
  height: 100vh;
}

.sidebar {
  background-color: #304156;
  height: 100vh;
}

.logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #1f2d3d;
}

.main-content {
  padding: 20px;
  background-color: #f0f2f5;
}

.el-menu-vertical {
  border-right: none;
}
</style>
