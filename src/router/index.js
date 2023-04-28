import { createRouter, createWebHistory } from 'vue-router';
import {RegisterView,LoginView,HomeView,ArticleDetailView,CreateFormView} from "@/views";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "MainLayout",
      component:import('@/Layouts/MainLayout.vue'),
      redirect: { name: 'home' },
      children:[
        {
          path: "/home",
          name: "home",
          component:HomeView
        },
        {
          path: "/article/:slug",
          name: "article-details",
          component: ArticleDetailView
        },
        {
          path:"/create-article",
          name:"create-article",
          component: CreateFormView
        }
      ]
    },
    {
      path: "/auth",
      name: "AuthLayout",
      component:import('@/Layouts/AuthLayout.vue'),
      redirect: { name: 'login' },
      children:[
        {
          path: "/register",
          name: "register",
          component:RegisterView
        },
        {
          path: "/login",
          name: "login",
          component: LoginView
        }
      ]
    }
  ]
})

export default router
