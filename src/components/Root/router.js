import Vue from "vue"
import VueRouter from "vue-router"
import Homepage from "../Homepage/Homepage.vue"
import Singin from "../Homepage/Singin.vue"
import Singup from "../Homepage/Singup"

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        { path: "/", name: "/", component: Homepage },
        { path: "/singin", name: "singin", component: Singin },
        { path: "/singup", name: "singup", component: Singup }
    ],
    mode: "history"
})

