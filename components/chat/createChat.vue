<template>
  <div>
    <div class="btn">
      <el-button icon="el-icon-plus" @click="dialogVisible = true">Create new Chat</el-button>
    </div>
    <el-dialog title="Create new Message" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-form :model="controlers">
        <el-form-item label="Search person">
          <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="Please input" @select="handleSelect"></el-autocomplete>
        </el-form-item>
        <el-form-item label="Message">
          <el-input v-model="controlers.message" type="textarea" :rows="2" placeholder="Please input"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="sendMessage">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      links: [],
      state: '',
      timeout: null,
      controlers: {
        message: '',
        room: ''
      }
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('Are you sure to close this dialog?')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
    async querySearchAsync(queryString, cb) {
      try {
        await this.$store.dispatch('findUser', { query: queryString }).then((result) => {
          const user = [{ value: result.user[0].name, id: result.user[0]._id }]
          cb(user)
        })
      } catch (e) {}
    },
    handleSelect(item) {
      this.controlers.room = item
    },
    async sendMessage() {
      const message = {
        partner: this.controlers.room.id,
        author: this.$auth.user.id,
        message: this.controlers.message
      }
      try {
        await this.$store.dispatch('createChat', message)
        this.dialogVisible = false
      } catch (e) {}
    }
  }
}
</script>
<style lang="scss" scoped>
.btn .el-button--default {
  background: linear-gradient(100.61deg, #7cb8f7 0%, #2a8bf2 100%);
  box-shadow: 10px 6px 25px rgba(42, 139, 242, 0.15), 4px 4px 25px rgba(42, 139, 242, 0.05), 6px 6px 25px rgba(42, 139, 242, 0.15);
  border-radius: 6px;
  color: #fff;
  height: 60px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
}
</style>
