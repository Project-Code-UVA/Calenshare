<template>
  <nav>
    <router-link to="/">Home</router-link> | 
    <router-link to="/create">Create</router-link>
  </nav>
  <router-view></router-view>
</template>

<script>
import './assets/style.css'

export default {
  name: 'App',
}
</script>