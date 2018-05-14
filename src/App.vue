<template>
  <div id="app">
    <NavBar/>
    <router-view id="mainview"/>
    <Console id="consoleview"/>
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

<style>
#mainview {
  padding-bottom: 230px;
}
#consoleview {
  position: fixed;
  bottom: 0;
  z-index: 100;
  background-color: aliceblue;
  width: 100%;
}
</style>

