<template>
  <div id="app">
    <b-nav class="nav">
      <b-nav-item><router-link class="nav-links" to="/">Home</router-link></b-nav-item>
      <b-nav-item><router-link class="nav-links" to="inventory">My Items</router-link></b-nav-item>
      <b-nav-item><router-link class="nav-links" to="pins">My Pins</router-link></b-nav-item>
      <b-nav-item>
        <router-link class="nav-links" to="matching">
          Matches
          <b-badge variant="success" pill>{{matchCount}}</b-badge></router-link>
      </b-nav-item>
      <b-nav-item><router-link class="nav-links" to="search">Search</router-link></b-nav-item>
      <b-nav-item v-if=isOffline><b-link class="nav-links" v-b-modal.modal1>Sign Up</b-link></b-nav-item>
    </b-nav>
    <router-view/>
    <b-modal  id="modal1" 
              title="Sign Up!"
              class="modal">
      <b-form>
        <signup></signup>
      </b-form>        
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

<style>
  body {
    background-color: #2C2F30;
    color: white
  }
  .modal {
    color: black
  }
  .nav {
    margin: 25px 32px;
  }
  .nav-links {
    color: white
  }
</style>