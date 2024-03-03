// router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import SearchComponent from "../components/SearchComponent.vue";
import ResponseComponent from "../components/ResponseComponent.vue";
import SearchHistoryComponent from "../components/SearchHistoryComponent.vue";
import KeywordSearchComponent from "../components/KeywordSearchComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: SearchComponent },
        { path: "/result", component: ResponseComponent },
        { path: "/history", component: SearchHistoryComponent },
        { path: "/keyword-search", component: KeywordSearchComponent },
    ],
});

export default router;
