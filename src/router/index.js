import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

const Home = r => require.ensure([], ()=>r(require('@/components/Home.vue')))
const Register = r => require.ensure([], ()=>r(require('@/components/Register.vue')))
const RegisterSuccess = r => require.ensure([], ()=>r(require('@/components/RegisterSuccess.vue')))
const Login = r => require.ensure([], ()=>r(require('@/components/Login.vue')))


export default new Router({
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/register-success',
            name: 'RegisterSuccess',
            component: RegisterSuccess
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})
