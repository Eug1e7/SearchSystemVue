<!-- SearchComponent.vue -->
<template>
    <div class="container">
        <textarea v-model="searchWord" v-if="isSearched" placeholder="検索ワードを入力" class="search-input" rows="1"></textarea>
        <button class="search-button" v-if="isSearched" @click="submitSearch">検索</button>
        <!-- APIからのレスポンスを表示 -->
        <div class="search-result">{{ searchResult }}</div>
    </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastify";
import ResponseComponent from "./ResponseComponent.vue";

export default {
    components: {
        ResponseComponent,
    },
    data() {
        return {
            searchWord: "",
            searchResult: "",
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
        adjustTextareaHeight() {
            this.$nextTick(() => {
                const textarea = this.$el.querySelector(".search-input");
                if (textarea) {
                    textarea.style.height = "auto";
                    textarea.style.height = textarea.scrollHeight + "px";
                }
            });
        },
        async submitSearch() {
            const toast = useToast();
            try {
                this.isSearched = false;
                // axiosを使用してAPIにPOSTリクエストを送信
                const response = await axios.post("/api/search", { word: this.searchWord });
                console.log(response.data);
                // 検索結果をそのままsearchResultに格納
                this.searchResult = response.data;
                // search-completeイベントを発火
                this.$emit("search-complete", this.searchResult);
                toast.success("検索が成功しました", {
                    position: "top",
                });
            } catch (error) {
                console.error(error);
                toast.error("検索に失敗しました", {
                    position: "top",
                });
            }
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.search-input {
    width: 300px;
    min-height: 40px;
    resize: none;
    overflow-y: hidden;
}

.search-button {
    width: 100px;
    height: 40px;
    margin-left: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

.search-result {
    white-space: pre-wrap; 
}
</style>
