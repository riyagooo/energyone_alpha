// src/apps/mosaic/router.js
// These routes are child routes that will be mounted under /dashboard
// in the main router

// Import components with dynamic imports for better code splitting
const Dashboard = () => import('@/apps/mosaic/src/pages/Dashboard.vue')
const Analytics = () => import('@/apps/mosaic/src/pages/Analytics.vue')
const Campaigns = () => import('@/apps/mosaic/src/pages/Campaigns.vue') 
const Messages = () => import('@/apps/mosaic/src/pages/Messages.vue')
const Inbox = () => import('@/apps/mosaic/src/pages/Inbox.vue')
const Calendar = () => import('@/apps/mosaic/src/pages/Calendar.vue')
const Onboarding01 = () => import('@/apps/mosaic/src/pages/Onboarding01.vue')
const Onboarding02 = () => import('@/apps/mosaic/src/pages/Onboarding02.vue')
const Onboarding03 = () => import('@/apps/mosaic/src/pages/Onboarding03.vue')
const Onboarding04 = () => import('@/apps/mosaic/src/pages/Onboarding04.vue')
const Fintech = () => import('@/apps/mosaic/src/pages/Fintech.vue')

// Define routes to be used as children of /dashboard in main router
const routes = [
  {
    path: '',
    component: Dashboard
  },
  {
    path: 'analytics',
    component: Analytics
  },
  {
    path: 'fintech',
    component: Fintech
  },
  {
    path: 'campaigns',
    component: Campaigns
  },  
  {
    path: 'messages',
    component: Messages
  },
  {
    path: 'inbox',
    component: Inbox
  },
  {
    path: 'calendar',
    component: Calendar
  },
  {
    path: 'onboarding/step-1',
    component: Onboarding01,
  },
  {
    path: 'onboarding/step-2',
    component: Onboarding02,
  },
  {
    path: 'onboarding/step-3',
    component: Onboarding03,
  },
  {
    path: 'onboarding/step-4',
    component: Onboarding04,
  }
];

// Export routes directly - this is what the main router uses
export default routes;