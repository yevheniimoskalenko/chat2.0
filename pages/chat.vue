<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="chat_messages">
          <div class="header">
            <h2>Chats</h2>
            <app-addchat />
          </div>
          <app-search />
          <app-messages :messages="messages" @message-saved="handleMessage" />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="messages">
          <app-message />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import appSearch from '@/components/chat/search'
import appMessages from '@/components/chat/messages'
import appMessage from '@/components/chat/message'
import appAddchat from '@/components/chat/createChat'

export default {
  name: 'Chat',
  components: { appSearch, appMessages, appMessage, appAddchat },
  async asyncData({ store, $auth, $socket, $route }) {
    const user = {
      id: $auth.$state.user.id
    }
    const messages = await store.dispatch('fetchMessage', user.id)

    return { messages }
  },
  data() {
    return {
      size: 54,
      url: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      dialogMessage: []
    }
  },
  mounted() {
    const user = {
      id: this.$auth.$state.user.id,
      dialog: this.$route.query.chat
    }
    this.$socket.emit('receiveHistory', user, (data) => {
      if (typeof data === 'string') {
        console.error(data)
      } else {
        console.error(data)
      }
    })
  },
  middleware: ['auth'],

  methods: {
    handleMessage(dialogMessage) {
      this.dialogMessage = dialogMessage
      const user = {
        id: this.$auth.$state.user.id,
        dialog: this.$route.query.chat
      }
      this.$socket.emit('receiveHistory', user, (data) => {
        if (typeof data === 'string') {
          console.error(data)
        } else {
        }
      })
    }
  },
  head() {
    return {
      title: 'Chats'
    }
  }
}
</script>
<style lang="scss" scoped>
.search {
  margin: 20px 0;
}

.el-button--default {
  background: linear-gradient(100.61deg, #7cb8f7 0%, #2a8bf2 100%);
  box-shadow: 10px 6px 25px rgba(42, 139, 242, 0.15), 4px 4px 25px rgba(42, 139, 242, 0.05), 6px 6px 25px rgba(42, 139, 242, 0.15);
  border-radius: 6px;
  color: #fff;
  height: 60px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h2 {
  font-size: 36px;
  line-height: 26px;
  font-weight: 500;
}
.chat_messages {
  margin-top: 70px;
  scroll-behavior: scroll;
}
.messages {
  margin-top: 70px;
  scroll-behavior: scroll;
}
</style>
