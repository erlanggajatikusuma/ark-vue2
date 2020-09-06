<template>
         <div class="modal" aria-labelledby="addProductLabel">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">{{data.id ? 'Update Product' : 'Add Product'}}</h5>
                  <button type="button" class="close" aria-label="Close" data-dismiss="modal">
                    <span aria-hidden="true" @click="$emit('close')">&times;</span>
                  </button>
                </div>
                <div class="modal-body p-4">
                  <form>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-2 col-form-label h6">Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control shadow" v-model="data.name">
                        </div>
                    </div>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-2 col-form-label h6">Price</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control shadow" v-model="data.price">
                        </div>
                    </div>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-2 col-form-label h6">Image</label>
                        <div class="col-sm-10">
                            <input type="file" class="form-control shadow" @change="onFileSelected">
                        </div>
                    </div>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-2 col-form-label h6">Status</label>
                        <div class="col-sm-10 d-flex">
                            <select class="form-group btn shadow" name="status" style="border:transparent;" v-model="data.idStatus">
                              <option value="1">Available</option>
                              <option value="0">Sold Out</option>
                            </select>
                        </div>
                    </div>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-2 col-form-label h6">Category</label>
                        <div class="col-sm-10">
                            <div class="dropdown d-flex">
                                <div class="form-group btn shadow">
                                  <select name="category" style="border:transparent;" v-model="data.idCategory">
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
                    <button type="submit" class="btn btn-primary btn-block" data-dismiss="modal" @click="$emit('fire-event')">{{data.id ? 'Update' : 'Add'}}</button>
                    <button type="button" class="btn btn-secondary btn-block" data-dismiss="modal" @click="$emit('close')">Cancel</button>
                 </div>
              </div>
            </div>
          </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    onFileSelected (event) {
      this.data.image = event.target.files[0]
    }
  }
}
</script>

<style scoped>
    .modal {
        display: block;
        background: rgba(0, 0, 0, .6);
    }
</style>
