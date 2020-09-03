<template>
    <div class="cart-container">
        <cartHead/>
        <emptyCart v-if="total === 0"/>
        <div class="cart-item d-flex" v-else v-for="item in items" :key="item.id">
            <div class="cart-img pt-3 pl-2">
                <img :src="item.image">
            </div>
            <div class="add-item p-3 flex-grow-1 mx-2">
                <h5 class="text-left">{{item.name}}</h5>
                <div class="add-btn d-flex mt-5">
                    <button type="button" @click="dec(item.id)">-</button>
                    <span class="item" style="width: 25px">{{item.qty}}</span>
                    <button type="button" @click="inc(item.id)">+</button>
                    <span class="flex-grow-1 text-right"><h6>Rp. {{ item.price * item.qty }}</h6></span>
                </div>
            </div>
        </div>
        <div class="cart-total">
          <div class="total d-flex justify-content-between pr-3 pl-2" v-if="total > 0">
            <span class="right">Total</span>
            <span class="right font-weight-bold">Rp. {{price}}*</span>
          </div>
          <span class="d-flex m-2 font-weight-bold" v-if="total > 0">*Belum Termasuk ppn</span>
          <div class="checkout-btn" v-if="total > 0">
            <button class="btn btn-two font-weight-bold py-2 mb-2 btn-block" data-toggle="modal" data-target="#modalCheckout">
              Checkout
            </button>
            <button class="btn btn-one font-weight-bold py-2 btn-block">
              Cancel
            </button>
          </div>
        </div>
        <Modal/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import cartHead from './cart-head'
import emptyCart from './emptyCart'
import Modal from './modal'
// import cartItem from './cart-item'
export default {
  name: 'cart',
  components: {
    cartHead,
    emptyCart,
    Modal
    // cartItem
  },
  data () {
    return {
      quantity: this.$store.state.items
    }
  },
  methods: {
    inc (id) {
      this.quantity.forEach(q => {
        if (q.id === id) {
          q.qty++
        }
      })
    },
    dec (id) {
      this.quantity.forEach(q => {
        if (q.id === id) {
          q.qty--
        }
      })
    }
  },
  computed: {
    ...mapGetters({
      // products: 'productsG'
      items: 'itemsG',
      qty: 'quantity',
      price: 'price',
      ppn: 'ppn'
    }),
    total () {
      return this.qty
    }
  }
  // mounted () {
  //   this.getProducts()
  // }
}
</script>

<style scoped>
  span.item {
        border: 1px solid #82DE3A;
    }
    .cart-img {
      width: 100px;
      height: 100px;
    }
    .cart-img img {
      border-radius: 7px;
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
    .add-btn button {
        background: rgba(130, 222, 58, 0.2);
        border: 1px solid #82DE3A;
        box-sizing: border-box;
        width: 25px;
        font-size: .8em;
    }
    .add-btn input {
        background: #FFFFFF;
        border: 1px solid #82DE3A;
        box-sizing: border-box;
    }
    /* Checkout */
    .btn-two {
        color: #fff;
        background-color: #57cad5;
    }
    .btn-two:hover {
        color: #fff;
        background-color: #41c5d1;
    }
    .btn-one {
        background-color: #f24f8a;
        color: #ddd;
    }
    .btn-one:hover {
        color: #fff;
        background-color: #ee5f94;
    }
</style>
