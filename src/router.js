import {createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(), routes: [{
        path: '/', name: 'home', component: () => import('./views/Home.vue')
    }, {
        path: '/projects', name: 'projets', component: () => import('./views/Projects.vue')
    }, {
        path: '/but2', name: 'competence', component: () => import('./views/Skills.vue')
    }, {
        path: '/but3/:file', name: 'competence3A', component: () => import('./views/BUT3.vue'), props: true,
    }
    ],
});

export default router;
