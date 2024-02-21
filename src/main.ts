import axios from "axios";
import { createApp } from "vue";
import VueToastify from "vue-toastify";
import App from "./App.vue";

// Vue 3アプリケーションインスタンスを作成
const app = createApp(App);

// axiosをグローバルプロパティとして設定
app.config.globalProperties.$axios = axios;

// アプリケーションをマウント
app.mount("#app");
app.use(VueToastify)
