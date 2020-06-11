<template>
  <div class="messages">
    <div v-for="message in messages" :key="message.name" class="message">
      <el-card shadow="hover">
        <div class="message__container" @click="openChat(message._id)">
          <div class="header-message">
            <div class="autor">
              <el-avatar :size="size" :src="url"></el-avatar>
              <div class="autor_info">
                <span class="name">{{ message.partner.name }}</span>
                <small>{{ message.partner.lastDate | moment('from', 'now') }}</small>
              </div>
            </div>
            <div class="date">
              <span>{{ message.lastMessage.date | moment('from', 'now') }}</span>
            </div>
          </div>
          <div class="message">
            <p>{{ message.lastMessage.text }}</p>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    messages: { type: Array, required: true }
  },
  data() {
    return {
      url: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      size: 54
    }
  },
  methods: {
    async openChat(id) {
      this.$router.push(`${this.$route.path}?chat=${id}`)
      const storeMessage = await this.$store.dispatch('dialogMessage', id)
      this.$emit('message-saved', storeMessage)
      // return { storeMessage }
    }
  }
}
</script>
<style lang="scss" scoped>
.messages {
  margin: 25px 0;
}
.header-message {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.autor_info {
  display: flex;
  flex-direction: column;
  small {
    margin: 6px 0 0 20px;
    color: #2a8bf2;
    font-size: 16px;
  }
}
.autor {
  display: flex;
  flex-direction: row;
  .name {
    color: #0d1c2e;
    font-weight: bold;
    margin-left: 20px;
  }
}
.date {
  font-size: 16px;
  color: #707c97;
}
.message__container {
  padding: 33px 40px;
}
.message {
  margin-top: 22px;
  p {
    font-size: 16px;
    line-height: 26px;
  }
}
</style>
