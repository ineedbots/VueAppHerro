<template>
  <div class="EditEntry">
    <div class="container">
      <h3>Edit Entry</h3>
      <div class="row">
        <form @submit.prevent="updateEntry" class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="data.name" required>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="data.desc">
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input type="text" v-model="data.extra">
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input type="number" v-model="data.age" required>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <label>
                <input type="checkbox" class="filled-in" v-model="data.banned"/>
                <span>Banned</span>
              </label>
            </div>
          </div>

          <input type="submit" value="Update" class="btn">
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
  name: 'EditEntry',
  data () {
    return {
      id: "",
      data: {}
    }
  },
  created () {
    db.doc(this.$route.params.id).get().then(d => {
      this.id = d.id
      this.data = d.data()
    }).catch(e => Console.methods.println(e))
  },
  methods: {
    updateEntry () {
      Console.methods.println(auth.auth().currentUser.email + " is updating " + this.data.name)
      db.doc(this.id).update({
        name: this.data.name,
        desc: this.data.desc,
        extra: this.data.extra,
        banned: this.data.banned,
        age: this.data.age
      }).then(() => {
        this.$router.push({name: 'ViewEntry', params: {'id':this.id}})
      }).catch(e => Console.methods.println(e))
    }
  }
}
</script>
