<template>
    <div class="record m-4">
        <div class="row d-flex">
            <div class="col-lg-4 col-md-6 col-sm-12 my-3">
                <div class="card">
                    <div class="card-body">
                        <h4>Today's Income</h4>
                        <h2>Rp. {{setDay}}</h2>
                        <h4>+2% Yesterday</h4>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 my-3">
                <div class="card">
                    <div class="card-body">
                        <h4>Orders</h4>
                        <h2>{{setOrders}}</h2>
                        <h4>+2% Yesterday</h4>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 my-3">
                <div class="card">
                    <div class="card-body">
                        <h4>This Year's Income</h4>
                        <h2>Rp. {{setYear}}</h2>
                        <h4>+2% Yesterday</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'incomeCard',
  data () {
    return {
      arrToday: [],
      arrYear: [],
      orders: []
    }
  },
  computed: {
    setDay () {
      if (this.arrToday.length === 0) {
        return 0
      } else {
        const total = this.arrToday.reduce((acc, curr) => acc + curr, 0)
        return total
      }
    },
    setOrders () {
      if (this.orders.length === 0) {
        return 0
      } else {
        const total = this.orders.reduce((acc, currentValue) => acc + currentValue, 0)
        return total
      }
    },
    setYear () {
      if (this.arrYear.length === 0) {
        return 0
      } else {
        const total = this.arrYear.reduce((acc, currentValue) => acc + currentValue, 0)
        return total
      }
    }
  },
  async created () {
    const { data } = await axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/history?limit=99999`)
    data.result.forEach(d => {
      const date = d.date
      const today = moment(new Date()).format('D MMMM YYYY')

      // const month = moment(date, 'MMMM').format('MMMM')
      // const thisMonth = moment().format('MMMM')

      const year = moment(date, 'MMMM').format('YYYY')
      const thisYear = moment().format('YYYY')

      const { amount } = d
      if (date === today) {
        this.arrToday.push(amount)
      }
      // if (month === thisMonth) {
      //   this.arrMonth.push(amount)
      // }
      if (year === thisYear) {
        this.arrYear.push(amount)
      }

      const order = d.orders.split(',')
      this.orders.push(order.length)
    })
  }
}
</script>

<style scoped>
.card {
    border-radius: 10px;
}
.card-body {
    background: linear-gradient(285.38deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%);
    filter: drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25));
    border-radius: 10px;
}
</style>
