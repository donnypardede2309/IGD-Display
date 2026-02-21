import { createRouter, createWebHistory } from 'vue-router'
import Admin from '../view/admin_page.vue';
import View from '../view/view_page.vue';
import LandingPage from '../view/admin_page.vue';

const routes = [
    {
        path: '/',
        name: 'landing-page',
        component: LandingPage
    },

    {
        path: '/admin',
        name: 'admin',
        component: Admin
    },

     {
        path: '/view',
        name: 'view',
        component: View
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router