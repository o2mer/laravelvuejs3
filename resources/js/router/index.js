import { createRouter, createWebHistory } from "vue-router";

import CustomerIndex from "../components/CustomerIndex.vue";
import LeaderboardComponent from "../components/LeaderboardComponent.vue"

const routes = [
    {
    path: '/dashboard',
    name: 'customers.index',
    component: CustomerIndex
    },
    {
        path: '/',
        name: 'leaderboard',
        component: LeaderboardComponent
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});
