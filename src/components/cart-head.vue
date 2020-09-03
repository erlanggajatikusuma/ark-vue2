<template>
        <div class="cart-title d-flex justify-content-center align-items-center">
            <h2>Cart</h2>
            <span class="total-item rounded-circle ml-3">{{item}}</span>
        </div>
</template>

<script>
export default {
  name: 'cartHead',
  computed: {
    item () {
      return this.$store.getters.quantity
    }
  }
}
</script>

<style scoped>
    .cart-title {
        background: #FFFFFF;
        /* border: 1px solid #CECECE; */
    }
    .cart-title {
        height: 100px;
        background: #FFFFFF;
        box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
    }
</style>
