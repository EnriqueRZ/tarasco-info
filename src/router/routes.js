import Vue from 'vue';
import VueRouter from 'vue-router';

import MainView from '../views/MainView.vue';
import Contact from '../views/Contact.vue';
import Services from '../views/Services.vue';
import About from '../views/About.vue';

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "App",
            component: MainView
        },
        {
            path: "/contacto",
            name: "Contact",
            component: Contact
        },
        {
            path: "/acercade",
            name: "About",
            component: About
        },
        ,
        {
            path: "/servicios",
            name: "Services",
            component: Services
        },
        /*
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