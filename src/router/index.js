import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

const Home = r => require.ensure([], ()=>r(require('@/components/Home.vue')))
const Register = r => require.ensure([], ()=>r(require('@/components/Register.vue')))
const RegisterSuccess = r => require.ensure([], ()=>r(require('@/components/RegisterSuccess.vue')))
const Login = r => require.ensure([], ()=>r(require('@/components/Login.vue')))
const ForgetPassword = r => require.ensure([], ()=>r(require('@/components/ForgetPassword.vue')))
const ResetPassword = r => require.ensure([], ()=>r(require('@/components/ResetPassword.vue')))
const ResetPasswordSuccess = r => require.ensure([], ()=>r(require('@/components/ResetPasswordSuccess.vue')))

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
        },
        {
            path: '/forget-password',
            name: 'ForgetPassword',
            component: ForgetPassword
        },
        {
            path: '/reset-password',
            name: 'ResetPassword',
            component: ResetPassword
        },
        {
            path: '/reset-password-success',
            name: 'ResetPasswordSuccess',
            component: ResetPasswordSuccess
        }
    ]
})
