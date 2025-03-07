import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserProfile from '@/views/profile/UserProfile.vue'
import AuthorProfile from '@/views/profile/AuthorProfile.vue'
import AboutView from '@/views/AboutView.vue'
import CategoryView from '@/views/CategoryView.vue'
import CreatePost from '@/views/posts/CreatePost.vue'
import EditPost from '@/views/posts/EditPost.vue'
import ShowPosts from '@/views/posts/ShowPosts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserProfile,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/showPost',
      name: 'showPost',
      component: ShowPosts,
    },
  ],
})

export default router
