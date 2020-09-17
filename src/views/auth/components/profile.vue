<template>
    <div class="container">
        <div class="jumbotron mt-5">
            <div class="col-sm-8 mx-auto">
                <h1 class="text-center">Profile</h1>
            </div>
            <table class="table col-md-6 mx-auto">
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>{{firstName}}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{{lastName}}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{{email}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
