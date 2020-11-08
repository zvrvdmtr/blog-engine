import { createRouter, createWebHistory } from 'vue-router'
import Article from './views/Article.vue'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Auth from './views/Auth.vue'

function requireAuth(to, from, next) {
    if (localStorage.getItem('jwt') === null) {
        next('/auth')
    }
    else {
        next()
    }
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component:  Home},
        {path: '/article/:id', component: Article},
        {path: '/article', component: Article},
        {path: '/register', component: Register},
        {path: '/auth', component: Auth},
        {path: '/logout',
            beforeEnter (to, from, next) {
                localStorage.removeItem('jwt');
                next('/auth');
            }
        }
        
    ]
})


export default router