import { createApp } from 'vue'
import router from './router';
import App from './App.vue';
import './Css/LogInForm.css';


const app = createApp(App);
app.use(router);
app.mount('#app');

