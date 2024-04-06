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
                            title: {
                                display: true,
                                text: "キーワードの重要さ",
                            },
                        },
                        y: {
                            title: {
                                display: true,
                                text: "理解度",
                            },
                        },
                    },
                },
            });
        },
    },
    watch: {
        analysisData: {
            deep: true,
            handler() {
                this.createChart();
            },
        },
    },
};
</script>

<style scoped>
/* スタイルを適宜追加 */
</style>
