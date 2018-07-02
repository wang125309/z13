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
const My = r => require.ensure([], ()=>r(require('@/components/My.vue')))
const MyActivity = r => require.ensure([], ()=>r(require('@/components/MyActivity.vue')))
const Activity = r => require.ensure([], ()=>r(require('@/components/Activity.vue')))
const Operation = r => require.ensure([], ()=>r(require('@/components/Operation.vue')))
const OperationDetail = r => require.ensure([], ()=>r(require('@/components/OperationDetail.vue')))

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
        },
        {
            path: '/personal-info',
            name: 'My',
            component: My
        },
        {
            path: '/my-activity',
            name: 'MyActivity',
            component: MyActivity
        },
        {
            path: '/activity',
            name: 'Activity',
            component: Activity
        },
        {
            path: '/operation',
            name: 'Operation',
            component: Operation
        },
        {
            path: '/operation-detail',
            name: 'OperationDetail',
            component: OperationDetail
        },
    ]
})
