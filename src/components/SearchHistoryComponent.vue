<!-- SearchHistoryComponent.vue -->
<template>
    <div class="search-history-container">
        <div v-if="loading" class="loading">検索履歴を読み込み中...</div>
        <div v-else-if="error" class="error">検索履歴の取得に失敗しました。</div>
        <ul v-else>
            <li v-for="(search, index) in searchHistory" :key="index">{{ search }}</li>
        </ul>
        <button @click="goBack" class="back-button">戻る</button>
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
        // APIから検索履歴を取得
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
        goBack() {
            this.$router.go(-1);
        },
    },
};
</script>

<style scoped>
.search-history-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.loading,
.error {
    color: red;
    text-align: center;
}

ul {
    padding: 0;
    list-style: none;
    text-align: center;
    margin: 0;
}

li {
    margin: 10px 0;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.back-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.back-button:hover {
    background-color: #0056b3;
}

.back-button:active {
    background-color: #004080;
    outline: none;
}

.back-button:focus {
    outline: none;
}
</style>
