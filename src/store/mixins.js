// import { Line } from 'vue-chartjs'

// export default ({
//   extends: Line,
//   data () {
//     return {
//       type: 'line',
//       dataCollection: {
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
//         datasets: [{
//           label: '2020',
//           backgroundColor: '#3498db',
//           borderColor: 'rgba(136,136,136,0.5)',
//           data: [40, 39, 31, 11, 45, 50]
//         }]
//       },
//       options: {
//         title: {
//           display: true,
//           text: 'Chart.js Line Chart'
//         },
//         tooltips: {
//           mode: 'index',
//           intersect: false
//         },
//         hover: {
//           mode: 'nearest',
//           instersect: true
//         },
//         scales: {
//           xAxes: [{
//             display: true,
//             categoryPercentage: 0.5,
//             scaleLabel: {
//               display: true,
//               labelString: 'Month'
//             }
//           }],
//           yAxes: [{
//             display: true,
//             scaleLabel: {
//               display: true,
//               labelString: 'Value'
//             }
//           }]
//         },
//         legend: {
//           display: true
//         },
//         responsive: true,
//         maintainAspectRatio: false
//       }
//     }
//   },
//   mounted () {
//     // renderChart function renders the chart with the datacollection and options object.
//     this.renderChart(this.datacollection, this.options)
//   }
// })

// import Vue from 'vue'
// export default {
//   methods: {

//   }
// }
