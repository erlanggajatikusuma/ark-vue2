<template>
        <div class="header d-flex justify-content-between align-items-center px-3">
            <div>
                <img class="m-2 ml-3 img-head" src="../assets/menu.png">
            </div>
            <h2>Food Items</h2>
            <div>
                <input type="text" placeholder="Search..." v-on:keyup="searching" v-show="showSearch">
                <img class="img-head mx-3" src="../assets/magnifying-glass.png" v-show="!showSearch">
            </div>
        </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HeadBar',
  data () {
    return {
      showSearch: false
    }
  },
  methods: {
    ...mapActions(['feature']),
    searching (e) {
      const url = `?search=${e.target.value}`
      this.feature(url)
    }
  }
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
