import { AboutPage } from '@pages/AboutPage';
import { MainPage } from '@pages/MainPage';
import { NotFoundPage } from '@pages/NotFoundPage';

export enum AppRoutes {
  Main = 'Main',
  About = 'about',
  NotFound = 'NotFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.About]: '/about',
  [AppRoutes.NotFound]: '*',
};

export const routeConfig = [
  {
    path: RoutePath[AppRoutes.Main],
    element: <MainPage />,
  },
  {
    path: RoutePath[AppRoutes.About],
    element: <AboutPage />,
  },
  {
    path: RoutePath[AppRoutes.NotFound],
    element: <NotFoundPage />,
  },
];
