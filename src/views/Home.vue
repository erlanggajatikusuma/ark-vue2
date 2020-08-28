<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-9 col-md-8 col-sm-12 mx-0 px-0 bg-danger">
          <HeadBar/>
          <div class="main-content d-flex">
            <Sidebar/>
            <Content/>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 mx-0 px-0 bg-success">
          <cart/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadBar from '../components/head-bar'
import Content from '../components/content'
import Sidebar from '../components/sidebar'
import cart from '../components/cart'

export default {
  name: 'Home',
  components: {
    HeadBar,
    Content,
    Sidebar,
    cart
  }
  // data () {
  //   return {
  //     products: []
  //   }
  // },
  // methods: {
  //   getData () {
  //     axios.get('http://localhost:3000/api/v1/product/')
  //       .then(res => {
  //         this.products = res.data.result
  //       })
  //   }
  // }
}
</script>
<style scoped>
</style>
