import {createRouter, createWebHashHistory} from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(), routes: [{
        path: '/', name: 'home', component: () => import('./views/Home.vue')
    }, {
        path: '/projects', name: 'projets', component: () => import('./views/Projects.vue')
    }, {
        path: '/skills', name: 'competence', component: () => import('./views/Skills.vue')
    }
    ],
});

export default router;
