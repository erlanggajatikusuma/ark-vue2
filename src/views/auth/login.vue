<template>
        <div class="login-container d-flex align-items-center justify-content-center">
          <form class="login-form text-center">
            <h1 class="font-weight-light text-uppercase mb-5 text">Login</h1>
            <div class="form-group">
              <input type="email" placeholder="email" class="form-control rounded-pill form-control-lg" v-model="email">
            </div>
            <div class="form-group">
              <input type="password" placeholder="password" class="form-control rounded-pill form-control-lg" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary btn-block rounded-pill btn-lg mt-5" @click="handleLogin">LOGIN</button>
            <p class="mt-3 font-weight-normal h6 text">Not registered? <router-link to="/register"><strong style="color: #a0b4f7;">Register Now</strong></router-link></p>
          </form>
        </div>
</template>

<script>
import { mapActions } from 'vuex'
import mixins from '../../components/mixins/swal'
export default {
  name: 'Login',
  mixins: [mixins],
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin (e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password
      }
      this.login(data)
        .then(() => {
          this.$router.push('/home')
        })
        .catch(err => {
          console.log(err)
          if (err.response.status === 401) {
            this.failed('Incorrect password')
          }
          if (err.response.status === 404) {
            this.failed('Email not registered')
          }
        })
    },
    ...mapActions(['login'])
  }
}
</script>

<style scoped>
  .login-container {
    width: 100%;
    height: 100vh;
    position: relative;
    background: url('../product/3061577.jpg');
    background-size: cover;
    background-position: center;
    font-family: sans-serif;
    font-size: 14px;
    color: #666;
  }
  .login-form {
    max-width: 100%;
    width: 370px;
    padding: 15px;
    margin: auto;
  }
  .login-form a{
    text-decoration: none;
    color: #666;
  }
  .form-control {
    font-size: 15px;
    min-height: 48px;
    font-weight: 500;
  }
  .form-control:focus{
    border-color: #723dbe;
    box-shadow: 0 0 0 0.2rem rgba(114, 61, 190, .25);
  }
  .text {
    color: white;
  }
</style>
