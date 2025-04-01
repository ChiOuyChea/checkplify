import { createRouter, createWebHistory } from 'vue-router';
import AboutUs from './views/AboutUs.vue';
import LogInForm from './views/LogInForm.vue';
import SignInForm from './views/SignInForm.vue';
import MainLayout from './views/master/MainLayout.vue';
import DashboardView from './components/DashboardView.vue';
import ReportView from './components/ReportView.vue';
import AttendanceView from './components/AttendanceView.vue';
import DashboardMobile from './views/mobile/DashboardMobile.vue';
import LeaveMobile from './views/mobile/LeaveMobile.vue';
import ReportMobile from './views/mobile/ReportMobile.vue';
import QRCodeMobile from './views/mobile/QRCodeMobile.vue';
import NotificationMobile from './views/mobile/NotificationMobile.vue';

const routes = [
  { 
    path: '/',
    component: MainLayout,
    children:[
      { path: '/about', component: AboutUs },
      { path: '/', component: DashboardView },
      { path: '/dashboard', component: DashboardView },
      { path: '/report', component: ReportView },
      { path: '/attendance', component: AttendanceView },
    ]
  },
  { path: '/login', component: LogInForm },
  { path: '/signin', component: SignInForm },
  { path: '/mobile/', component: DashboardMobile },
  { path: '/mobile/request-leave', component: LeaveMobile },
  { path: '/mobile/report', component: ReportMobile },
  { path: '/mobile/qr-code', component: QRCodeMobile },
  { path: '/mobile/notification', component: NotificationMobile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
