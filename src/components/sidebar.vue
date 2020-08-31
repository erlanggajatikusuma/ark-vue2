<template>
    <div class="sidebar">
        <div class="p-3 img-drop tex-center">
            <a href="#">
                <img class="mx-auto d-block" src="../assets/fork.png">
            </a>
        </div>
        <div class="p-3 img-drop">
            <a href="#">
                <img class="image" src="../assets/clipboard.png">
            </a>
        </div>
        <div class="p-3 img-drop">
            <a href="#">
                <img class="image" src="../assets/add.png">
            </a>
        </div>
        <div class="p-4 img-drop">
            <router-link to="/login">
                <img @click="logout" class="image" src="../assets/logout (1).png">
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Sidebar',
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style scoped>
    .sidebar {
        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }
    .img-drop{
        width: 99px;
        text-align: center;
    }
    .image {
        width: 55.05px;
        height: 50.76px;
    }
</style>
