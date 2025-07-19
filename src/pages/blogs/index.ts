import './blog-detail-view.js';
import './blogs-view.js';

export const routes = [
  { path: '/blogs', component: 'blogs-view' },
  { path: '/blogs/:blog', component: 'blog-detail-view' },
];
