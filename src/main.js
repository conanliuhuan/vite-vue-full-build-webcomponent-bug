import { createApp } from 'vue'
import App from './App.vue'

var app = createApp(App);
app.config.isCustomElement = tag => tag === "my-component";

app.mount('#app')
