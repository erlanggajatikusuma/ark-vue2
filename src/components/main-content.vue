<template>
    <div class="main">
        <div class="form-group row col-lg-2 col-md-2 col-sm-2 mx-3 mt-3">
          <select class="form-control" name="sort" id="sort" @change="sorter" style="width:100px">
            <option value="" selected>Sort by</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
      <div class="row">
        <cardProduct :data="product" v-for="product in products" :key="product.id"/>
      </div>
      <div class="page d-flex">
        <pagination v-show="active" :data="paginations" @event-page="handlePage" />
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import cardProduct from './cardProduct'
import pagination from './pagination'
export default {
  name: 'mainContent',
  data () {
    return {
      active: true
    }
  },
  components: {
    cardProduct,
    pagination
  },
  methods: {
    ...mapActions(['getProducts', 'feature']),
    sorter (e) {
      const url = `?sort=${e.target.value}`
      console.log(e.target.value)
      this.getProducts(url)
      this.active = false
    },
    handlePage (number) {
      const url = `?page=${number}`
      this.getProducts(url)
    },
    paging (a) {
      console.log(a)
    }
  },
  computed: {
    ...mapGetters({
      products: 'productsG',
      paginations: 'get_page'
    })
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped>
  main{
    background: rgba(190, 195, 202, 0.3);
  }
</style>
