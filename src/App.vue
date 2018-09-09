<template>
  <div id="app">
    <b-nav>
      <b-nav-item><router-link to="inventory">My Items</router-link></b-nav-item>
      <b-nav-item><router-link to="pins">My Pins</router-link></b-nav-item>
      <b-nav-item>
        <router-link to="matching">
          Matches
          <b-badge variant="success" pill>{{matchCount}}</b-badge></router-link>
      </b-nav-item>
      <b-nav-item><router-link to="search">Search</router-link></b-nav-item>
      <b-nav-item v-if=isOffline><b-link v-b-modal.modal1>Sign Up</b-link></b-nav-item>
    </b-nav>
    <router-view/>
    <b-modal id="modal1" title="Sign Up!" hide-footer>
        <signup></signup>
    </b-modal>
  </div>
</template>

<script>
import Signup from '@/components/Signup.vue'

export default {
  
  data() {
    return {
      isOffline: true,
      matchCount: 6
    }
  },
  components: {
    Signup
  }
}
</script>
