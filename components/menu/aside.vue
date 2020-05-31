<template>
  <div class="aside">
    <div class="avatar">
      <el-avatar :size="96" :src="url" icon="el-icon-user-solid"></el-avatar>
      <span>Yevhenii Moskalenko</span>
    </div>
    <el-menu router :style="{ height: '100%' }" :default-active="$route.path">
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span>home</span>
      </el-menu-item>
      <el-menu-item index="/chat">
        <i class="el-icon-chat-dot-round"></i>
        <span>Chat</span>
      </el-menu-item>
      <el-menu-item index="/contact">
        <i class="el-icon-user"></i>
        <span>Contact</span>
      </el-menu-item>
      <el-menu-item index="/notifications">
        <i class="el-icon-bell"></i>
        <span>Notifications</span>
      </el-menu-item>
      <el-menu-item index="/calendar">
        <i class="el-icon-date"></i>
        <span>Calendar</span>
      </el-menu-item>
      <el-menu-item index="/settings">
        <i class="el-icon-setting"></i>
        <span>Settings</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style lang="scss" scoped>
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 87px;
}
.avatar span {
  padding: 20px 0;
  text-transform: capitalize;
  font-size: 18px;
}
.aside {
  height: 100%;
  background: #fff;
  overflow: hidden;
  box-shadow: 23.8596px 5.61404px 50px rgba(0, 0, 0, 0.02), 35.0877px 0px 70px rgba(86, 128, 248, 0.05), 14.0351px 0px 25px rgba(86, 128, 248, 0.03);
}
.el-menu {
  border: none;
}

.el-menu-item span {
  font-size: 16px;
  line-height: 19px;
  color: #707c97;
  text-transform: uppercase;
  font-weight: bold;
}
.is-active {
  color: #409eff;
  border-left: 4px solid #409eff;
  padding: 15px 0;
}
.el-menu-item {
  padding: 0px 20px;
}
.is-active span {
  color: #409eff;
}
</style>
<script>
export default {
  data() {
    return {
      url: '@/static/34.png'
    }
  }
}
</script>
