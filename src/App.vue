<template>
  <div>
    <router-link to="/">Home</router-link> | 
    <router-link to="/create">Create</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/style.css'

export default {
  name: 'App',
}
</script>