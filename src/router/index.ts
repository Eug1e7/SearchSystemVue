// router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import SearchComponent from "../components/SearchComponent.vue";
import SearchResultComponent from "../components/SearchResultComponent.vue";
import SearchHistoryComponent from "../components/SearchHistoryComponent.vue";
import KeywordSearchComponent from "../components/KeywordSearchComponent.vue";
import DataAnalysisComponent from "../components/DataAnalysisComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: SearchComponent },
        {
            path: "/search-result",
            name: "search-result",
            component: SearchResultComponent,
            props: (route) => ({ query: route.query.q }),
        },
        { path: "/keyword-search", component: KeywordSearchComponent },
        { path: "/history", component: SearchHistoryComponent },
        { path: "/data-analysis", component: DataAnalysisComponent },
    ],
});

export default router;
