import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import ConfirmationView from '../views/ConfirmationView.vue'
import ItemsView from '../views/ItemsView.vue'
import SaleView from '../views/SaleView.vue'

const routes = [
  {
    path: '/',
    name: 'home/',
    component: HomeView
  },
  {
    path: '/items/:productId',
    name: 'items',
    component: ItemsView
  },
  {
    path: '/checkout/:productId',
    name: 'checkout',
    component: CheckoutView
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: ConfirmationView
  },
  {
    path: '/sale',
    name: 'sale',
    component: SaleView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
