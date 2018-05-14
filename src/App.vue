<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <Console id="consoleapp"/>
  </div>
</template>

<script>
import './conf/FirebaseConf'
import NavBar from './components/NavBar'
import Console from './components/Console'

export default {
  name: 'App',
  components: {
    NavBar, Console
  }
}
</script>

<style scoped>
#consoleapp {
  position: absolute;
  bottom: 0;
  width:100%;
}
</style>

