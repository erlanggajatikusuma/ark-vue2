<template>
    <div class="main d-flex">
        <div class="row">
          <cardProduct :data="product" v-for="product in products" :key="product.id"/>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import cardProduct from './cardProduct'
export default {
  name: 'mainContent',
  components: {
    cardProduct
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  computed: {
    // products () {
    //   return this.$store.getters.productsG
    // } using single getters
    ...mapGetters({
      products: 'productsG'
    })
  },
  mounted () {
    // this.$store.dispatch('getProducts') using single actions
    this.getProducts()
  }
}
</script>

<style scoped>
  main{
    background: rgba(190, 195, 202, 0.3);
  }
</style>
