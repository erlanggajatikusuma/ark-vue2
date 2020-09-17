<template>
    <div class="main-history bg-info">
        <incomeCard/>
        <graph/>
        <!-- <div class="wrapper">
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Activity Data</h3>
            </div>
            <div class="box-body">
              <div class="row">
                <div class="col-md-8">
                  <lineChart/>
                </div>
                <div class="col-md-4">
                  <p>Data Points</p>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <ordersCard/>
    </div>
</template>

<script>
// import lineChart from './line-chart'
import incomeCard from './income-card'
import ordersCard from './orders-card'
import graph from './graph'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'historyContent',
  components: {
    incomeCard,
    ordersCard,
    graph
    // lineChart
  },
  data () {
    return {

    }
  },
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
    .main-history {
        width: 100%;
        box-sizing: border-box;
    }
</style>
