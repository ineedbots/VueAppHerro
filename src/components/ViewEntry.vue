<template>
  <div class="ViewEntry">
    <div class="container">
      <ul class="collection with-header">
        <li class="collection-header"><h4>{{data.name}}</h4></li>
        <li class="collection-item">Desc: {{data.desc}}</li>
        <li class="collection-item">Extra: {{data.extra}}</li>
        <li class="collection-item">Age: {{data.age}}</li>
        <li class="collection-item">Banned: {{data.banned}}</li>
      </ul>
      <router-link to="/" class="btn grey">Back</router-link>
      <button @click="deleteEntry" class="btn red">Delete</button>
    </div>

    <div class="fixed-action-btn">
      <router-link v-bind:to="{name: 'EditEntry', params: {id: this.id}}" class="btn-floating btn-large red">
        <i class="fa fa-pencil-alt"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from '../util/HerroBase'
import Console from './Console'
import auth from '../util/AuthBase'

export default {
  name: 'ViewEntry',
  data () {
    return {
      id: "",
      data: {}
    }
  },
  created () {
    db.doc(this.$route.params.id).onSnapshot(d => {
      this.id = d.id
      this.data = d.data()
    })
  },
  methods: {
    deleteEntry () {
      if(!confirm('Are you sure?'))
        return;
      
      Console.methods.println(auth.auth().currentUser.email + " is deleting " + this.data.name)
      db.doc(this.id).delete().then(q => {this.$router.push('/')}).catch(e => Console.methods.println(e))
    }
  }
}
</script>
