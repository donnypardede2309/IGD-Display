import { createRouter, createWebHashHistory } from 'vue-router'
import Admin from '../IGD/admin_page.vue'
import View from '../IGD/view_page.vue'
import Yudea from '../Rawat_Inap/Yudea.vue'
import Betlehem from '../Rawat_Inap/Betlehem.vue'
import Efrata from '../Rawat_Inap/Efrata.vue'
import Galilea_Samaria from '../Rawat_Inap/Galilea_Samaria.vue'
import Siloam from '../Rawat_Inap/Siloam.vue'
import Sarfat from '../Rawat_Inap/Sarfat.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/admin'
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/view',
      name: 'view',
      component: View
    },
    {
      path: '/Yudea',
      name: 'yudea',
      component: Yudea
    },
    {
      path: '/Sarfat',
      name: 'sarfat',
      component: Sarfat
    },
    {
      path: '/Siloam',
      name: 'siloam',
      component: Siloam
    },
    {
      path: '/Efrata',
      name: 'efrata',
      component: Efrata
    },
    {
      path: '/Betlehem',
      name: 'betlehem',
      component: Betlehem
    },
    {
      path: '/Galilea-Samaria',
      name: 'galilea_samaria',
      component: Galilea_Samaria
    }
  ]
})

export default router