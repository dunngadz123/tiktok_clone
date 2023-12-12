import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/Profile';

const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/profile',
    component: Profile,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
