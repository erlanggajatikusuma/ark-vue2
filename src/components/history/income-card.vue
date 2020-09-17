<template>
    <div class="record m-4" style="border:1px solid yellow;">
        <div class="row d-flex">
            <div class="col-lg-4 col-md-6 col-sm-12 my-3">
                <div class="card">
                    <div class="card-body">
                        <h4>Today's Income</h4>
                        <h2>Rp. 1.000.000</h2>
                        <h4>+2% Yesterday</h4>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 my-3">
                <div class="card">
                    <div class="card-body">
                        <h4>Today's Income</h4>
                        <h2>Rp. 1.000.000</h2>
                        <h4>+2% Yesterday</h4>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12 my-3">
                <div class="card">
                    <div class="card-body">
                        <h4>Today's Income</h4>
                        <h2>Rp. 1.000.000</h2>
                        <h4>+2% Yesterday</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'incomeCard'
}
</script>

<style scoped>
    .card-body {
        background: linear-gradient(285.38deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%);
        filter: drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25));
        border-radius: 10px;
    }
</style>
