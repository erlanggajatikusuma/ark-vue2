<template>
    <div class="orders m-4" style="border:1px solid yellow;">
        <div class="row d-flex">
            <div class="col-lg-12">
                <div class="recent-order">
                    <div class="recent-head">
                        <h2>Recent Order</h2>
                        <!-- <div class="drop-down">
                            Today
                            <img src="assets/img/arrow-down-sign-to-navigate 1.png" alt="">
                        </div> -->
                    </div>
                    <div class="order-data">
                        <table class="table bg-success">
                            <thead class="bg-info">
                            <tr class="bg-danger">
                                <th>Id</th>
                                <th>Invoices</th>
                                <th>Cashier</th>
                                <th>Date</th>
                                <th>Orders</th>
                                <th>Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="history in histories" :key="history.id">
                                <td>{{history.id}}</td>
                                <td>{{history.invoice}}</td>
                                <td>{{history.cashier}}</td>
                                <td>{{history.date}}</td>
                                <td>{{history.orders}}</td>
                                <td>Rp. {{history.amount}}<td/>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ordersCard',
  methods: {
    ...mapActions(['getHistories'])
  },
  computed: {
    ...mapGetters({
      histories: 'get_histories'
    })
  },
  mounted () {
    this.getHistories()
  }
}
</script>

<style scoped>
    .recent-order {
    background: #FFFFFF;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 20px;
}

.recent-head {
    display: flex;
    justify-content: space-between;
}

/* dropdown revenue & recent order */
.drop-down {
    width: 90px;
    height: 25px;
    background: #CECECE;
    border-radius: 10px;
    text-align: center;
    margin: 5px;
    line-height: 25px;
}

tbody tr {
    color: #CECECE;
}
</style>
