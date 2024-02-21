<template>
    <div class="container">
        <input v-model="searchWord" v-if="isSearched" placeholder="検索ワードを入力" class="search-input" />
        <button class="search-button" v-if="isSearched" @click="submitSearch">検索</button>
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
    methods: {
        async submitSearch() {
            const toast = useToast();
            try {
                this.isSearched = false;
                // axiosを使用してAPIにPOSTリクエストを送信
                const response = await axios.post("/api/search", { word: this.searchWord });
                console.log(response.data);
                this.searchResult = response.data; // 検索結果を保存
                this.$emit("search-complete", this.searchResult); // 親コンポーネントに検索結果を送信
                toast.success("検索が成功しました");
            } catch (error) {
                console.error(error);
                toast.error("検索に失敗しました");
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
    height: 40px;
}

.search-button {
    /* ボタンのスタイルをここに追加します */
}
</style>
