<template>
  <div id="app">
    <p class="router-group">
      <router-link to='/'>To homePage</router-link>
      <router-link to='/test'>To test</router-link>
      <router-link to='/bullshit'>To Bullshit</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
  import VueQriously from 'vue-qriously';
  import Vue from 'vue';
  import './assets/style/iconfont.css'
  Vue.use(VueQriously);
  export default {
    name: 'App'
  }
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-group{
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
}

.router-group a{
  flex: 1
}
</style>
