<template>
  <div class="container">
    <el-button @click="message">new message</el-button>
  </div>
</template>

<script>
export default {
  sockets: {
    connect() {
      console.log('socket connected')
    }
  },
  methods: {
    message() {
      this.$socket.emit('createMessage', {
        text: 'From client'
      })
    }
  }
}
</script>
