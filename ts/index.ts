import { createApp } from "vue"
import App from './App.vue'
import Card from './Card.vue'

const app = createApp(App)
app.component('card', Card)
app.mount('#app')
