import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrimeraGeneracion from "../views/PrimeraGeneracion.vue";
import SegundaGeneracion from "../views/SegundaGeneracion.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: "/primera-generacion"
    },

    {
      path: '/primera-generacion',
      name: 'PrimeraGeneracion',
      component: PrimeraGeneracion
    },

    {
      path: '/segunda-generacion',
      name: 'SegundaGeneracion',
      component: SegundaGeneracion
    }
  ]
})

export default router
