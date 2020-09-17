<template>
    <div>
        <div class="row bg-dark">
            <div class="col-lg-12">
                <p class="text-center text-light display-4 pt-2">User Data</p>
            </div>
        </div>

        <div class="container">
          <div class="row mt-3">
            <div class="col-lg-6">
              <h3 class="text-info text-left">User</h3>
            </div>
            <div class="col-lg-6">
              <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#addProduct">
                Add new user
              </button>
            </div>
          </div>

            <!-- Display Products -->
            <div class="row">
              <div class="col-lg-12">
                <table class="table table-bordered table-striped">
                  <thead>
                    <tr class="bg-info text-light">
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role Id</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="text-center" v-for="user in users" :key="user.id">
                      <td>{{user.id}}</td>
                      <td>{{user.firstName}} {{user.lastName}}</td>
                      <td>{{user.email}}</td>
                      <td>{{user.roleId}}</td>
                      <td><a href="#" class="text-success" @click="showEditModal=true;edit(product)">Edit</a></td>
                      <td><a href="#" class="text-danger" @click="showDeleteModal=true;deletedId(product.id)">Delete</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'user',
  methods: {
    ...mapActions(['getAllUser'])
  },
  computed: {
    ...mapGetters({
      users: 'allUser'
    })
  },
  mounted () {
    this.getAllUser()
  }
}
</script>

<style scoped>

</style>
