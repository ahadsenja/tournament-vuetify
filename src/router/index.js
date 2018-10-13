import Vue from 'vue'
import VueRouter from 'vue-router'

import SignIn from '../views/pages/SignIn.vue'
import SignUp from '../views/pages/SignUp.vue'
import Dashboard from '../views/pages/Dashboard.vue'
import Setup from '../views/pages/Setup.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '*',
            redirect: 'sign-in'
        },
        {
            path: '/',
            redirect: 'sign-in'
        },
        {
            path: '/sign-in',
            name: 'SignIn',
            component: SignIn
        },
        {
            path: '/sign-up',
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/setup',
            name: 'Setup',
            component: Setup
        }
    ]
})

export default router