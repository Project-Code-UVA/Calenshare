<template>
  <sidebar/>
  <div :style = "{'margin-left': sidebarWidth}">
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/style.css'
import sidebar from '@/components/sidebar/pageSidebar'
import { sidebarWidth } from './components/sidebar/state';

export default {
  name: 'App',
  components: {sidebar},
  setup() {
    return {sidebarWidth}
  }
}
</script>