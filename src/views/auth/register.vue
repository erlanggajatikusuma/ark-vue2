<template>
        <div class="register-container d-flex align-items-center justify-content-center">
          <form class="register-form text-center">
            <h1 class="font-weight-light text-uppercase mb-5 text">Register</h1>
            <div class="form-group">
              <input type="text" placeholder="First name" required class="form-control form-control-lg" v-model="$v.firstName.$model">
              <span v-if="$v.firstName.$error" class="validation">First name required</span>
            </div>
            <div class="form-group">
              <input type="text" placeholder="Last name" required class="form-control form-control-lg" v-model="$v.lastName.$model">
              <span v-if="$v.lastName.$error" class="validation">Last name required</span>
            </div>
            <div class="form-group">
              <input type="email" placeholder="Email" required class="form-control form-control-lg" v-model="email">
            </div>
            <div class="form-group">
                <div class="input-group">
                    <input :type="type" placeholder="Create your password" class="input" v-model="password">
                    <div class="input-group-append" style="margin-left:-40px">
                        <div @click="show">
                            <i v-show="display" class="fa fa-eye"></i>
                            <i v-show="!display" class="dua fa fa-eye-slash"></i>
                        </div>
                    </div>
                    <span class="validation" v-if="password.length >= 1 && password.length < 6">The password min 6 characters</span>
                </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block btn-lg mt-5" @click="handleRegister">Register</button>
            <p class="mt-3 font-weight-normal text h6">Already have account? <router-link to="/login"><strong style="color: #a0b4f7;">Login</strong></router-link></p>
          </form>
        </div>
</template>

<script>
import { mapActions } from 'vuex'
import mixins from '../../components/mixins/swal'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'Register',
  mixins: [mixins],
  data () {
    return {
      type: 'password',
      active: false,
      display: true,
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },
  validations: {
    firstName: {
      required
    },
    lastName: {
      required
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    handleRegister (e) {
      e.preventDefault()
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      }
      this.register(data)
        .then(() => {
          this.$router.push('/login')
        })
        .catch(err => {
          if (err.response.status === 409) {
            this.failed('Email already registered')
          }
          if (err.response.status === 411) {
            this.failed('Password min 6 characters')
          }
          if (err.response.status === 400) {
            this.failed('Email invalid')
          }
        })
    },
    ...mapActions(['register']),
    show () {
      this.type = this.type === 'password' ? 'text' : 'password'
      this.active = !this.active
      this.display = !this.display
    }
  }
  //   email: {
  //     required,
  //     email,
  //     isUnique (value) {
  //       if (value === '') return true
  //       const emailRegex = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //       return new Promise(resolve => {
  //         setTimeout(() => {
  //           resolve(emailRegex.test(value))
  //         }, 350 + Math.random() * 300)
  //       })
  //     }
  //   }
}
</script>

<style scoped>
  .register-container {
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
  .register-form {
    max-width: 100%;
    width: 370px;
    padding: 15px;
    margin: auto;
  }
  .register-form a{
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
  .input-group-append {
    cursor: pointer;
  }
  .input {
    width: 100%;
    font-size: 15px;
    min-height: 48px;
    font-weight: 500;
    padding-left: 15px;
    border-radius: 5px;
  }
  .input:focus {
    outline: none;
    border-color: #723dbe;
    border-color: #a0b4f7;
    box-shadow: 0 0 0 0.2rem rgba(114, 61, 190, .25);
  }
  i {
    line-height: 48px;
  }
  .validation {
    width: 100%;
    font-size: 15px;
    text-align: center;
    color: rgb(255, 246, 246);
  }
  .text {
    color: white;
  }
</style>
