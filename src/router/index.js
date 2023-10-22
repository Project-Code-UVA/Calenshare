import { createRouter, createWebHistory } from "vue-router";
import loginPage from "../views/loginPage.vue"; // Note the corrected relative path
import calendarCreate from "../views/calendarCreate.vue"; // Note the corrected relative path

const routes = [
    {
        path: '/',
        name: 'loginPage',
        component: loginPage
    },

    {
        path: '/create',
        name: 'calendarCreate',
        component: calendarCreate
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;