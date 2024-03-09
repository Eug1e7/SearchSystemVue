<!-- SearchResultComponent.vue -->
<template>
    <div>
        <div v-if="loading">読み込み中...</div>
        <div v-else>
            <div v-if="error">エラーが発生しました: {{ error }}</div>
            <textarea v-else ref="responseInput" class="response-input" :value="results" placeholder="検索結果" readonly @input="adjustHeight"></textarea>
            <button @click="goBack" class="back-button">戻る</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            loading: false,
            error: null,
            results: "",
        };
    },
    watch: {
        results() {
            this.$nextTick(() => {
                this.adjustHeight();
            });
        },
    },
    async mounted() {
        await this.fetchResults();
    },
    methods: {
        // APIから検索結果を取得
        async fetchResults() {
            const searchWord = sessionStorage.getItem("searchWord");
            if (!searchWord) {
                this.error = "検索語が見つかりません。";
                return;
            }

            this.loading = true;
            try {
                const response = await axios.post("/api/search", { word: searchWord });
                this.results = response.data;
            } catch (e) {
                this.error = e.toString();
            } finally {
                this.loading = false;
            }
        },
        adjustHeight() {
            const textarea = this.$refs.responseInput;
            if (!textarea) return;
            textarea.style.height = "auto";
            textarea.style.height = textarea.scrollHeight + "px";
        },
        goBack() {
            this.$router.go(-1);
        },
    },
};
</script>

<style>
.response-input {
    width: 100%;
    min-width: 100px;
    max-width: 100%;
    height: auto;
    overflow-y: hidden;
    box-sizing: border-box;
}

@media (max-width: 600px) {
    .response-input {
        min-width: 50px;
    }
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
