<template>
    <div id="products">
        <div class="row bg-dark">
            <div class="col-lg-12">
                <p class="text-center text-light display-4 pt-2">Product Data</p>
            </div>
        </div>

        <div class="container">
          <div class="row mt-3">
            <div class="col-lg-6">
              <h3 class="text-info text-left">Products</h3>
            </div>
            <div class="col-lg-6">
              <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#addProduct">
                Add new product
              </button>
            </div>
          </div>
            <hr class="bg-info">
            <!-- Alert -->
            <div class="alert alert-danger text-left" v-if="errorMsg">Error Message</div>
            <div class="alert alert-success text-left" v-if="successMsg">Success Message</div>

            <!-- Display Products -->
            <div class="row">
              <div class="col-lg-12">
                <table class="table table-bordered table-striped">
                  <thead>
                    <tr class="bg-info text-light">
                      <th>Id</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Id Category</th>
                      <th>Id Status</th>
                      <!-- <th>Image</th> -->
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="text-center" v-for="product in products" :key="product.id" :data="product">
                      <td>{{product.id}}</td>
                      <td>{{product.name}}</td>
                      <td>Rp. {{product.price}}</td>
                      <td>{{product.idCategory}}</td>
                      <td>{{product.idStatus}}</td>
                      <!-- <td>{{product.image}}</td> -->
                      <td><a href="#" class="text-success" @click="showEditModal=true;edit(product)">Edit</a></td>
                      <td><a href="#" class="text-danger" @click="showDeleteModal=true;deleteData(product)">Delete</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>

        <!-- Add Product -->
          <div class="modal fade" id="addProduct" tabindex="-1" aria-labelledby="addProductLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Add Product</h5>
                  <button type="button" class="close" aria-label="Close" data-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body p-4">
                  <form>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-2 col-form-label h6">Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control shadow" v-model="form.name">
                        </div>
                    </div>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-2 col-form-label h6">Image</label>
                        <div class="col-sm-10">
                            <input type="file" class="form-control shadow">
                        </div>
                    </div>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-2 col-form-label h6">Price</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control shadow" v-model="form.price">
                        </div>
                    </div>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-2 col-form-label h6">Category</label>
                        <div class="col-sm-10">
                            <div class="dropdown d-flex">
                                <div class="form-group btn shadow">
                                  <select name="category" style="border:transparent;" v-model="form.idCategory">
                                    <option value="1">Drink</option>
                                    <option value="2">Food</option>
                                  </select>
                                </div>
                            </div>
                        </div>
                    </div>
                  </form>
                </div>
                 <div class="modal-footer">
                    <button type="submit" class="btn btn-primary btn-block" data-dismiss="modal" @click="insertData()">Add</button>
                    <button type="button" class="btn btn-secondary btn-block" data-dismiss="modal" @click="cancel()">Cancel</button>
                 </div>
              </div>
            </div>
          </div>
        <!-- Add Product -->
        <!-- Edit Product -->
        <div id="overlay" v-if="showEditModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Edit Product</h5>
                  <button type="button" class="close" aria-label="Close" @click="showEditModal=false">
                    <span aria-hidden="true" data-dismiss="modal">&times;</span>
                  </button>
                </div>
                <div class="modal-body p-4">
                  <form>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-2 col-form-label h6">Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control shadow" v-model="form.name">
                        </div>
                    </div>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-2 col-form-label h6">Price</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control shadow" v-model="form.price">
                        </div>
                    </div>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-2 col-form-label h6">Image</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control shadow" v-model="form.image">
                        </div>
                    </div>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-2 col-form-label h6">Status</label>
                        <div class="col-sm-10 d-flex">
                            <!-- <input type="text" class="form-control shadow" v-model="form.idStatus"> -->
                            <select class="form-group btn shadow" name="status" style="border:transparent;" v-model="form.idStatus">
                              <option value="1">Available</option>
                              <option value="0">Sold Out</option>
                            </select>
                        </div>
                    </div>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-2 col-form-label h6">Category</label>
                        <div class="col-sm-10 d-flex">
                            <select class="form-group btn shadow" name="category" style="border:transparent;" v-model="form.idCategory">
                              <option value="1">Drink</option>
                              <option value="2">Food</option>
                            </select>
                        </div>
                    </div>
                  </form>
                </div>
                    <div class="modal-footer">
                      <button type="submit" class="btn btn-primary btn-block" data-dismiss="modal" @click="updateData(form);showEditModal=false">Update</button>
                      <button type="button" class="btn btn-secondary btn-block" data-dismiss="modal" @click="cancel();showEditModal=false">Cancel</button>
                    </div>
              </div>
            </div>
          </div>
        <!-- Edit Product -->
        <!-- Delete Product -->
        <div id="overlay" v-if="showDeleteModal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Delete Product</h5>
                  <button type="button" class="close" aria-label="Close" @click="showDeleteModal=false">
                    <span aria-hidden="true" data-dismiss="modal">&times;</span>
                  </button>
                </div>
                <div class="modal-body p-4">
                  <h4 class="text-danger">Are you sure to delete this product?</h4>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger btn-lg btn-block" @click="showDeleteModal=false">Yes</button>
                  <button type="button" class="btn btn-secondary btn-lg btn-block" @click="showDeleteModal=false">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        <!-- Delete Product -->
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Product',
  components: {
    // Card
  },
  data () {
    return {
      products: '',
      // alert
      errorMsg: false,
      successMsg: false,
      showEditModal: false,
      updateSubmit: false,
      showDeleteModal: false,
      form: {
        name: '',
        price: '',
        idStatus: '1',
        idCategory: ''
      }
    }
  },
  methods: {
    getData () {
      axios.get('http://localhost:3000/api/v1/product/?page=1&limit=20')
        .then(res => {
          console.log(res.data.result)
          this.products = res.data.result.products
        })
    },
    insertData () {
      axios.post('http://localhost:3000/api/v1/product/', this.form)
        .then(res => {
          this.getData()
          this.form = ''
        })
    },
    edit (product) {
      this.form.id = product.id
      this.form.name = product.name
      this.form.price = product.price
      this.form.idCategory = product.idCategory
      this.form.idStatus = product.idStatus
      this.form.image = product.image
    },
    cancel () {
      this.form.id = ''
      this.form.name = ''
      this.form.price = ''
      this.form.idCategory = ''
      this.form.idStatus = ''
      this.form.image = ''
    },
    updateData (form) {
      axios.patch('http://localhost:3000/api/v1/product/' + form.id, { name: this.form.name, price: this.form.price, idCategory: this.form.idCategory, idStatus: this.form.idStatus, image: this.form.image })
        .then(res => {
          this.form.name = ''
          this.form.price = ''
          this.form.idCategory = ''
          this.form.idStatus = ''
          this.form.image = ''
          this.getData()
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteData (product) {
      axios.delete('http://localhost:3000/api/v1/product/' + product.id)
        .then(res => {
          this.getData()
          const index = this.products.indexOf(product.name)
          this.products.splice(index, 1)
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>
  p{
    font-size: 25px;
  }

  #overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .6);
  }
</style>
