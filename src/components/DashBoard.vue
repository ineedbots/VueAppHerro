<template>
  <div class="DashBoard">
    <div class="container">
      <ul class="collection with-header">
        <li class="collection-header center-align"><h4>Entries</h4></li>
        <li v-for="entry in entries" v-bind:key="entry.id" class="collection-item">
          <div class="chip">
            <span v-if="entry.data.banned">BANNED</span>
            <span v-else>In good standing</span>
          </div>
          {{entry.data.name}}
          <router-link class="secondary-content" v-bind:to="{name: 'ViewEntry', params: {'id': entry.id}}">
            <i class="fa fa-eye"></i>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="fixed-action-btn">
      <router-link to ="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from '../util/HerroBase'

export default {
  name: 'DashBoard',
  data () {
    return {
      entries: []
    }
  },
  created () {
    db.orderBy('name').onSnapshot(q => {
      this.entries = []
      q.forEach(d => {
        const data = {
        'id': d.id,
        'data': d.data()
        }
        this.entries.push(data)
      })
    })
  }
}
</script>
