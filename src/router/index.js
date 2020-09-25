import Vue from 'vue';
import VueRouter from 'vue-router';

import MainView from '../views/MainView.vue';

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "App",
            component: MainView
        },
        /*
        {
            path: "/login",
            name: "Login",
            component: LoginComponent
        },
        {
            path: "/admin",
            name: "Admin",
            component: AdminComponent
        },
        {
            path: "/empleado",
            name: "Empleado",
            component: EmpleadoComponent
        }*/
    ]
})