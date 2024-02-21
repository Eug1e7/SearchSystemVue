<template>
    <div class="app-container">
        <header>
            <div class="wrapper">
                <HelloWorld msg="何でも聞いてね！" />
            </div>
        </header>

        <main>
            <!-- 検索結果がない場合はSearchComponentを表示 -->
            <SearchComponent @search-complete="handleSearchComplete" v-if="!searchResult" />
            <!-- 検索結果がある場合はResponseComponentを表示 -->
            <ResponseComponent :modelValue="searchResult" v-else />
        </main>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SearchComponent from './components/SearchComponent.vue';
import ResponseComponent from './components/ResponseComponent.vue';

const searchResult = ref('');

const handleSearchComplete = (result) => {
    searchResult.value = result;
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
