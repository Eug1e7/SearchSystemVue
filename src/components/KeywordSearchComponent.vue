<!-- KeywordSearchComponent.vue -->
<template>
    <div class="keyword-search-container">
        <input v-model="keyword" placeholder="キーワードを入力" class="keyword-input" />
        <button @click="searchWords" class="search-button">検索</button>
        <div v-if="searchResults.length" class="results-container">
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
            this.$router.go(-1);
        },
    },
};
</script>

<style scoped>
.keyword-search-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.keyword-input,
.search-button,
.back-button {
    width: 80%;
    max-width: 500px;
    margin: 10px 0;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

.keyword-input {
    flex-grow: 1;
}

.search-button {
    background-color: #4a90e2;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

.search-button:hover {
    background-color: #357abd;
}

.back-button {
    background-color: #50e3c2;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

.back-button:hover {
    background-color: #3cad9f;
}

.results-container {
    width: 80%;
    max-width: 500px;
    margin-top: 20px;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    background-color: #f5f5f5;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
}
</style>
