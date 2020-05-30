<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col>
        <ul>
          <li v-for="message in messages" :key="message.text">
            {{ message }}
          </li>
        </ul>
        <el-form ref="form" :model="controlers" :rules="rules">
          <el-form-item label="Message" prop="message">
            <el-input v-model="controlers.message" type="textarea"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              round=""
              :loading="loading"
              @click="addMessage"
              >Push message</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Chat',
  middleware: ['chat'],
  data() {
    return {
      loading: false,
      controlers: {
        message: ''
      },
      rules: {
        message: [{ required: true }]
      }
    }
  },
  computed: mapGetters(['user', 'messages']),
  methods: {
    addMessage() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          try {
            const message = {
              user: this.user.name,
              message: this.controlers.message
            }
            await this.$store.dispatch('newMessage', message)
            this.$socket.emit('createMessage', message, (data) => {
              if (typeof data === 'string') {
                console.log(`error`)
              } else {
                this.controlers.message = ''
              }
            })
          } catch (e) {}
        }
      })
    }
  },
  head() {
    return {
      title: `room: ${this.user.room}`
    }
  }
}
</script>
