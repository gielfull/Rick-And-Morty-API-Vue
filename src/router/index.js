import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/views/WelcomeView.vue")
        },
        {
            path: "/home",
            name: "Home",
            component: () => import("@/views/HomeView.vue")
        }
    ]
})

export default router
