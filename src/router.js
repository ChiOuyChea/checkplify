import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from './views/HomeScreen.vue';
import AboutUs from './views/AboutUs.vue';
import LogInForm from './views/LogInForm.vue';
import SignInForm from './views/SignInForm.vue';
import MainLayout from './views/master/MainLayout.vue';



const routes = [
  { 
    path: '/',
    component: MainLayout,
    children:[
      { path: '/about', component: AboutUs },
      { path: '/', component: HomeScreen },
    ]
  },

  { path: '/login', component: LogInForm },
  { path: '/signin', component: SignInForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
