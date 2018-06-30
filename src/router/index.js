import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], ()=>r(require('@/components/Home.vue')))
Vue.use(Router);

export default new Router({
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
})
