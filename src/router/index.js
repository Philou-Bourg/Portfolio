import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Creations from '../components/creations.vue'
import Curiculum from '../components/cv.vue'
import Dynamiser from '../components/dyn_espaces.vue'
import Cahier from '../components/cahier_des_charges.vue'
import Contact from '../components/contact.vue'
import Page404 from '../components/page404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home', 
      component: HomeView
    },
 
    {
      path: '/creations',
      name: 'Creations',
      component: Creations
    },

    {
      path: '/cahier_des_charges',
      name: 'CahierDesCharges',
      component: Cahier
    },

    {
      path: '/cv',
      name: 'CuriculumVitae',
      component: Curiculum
    },

    {
      path: '/dyn_espaces',
      name: 'Dynamiser',
      component: Dynamiser
    },

    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    
    {
      path: '/page404',
      name: 'Page404',
      component: Page404
    },


    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
    
  ]
})

export default router
