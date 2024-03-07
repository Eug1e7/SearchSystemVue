<!-- SearchComponent.vue -->
<template>
    <div class="container">
        <button v-if="!isSearched" class="button-common search-button" @click="expandSearch">検索開始</button>
        <textarea v-model="searchWord" v-show="isSearched" placeholder="検索ワードを入力" class="search-input" rows="1"></textarea>
        <button class="button-common search-button" v-show="isSearched" @click="submitSearch">検索</button>
        <button class="button-common search-button" v-show="isSearched" @click="submitSearch">キーワード検索</button>
        <button class="button-common history-button" v-show="isSearched" @click="goToHistory">検索履歴を表示</button>
        <button class="button-common close-button" v-show="isSearched" @click="closeSearch">閉じる</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchWord: "",
            isSearched: false,
        };
    },
    methods: {
        expandSearch() {
            this.isSearched = true;
        },
        closeSearch() {
            this.isSearched = false;
        },
        goToHistory() {
            this.$router.push("/history");
        },
        submitSearch() {
            console.log("Searching for:", this.searchWord);
            // ここに検索処理を実装します。
            // 例: this.$router.push({ name: "search-result", params: { query: this.searchWord } });
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.search-input {
    width: 80%;
    max-width: 500px;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.button-common {
    width: 80%;
    max-width: 300px;
    padding: 10px;
    margin: 5px 0;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 20px;
    border: none;
    color: white;
}

.search-button {
    background-color: #4a90e2;
}

.history-button {
    background-color: #50e3c2;
}

.keyword-button {
    background-color: #f5a623;
}

.close-button {
    background-color: #f44336;
}
</style>
