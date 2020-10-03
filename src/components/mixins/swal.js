export default {
  methods: {
    success (position, icon, title) {
      this.$swal({
        position: position,
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 1800
      })
    },
    failed (text) {
      this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: text
      })
    },
    confirmSwal (title, desc, icon, cb) {
      this.$swal({
        title: title,
        text: desc,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.value) {
          return cb()
        }
      })
    }
  }
}
