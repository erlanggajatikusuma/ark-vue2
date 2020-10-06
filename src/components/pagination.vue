<template>
    <div class="container-page">
        <nav aria-label="...">
            <ul class="pagination">
                <li class="page-item disabled">
                    <router-link class="page-link" to="#" tabindex="-1" aria-disabled="true">Prev</router-link>
                </li>
                <li class="page-item" :class="n==data.currentPage?'active':''" v-for="n in data.totalPage" :key="n">
                    <a class="page-link" href="#" @click.prevent="$emit('event-page', n)">{{n}}</a>
                </li>
                <li class="page-item">
                    <router-link class="page-link" to="#">Next</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    data: {
      type: Object
    }
  }
}
</script>

<style scoped>
.container-page{
    margin: 10px auto 5px;
}
</style>
