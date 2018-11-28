import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store/store";

Vue.config.productionTip = false;

Vue.use(VueRouter);

import StatsPage from './components/StatsPage';
import SkillsPage from './components/SkillsPage';
import InventoryPage from './components/InventoryPage';

const routes = [
    { path: '/', name: 'stats', component: StatsPage },
    { path: '/skills', name: 'skills', component: SkillsPage },
    { path: '/inventory', name: 'inventory', component: InventoryPage }
];

const router = new VueRouter({routes});

new Vue({
    store,
    render: h => h(App),
    router
}).$mount("#app");
