<!-- App.vue -->
<template>
    <div class="app-container">
        <header>
            <!-- ヘッダーのタイトルを追加 -->
        </header>

        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SearchComponent from "./components/SearchComponent.vue";
const searchResult = ref("");

</script>

<style>
.app-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

main {
    width: 80%;
    max-width: 960px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
