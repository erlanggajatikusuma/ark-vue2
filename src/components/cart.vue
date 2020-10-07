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
            <button class="btn btn-two font-weight-bold py-2 mb-2 btn-block" @click="Checkout">
              Checkout
            </button>
            <button class="btn btn-one font-weight-bold py-2 btn-block" @click="clear">
              Cancel
            </button>
          </div>
        </div>
        <modalCheckout v-show="show" @close="closeModal"/>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import cartHead from './cart-head'
import emptyCart from './emptyCart'
import modalCheckout from './modal'
import mixins from './mixins/swal'
export default {
  name: 'cart',
  mixins: [mixins],
  components: {
    cartHead,
    emptyCart,
    modalCheckout
  },
  data () {
    return {
      quantity: this.$store.state.items,
      show: false
    }
  },
  methods: {
    ...mapActions(['postHistory']),
    ...mapMutations(['CART_TO_CHECKOUT', 'GENERATE_INVOICE', 'CASHIER']),
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
          if (q.qty > 1) {
            q.qty--
          }
        }
      })
    },
    clear () {
      this.$store.dispatch('clearCart')
    },
    Checkout () {
      this.confirmSwal('Checkout', 'Want to checkout ?', 'question', () => {
        this.show = !this.show
        /* Random Invoice */
        this.GENERATE_INVOICE()
        /* Orders */
        const productName = []
        this.items.map(item => {
          productName.push(item.name)
        })
        /* Cashier */
        this.CASHIER()
        /* Amount */
        const totalPrice = this.price + this.ppn
        const data = {
          cashier: this.cashier,
          invoice: `#${this.invoice}`,
          orders: productName.join(', '),
          amount: totalPrice
        }
        this.postHistory(data)
      })
    },
    closeModal () {
      this.show = !this.show
      this.clear()
    }
  },
  computed: {
    ...mapGetters({
      items: 'itemsG',
      qty: 'quantity',
      price: 'price',
      ppn: 'ppn'
    }),
    ...mapState(['invoice', 'cashier']),
    total () {
      return this.qty
    }
  }
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
