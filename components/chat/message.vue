<template>
  <div class="content-message">
    <el-card :body-style="{ padding: '0px' }">
      <div class="header_message">
        <div class="autor">
          <el-avatar :size="54" :src="url"></el-avatar>
          <div class="autor_info">
            <span>Nika Jerrardo</span>
            <small>last online 5 hours ago</small>
          </div>
        </div>
        <div class="settings">
          <el-dropdown>
            <el-button icon="el-icon-more" circle></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-close-notification">to block</el-dropdown-item>
              <el-dropdown-item icon="el-icon-delete">remove</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="messages">
        <div class="all__messages">
          <div v-for="(message, index) in messages" :key="index" class="contant_messages">
            <div class="messages">
              <div v-show="message.id !== $auth.$state.user.id" class="avatar">
                <el-avatar :size="36" :src="url"></el-avatar>
              </div>
              <div class="settings-message">
                <el-dropdown>
                  <el-button icon="el-icon-more-outline" circle></el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-delete">remove</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <div class="message" :class="{ owner: message.id === $auth.$state.user.id, friend: message.id !== $auth.$state.user.id }">
                <p>{{ message.text }}</p>
              </div>
            </div>
            <div class="date">
              <span>{{ message.date | moment('from', 'now') }}</span>
            </div>
          </div>
        </div>
      </div>
      <app-send />
    </el-card>
  </div>
</template>
<script>
import appSend from '@/components/chat/sendMessage'
export default {
  components: { appSend },

  data() {
    return {
      url: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
    }
  },
  computed: {
    messages() {
      return this.$store.getters.messages
    }
  }
}
</script>
<style lang="scss" scoped>
.date {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 5px;
  span {
    margin-right: 70px;
  }
}

.settings .el-button {
  background: #ffffff;
  box-shadow: 0px 5px 25px rgba(42, 139, 242, 0.07), 0px 7px 25px rgba(42, 139, 242, 0.03), 0px 10px 15px rgba(0, 0, 0, 0.03);
}
.content-message {
  background: #fff;
}
.messages {
  margin-left: 24px;
  padding: 20px 20px 20px 60px;
}
.contant_messages {
  margin-bottom: 15px;
}

.settings-message {
  display: flex;
  align-items: center;
  .el-button {
    background: none;
    border: none;
    margin-left: 18px;
  }
}
.owner {
  background: #fff;
  border-radius: 10px 10px 0px 10px;
  box-shadow: 15px 15px 35px rgba(112, 124, 151, 0.05), 10px 10px 25px rgba(112, 124, 151, 0.05);
}
.friend {
  display: flex;
  justify-items: flex-start;
  color: #fff;
  background: linear-gradient(93.27deg, #60a9f6 0%, #2a8bf2 100%);
  box-shadow: 10px 10px 50px rgba(42, 139, 242, 0.1), 15px 15px 35px rgba(42, 139, 242, 0.05), 10px 10px 25px rgba(42, 139, 242, 0.1);

  border-radius: 0px 10px 10px 10px;
}

.message {
  margin-left: 24px;
  padding: 14px 27px 25px 22px;
  border: 1px solid rgba(112, 124, 151, 0.25);
  p {
    font-size: 16px;
    line-height: 26px;
  }
}
.messages {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 50px;
}

.header_message {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #fafbff;
  padding: 28px 38px 28px 60px;
  border-bottom: 2px solid rgba(112, 124, 151, 0.1);
}
.autor {
  display: flex;
  .autor_info span {
    margin-left: 20px;
    font-weight: bold;
    line-height: 21px;
  }
  .autor_info {
    display: flex;
    flex-direction: column;
    small {
      margin-left: 20px;
      color: #2a8bf2;
      font-size: 16px;
    }
  }
}
</style>
