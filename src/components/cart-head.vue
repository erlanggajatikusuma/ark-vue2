<template>
        <div class="cart-title d-flex justify-content-center align-items-center">
            <h2>Cart</h2>
            <span class="total-item rounded-circle ml-2 mb-1">{{item}}</span>
        </div>
</template>

<script>
export default {
  name: 'cartHead',
  data () {
    return {

    }
  },
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
    }
    .cart-title {
        height: 100px;
        background: #FFFFFF;
        box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
    }
    .total-item {
        text-align: center;
        line-height: 22px;
        background: #57CAD5;
        width: 20px;
        height: 20px;
        color: white;
    }
</style>
