// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'

import StoreConfig from './store/store'
import Gfun from './libs/gFun'
import RouterConfig from './router'
import App from './App'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(MintUI)

// 路由配置
const router = new VueRouter({
    mode: 'history',
    // history: true,
    saveScrollPosition: true,
    transitionOnLoad: true,
    routes: RouterConfig
})

router.beforeEach((to, from, next) => {
    console.log(to,from)
    // 判断在搜索路由中退回首页清除搜索关键词
    if(to.name=='Home'){
        Gfun.setlocalStorage('keyword','')
    }

    if(to.name=='Content'){
        // console.log(window.scrollY);
        // Gfun.setlocalStorage('homeScrollPosition',{y:window.scrollY})
        // window.scrollTo(0, 0)
    }else{
        // window.scrollTo(0, Gfun.getlocalStorage('homeScrollPosition').y)
    }
    next();
});

router.afterEach((to, from, next) => {

});

// vuex
const store = new Vuex.Store(StoreConfig)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store: store,
    template: '<App/>',
    components: {
        App
    }
})
