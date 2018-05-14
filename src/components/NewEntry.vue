<template>
  <div class="NewEntry">
    <div class="container">
      <h3>New Entry</h3>
      <div class="row">
        <form @submit.prevent="saveEntry" class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="name" required>
              <label>Name</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="desc">
              <label>Description</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="extra">
              <label>Extra</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input type="number" v-model="age" required>
              <label>Age</label>
            </div>
          </div>

          <input type="submit" value="Submit" class="btn">
          <router-link to="/" class="btn grey">Cancel</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../util/HerroBase'
import Console from './Console'
import auth from '../util/AuthBase'

export default {
  name: 'NewEntry',
  data () {
    return {
      name: "",
      desc: "",
      extra: "",
      age: null
    }
  },
  methods: {
    saveEntry () {
      Console.methods.println(auth.auth().currentUser.email + " is creating " + this.name)
      db.add({
        banned: false,
        age: this.age,
        name: this.name,
        desc: this.desc,
        extra: this.extra
      }).then(d => {
        this.$router.push('/')
      }).catch(e => Console.methods.println(e))
    }
  }
}
</script>
