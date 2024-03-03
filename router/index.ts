// router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import SearchComponent from "../src/components/SearchComponent.vue";
import ResponseComponent from "../src/components/ResponseComponent.vue";
import SearchHistoryComponent from "../src/components/SearchHistoryComponent.vue";
import KeywordSearchComponent from "../src/components/KeywordSearchComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: SearchComponent },
        { path: "/response", component: ResponseComponent },
        { path: "/history", component: SearchHistoryComponent },
        { path: "/keyword-search", component: KeywordSearchComponent },
    ],
});

export default router;
