<template>
  <div class="container">
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