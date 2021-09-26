<template>
  <div class="container m-0">
      <h3>Dashboard</h3>
  </div>
</template>

<script>
export default {
    data(){
        return {
            user: this.$store.state.auth.user
        }
    },
}
</script>