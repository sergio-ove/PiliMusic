// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css'; // Asegúrate de que este archivo importe Tailwind CSS

createApp(App)
  .use(router)
  .mount('#app');


