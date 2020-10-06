<template>
    <div class="sidebar navbar-nav">
        <div class="p-3 img-drop tex-center">
            <router-link to="/home">
                <img class="mx-auto d-block" src="../assets/fork.png">
            </router-link>
        </div>
        <div class="p-3 img-drop">
            <router-link to="/history">
                <img class="image" src="../assets/clipboard.png">
            </router-link>
        </div>
        <div class="p-3 img-drop" v-if="roleId === 1">
            <router-link to="/product">
                <img class="image" src="../assets/add.png">
            </router-link>
        </div>
        <div class="p-3 img-drop" v-if="roleId === 1">
            <router-link to="/user">
                <img class="image" src="../assets/user.png">
            </router-link>
        </div>
        <div class="p-4 img-drop">
            <router-link to="/login">
                <img @click="logout" class="image" src="../assets/logout (1).png">
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters({ roleId: 'get_roleId' })
  },
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
