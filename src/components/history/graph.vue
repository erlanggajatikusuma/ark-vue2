<template>
    <div class="graph-wrapper m-4">
         <div class="mx-5 pt-4 d-flex justify-content-between">
            <h3>Revenue</h3>
            <div class="dropdown">
                <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >Month</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">January</a>
                    <a class="dropdown-item" href="#">February</a>
                    <a class="dropdown-item" href="#">March</a>
                    <a class="dropdown-item" href="#">April</a>
                    <a class="dropdown-item" href="#">May</a>
                    <a class="dropdown-item" href="#">June</a>
                    <a class="dropdown-item" href="#">July</a>
                    <a class="dropdown-item" href="#">August</a>
                    <a class="dropdown-item" href="#">September</a>
                    <a class="dropdown-item" href="#">October</a>
                    <a class="dropdown-item" href="#">November</a>
                    <a class="dropdown-item" href="#">December</a>
                </div>
            </div>
         </div>
        <!-- Box Header -->
        <div class="box-body p-4" v-if="arrAmount.length > 0">
            <line-chart :chartData="arrAmount" :options="chartOptions" label="Amount"></line-chart>
        </div>
    </div>
</template>

<script>
import LineChart from './lineChart'
import axios from 'axios'
// import moment from 'moment'
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
      }
    }
  },
  async created () {
    const { data } = await axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/history?limit=1000`)
    console.log(data.result)
    data.result.forEach(d => {
      const date = d.date
      const { amount } = d

      this.arrAmount.push({ date, total: amount })
    })
  }
}
</script>

<style scoped>
.graph-wrapper {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}
</style>
