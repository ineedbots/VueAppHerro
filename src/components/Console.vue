<template>
  <div class="Console">
      <ul class="collection" id="console">
          <li class="collection-item" v-for="ent in entries" v-bind:key="ent.id">{{ent.data.name}}: {{ent.data.message}}</li>
      </ul>

        <input type="submit" name="search" value="Send" style="float: left" class="btn" @click="send"/>
        <div style="overflow: hidden; padding-left: .5em;">
            <input type="text" name="term" style="width: 100%;" v-model="message" @keydown="keyd"/>
        </div>
    </div>
</template>

<script>
import chat from '../util/MessagingBase'
import auth from '../util/AuthBase'

export default {
  name: 'Console',
  data () {
      return {
        message: "",
        entries: []
      }
  },
  updated () {
      let el = document.getElementById('console')
      el.scrollTop = el.scrollHeight
  },
  methods: {
      println (what, who, dothen) {
        if(!who)
            who = "log"
        if(!dothen)
            dothen = () => {}

        chat.add({
            name: who,
            message: what,
            sent: auth.firestore.FieldValue.serverTimestamp()
        }).then(d => dothen()).catch(e => alert(e))
      },
      send () {
          if(this.message !== '') {
              let email = "guest"
              if(auth.auth().currentUser)
                email = auth.auth().currentUser.email

            this.println(this.message, email)
          }
          this.message = ''
      },
      keyd (e) {
          if(e.key === 'Enter')
            this.send()
      }
  },
  created () {
    chat.orderBy('sent').onSnapshot(q => {
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

<style scoped>
#console {
    overflow: auto;
    height: 150px;
}

#console .collection-item {
    padding: 0;
}
</style>

