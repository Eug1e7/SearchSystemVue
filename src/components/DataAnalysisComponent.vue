<!-- DataAnalysisComponent.vue -->

<template>
    <div class="data-analysis-container">
        <h2>データ分析画面</h2>
        <div v-if="selectedAnalysisData">
            <p class="selected-question">選択された質問: {{ selectedQuestion }}</p>
            <GraphComponent :analysis-data="selectedAnalysisData"></GraphComponent>
        </div>
        <div v-else>
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
                const [scoreRes, understandRes] = await Promise.all([
                    axios.get(`/api/importance_score`, { params: { hash: history.hash } }),
                    axios.get(`/api/understanding_score`, { params: { hash: history.hash } })
                ]);

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
            this.selectedAnalysisData = null; // グラフデータの選択解除
            this.selectedQuestion = null; // 選択された質問のクリア
        },
    },
};
</script>

<style scoped>
.data-analysis-container {
    /* スタイルを適宜追加 */
}

.back-button {
    /* スタイルを適宜追加 */
}

.selected-question {
    margin: 20px 0;
    font-style: italic;
}

.selected {
    background-color: #f0f0f0; /* 選択された項目の背景色 */
    cursor: pointer;
}
</style>
