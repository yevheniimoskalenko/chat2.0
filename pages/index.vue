<template>
  <div class="form">
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="10">
        <el-card>
          <el-form ref="form" :model="controlers" :rules="rules">
            <el-form-item label="Email" prop="email">
              <el-input v-model="controlers.email"> </el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input v-model="controlers.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <vue-recaptcha ref="recaptcha" sitekey="6LealJMUAAAAAEtYcN5wjrIIPWNIZ4WeaEGVkff8" :load-recaptcha-script="true" @expired="onCaptchaExpired" @verify="onCaptchaVerified"></vue-recaptcha>
              <el-button type="primary" round :loading="loading" :disabled="!verefy" @click="connectUser">Connect</el-button>
              <nuxt-link to="/register">go registration</nuxt-link>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'

export default {
  name: 'Index',
  components: { VueRecaptcha },
  layout: 'empty',
  auth: false,
  middleware: ['user'],
  data() {
    return {
      loading: false,
      verefy: false,
      controlers: {
        email: '',
        password: ''
      },
      rules: {
        email: [{ required: true }, { type: 'email' }],
        password: [{ required: true }]
      }
    }
  },
  methods: {
    connectUser() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          const user = {
            email: this.controlers.email,
            password: this.controlers.password
          }
          try {
            await this.$auth.loginWith('local', { data: user })
            this.$router.push('/chat')
          } catch (e) {}
        }
      })
    },
    async onCaptchaVerified(recaptchaToken) {
      const token = { token: recaptchaToken }
      const verefy = await this.$store.dispatch('verefy', token)
      this.verefy = verefy.success
    },
    onCaptchaExpired() {
      this.$refs.recaptcha.reset()
    }
  },
  head: {
    title: 'log in'
  }
}
</script>
<style lang="scss" scoped>
.form {
  margin-top: 50px;
}
</style>
