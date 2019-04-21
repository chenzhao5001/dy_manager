<template>
  <div id="app">
    <!--<router-link to="/">Go to Foo</router-link>-->
    <!--<router-link to="/hello_world">hello world</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import Login from './views/Login2';

export default {
  name: 'App',
  // components: {
  //   HelloWorld,
  //   Login
  // }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
