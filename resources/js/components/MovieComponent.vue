<template>
    <div class="container">
      <!-- Login form -->
      <div class="row mt-4" v-if="movies.length < 1">
        <div class="col-6 offset-3">
          <h3>Login</h3>
          <form action="#" @submit.prevent="handleLogin">
            <div class="form-row">
              <input type="email" name="email" class="form-control" placeholder="Email"
              v-model="formData.email">
            </div>
            <div class="form-row">
              <input type="password" name="password" class="form-control" placeholder="Password"
              v-model="formData.password">
            </div>
            <div class="form-row">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
      <!-- Movies list-->
      <div class="row mt-4" v-if="movies.length > 0">
        <div class="col-6offset-3">
          <h3>Movies</h3>
          <div class="movie" v-for="(movie, index) in movies" :key="index">
            <em v-text="movie.release_date"></em><br>
            <strong v-text="movie.name"></strong><br>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data: () => ({
        list: [],
        formData: {
          email: '',
          password: ''
        },
        movies: []
      }),
      methods: {
        handleLogin() {
          axios.get('/sanctum/csrf-cookie')
          .then(response => {
              axios.post('/login', this.formData)
              .then(response => {
                this.getMovies();
              });
          });
        },
        getMovies() {
          axios.get('/api/movies')
          .then(response => {
            this.movies = response.data;
          })
        }
      }
    }
</script>

<style>
.form-row {
  margin-bottom: 8px;
}
</style>
