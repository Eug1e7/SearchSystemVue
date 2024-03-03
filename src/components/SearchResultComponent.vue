<template>
    <div>
        <div v-if="loading">読み込み中...</div>
        <div v-else-if="error">エラーが発生しました: {{ error }}</div>
        <div v-else>
            <textarea ref="responseInput" class="response-input" :value="results" placeholder="検索結果" readonly @input="adjustHeight"></textarea>
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
        // resultsデータプロパティの変更を監視
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
    },
};
</script>

<style>
.response-input {
    width: 100%; /* 親要素の幅に合わせる */
    min-width: 100px; /* 最小幅を指定 */
    max-width: 100%; /* 親要素を超えない最大幅を指定 */
    height: auto; /* 初期高さは自動 */
    overflow-y: hidden; /* 縦方向のスクロールバーを隠す */
    box-sizing: border-box; /* パディングとボーダーを幅に含める */
}

@media (max-width: 600px) {
    .response-input {
        min-width: 50px; /* 小さい画面での最小幅を調整 */
    }
}
</style>
