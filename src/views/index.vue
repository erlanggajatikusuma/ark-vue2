<template>
    <div class="landing">
      <header>
        <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link class="nav-link active" to="/home">Home</router-link>
              <router-link class="nav-link" to="/about">About</router-link>
            </div>
          </div>
        </nav>     -->
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container">
              <a class="navbar-brand" href="#">Arkcafe</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav ml-auto">
                      <router-link class="nav-link active" to="/home">Home</router-link>
                      <router-link class="nav-link" to="/about">About</router-link>
                      <!-- <router-link class="nav-link" to="/about">About</router-link> -->
                  </div>
              </div>
          </div>
        </nav>
      </header>
        <main>
          <div class="info text-left px-5">
            <h1 class="display-4">Ark Cafe</h1>
              <div class="badge text-wrap">
                  <p class="lead text-left">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eligendi laboriosam quia animi debitis? Dolor, quas similique deserunt,
                    reiciendis ea nam modi repellendus dolorum possimus sed quam.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eligendi laboriosam quia animi debitis? Dolor, quas similique deserunt,
                    reiciendis ea nam modi repellendus dolorum possimus sed quam.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eligendi laboriosam quia animi debitis? Dolor, quas similique deserunt,
                    reiciendis ea nam modi repellendus dolorum possimus sed quam.
                  </p>
              </div>
          </div>
        </main>
    </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped>
.landing {
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
/* Header */
header {
    position: absolute;
    z-index: 10;
    width: 100%;
}

.navbar-brand {
    font-weight: 600;
    font-size: 1.5em;
}
.nav-link {
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px;
}

.navbar-brand, .nav-link {
    color: white !important;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
}
.navbar-brand:hover, .nav-link:hover {
    opacity: 0.8;
}

/* Main */
main {
    position: relative;
    background: url('./product/3061577.jpg');
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    padding: 220px 0 200px;
    color: white;
}
main .display-4 {
    color: white;
    font-family: 'Sofia', cursive;
}
.info {
  position: absolute;
  left: 0;
}

/* Desktop */
@media (min-width: 992px) {
    main .badge {
        width: 700px;
    }
}
</style>
