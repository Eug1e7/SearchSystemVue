<!-- SearchHistoryComponent.vue -->
<template>
    <div class="search-history-container">
        <ul>
            <li v-for="(search, index) in searchHistory" :key="index">{{ search }}</li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            searchHistory: [],
        };
    },
    async mounted() {
        await this.fetchSearchHistory();
    },
    methods: {
        async fetchSearchHistory() {
            try {
                const response = await axios.get("/api/searches");
                this.searchHistory = response.data;
            } catch (error) {
                console.error("検索履歴の取得に失敗しました。", error);
            }
        },
    },
};
</script>
