<template>
  <div class="message">
    <el-card :body-style="{ padding: '0px' }">
      <div class="header_message">
        <div class="autor">
          <el-avatar :size="54" :src="url"></el-avatar>
          <div class="autor_info">
            <span>Nika Jerrardo</span>
          </div>
        </div>
        <div class="settings">
          <el-button icon="el-icon-more" circle></el-button>
        </div>
      </div>
      <div class="messages">
        <div class="all__messages">
          <div class="contant_messages">
            <div class="autor_messages">
              <div class="avatar">
                <el-avatar :size="36" :src="url"></el-avatar>
              </div>
              <div class="autor_message">
                <p>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.</p>
              </div>
              <div class="autor_settings">
                <el-button icon="el-icon-more-outline" circle></el-button>
              </div>
            </div>
            <div class="autor_date">
              <span>{{ new Date() | moment('from', 'now') }}</span>
            </div>
          </div>
          <div class="my_mess">
            <div class="contant_messages">
              <div class="my_messages">
                <div class="my_settings">
                  <el-button icon="el-icon-more-outline" circle></el-button>
                </div>
                <div class="my_message">
                  <p>1</p>
                </div>
              </div>
              <div class="my_date">
                <span>{{ new Date() | moment('from', 'now') }}</span>
              </div>
            </div>
          </div>
          <div class="my_mess">
            <div class="contant_messages">
              <div class="my_messages">
                <div class="my_settings">
                  <el-button icon="el-icon-more-outline" circle></el-button>
                </div>
                <div class="my_message">
                  <p>Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.</p>
                </div>
              </div>
              <div class="my_date">
                <span>{{ new Date() | moment('from', 'now') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer_form">
          <el-form :model="controlers">
            <el-row type="flex" align="middle" justify="center">
              <el-col :span="20">
                <el-form-item>
                  <el-input v-model="controlers.message" resize="none" rows="3" class="textreal" placeholder="Type a message here" type="textarea"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item>
                  <div class="send_message">
                    <el-button icon="el-icon-s-promotion" circle type="primary"></el-button>
                  </div>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      controlers: {
        message: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.autor_date {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 5px;
  span {
    margin-right: 54px;
  }
}
.footer_form {
  margin: 0px 40px 20px 60px;
  border-top: 2px solid rgba(112, 124, 151, 0.15);
}
.textreal {
  font-size: 20px;
}
textarea {
  border: none;
}

.send_message {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.my_mess {
  display: flex;
  flex-direction: column;
}
.my_date {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 5px;
  span {
    margin-right: 54px;
  }
}

.settings .el-button {
  background: #ffffff;
  box-shadow: 0px 5px 25px rgba(42, 139, 242, 0.07), 0px 7px 25px rgba(42, 139, 242, 0.03), 0px 10px 15px rgba(0, 0, 0, 0.03);
}
.message {
  background: #fff;
}
.messages {
  padding: 20px 20px 20px 60px;
}
.contant_messages {
  margin-bottom: 15px;
}

.autor_settings {
  display: flex;
  .el-button {
    background: none;
    border: none;
    margin-left: 18px;
  }
}
.my_settings {
  display: flex;
  .el-button {
    background: none;
    border: none;
    margin-left: 18px;
  }
}
.autor_message {
  margin-left: 24px;
  padding: 14px 27px 25px 22px;
  background: linear-gradient(93.27deg, #60a9f6 0%, #2a8bf2 100%);
  box-shadow: 10px 10px 50px rgba(42, 139, 242, 0.1), 15px 15px 35px rgba(42, 139, 242, 0.05), 10px 10px 25px rgba(42, 139, 242, 0.1);
  border-radius: 0px 10px 10px 10px;
  color: #fff;
  p {
    font-size: 16px;
    line-height: 26px;
  }
}
.my_message {
  margin-left: 24px;
  padding: 14px 27px 25px 22px;
  background: #ffffff;
  box-shadow: 15px 15px 35px rgba(112, 124, 151, 0.05), 10px 10px 25px rgba(112, 124, 151, 0.05);
  border-radius: 10px 10px 0px 10px;
  border: 1px solid rgba(112, 124, 151, 0.25);
  color: #707c97;
  p {
    font-size: 16px;
    line-height: 26px;
  }
}
.autor_messages {
  display: flex;
  flex-direction: row;
}
.my_messages {
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
}
</style>
