<template>
    <div class="card ml-5 my-2 bg-warning">
        <!-- <div class="card m-4">
            <a href="#">
                <img :src="data.image" class="card-img" alt="">
            </a>
            <p class="text-wrap">{{data.name}}</p>
            <h5>Rp. {{data.price}}</h5>
        </div> -->
        <div class="card-content my-3">
            <a href="#">
                <img :src="data.image" class="card-img">
            </a>
            <p class="text-wrap d-flex ml-2 mt-3">{{data.name}}</p>
            <h5 class="d-flex ml-2">Rp. {{data.price}}</h5>
        </div>
    </div>
</template>

<script>
export default {
  name: 'cardProduct',
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style scoped>
    .card {
        width: 255px;
        background: transparent;
        border: transparent;
    }
    .card-img {
        border-radius: 10px;
        width: 250px;
        height: 200px;
        object-fit: cover;
        cursor: pointer;
    }
</style>
