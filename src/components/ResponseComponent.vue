<!-- ResponseComponent.vue -->
<template>
    <div class="container">
        <textarea class="response-input" :value="modelValue" placeholder="検索結果" readonly></textarea>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: String,
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

.response-input {
    width: 500px;
    height: 700px;
    resize: none; /* ユーザーによるリサイズを無効化 */
}
</style>

