<template>
    <div class="main-history">
        <incomeCard/>
        <graph/>
        <ordersCard/>
    </div>
</template>

<script>
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
  },
  data () {
    return {
      active: true
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
