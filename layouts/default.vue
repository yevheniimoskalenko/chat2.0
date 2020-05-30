<template>
  <div>
    <el-container>
      <el-header>
        <app-header />
      </el-header>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>
<script>
import appHeader from '@/components/menu/header'

export default {
  components: { appHeader }
}
</script>
