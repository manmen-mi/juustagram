import { createRouter, createWebHashHistory, RouterView } from 'vue-router';

import Top from "./Top.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Top },
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
