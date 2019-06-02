import Vue from 'vue'
import App from './App.vue'

import vueResource from 'vue-resource';
Vue.use(vueResource);

import vueRouter from 'vue-router'
Vue.use(vueRouter);

import Test from './components/Test';
import user from './components/user';

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/',
            component: user
        },
        {
            path: '/test',
            component: Test
        }
    ]
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')