<template>
    <div class="h-100">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link :to="{name:'dashboard'}" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
                    </li>
                </ul>
                <div class="ml-auto">
                    <ul class="navbar-nav text-white">
                        {{ user.name }}
                    </ul>
                </div>
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
            user: this.$store.state.auth.user
        }
    }
}
</script>