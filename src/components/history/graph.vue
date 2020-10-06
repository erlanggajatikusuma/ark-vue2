<template>
    <div class="graph-wrapper m-4">
         <div class="mx-5 pt-4 d-flex justify-content-between">
            <h3>Revenue</h3>
            <div class="dropdown">
                <select class="custom-select" v-model="thisMonth" @change="selectMonth">
                  <option selected value="Month">Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
            </div>
         </div>
        <!-- Box Header -->
        <div class="box-body p-4">
            <line-chart :chartData="arrAmount" :options="chartOptions" label="Amount"></line-chart>
        </div>
    </div>
</template>

<script>
import LineChart from './lineChart'
import moment from 'moment'
import { mapActions } from 'vuex'
export default {
  name: 'graph',
  components: {
    LineChart
  },
  data () {
    return {
      arrAmount: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      thisMonth: 'Month'
    }
  },
  methods: {
    ...mapActions(['getHistories', 'getHistoriesChart']),
    selectMonth () {
      this.getHistoriesChart()
        .then(res => {
          const data = []
          res.forEach(d => {
            const date = moment(d.date, 'DDMMM').format('DD MMM YY')
            const month = moment(date, 'MMMM').format('MMMM')
            const { amount } = d

            if (month === this.thisMonth) {
              if (data.find(item => item.date === date)) {
                const index = data.findIndex(e => e.date === date)
                data[index] = { date, total: data[index].total + amount }
              } else {
                data.push({ date, total: amount })
              }
            }
          })
          this.arrAmount = data
        })
    }
  },
  mounted () {
    this.getHistories()
  }
}
</script>

<style scoped>
.graph-wrapper {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}
.box-body {
  height: 490px;
}
</style>
