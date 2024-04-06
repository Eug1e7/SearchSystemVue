<!-- GraphComponent.vue -->
<template>
    <div>
        <canvas ref="myChart"></canvas>
    </div>
</template>

<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
    props: {
        analysisData: {
            type: Object,
            required: true,
        },
    },
    mounted() {
        this.createChart();
    },
    methods: {
        createChart() {
            const ctx = this.$refs.myChart.getContext("2d");
            new Chart(ctx, {
                type: "scatter",
                data: this.analysisData,
                options: {
                    scales: {
                        x: {
                            type: "linear",
                            position: "bottom",
                            min: 0,
                            max: 100,
                            grid: {
                                drawBorder: true,
                                borderColor: "rgba(0,0,0,0.1)",
                            },
                            ticks: {
                                autoSkipPadding: 15,
                                maxRotation: 0,
                            },
                            title: {
                                display: true,
                                text: "キーワードの重要さ",
                            },
                        },
                        y: {
                            min: 1,
                            max: 5,
                            grid: {
                                drawBorder: true,
                                borderColor: "rgba(0,0,0,0.1)",
                            },
                            ticks: {
                                padding: 5,
                            },
                            title: {
                                display: true,
                                text: "理解度",
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            position: 'bottom',
                        },
                        tooltip: {
                            enabled: true,
                        },
                    },
                    layout: {
                        padding: {
                            left: 20, // 左側の余白を増やす
                            right: 20, // 右側の余白を増やす
                            top: 10,
                            bottom: 10
                        }
                    },
                },
            });
        },
    },
    watch: {
        analysisData: {
            deep: true,
            handler(newData, oldData) {
                // グラフのインスタンスを破棄し、新しいデータで再描画する
                if(this.chart) {
                    this.chart.destroy();
                }
                this.createChart();
            },
        },
    },
    data() {
        return {
            chart: null, // グラフのインスタンスを保存するプロパティ
        };
    },
};
</script>

<style scoped>
/* スタイルを適宜追加 */
</style>
