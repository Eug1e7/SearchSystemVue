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
            // ユーザーを前のページに戻す
            this.$router.go(-1);
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

.back-button {
    padding: 10px 20px; /* ボタンの内側の余白 */
    background-color: #007bff; /* ボタンの背景色 */
    color: white; /* ボタンのテキスト色 */
    border: none; /* 枠線を非表示に */
    border-radius: 5px; /* ボタンの角を丸く */
    cursor: pointer; /* ホバー時にカーソルをポインターに変更 */
    transition: background-color 0.3s; /* 背景色の変更を滑らかに */
}

.back-button:hover {
    background-color: #0056b3; /* ホバー時の背景色 */
}

.back-button:active {
    background-color: #004080; /* クリック時の背景色 */
    outline: none; /* クリック時の枠線を非表示に */
}

.back-button:focus {
    outline: none; /* フォーカス時の枠線を非表示に */
}
</style>
