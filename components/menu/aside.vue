<template>
  <div class="aside">
    <div class="avatar">
      <el-avatar :size="96" :src="url" icon="el-icon-user-solid"></el-avatar>
      <span>{{ name }}</span>
    </div>
    <el-menu router :style="{ height: '100%' }" :default-active="$route.path">
      <el-menu-item index="/chat">
        <i class="el-icon-chat-dot-round"></i>
        <span>Chat</span>
      </el-menu-item>
      <el-menu-item @click="dialogVisible = true">
        <i class="el-icon-setting"></i>
        <span>Settings</span>
      </el-menu-item>
      <el-menu-item @click="logout">
        <i class="el-icon-switch-button"></i>
        <span>Log out</span>
      </el-menu-item>
    </el-menu>
    <div>
      <el-dialog title="settings" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <el-upload class="avatar-uploader" action="/upload/file" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatars" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary">Confirm</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 87px;
}
.avatar span {
  padding: 20px 0;
  text-transform: capitalize;
  font-size: 18px;
}
.aside {
  height: 100%;
  background: #fff;
  overflow: hidden;
  box-shadow: 23.8596px 5.61404px 50px rgba(0, 0, 0, 0.02), 35.0877px 0px 70px rgba(86, 128, 248, 0.05), 14.0351px 0px 25px rgba(86, 128, 248, 0.03);
}
.el-menu {
  border: none;
}

.el-menu-item span {
  font-size: 16px;
  line-height: 19px;
  color: #707c97;
  text-transform: uppercase;
  font-weight: bold;
}
.is-active {
  color: #409eff;
  border-left: 4px solid #409eff;
  padding: 15px 0;
}
.el-menu-item {
  padding: 0px 20px;
}
.is-active span {
  color: #409eff;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatars {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
<script>
export default {
  name: 'Aside',
  components: {},
  data() {
    return {
      url: './static/34.png',
      dialogVisible: false,
      imageUrl: ''
    }
  },
  computed: {
    name() {
      return this.$auth.$state.user.name
    }
  },
  methods: {
    logout() {
      this.$auth.logout()
      this.$router.push('/')
    },
    handleAvatarSuccess() {},
    beforeAvatarUpload() {},
    handleClose(done) {
      this.$confirm('Are you sure to close this dialog?')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    }
  }
}
</script>
