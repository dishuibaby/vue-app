import {createRouter, createWebHashHistory} from "vue-router";

//指定路由规则
const routes = [
    {
        path: '/',
        redirect: 'main',
        component: () => import('@/views/Main.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});



