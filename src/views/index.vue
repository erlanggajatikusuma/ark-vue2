<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link active" to="/home">Home</router-link>
            <!-- <router-link class="nav-link" to="/history">History</router-link> -->
            <router-link class="nav-link" to="/about">About</router-link>
          </div>
        </div>
      </nav>
        <h1>Index Page</h1>
    </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped>

</style>
