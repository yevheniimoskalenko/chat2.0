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
  components: { appAside },
  computed: {
    status() {
      return this.$store.getters.status
    }
  },
  watch: {
    status(value) {
      console.log(value)
      this.$message({
        showClose: true,
        message: `${value.message}`,
        type: `${value.status}`
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.admin-layout-wrap {
  width: 100%;
  height: 100vh;
}
</style>
