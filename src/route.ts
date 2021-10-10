import { createRouter, createWebHashHistory, RouterView } from 'vue-router';

import Body from "./Body.vue";
import About from "./About.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Body },
        // { path: '/', redirect: {name: 'group', params: {group: 'polaris'}} },
        { path: '/about', component: About },
        // { path: '/input', component: Input },
        {
            path: '/post/:pid',
            component: Body,
            name: 'post',
            props: true,
        },
        { path: '/:fallback', redirect: '/' },
    ],
});

export default router;
