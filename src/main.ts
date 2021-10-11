import { createApp } from 'vue'
import Axios from "axios";

import App from './App.vue'
import './index.css'
import router from './route'

const app = createApp(App);

app.use(router);

app.mount('#app');
