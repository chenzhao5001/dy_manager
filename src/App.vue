<template>
  <div id="app">
    <Login></Login>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Login from './views/Login2';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Login
  }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
