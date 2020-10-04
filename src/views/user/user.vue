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
                      <td><a href="#" class="text-success" @click="edit(user)">Edit</a></td>
                      <td><a href="#" class="text-danger" @click="getId(user.id);del()">Delete</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
        <modal :data="userData" v-show="active" @close="toggle" @fire-event="update" />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import mixins from '../../components/mixins/swal'
import modal from './modal'
export default {
  name: 'user',
  mixins: [mixins],
  components: {
    modal
  },
  data () {
    return {
      active: false,
      userData: {
        id: null,
        firstName: '',
        lastName: '',
        roleId: ''
      }
    }
  },
  methods: {
    ...mapActions(['getAllUser', 'updateUser', 'deleteUser']),
    edit (user) {
      console.log(user)
      this.userData.id = user.id
      this.userData.firstName = user.firstName
      this.userData.lastName = user.lastName
      this.userData.roleId = user.roleId
      this.active = true
    },
    update () {
      const updating = {
        id: this.userData.id,
        data: {
          firstName: this.userData.firstName,
          lastName: this.userData.lastName,
          roleId: this.userData.roleId
        }
      }
      this.updateUser(updating)
        .then(res => {
          this.success('center', 'success', 'Data successfully Updated')
          this.active = !this.active
        })
    },
    toggle () {
      this.active = false
    },
    getId (id) {
      console.log(id)
      this.userData.id = id
    },
    del () {
      const id = this.userData.id
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteUser(id)
          this.$swal(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
        this.getAllUser()
      })
    }
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
