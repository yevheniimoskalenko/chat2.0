<template>
  <div>room: {{ user.room }}</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['user'])
}
</script>
