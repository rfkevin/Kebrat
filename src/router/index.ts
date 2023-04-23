
import HomeVue from '@/views/Home.vue';
import FormVue from '@/views/Form.vue';
import NewCategoryVue  from '@/views/NewCategory.vue';
import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name:"Home",
      component: HomeVue,
      props: true
    },
    {
      path: "/AddTransaction",
      name:"AddTransaction",
      component: FormVue,
      props: true
    },
    {
      path: "/AddCategory",
      name:"AddCategory",
      component: NewCategoryVue,
    }
  ]
})

export default router
