<template>
    <div id="products">
        <div class="row bg-dark">
            <div class="col-lg-12 d-flex">
              <div class="img-wrapper">
                <router-link to="/home">
                  <img src="../../assets/keyboard-left-arrow-button.png">
                </router-link>
              </div>
              <p class="text-center text-light display-4 pt-2">Product Data</p>
            </div>
        </div>

        <div class="container">
          <div class="row mt-3">
            <div class="col-lg-6">
              <h3 class="text-info text-left">Products</h3>
            </div>
            <div class="col-lg-6">
              <button type="button" class="btn btn-primary float-right" @click.prevent="toggle">
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
                      <td><a href="#" class="text-success" @click.prevent="editData(product)">Edit</a></td>
                      <td><a href="#" class="text-danger" @click.prevent="delProduct(product.id)">Delete</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="page row">
              <pagination :data="paginations" @event-page="handlePage"/>
            </div>
        </div>
        <modalProduct v-show="modalActive" :data="modalsData" @close="toggle" @fire-event="dataHandler" />
        <delModal v-show="modalDel" @event-modal="toggleDel" @delete-data="deleteData"/>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import mixins from '../../components/mixins/swal'
import modalProduct from './modal'
import delModal from './delModal'
import pagination from '../../components/pagination'
export default {
  name: 'Product',
  mixins: [mixins],
  components: {
    modalProduct,
    delModal,
    pagination
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
          this.success('center', 'success', 'Data successfully added')
        })
        .catch(err => {
          if (err.response.status === 413) {
            this.failed('File max 2 mb')
          }
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
      const fd = new FormData()
      fd.append('image', this.modalsData.image)
      fd.append('name', this.modalsData.name)
      fd.append('price', this.modalsData.price)
      fd.append('idStatus', this.modalsData.idStatus)
      fd.append('idCategory', this.modalsData.idCategory)
      const data = { id: this.modalsData.id, data: fd }
      this.updateProduct(data)
        .then(res => {
          this.success('center', 'success', 'Data successfully Updated')
          this.clearData()
          this.getProducts()
        })
        .catch(err => {
          if (err.response.status === 413) {
            this.failed('File max 2 mb')
          }
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
          this.$swal({
            position: 'center',
            icon: 'success',
            title: 'Data successfully deleted',
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    handlePage (number) {
      console.log(number)
      const url = `?page=${number}`
      this.getProducts(url)
    }
  },
  computed: {
    ...mapGetters({
      products: 'productsG',
      paginations: 'get_page'
    })
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style scoped>
#products {
  width: 100%;
}
.page {
  margin: auto;
}
.text-center {
  margin: auto;
}
.img-wrapper {
  padding: 45px 0px 45px 45px;
}
</style>
