const routes = [
  { path: '/', redirect: '/index' },
  { path: '/m', redirect: '/m/index' },
  {
    path: '/index',
    component: '@/pages/index/index',
    wrappers: ['@/pages/wrappers/index.tsx'],
  },
  {
    path: '/privacy',
    component: '@/pages/privacy/index',
  },
  {
    path: '/news',
    component: '@/pages/news/index',
    wrappers: ['@/pages/wrappers/index.tsx'],
  },
  {
    path: '/story',
    component: '@/pages/story/index',
    wrappers: ['@/pages/wrappers/index.tsx'],
  },
  {
    path: '/detail',
    component: '@/pages/newsDetail/index',
    wrappers: ['@/pages/wrappers/index.tsx'],
  },
  {
    path: '/list',
    component: '@/pages/list/index',
    wrappers: ['@/pages/wrappers/index.tsx'],
  },
  {
    path: '/m/index',
    component: '@/pages/web_m/index',
  },
  {
    path: '/m/success',
    component: '@/pages/web_m/success',
  },
  {
    path: '/m/story',
    component: '@/pages/web_m/story',
  },
  {
    path: '/m/list',
    component: '@/pages/web_m/list',
  },
  {
    path: '/m/detail',
    component: '@/pages/web_m/detail',
  },
  {
    path: '/words',
    component: '@/pages/Words/Words',
    wrappers: ['@/pages/wrappers/index.tsx'],
  },
  {
    path: '/pictures',
    component: '@/pages/Pictures/Pictures',
    wrappers: ['@/pages/wrappers/index.tsx'],
  },
  {
    path: '/m/words',
    component: '@/pages/web_m/Words/Words',
  },
  {
    path: '/m/pictures',
    component: '@/pages/web_m/Pictures/Pictures',
  },
];

export default routes;
