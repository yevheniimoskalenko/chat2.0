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
      this.$message({
        message: `${value.message}`,
        type: `${value.status}`
      })
    }
  }
}
</script>
