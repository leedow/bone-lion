import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Home from './pages/home.vue'
import HomeSide from './pages/page-sidebar.vue'
import Register	 from './pages/register.vue'

Vue.use(VueRouter);
Vue.use(VueResource);


 
var router = new VueRouter()

router.map({
	'/': {
        component: Home
    }, 
    '/homeSide': {
        component: HomeSide
    },
    '/register': {
    	component: Register
    }
})

router.start(App, '#app');

 