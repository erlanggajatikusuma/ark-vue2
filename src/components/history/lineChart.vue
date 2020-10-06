<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  props: {
    label: {
      type: String
    },
    chartData: {
      type: Array
    },
    options: {
      type: Object
    }
  },
  mounted () {
    const dates = this.dataChart.map(d => d.date)
    const totals = this.dataChart.map(d => d.total)
    console.log(this.chartData)

    this.renderChart({
      labels: dates,
      datasets: [{
        label: this.label,
        data: totals
      }]
    }, this.options)
  },
  computed: {
    dataChart: function () {
      return this.chartData
    }
  },
  watch: {
    chartData: function () {
      this.$data._chart.destroy()
      const dates = this.dataChart.map(d => d.date)
      const totals = this.dataChart.map(d => d.total)
      console.log(this.chartData)

      this.renderChart({
        labels: dates,
        datasets: [{
          label: this.label,
          data: totals
        }]
      }, this.options)
    }
  }

}
</script>
