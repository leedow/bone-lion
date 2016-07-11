import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './pages/home.vue'
import HomeSide from './pages/page-sidebar.vue'

Vue.use(VueRouter);
var router = new VueRouter()

router.map({
	'/': {
        component: Home
    }, 
    '/homeSide': {
        component: HomeSide
    }
})

router.start(App, '#app');

 