<!-- DataAnalysisComponent.vue -->

<template>
    <div class="data-analysis-container">
        <h2>データ分析画面</h2>
        <div v-if="selectedAnalysisData" class="analysis-data-container">
            <p class="selected-question">選択された質問: {{ selectedQuestion }}</p>
            <GraphComponent :analysis-data="selectedAnalysisData"></GraphComponent>
        </div>
        <div v-else class="history-list-container">
            <ul>
                <li v-for="history in histories" :key="history.id" @click="fetchAnalysisData(history)" :class="{ selected: selectedQuestion === history.question }">
                    {{ history.question }}
                </li>
            </ul>
        </div>
        <button @click="goBack" class="back-button">戻る</button>
    </div>
</template>

<script>
import axios from "axios";
import GraphComponent from "./GraphComponent.vue";

export default {
    components: {
        GraphComponent,
    },
    data() {
        return {
            histories: [],
            selectedAnalysisData: null,
            selectedQuestion: null, // 選択された質問のテキストを保持
        };
    },
    async mounted() {
        try {
            const response = await axios.get("/api/history");
            this.histories = response.data;
        } catch (error) {
            console.error("検索履歴の取得に失敗:", error);
        }
    },
    methods: {
        async fetchAnalysisData(history) {
            try {
                // 重要度取得APIと理解度取得APIを実行
                const [scoreRes, understandRes] = await Promise.all([axios.get(`/api/importance_score`, { params: { hash: history.hash } }), axios.get(`/api/understanding_score`, { params: { hash: history.hash } })]);

                // グラフ描画のためのデータを設定
                this.selectedAnalysisData = {
                    labels: scoreRes.data.map((item) => item.keyPhrase),
                    datasets: [
                        {
                            label: "キーワードの重要さと理解度",
                            data: scoreRes.data.map((item, index) => ({
                                x: item.score,
                                y: understandRes.data[index].understandingScore,
                            })),
                            backgroundColor: "rgba(255, 99, 132, 0.2)",
                            borderColor: "rgba(255, 99, 132, 1)",
                            borderWidth: 1,
                            pointRadius: 5, // データポイントの半径を設定
                        },
                    ],
                };
                // 選択された質問を更新
                this.selectedQuestion = history.question;
            } catch (error) {
                console.error("データの取得に失敗:", error);
            }
        },
        goBack() {
            // グラフデータが選択されていれば、選択を解除してリスト表示へ戻る
            if (this.selectedAnalysisData !== null) {
                this.selectedAnalysisData = null;
                this.selectedQuestion = null;
            } else {
                // グラフデータが選択されていない場合は、Vue Routerで前のページへ戻る
                this.$router.go(-1);
            }
        },
    },
};
</script>

<style scoped>
.data-analysis-container {
    /* 既存のスタイルを維持しつつ、コンテナ内の要素が縦に並ぶように設定 */
    display: flex;
    flex-direction: column;
    align-items: center; /* 子要素を中央揃えに */
    max-width: 600px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.analysis-data-container,
.history-list-container {
    background-color: #f9f9f9; /* 結果の背景色 */
    padding: 15px;
    border-radius: 5px;
    width: 100%; /* コンテンツの幅をコンテナに合わせる */
}

.back-button {
    /* 戻るボタンのスタイル調整 */
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px; /* 上の要素からの距離を設定 */
}

.back-button:hover {
    background-color: #0056b3;
}

.selected-question {
    margin: 20px 0;
    font-style: italic;
}

.selected,
li:hover {
    background-color: #e2e2e2; /* ホバー時と選択された項目の背景色 */
    cursor: pointer;
}
</style>
