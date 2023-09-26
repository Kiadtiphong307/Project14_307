import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Home_page.vue'
import CartList from '../components/Cart_list.vue';
import Orderlist from '../components/Order_list.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Homepage 
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartList
    }, 
    {
      path: '/orderlist',
      name: 'orderList',
      component: Orderlist
    }
    
  ]
})

export default router
