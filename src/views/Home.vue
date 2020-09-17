<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-9 col-md-8 col-sm-12 mx-0 px-0 background-item">
          <HeadBar/>
          <div class="main-content d-flex">
            <Sidebar/>
            <mainContent/>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 mx-0 px-0">
          <cart/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadBar from '../components/head-bar'
import mainContent from '../components/main-content'
import Sidebar from '../components/sidebar'
import cart from '../components/cart'

export default {
  name: 'Home',
  components: {
    HeadBar,
    mainContent,
    Sidebar,
    cart
  }
}
</script>
<style scoped>
  .background-item{
    background: rgba(190, 195, 202, 0.3);
  }
</style>
