import './gallery-view.js';

export const routes = [
  {
    path: '/',
    redirect: '/gallery/1',
  },
  { path: '/:page', component: 'gallery-view' },
];
