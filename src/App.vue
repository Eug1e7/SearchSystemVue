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
import ResponseComponent from "./components/SearchResultComponent.vue";

const searchResult = ref("");

// 検索が完了したときに結果を設定
const handleSearchComplete = (result: string) => {
    searchResult.value = result;
};

// 戻るイベントが発火したときに呼ばれるメソッド
const handleGoBack = () => {
    // 検索結果をクリアしてSearchComponentを再表示
    searchResult.value = "";
};
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
