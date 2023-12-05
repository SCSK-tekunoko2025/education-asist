import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SaleView from '../views/SaleView.vue'
import BuyView from '../views/BuyView.vue'
import CheckoutView from '../views/CheckoutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sale',
    name: 'sale',
    component: SaleView
  },
  {
    path: '/buy',
    name: 'buy',
    component: BuyView
  },
  {
    path: '/checkout/:productId',
    name: 'checkout',
    component: CheckoutView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
