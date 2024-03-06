<!-- SearchComponent.vue -->
<template>
    <div class="container">
        <textarea v-model="searchWord" v-if="isSearched" placeholder="検索ワードを入力" class="search-input" rows="1"></textarea>
        <button class="search-button" v-if="isSearched" @click="submitSearch">検索</button>
        <button class="history-button" @click="goToHistory">検索履歴を表示</button>
        <button class="keyword-button" @click="goToKeywordSearch">キーワード検索</button>
    </div>
</template>

<script>
import ResponseComponent from "./SearchResultComponent.vue";

export default {
    components: {
        ResponseComponent,
    },
    data() {
        return {
            searchWord: "",
            isSearched: true,
        };
    },
    mounted() {
        this.adjustTextareaHeight();
    },
    watch: {
        searchWord() {
            this.adjustTextareaHeight();
        },
    },
    methods: {
        goToHistory() {
            this.$router.push("/history");
        },
        goToKeywordSearch() {
            this.$router.push("/keyword-search");
        },
        adjustTextareaHeight() {
            this.$nextTick(() => {
                const textarea = this.$el.querySelector(".search-input");
                if (textarea) {
                    textarea.style.height = "auto";
                    textarea.style.height = textarea.scrollHeight + "px";
                }
            });
        },
        // SearchComponent.vue の submitSearch メソッド内
        async submitSearch() {
            try {
                // 検索語をセッションストレージに保存
                sessionStorage.setItem("searchWord", this.searchWord);
                // 検索結果ページへ遷移
                this.$router.push({ name: "search-result" });
            } catch (error) {
                console.error(error);
                // エラー通知を表示。
                toast.error("検索に失敗しました");
            }
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    padding: 20px;
}

.search-input {
    width: 80%;
    max-width: 500px;
    min-height: 40px;
    margin-bottom: 10px;
    resize: none;
    overflow-y: hidden;
    border: 1px solid #ccc;
    border-radius: 5px;
}

/* 共通ボタンスタイルの設定 */
.button-common {
    width: 80%;
    max-width: 300px;
    height: 50px;
    margin: 5px 0;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 20px;
    border: none;
    color: white;
    box-shadow: none;
}

.search-button {
    background-color: #4a90e2;
    color: white;
    border: none;
}

.search-button:hover,
.history-button:hover,
.keyword-button:hover {
    opacity: 0.8;
}

.history-button {
    background-color: #50e3c2;
    color: white;
    border: none;
}

.keyword-button {
    background-color: #f5a623;
    color: white;
    border: none;
}
</style>
