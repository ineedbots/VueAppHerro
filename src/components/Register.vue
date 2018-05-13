<template>
  <div class="Login">
      <div class="container">
          <div class="row">
              <div class="col s12 m8 offset-m2">
                  <div class="login card-panel grey lighten-4 black-text center">
                      <h3>Register</h3>
                      <form @submit.prevent="register">
                          <div class="input-field">
                              <i class="material-icons prefix">email</i>
                              <input type="text" id="email" v-model="email" required>
                              <label for="email">Email</label>
                          </div>
                          <div class="input-field">
                              <i class="material-icons prefix">lock</i>
                              <input type="password" id="password" v-model="password" required>
                              <label for="password">Password</label>
                          </div>
                          <input type="submit" value="Register" class="btn btn-large grey lighten-4 black-text">
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import fireBase from 'firebase'
export default {
  name: 'Register',
  data () {
      return {
          email: '',
          password: ''
      }
  },
  methods: {
      register (e) {
          fireBase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
              alert(`Account created for ${user.email}`)
              this.$router.go({path: this.$router.path})
          }, err => {
              alert(err.message)
          })

          e.preventDefault()
      }
  }
}
</script>

