<template>
  <div class="form">
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="10">
        <el-card>
          <el-form ref="form" :model="controlers" :rules="rules">
            <el-form-item label="Email" prop="email">
              <el-input v-model="controlers.email"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input v-model="controlers.password" type="password" show-password></el-input>
            </el-form-item>
            <el-form-item label="Family and name" prop="name">
              <el-input v-model="controlers.name"></el-input>
            </el-form-item>
            <el-form-item>
              <vue-recaptcha ref="recaptcha" sitekey="6LealJMUAAAAAEtYcN5wjrIIPWNIZ4WeaEGVkff8" :load-recaptcha-script="true" @expired="onCaptchaExpired" @verify="onCaptchaVerified"></vue-recaptcha>
              <el-button type="primary" round :loading="loading" :disabled="!verefy" @click="createUser">Create user</el-button>
              <nuxt-link to="/">go home</nuxt-link>
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
  layout: 'empty',
  components: { VueRecaptcha },
  auth: false,
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
        password: [{ required: true }],
        name: [{ required: true }, { min: 6 }]
      }
    }
  },
  methods: {
    createUser() {
      this.$refs.form.validate(async (valid) => {
        if (valid && this.verefy === true) {
          try {
            const user = {
              email: this.controlers.email,
              password: this.controlers.password,
              name: this.controlers.name
            }
            await this.$store.dispatch('create', user)
            this.$router.push('/')
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
    title: 'Sign up'
  }
}
</script>
<style lang="scss" scoped>
.form {
  margin-top: 50px;
}
</style>
