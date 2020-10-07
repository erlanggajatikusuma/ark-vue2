<template>
    <div class="container-page">
        <nav aria-label="...">
            <ul class="pagination">
                <li class="page-item" v-show="data.currentPage > 1">
                    <a class="page-link" href="#" @click.prevent="setPagination(data.currentPage - 1)">Prev</a>
                </li>
                <li class="page-item" :class="n==data.currentPage?'active':''" v-for="n in data.totalPage" :key="n">
                    <a class="page-link" href="#" @click.prevent="$emit('event-page', n)">{{n}}</a>
                </li>
                <li class="page-item" v-show="data.currentPage < data.totalPage">
                    <a class="page-link" href="#" @click.prevent="setPagination(data.currentPage + 1)">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Pagination',
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    ...mapActions(['getProducts', 'getHistories']),
    setPagination (number) {
      const url = `?page=${number}`
      this.getProducts(url)
      this.getHistories(url)
    }
  }
}
</script>

<style scoped>
.container-page{
    margin: 10px auto 5px;
}
</style>
