<!-- ResponseComponent.vue -->
<template>
    <div class="container">
        <textarea class="response-input" :value="modelValue" placeholder="検索結果" readonly></textarea>
        <!-- 戻るボタンを追加 -->
        <button class="back-button" @click="emitGoBack">戻る</button>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: String,
    },
    methods: {
        emitGoBack() {
            // 'goBack'イベントを発火させる
            this.$emit("goBack");
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.response-input {
    width: 500px;
    height: 700px;
    resize: none;
    margin-bottom: 20px;
}

.back-button {
    width: 100px;
    height: 40px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>