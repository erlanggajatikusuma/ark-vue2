<template>
    <div>
         <!-- Modal -->
        <div class="modal" id="modalCheckout">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close">
                        <span aria-hidden="true" @click="$emit('close')">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modal-head d-flex justify-content-between">
                        <h5 class="modal-title font-weight-bold">Checkout</h5>
                        <span class="h6 font-weight-bold">Receipt no: #{{invoice}}</span>
                    </div>
                    <small class="h6 mb-5 d-flex">Cashier: {{cashier}}</small>
                        <div class="print-list mt-5">
                            <div class="item-checkout" v-for="item in items" :key="item.id">
                                <span>{{item.name}} x {{item.qty}} </span>
                                <span>Rp. {{item.price * item.qty}}</span>
                            </div>
                            <div class="item-checkout">
                                <span>PPN 10%</span>
                                <span>Rp. {{ppn}}</span>
                            </div>
                            <div class="float-right font-weight-bold font-15">
                                Total: Rp. {{price + ppn}}
                            </div>
                            <div class="clearfix"></div>
                            <p class="text-left font-weight-bold font-15">
                                Payment: Cash
                            </p>
                        </div>
                </div>
                <div class="modal-footer" v-if="!print">
                    <div class="footer-btn align-items-center">
                        <button type="button" class="btn print" @click="printInvoice">Print</button>
                        <p class="h6 my-2">Or</p>
                        <button type="button" class="btn send">Send Email</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'modalCheckout',
  data () {
    return {
      print: false
    }
  },
  computed: {
    ...mapGetters({
      items: 'itemsG',
      price: 'price',
      ppn: 'ppn',
      invoice: 'get_invoice',
      cashier: 'get_cashier'
    })
  },
  methods: {
    printInvoice () {
      this.print = true
      setTimeout(() => {
        this.$htmlToPaper('modalCheckout', null, () => {
          this.print = false
        })
      }, 200)
    }
  }
}
</script>

<style scoped>
.item-checkout {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: bold;
}

.footer-btn {
    display: block;
    margin: 0 auto;
    text-align: center;
}

button.print {
    background: #F24F8A;
}
button.send {
    background: #57CAD5;
}

.footer-btn button.btn {
    width: 350px;
    border-radius: 5px;
    font-size: 20px;
    color: #FFFFFF;
}
.modal {
    display: block;
    background: rgba(0, 0, 0, .6);
}
</style>
