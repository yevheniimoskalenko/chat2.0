<template>
  <div class="admin-layout-wrap">
    <el-container :style="{ height: '100%' }">
      <el-aside width="290px">
        <app-aside />
      </el-aside>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import appAside from '@/components/menu/aside'
export default {
  components: { appAside }
}
</script>
<style lang="scss" scoped>
.admin-layout-wrap {
  width: 100%;
  height: 100vh;
}
</style>
