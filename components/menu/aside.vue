<template>
  <el-menu router :style="{ height: '100%' }" :default-active="$route.path">
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>
