import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const Login = () => import('../views/Login.vue')
const Admin = () => import('../components/layouts/Admin.vue')
const Dashboard = () => import('../views/Dashboard.vue')
const Showtime = () => import('../views/Showtime.vue')
const Movie = () => import('../views/Movie.vue')


const ROUTES = [
    {
        name:"login",
        path:"/login",
        component:Login,
        meta:{
            middleware:"guest",
            title: 'Login'
        }
    },
    {
        path:"/",
        redirect: { name: 'dashboard' },
        component:Admin,
        meta:{
            middleware:"auth"
        },
        children:[
            {
                name:"dashboard",
                path: '/dashboard',
                component: Dashboard,
                meta:{
                    title:'Dashboard'
                }
            }
        ]
    },
    {
        path:"/showtimes",
        component:Admin,
        meta:{
            middleware:"auth"
        },
        children:[
            {
                name:"showtimes",
                path: '/showtimes',
                component: Showtime,
                meta:{
                    title:`Turnos`
                }
            }
        ]
    },
    {
        path:"/movies",
        component:Admin,
        meta:{
            middleware:"auth"
        },
        children:[
            {
                name:"movies",
                path: '/movies',
                component: Movie,
                meta:{
                    title:`Películas`
                }
            }
        ]
    },
    {
        path:"/admins",
        component:Admin,
        redirect: { name: 'dashboard' },
        meta:{
            middleware:"auth"
        },
    },
    {
        path:"/profile",
        component:Admin,
        redirect: { name: 'dashboard' },
        meta:{
            middleware:"auth"
        },
    }
]

var router  = new VueRouter({
    mode: 'history',
    routes: ROUTES
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} - ${process.env.MIX_APP_NAME}`
    if(to.meta.middleware=="guest"){
        if(store.state.auth.authenticated){
            next({name:"dashboard"})
        }
        next()
    }else{
        if(store.state.auth.authenticated){
            next()
        }else{
            next({name:"login"})
        }
    }
})

export default router