<template>
    <div class="main-history">
        <incomeCard/>
    </div>
</template>

<script>
import incomeCard from './income-card'
export default {
  name: 'historyContent',
  components: {
    incomeCard
  }
}
</script>

<style scoped>
    .main-history {
        width: 100%;
        box-sizing: border-box;
    }
</style>
