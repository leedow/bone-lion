import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


import Index from './pages/index.vue'
import Home from './pages/home.vue'
import Demo from './pages/demo.vue'
import Register	 from './pages/register.vue'
import Linker from './addon/linker'

Vue.use(VueRouter);
Vue.use(VueResource);


 
var router = new VueRouter()

router.save = function(path){
     Linker.add(path);
}

router.back = function(keep){
     router.go(Linker.get(keep));
}

router.map({
	'/': {
        component: Index,
        subRoutes: {
        	'/': {
        		component: Home
        	},
        	'/demo': {
        		component: Demo
        	}
        }
    },
    '/register': {
    	component: Register
    }
})

router.start(App, '#app');

 