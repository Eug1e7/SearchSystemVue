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
    },
};
</script>
