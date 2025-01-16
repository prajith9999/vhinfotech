import './assets/main.css';  // This should already include Tailwind CSS

import { createApp } from 'vue';
import App from './App.vue';
import 'flowbite';

const app = createApp(App);

// Disable devtools explicitly
app.config.devtools = false;

app.mount('#app');
