<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="card shadow-sm">
                <div class="card-header d-flex">
                  <h4 class="flex-grow-1">Películas</h4>
                  <button class="btn btn-primary">Nueva Película</button>
                </div>
                <div class="card-body">
                    <p class="mb-0">You are logged in as <b>{{user.email}}</b></p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            user: this.$store.state.auth.user
        }
    },
    mounted() {
      console.log(this.$store.state.auth.user);
    }
}
</script>