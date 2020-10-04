<template>
    <div class="card ml-5 my-2">
        <div class="card-content my-3">
            <a href="#">
              <div class="img-one" v-active>
                <img :src="data.image" class="card-img" @click.prevent="addToCart">
              </div>
              <!-- <div class="img-two" @click="selected= !selected">
                <img v-if="selected" src="../assets/tick (1).png">
              </div> -->
            </a>
            <p class="text-wrap d-flex ml-2 mt-3">{{data.name}}</p>
            <h5 class="d-flex ml-2">Rp. {{data.price}}</h5>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'cardProduct',
  props: {
    data: {
      type: Object
    }
  },
  directives: {
    active: {
      inserted: (el, binding) => {
        el.style = ''
      }
    }
  },
  data () {
    return {
      selected: false
    }
  },
  methods: {
    ...mapMutations(['itemsM']),
    addToCart () {
      this.itemsM({
        id: this.data.id,
        name: this.data.name,
        price: this.data.price,
        image: this.data.image,
        qty: 1
      })
    }
  }
}
</script>

<style scoped>
    .card {
        /* width: 250px; */
        width: 26%;
        background: transparent;
        border: transparent;
    }
    .card-img {
        border-radius: 10px;
        /* width: 250px; */
        width: 100%;
        height: 200px;
        object-fit: cover;
        cursor: pointer;
    }
    .card-img:hover {
      filter: brightness(60%);
    }
    /* .img-two {
      z-index: -1;
      position: absolute;
      background: black;
      object-fit: cover;
      top: 0;
      right: 0;
      left: 0;
      margin: auto;
      width: 250px;
      height: 200px;
    } */
    @media screen and (max-width: 1200px) {
      .card {
        width: 40%;
      }
    }
    @media screen and (max-width: 995px) {
      .card {
        width: 80%;
      }
    }
    @media screen and (max-width: 670px) {
      .card {
        width: 70%;
      }
    }
</style>
