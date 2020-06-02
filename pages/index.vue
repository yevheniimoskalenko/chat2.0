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
              <el-input v-model="controlers.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" round :loading="loading" @click="connectUser">Connect</el-button>
              <nuxt-link to="/sign">go registration</nuxt-link>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Index',
  layout: 'empty',

  data() {
    return {
      loading: false,
      controlers: {
        email: '',
        password: ''
      },
      rules: {
        email: [{ required: true }],
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
            await this.$store.dispatch('auth/login', user)
          } catch (e) {}
        }
      })
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
