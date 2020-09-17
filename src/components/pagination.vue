<template>
    <div class="container-page">
        <nav aria-label="...">
            <ul class="pagination">
                <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li>
                <li class="page-item active" :class="n==data.currentPage?'active':''" v-for="n in data.totalPage" :key="n"><a class="page-link" href="#" @click.prevent="$emit('event-page', n)">{{n}}</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
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
