<!-- SearchResultComponent.vue -->
<template>
    <div class="search-result-container">
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
    props: {
        query: String,
    },
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
        if (!this.query) {
            this.error = "検索語が指定されていません。";
            return;
        }
        await this.fetchResults();
    },
    methods: {
        // APIから検索結果を取得
        async fetchResults() {
            this.loading = true;
            try {
                const response = await axios.post("/api/search", { question: this.query });
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
.search-result-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

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
    width: 80%;
    max-width: 500px;
    margin: 10px 0;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
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
