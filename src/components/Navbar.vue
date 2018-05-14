<template>
  <nav>
      <div class="nav-wrapper green">
          <div class="container">
              <router-link to="/Login" class="brand-logo">Editor</router-link>
              <ul class="right">
                  <li v-if="currentUser"><span class="email black-text">{{currentUser.email}}</span></li>
                  <li v-if="currentUser">
                      <router-link to="/">Dashboard</router-link>
                  </li>
                  <li v-if="!currentUser">
                      <router-link to="/Login">Login</router-link>
                  </li>
                  <li v-if="!currentUser">
                      <router-link to="/Register">Register</router-link>
                  </li>
                  <li v-if="currentUser"> 
                      <button v-on:click="logout" class="btn black">Logout</button>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
</template>

<script>
import auth from '../util/AuthBase'
import Console from './Console'

export default {
  name: 'Navbar',
  data () {
      return {
          currentUser: false
      }
  },
  created () {
      this.currentUser = auth.auth().currentUser
  },
  methods: {
      logout () {
          Console.methods.println(this.currentUser.email + " is logging out.")
          
          auth.auth().signOut().then(() => {
              Console.methods.println(this.currentUser.email + " has logged out.", null, () => this.$router.go({path: this.$router.path}))
          }).catch(e => Console.methods.println(e))
      }
  }
}
</script>

<style scoped>
    .email {
        padding-right: 10px;
    }
</style>

