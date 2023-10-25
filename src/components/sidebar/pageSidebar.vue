<script>
import sidebarLinks from './sidebarLinks.vue'
import {collapsed, toggleSidebar, sidebarWidth} from './state'

export default {
    props: {},
    components: {sidebarLinks},
    setup() {
        return {collapsed, toggleSidebar, sidebarWidth}
    }
}
</script>

<template>
    <div class = "sidebar" :style="{width : sidebarWidth}">
        <button
            class="collapse-icon"
            @click="toggleSidebar"
        >
            <i class="fas fa-bars" />
    </button>

        <h2>
            <span v-if="collapsed">
                <div>CS</div>
            </span>
            <span v-else>CalenShare</span>
        </h2>

        <sidebarLinks to="/" icon="fas fa-home">Home</sidebarLinks>
        <sidebarLinks to="/create" icon="fas fa-calendar">Calendar</sidebarLinks>
    </div>
</template>

<style>
:root{
    --sidebar-bg-color: hsl(210, 30%, 24%);
    --sidebar-item-hover: hsl(210, 29%, 35%);
    --sidebar-item-active: hsl(210, 28%, 46%);
}
</style>

<style scoped>
.sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.2s ease;

    display: flex;
    flex-direction: column;
}

.collapse-icon {
    padding-top: 0.75em;
    color: white;
}
</style>