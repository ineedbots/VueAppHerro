<template>
  <div class="Login">
      <div class="container">
          <div class="row">
              <div class="col s12 m8 offset-m2">
                  <div class="login card-panel green white-text center">
                      <h3>Login</h3>
                      <form @submit.prevent="login">
                          <div class="input-field">
                              <i class="material-icons prefix">email</i>
                              <input type="text" id="email" v-model="email">
                              <label class="white-text" for="email">Email</label>
                          </div>
                          <div class="input-field">
                              <i class="material-icons prefix">lock</i>
                              <input type="password" id="password" v-model="password">
                              <label class="white-text" for="password">Password</label>
                          </div>
                          <input type="submit" class="btn btn-large grey lighten-4 black-text" value="Login">
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import auth from '../util/AuthBase'
import Console from './Console'

export default {
  name: 'Login',
  data () {
      return {
          email: '',
          password: ''
      }
  },
  methods: {
      login (e) {
          Console.methods.println("guest is logging into " + this.email)
          auth.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
              Console.methods.println("guest is logged into " + this.email, null, () => this.$router.go({path: this.$router.path}))
          }, err => {
              Console.methods.println(err.message)
          }).catch(err => {
              Console.methods.println(err)
          })

          e.preventDefault()
      }
  }
}
</script>

