<template>
  <div id="app">
    
    <!--<h1>Hola mundo :)</h1>-->
    <Test msg="Adios!!!!"/>
    <User></User>
  </div>
</template>

<script>

import Test from './components/Test.vue';
import User from './components/user.vue';

export default {
  
  name: 'app',
  components: {
    Test,
    User
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
