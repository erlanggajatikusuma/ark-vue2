<template>
    <div class="main d-flex bg-info">
        <div class="row">
          <cardProduct :data="product" v-for="product in products" :key="product.id"/>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import cardProduct from './cardProduct'
export default {
  name: 'content',
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
</style>
