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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
  .VueTables {
    .form-inline label {
      justify-content: flex-start;
    }
  }
  .multiselect__tags {
    border: 1px solid #ced4da !important;
  }
</style>