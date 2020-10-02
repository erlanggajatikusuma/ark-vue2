export default {
  methods: {
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
