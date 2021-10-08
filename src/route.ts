import { createRouter, createWebHashHistory, RouterView } from 'vue-router';

import Body from "./Body.vue";
import About from "./About.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Body },
        { path: '/about', component: About },
        // { path: '/input', component: Input },
        // {
        //     path: '/post/:pid',
        //     component: Stage,
        //     name: 'post',
        //     props: true,
        // },
        { path: '/:fallback', redirect: '/' },
    ],
});

export default router;
