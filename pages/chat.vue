<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="chat_messages">
          <div class="header">
            <h2>Chats</h2>
            <el-button icon="el-icon-plus">Create new Chat</el-button>
          </div>
          <app-search />
          <app-messages :messages="messages" />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="messages"><app-message /></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import appSearch from '@/components/chat/search'
import appMessages from '@/components/chat/messages'
import appMessage from '@/components/chat/message'

export default {
  components: { appMessages, appSearch, appMessage },
  data() {
    return {
      size: 54,
      url: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      messages: [
        {
          name: 'Luy Robin',
          message: 'Most of its text is made up from sections 1.10.32–3 of Ciceros De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).',
          date: 'Sun May 31 2020 14:01:15'
        },
        {
          name: 'Luy Robin',
          message: 'Most of its text is made up from sections 1.10.32–3 of Ciceros De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).',
          date: 'Sun May 31 2020 14:01:15'
        }
      ]
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
