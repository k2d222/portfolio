import { createApp } from "vue"
import App from './App.vue'
import Card from './Card.vue'
import AnimTitle from './AnimTitle.vue'

const app = createApp(App)
app.component('card', Card)
app.component('anim-title', AnimTitle)
app.mount('#app')
