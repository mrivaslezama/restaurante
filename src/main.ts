import './app.css'
import App from './App.svelte'
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

const app = new App({
  target: document.getElementById('app'),
})

export default app


