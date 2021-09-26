<template>
    <div class="h-100">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
<!--                     <li>
                      <router-link :to="{name:'dashboard'}" class="nav-link d-flex align-items-center">
                        <div class="h2 mb-0 d-inline">
                          <b-icon role="button" icon="film" class="color-white px-2"></b-icon>
                        </div>Películas
                      </router-link>
                    </li> -->
                  <li v-for="entry in menuEntries" :key="entry.text">
                    <router-link v-if="!entry.action" :to="entry.to" class="nav-link d-flex align-items-center">
                        <div class="h2 mb-0 d-inline"></div>{{ entry.text }}
                    </router-link>
                  </li>
                </ul>
            </div>
            <div class="ml-auto">
                <ul class="navbar-nav text-white">
                  <li class="d-flex align-items-center">
                    <div class="h2 mb-0 d-inline">
                      <b-icon role="button" icon="person-fill" class="color-white px-2"></b-icon>
                    </div>{{ user.name }}
                  </li>
                </ul>
            </div>
        </nav>
        <div class="d-flex h-100">
          <sidebar></sidebar>
          <main class="mt-3 w-100">
              <router-view></router-view>
          </main>
        </div>
    </div>
</template>

<script>

import Sidebar from '../Siderbar';

export default {
    components: {
      'sidebar': Sidebar
    },
    data(){
        return {
            user: this.$store.state.auth.user,
            menuEntries: [
              { text: 'Dashboard', isActive: true, to: '/dashboard'},
              { text: 'Películas', isActive: false, to: '/movies'},
              { text: 'Turnos', isActive: false, to: '/showtimes'},
            ]
        }
    }
}
</script>

<style lang="scss">
  #navbarSupportedContent {
    visibility: hidden;
    @media screen and (max-width: 991px) {
      visibility: visible;
    }
  }
</style>