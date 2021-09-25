<template>
    <router-view />
</template>
<script>
  export default {
    mounted() {
      axios.get('/sanctum/csrf-cookie')
      .then(response => {});
    }
  };
</script>

<style lang="scss">
  .VueTables {
    .form-inline label {
      justify-content: flex-start;
    }
  }
</style>