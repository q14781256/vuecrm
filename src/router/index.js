import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin.vue'
import ClientReprieveLoseList from '../views/cust/ClientReprieveLoseList.vue'
import ClientServerList from '../views/cust/ClientServerList.vue'
import SaleChanceList from '../views/sale/SaleChanceList.vue'
import SalePlanList from '../views/sale/SalePlanList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children:[
      {
        path: '/admin/clientReprieveLoseList',
        name: 'clientReprieveLoseList',
        component: ClientReprieveLoseList
      },
      {
        path: '/admin/clientServerList',
        name: 'clientServerList',
        component: ClientServerList
      },
      {
        path: '/admin/saleChanceList',
        name: 'saleChanceList',
        component: SaleChanceList
      },
      {
        path: '/admin/salePlanList',
        name: 'salePlanList',
        component: SalePlanList
      }
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
