<template>
  <img alt="Vue logo" src="./assets/logo.png" style="width: 200px;">
  <loginPage/>
  <calendarCreate/>
  <!--
    Source:
    <a href="https://www.freepik.com/free-vector/schedule-calendar-flat-style_41411895.htm#query=calendar&position=7&from_view=keyword&track=sph">Image by juicy_fish</a> on Freepik
  -->
</template>

<script>
import loginPage from './components/loginPage.vue'
import calendarCreate from './components/calendarCreate.vue'
import './assets/style.css'

export default {
  name: 'App',
  components: {
    loginPage,
    calendarCreate
  }
}
</script>