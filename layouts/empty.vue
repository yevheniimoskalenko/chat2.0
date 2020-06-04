<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
export default {
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
