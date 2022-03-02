require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from "vue";
import router from "./router";

import CustomerIndex from "./components/CustomerIndex.vue";

createApp({
    components: {
        CustomerIndex
    }
})
.use(router)
.mount('#app');
import LeaderboardComponent from "./components/LeaderboardComponent.vue";

createApp({
    components: {
        LeaderboardComponent
    }
})
.use(router)
.mount('#pusher');

