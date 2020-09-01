<template>
    <header>
        <div class="banner">
            <div class="menu-img">
                <img src="../../assets/menu.png">
            </div>
            <h2>History</h2>
        </div>
    </header>
</template>

<script>
export default {
  name: 'HeadBar'
}
</script>

<style scoped>
    header {
        display: flex;
        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        height: 100px;
    }
    .banner {
        display: flex;
        width: 100%;
        align-items: center;
        padding: 0 30px;
        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }
    .banner h2 {
        display: block;
        margin: 0 auto;
    }
</style>
