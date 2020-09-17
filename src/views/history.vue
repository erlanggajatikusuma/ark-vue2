<template>
    <div>
        <headBar/>
        <div class="main-content d-flex">
          <Sidebar/>
          <historyContent/>
        </div>
    </div>
</template>

<script>
import headBar from '../components/history/head-bar'
import Sidebar from '../components/sidebar'
import historyContent from '../components/history/history-content'
export default {
  name: 'history',
  components: {
    headBar,
    Sidebar,
    historyContent
  }
}
</script>

<style scoped>

</style>
