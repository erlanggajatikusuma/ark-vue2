<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button class="navbar-toggle" data-toggle="collapse" data-target="#navbar1" aria-controls="navbar1" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggle-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-center-md-center" id="navbar1">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Landing</router-link>
                </li>

                <li class="nav-item" v-if="auth === '' ">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>

                <li class="nav-item" v-if="auth === 'loggedIn' ">
                    <router-link class="nav-link" to="/profile">Profile</router-link>
                </li>

                <li class="nav-item" v-if="auth === 'loggedIn' ">
                    <a class="nav-link" v-on:click="logout">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import EventBus from './event-bus'

EventBus.$on('logged-in', test => {
  console.log(test)
})

export default {
  name: 'navbar',
  data () {
    return {
      auth: '',
      user: ''
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
    }
  },
  mounted () {
    EventBus.$on('logged-in', status => {
      console.log(status)
      this.auth = status
    })
  }
}
</script>

<style scoped>

</style>
