<template>
         <div class="modal" aria-labelledby="addProductLabel">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Update Product</h5>
                  <button type="button" class="close">
                    <span aria-hidden="true" @click="$emit('close')">&times;</span>
                  </button>
                </div>
                <div class="modal-body p-4">
                  <form>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-2 col-form-label h6">First Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control shadow" v-model="data.firstName">
                        </div>
                    </div>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-2 col-form-label h6">Last Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control shadow" v-model="data.lastName">
                        </div>
                    </div>
                    <div class="modalContent d-flex py-2">
                        <label class="col-sm-2 col-form-label h6">Status</label>
                        <div class="col-sm-10 d-flex">
                            <select class="form-group btn shadow" name="status" style="border:transparent;" v-model="data.roleId">
                              <option value="1">Admin</option>
                              <option value="2">User</option>
                            </select>
                        </div>
                    </div>
                  </form>
                </div>
                 <div class="modal-footer">
                    <button type="submit" class="btn btn-primary btn-block" data-dismiss="modal" @click="$emit('fire-event')">Update</button>
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
  }
}
</script>

<style scoped>
    .modal {
        display: block;
        background: rgba(0, 0, 0, .6);
    }
</style>
