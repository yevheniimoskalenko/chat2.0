<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col>
        <ul>
          <li v-for="message in messages" :key="message.text">
            {{ message }}
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Chat',
  middleware: ['chat'],
  computed: mapGetters(['user', 'messages']),
  head() {
    return {
      title: `room: ${this.user.room}`
    }
  }
}
</script>
