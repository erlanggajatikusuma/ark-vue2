<template>
    <div class="cart-container">
        <cartHead/>
        <emptyCart/>
        <cartItem/>
        <cartItem/>
        <cartItem/>
    </div>
</template>

<script>
import cartHead from './cart-head'
import emptyCart from './emptyCart'
import cartItem from './cart-item'
export default {
  name: 'cart',
  components: {
    cartHead,
    emptyCart,
    cartItem
  }
}
</script>

<style scoped>

</style>
