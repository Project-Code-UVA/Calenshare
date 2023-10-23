<template>
  <img alt="Vue logo" src="./assets/logo.png" style="width: 200px;">
  <loginPage/>
  <!--
    Source:
    <a href="https://www.freepik.com/free-vector/schedule-calendar-flat-style_41411895.htm#query=calendar&position=7&from_view=keyword&track=sph">Image by juicy_fish</a> on Freepik
  -->
</template>

<script>
import loginPage from './components/loginPage.vue'


export default {
  name: 'App',
  components: {
    loginPage,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
