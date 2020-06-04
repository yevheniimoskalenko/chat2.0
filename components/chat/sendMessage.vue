<template>
  <div class="footer">
    <div class="footer_form">
      <el-form :model="controlers">
        <el-row type="flex" align="middle" justify="center">
          <el-col :span="20">
            <el-form-item>
              <div class="textarea">
                <el-input v-model="controlers.message" resize rows="3" placeholder="Type a message here" type="textarea"></el-input>
              </div>
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
</template>
<script>
export default {
  data() {
    return {
      controlers: {
        message: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
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
.footer_form {
  margin: 0px 40px 20px 60px;
  border-top: 2px solid rgba(112, 124, 151, 0.15);
}
</style>
