<template>
    <div class="card">
        <h3 class="card-header text-center">Register Area</h3>
        <div class="card-body">
            <form @submit.prevent="submitForm">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>First Name</label>
                        <input type="text" class="form-control"
                        v-model.trim="$v.firstName.$model" :class="{
                            'is-invalid':$v.firstName.$error, 'is-valid':!$v.firstName.$invalid
                        }">
                        <div class="invalid-feedback">
                            <span v-if="!$v.firstName.required">First name is required</span>
                            <span v-if="!$v.firstName.minLength">First name must have at least {{$v.firstName.$params.minLength.min}} characters</span>
                            <span v-if="!$v.firstName.maxLength">First name must have at most {{$v.firstName.$params.maxLength.max}} characters</span>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label>Last Name</label>
                        <input type="text" class="form-control"
                        v-model.trim="$v.lastName.$model" :class="{
                            'is-invalid':$v.lastName.$error, 'is-valid':!$v.lastName.$invalid
                        }">
                        <div class="invalid-feedback">
                            <span v-if="!$v.lastName.required">last name is required</span>
                            <span v-if="!$v.lastName.minLength">last name must have at least {{$v.lastName.$params.minLength.min}} characters</span>
                            <span v-if="!$v.lastName.maxLength">last name must have at most {{$v.lastName.$params.maxLength.max}} characters</span>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label>Email</label>
                        <input type="email" class="form-control"
                        v-model.trim="$v.email.$model" :class="{
                            'is-invalid':$v.email.$error, 'is-valid':!$v.email.$invalid
                        }">
                        <div class="invalid-feedback">
                            <span v-if="!$v.email.required">Email is required</span>
                            <span v-if="!$v.email.isUnique">This email already registered</span>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label>Password</label>
                        <input type="password" id="password" class="form-control"
                        v-model.trim="$v.password.$model" :class="{
                            'is-invalid':$v.password.$error, 'is-valid':!$v.password.$invalid
                        }">
                        <div class="invalid-feedback">
                            <span v-if="!$v.password.required">Password is required</span>
                            <span v-if="!$v.password.minLength">The password must have at least {{$v.password.$params.minLength.min}} characters</span>
                        </div>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" id="showpassword" class="form-check-input"
                        @click="toggleShowPassword" v-model="showPassword">
                        <label for="showpassword" class="form-check-label">Show Password</label>
                    </div>
                    <div class="form-group col-md-6">
                        <label>Repeat Password</label>
                        <input type="repeatPassword" class="form-control"
                        v-model.trim="$v.repeatPassword.$model" :class="{
                            'is-invalid':$v.repeatPassword.$error, 'is-valid':(password != '') ?
                            !$v.repeatPassword.$invalid: ''
                        }">
                        <div class="invalid-feedback">
                            <span v-if="!$v.repeatPassword.sameAsPassword">The password does not match</span>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators'
export default {
  name: 'FormValidation',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
      showPassword: false,
      submitstatus: null
    }
  },
  validations: {
    firstName: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(10)
    },
    lastName: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(12)
    },
    email: {
      required,
      email,
      isUnique (value) {
        if (value === '') return true
        const emailRegex = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(emailRegex.test(value))
          }, 350 + Math.random() * 300)
        })
      }
    },
    password: {
      required,
      minLength: minLength(8)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    toggleShowPassword () {
      const show = document.getElementById('password')
      if (this.showPassword === false) {
        this.showPassword = true
        show.type = 'text'
      } else {
        this.showPassword = false
        show.type = 'password'
      }
    },
    submitForm () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitstatus = 'FAIL'
      } else {
        this.submitstatus = 'SUCCESS'
      }
    }
  }
}
</script>

<style scoped>

</style>
