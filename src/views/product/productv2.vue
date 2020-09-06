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
              <button type="button" class="btn btn-primary float-right" @click="toggle">
                Add new product
              </button>
            </div>
          </div>
            <hr class="bg-info">
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
                      <td><a href="#" class="text-success" @click="editData(product)">Edit</a></td>
                      <td><a href="#" class="text-danger" @click="delProduct(product.id)">Delete</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
        <modalProduct v-show="modalActive" :data="modalsData" @close="toggle" @fire-event="dataHandler" />
        <delModal v-show="modalDel" @event-modal="toggleDel" @delete-data="deleteData"/>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import modalProduct from './modal'
import delModal from './delModal'
export default {
  name: 'Product',
  components: {
    modalProduct,
    delModal
  },
  data () {
    return {
      modalActive: false,
      modalDel: false,
      modalsData: {
        id: null,
        name: '',
        price: '',
        image: null,
        idCategory: '',
        idStatus: ''
      }
    }
  },
  methods: {
    onFileSelected (event) {
      this.selectedFile = event.target.files[0]
    },
    toggle () {
      this.modalActive = !this.modalActive
      if (!this.modalActive) {
        this.clearData()
      }
    },
    toggleDel () {
      this.modalDel = !this.modalDel
      if (!this.modalDel) {
        this.clearData()
      }
    },
    ...mapActions(['getProducts', 'insertProduct', 'updateProduct', 'deleteProduct']),
    clearData () {
      this.modalsData.id = null
      this.modalsData.name = ''
      this.modalsData.price = ''
      this.modalsData.image = null
      this.modalsData.idStatus = ''
      this.modalsData.idCategory = ''
      this.modalActive = false
      this.modalDel = false
    },
    addProduct () {
      const fd = new FormData()
      fd.append('image', this.modalsData.image, this.modalsData.image.name)
      fd.append('name', this.modalsData.name)
      fd.append('price', this.modalsData.price)
      fd.append('idStatus', this.modalsData.idStatus)
      fd.append('idCategory', this.modalsData.idCategory)
      console.log(fd)
      this.insertProduct(fd)
        .then(res => {
          this.clearData()
          this.getProducts()
          alert('Data successfully added')
        })
    },
    editData (product) {
      console.log(product)
      this.modalActive = true
      this.modalsData.id = product.id
      this.modalsData.name = product.name
      this.modalsData.price = product.price
      this.modalsData.image = product.image
      this.modalsData.idStatus = product.idStatus
      this.modalsData.idCategory = product.idCategory
    },
    updateData () {
      console.log('Data successfully updated')
      const fd = new FormData()
      fd.append('image', this.modalsData.image)
      fd.append('name', this.modalsData.name)
      fd.append('price', this.modalsData.price)
      fd.append('idStatus', this.modalsData.idStatus)
      fd.append('idCategory', this.modalsData.idCategory)
      console.log(fd)
      const data = { id: this.modalsData.id, data: fd }
      this.updateProduct(data)
        .then(res => {
          this.clearData()
          this.getProducts()
          alert('Data successfully Updated')
        })
    },
    dataHandler () {
      this.modalsData.id ? this.updateData() : this.addProduct()
    },
    delProduct (id) {
      console.log(id)
      this.modalDel = true
      this.modalsData.id = id
    },
    deleteData () {
      const dataId = this.modalsData.id
      this.deleteProduct(dataId)
        .then(res => {
          this.clearData()
          this.getProducts()
          alert('Data successfully deleted')
        })
    }
  },
  computed: {
    ...mapGetters({
      products: 'productsG'
    })
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped>
</style>
