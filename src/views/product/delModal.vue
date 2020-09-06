<template>
         <div class="delete-modal modal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Delete Product</h5>
                  <button type="button" class="close" aria-label="Close" data-dismiss="modal">
                    <span aria-hidden="true" @click="$emit('event-modal')">&times;</span>
                  </button>
                </div>
                <div class="modal-body p-4">
                  <h4 class="text-danger">Are you sure to delete this product?</h4>
                </div>
                 <div class="modal-footer">
                    <button type="submit" class="btn btn-primary btn-block" data-dismiss="modal" @click="$emit('delete-data')">Yes</button>
                    <button type="button" class="btn btn-secondary btn-block" data-dismiss="modal" @click="$emit('event-modal')">Cancel</button>
                 </div>
              </div>
            </div>
          </div>
</template>

<script>
export default {
  name: 'delModal',
  props: {
    data: {
      type: Object
    }
  },
  methods: {
  }
}
</script>

<style scoped>
    .delete-modal {
        display: block;
        background: rgba(0, 0, 0, .6);
    }
</style>
