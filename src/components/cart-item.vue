<template>
    <div>
        <div class="cart-item d-flex">
            <div class="cart-img pt-3 pl-2">
                <img src="../assets/bear-select.png" alt="">
            </div>
            <div class="add-item p-3 flex-grow-1">
                <h5 class="text-left">Coffee Latte</h5>
                <div class="add-btn d-flex mt-5">
                    <button @click="min" type="button">-</button>
                    <span class="item" style="width: 25px">{{item}}</span>
                    <button @click="add" type="button">+</button>
                    <span class="flex-grow-1 text-right"><h6>Rp. {{ price }}</h6></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'cartItem',
  data () {
    return {
      item: 1,
      price: 15000
    }
  },
  methods: {
    add () {
      this.item = this.item + 1
      this.price = this.price + 15000
    },
    min () {
      this.item = this.item - 1
      this.price = this.price - 15000
    }
  }
}
</script>

<style scoped>
    span.item {
        border: 1px solid #82DE3A;
    }
    button {
        width: 25px;
        font-size: .8em;
    }
    .add-btn button {
        background: rgba(130, 222, 58, 0.2);
        border: 1px solid #82DE3A;
        box-sizing: border-box;
    }
    .add-btn input {
        background: #FFFFFF;
        border: 1px solid #82DE3A;
        box-sizing: border-box;
    }
</style>
