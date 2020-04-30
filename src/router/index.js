import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "@/views/HelloWorld.vue";
import mine from "@/views/mine.vue";
import fullpage from "@/views/fullpage.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/home",
        component: home
    },
    {
        path: "/mine",
        component: mine
    },
    {
        path: "/fullpage",
        component: fullpage
    },
    {
        path: '/', 
        redirect: '/home' 
    }
]

var router =  new VueRouter({
    routes
})
export default router;