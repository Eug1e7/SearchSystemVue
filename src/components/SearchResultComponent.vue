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
        // テキストエリアの高さを調整
        adjustHeight() {
            const textarea = this.$refs.responseInput;
            if (!textarea) return;
            textarea.style.height = "auto";
            textarea.style.height = textarea.scrollHeight + "px";
        },
        goBack() {
            // ユーザーを前のページに戻す
            this.$router.go(-1);
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
        min-width: 50px;
    }
}

.back-button {
    padding: 10px 20px; /* ボタンの内側の余白 */
    background-color: #007bff; /* ボタンの背景色 */
    color: white; /* ボタンのテキスト色 */
    border: none; /* 枠線を非表示に */
    border-radius: 5px; /* ボタンの角を丸く */
    cursor: pointer; /* ホバー時にカーソルをポインターに変更 */
    transition: background-color 0.3s; /* 背景色の変更を滑らかに */
}

.back-button:hover {
    background-color: #0056b3; /* ホバー時の背景色 */
}

.back-button:active {
    background-color: #004080; /* クリック時の背景色 */
    outline: none; /* クリック時の枠線を非表示に */
}

.back-button:focus {
    outline: none; /* フォーカス時の枠線を非表示に */
}
</style>
