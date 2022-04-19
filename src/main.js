import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { charactersStore } from "./stores/characters"

const app = createApp(App)

app.use(router)
app.use(charactersStore)

app.mount("#app")
