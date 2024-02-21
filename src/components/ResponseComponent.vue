<!-- ResponseComponent.vue -->
<template>
    <div class="container">
        <input :value="modelValue" placeholder="検索結果" class="response-input" readonly />
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
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
    white-space: pre-wrap; /* 元の空白と改行を保持する */
}
</style>
