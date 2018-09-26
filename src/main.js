// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import s from './store/store'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll);
Vue.use(Vuex);
Vue.config.productionTip = false;
const store = new Vuex.Store(s);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: {
        App,
    },
    watch: {
        '$route' (from, to) {
            console.log(from, to)
            if (to.name === 'Login' && from.name === 'My') {
                this.$router.push({
                    path: '/'
                })
            }
        }
    },
    mounted() {
        document.body.addEventListener('touchstart', function () { });
    },
    template: '<App/>'
})
