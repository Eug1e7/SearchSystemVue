<!-- App.vue -->
<template>
    <div class="app-container">
        <header>
            <!-- ヘッダーコンテンツ -->
        </header>

        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<style>
html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden; /* 横スクロールを無効にする */
}
</style>
