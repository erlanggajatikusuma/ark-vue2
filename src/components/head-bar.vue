<template>
        <div class="header d-flex justify-content-between align-items-center px-3">
            <div>
                <img class="m-2 img-head" src="../assets/menu.png">
            </div>
            <h2>Food Items</h2>
            <div>
                <img class="img-head mx-3" src="../assets/magnifying-glass.png">
            </div>
        </div>
</template>

<script>
export default {
  name: 'HeadBar'
}
</script>

<style scoped>
    .header {
        height: 100px;
        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }
    .img-head {
        width: 35.35px;
        height: 35px;
    }
    .img-head:hover {
        cursor: pointer;
    }
</style>
