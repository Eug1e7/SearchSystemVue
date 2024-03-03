<!-- SearchHistoryComponent.vue -->
<template>
    <div class="search-history-container">
        <div v-if="loading" class="loading">検索履歴を読み込み中...</div>
        <div v-else-if="error" class="error">検索履歴の取得に失敗しました。</div>
        <ul v-else>
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
            loading: false,
            error: null,
        };
    },
    async mounted() {
        await this.fetchSearchHistory();
    },
    methods: {
        async fetchSearchHistory() {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get("/api/searches");
                this.searchHistory = response.data;
                this.loading = false;
            } catch (error) {
                this.error = "エラーが発生しました。";
                this.loading = false;
                console.error("検索履歴の取得に失敗しました。", error);
            }
        },
    },
};
</script>

<style scoped>
.search-history-container {
    /* コンテナーのスタイル */
}

.loading,
.error {
    /* ローディングとエラーメッセージのスタイル */
    color: red;
    text-align: center;
}

ul {
    /* リストのスタイル */
}

li {
    /* リストアイテムのスタイル */
}
</style>
