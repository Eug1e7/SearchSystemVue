// src/main.ts
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueToastify from "vue-toastify";
import axios from "axios";

// Vue 3アプリケーションインスタンスを作成
const app = createApp(App);

// axiosをグローバルプロパティとして設定
app.config.globalProperties.$axios = axios;

// Vue Routerを使用するためにapp.use()を呼び出す
app.use(router);

// VueToastifyプラグインを使用するためにapp.use()を呼び出す
app.use(VueToastify, {
    // ここでカスタムオプションを設定できます
    position: "top-right", // トーストを右上に表示
    timeout: 2000, // トーストを表示する時間は2000ms
    closeOnClick: true, // クリックでトーストを閉じる
    pauseOnHover: true, // ホバー時にトーストのタイマーを一時停止する
});

// アプリケーションをマウント
app.mount("#app");
