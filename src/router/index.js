import { createRouter, createWebHistory } from "vue-router";
import homePage from "../views/homePage.vue"; // Note the corrected relative path
import myCalendar from "../views/myCalendar.vue"; // Note the corrected relative path

const routes = [
    {
        path: '/',
        name: 'homePage',
        component: homePage
    },

    {
        path: '/calendar',
        name: 'myCalendar',
        component: myCalendar
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;