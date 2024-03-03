<!-- KeywordSearchComponent.vue -->
<template>
    <div class="keyword-search-container">
        <input v-model="keyword" placeholder="キーワードを入力" />
        <button @click="searchWords">検索</button>
        <div v-if="searchResults.length">
            <ul>
                <li v-for="(result, index) in searchResults" :key="index">{{ result }}</li>
            </ul>
        </div>
        <button @click="goBack" class="back-button">戻る</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            keyword: "",
            searchResults: [],
        };
    },
    methods: {
        // キーワード検索
        async searchWords() {
            if (!this.keyword) {
                alert("キーワードを入力してください。");
                return;
            }
            try {
                const response = await axios.get(`/api/word?keyword=${encodeURIComponent(this.keyword)}`);
                this.searchResults = response.data;
            } catch (error) {
                console.error("キーワード検索に失敗しました。", error);
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
.keyword-search-container {
    /* コンテナーのスタイル */
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
