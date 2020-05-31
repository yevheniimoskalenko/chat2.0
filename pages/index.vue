<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :span="10">
      <el-card>
        <el-form ref="form" :model="controlers" :rules="rules">
          <el-form-item label="Name" prop="name">
            <el-input v-model="controlers.name"> </el-input>
          </el-form-item>
          <el-form-item label="room" prop="room">
            <el-input v-model="controlers.room"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" round :loading="loading" @click="connectRoom">Connect</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Index',
  layout: 'empty',

  data() {
    return {
      loading: false,
      controlers: {
        name: '',
        room: ''
      },
      rules: {
        name: [{ required: true }],
        room: [{ required: true }]
      }
    }
  },
  sockets: {
    connect() {
      console.log('socket connected')
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    connectRoom() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          const user = {
            name: this.controlers.name,
            room: this.controlers.room
          }
          console.log(user)
          this.$socket.emit('userJoin', user, (data) => {
            if (typeof data === 'string') {
              console.error(data)
            } else {
              user.id = data.userId
              this.setUser(user)
              this.$router.push('/chat')
            }
          })
        }
      })
    }
  }
}
</script>
