import { createRouter, createWebHistory } from 'vue-router'
import TelaInicial from './components/TelaInicial.vue'
import ListaProdutos from './components/ListaProdutos.vue'
import Cadastro from './components/Cadastro.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: TelaInicial },
    { path: '/ListaProdutos', component: ListaProdutos },
    { path: '/Cadastro', component: Cadastro }
  ]
})
