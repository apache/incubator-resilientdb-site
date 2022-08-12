import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
import "@/styles/base.css";
import "@/plugins/axiosConfig";
import "@/plugins/globalVariableMixin";
import "@/plugins/poppins";
import { initialize as initializeBlocks } from "./store/blocks";
const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(Antd);
initializeBlocks();
app.mount("#app");
