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
app.use(VueToastify);

// アプリケーションをマウント
app.mount("#app");
