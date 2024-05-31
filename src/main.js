import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Header from './components/header.vue' // Importation du fichier


const app = createApp(App)
app.component('Header', Header) // Enregistrement du composant Header comme global

app.use(createPinia())
app.use(router)

app.mount('#app')
