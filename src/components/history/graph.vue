<template>
    <div class="graph-wrapper m-4">
         <div class="mx-5 d-flex justify-content-between">
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
        <div class="box box-primary">
            <h3 class="box-title">Activity Data</h3>
        </div>
        <!-- Box Header -->
        <div class="box-body p-4">
            <lineChart />
        </div>
    </div>
</template>

<script>
import lineChart from './line-chart'
export default {
  name: 'graph',
  components: {
    lineChart
  }
}
</script>

<style scoped>
.graph-wrapper {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}
</style>
