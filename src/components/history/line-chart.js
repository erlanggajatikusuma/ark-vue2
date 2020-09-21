// import { Line } from 'vue-chartjs'

// export default ({
//   extends: Line,
//   mounted () {
//     this.renderChart({
//       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agus', 'Sep', 'Okt', 'Nov', 'Des'],
//       datasets: [
//         {
//           label: 'My activities',
//           backgroundColor: '#dd4b39',
//           data: [40, 30, 50, 40, 60, 66, 68, 20, 79, 22, 49, 69]
//         }
//       ]
//     }, { responsive: true, maintainAspectRasio: false })
//   }
// })
import { Line } from 'vue-chartjs'

export default ({
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    thisMonth: {
      type: String,
      default: '08'
    },
    lastMonth: {
      type: String,
      default: '07'
    }
  },
  data () {
    return {
      thisMonth: [],
      lastMonth: []
    }
  },
  mounted () {
    this.renderChart({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agus', 'Sep', 'Okt', 'Nov', 'Des'],
      datasets: [
        {
          label: 'My activities',
          backgroundColor: '#dd4b39',
          data: [40, 30, 50, 40, 60, 66, 68, 20, 79, 22, 49, 69]
        }
      ]
    }, { responsive: true, maintainAspectRasio: false })
  }
})
