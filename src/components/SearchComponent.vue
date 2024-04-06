<!-- SearchComponent.vue -->
<template>
    <div class="container">
        <button v-if="!isSearched && !isMaster" class="button-common search-button" @click="expandSearch">検索開始</button>
        <button v-if="!isSearched && !isMaster" class="button-common search-button" @click="expandMaster">管理者用</button>
        <textarea v-model="searchWord" v-show="isSearched" placeholder="検索ワードを入力" class="search-input" rows="1"></textarea>
        <button class="button-common submit-button" v-show="isSearched" @click="submitSearch">検索</button>
        <button class="button-common close-button" v-show="isSearched" @click="closeSearch">閉じる</button>
        <button class="button-common analysis-button" v-show="isMaster" @click="goToAnalysis">データ分析画面</button>
        <button class="button-common keyword-button" v-show="isMaster" @click="keywordSearch">キーワード検索画面</button>
        <button class="button-common history-button" v-show="isMaster" @click="goToHistory">検索履歴画面</button>
        <button class="button-common close-button" v-show="isMaster" @click="closeMaster">閉じる</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchWord: "",
            isSearched: false,
            isMaster: false,
        };
    },
    methods: {
        expandSearch() {
            this.isSearched = true;
        },
        closeSearch() {
            this.isSearched = false;
        },
        expandMaster() {
            this.isMaster = true;
        },
        closeMaster() {
            this.isMaster = false;
        },
        submitSearch() {
            this.$router.push({ name: "search-result", query: { q: this.searchWord } });
        },
        goToAnalysis() {
            this.$router.push("/data-analysis");
        },
        keywordSearch() {
            this.$router.push("/keyword-search");
        },
        goToHistory() {
            this.$router.push("/history");
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

.submit-button {
    background-color: #50e3c2;
}

.analysis-button {
    background-color: #9b59b6;
}

.keyword-button {
    background-color: #f5a623;
}

.history-button {
    background-color: #50e3c2;
}

.close-button {
    background-color: #f44336;
}
</style>
