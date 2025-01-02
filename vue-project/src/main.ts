import './assets/main.css'
import './assets/tailwind.css';
import { createApp } from 'vue';
import App from './App.vue';
import 'tailwindcss/tailwind.css';

const app = createApp(App);

// Disable devtools explicitly
(app.config as any).devtools = false;

app.mount('#app');
