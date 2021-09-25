<template>
  <nav id="siderbar_menu" class="bg-dark h-100">
    <ul id="menu_list">
      <li v-for="entry in menuEntries" :key="entry.text" v-bind:class="{ active: entry.isActive }">
        <router-link v-if="!entry.action" :to="entry.to" @click.native="markActive($event)">{{ entry.text }}</router-link>
      </li>
      <li>
        <a role="button" class="font-weight-400" @click="logout">Cerrar sesión</a>
      </li>
    </ul>
  </nav>
</template>

<script>

import {mapActions} from 'vuex'

export default {
  data: () => ({
    menuEntries: [
      { text: 'Dashboard', isActive: true, to: '/dashboard'},
      { text: 'Películas', isActive: false, to: '/movies'},
      { text: 'Turnos', isActive: false, to: '/showtimes'},
/*       { text: 'Administradores', isActive: false, to: '/admins'},
      { text: 'Perfil', isActive: false, to: '/profile'}, */
    ]
  }),
  methods:{
      ...mapActions({
          signOut:"auth/logout"
      }),
      logout(){
          axios.post('/logout').then(({data})=>{
              this.signOut()
              this.$router.push({name:"login"})
          })
      }
  }
}
</script>





<style>
  #siderbar_menu {
    width: 200px;
  }

  #siderbar_menu > ul  {
    padding-inline-start: 0;
    margin-block-start: 0;
  }

  #siderbar_menu > ul > li {
    height: 45px;
  }

  #siderbar_menu > ul > li > a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding-left: 10px;
    height: inherit;
  }

  #siderbar_menu > ul > li > a.router-link-active {
    background: #009b8eea;
  }

  @media screen and (max-width: 991px) {
    #siderbar_menu {
      display: none;
    }
  }
</style>