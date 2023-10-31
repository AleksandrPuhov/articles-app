import { FC, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Loader from '@shared/ui/Loader/Loader';
import Layout from './Layout';
import { MainPage } from '@pages/MainPage';
import { AboutPage } from '@pages/AboutPage';
import { NotFoundPage } from '@pages/NotFoundPage';

const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Layout,
      children: [
        {
          path: '/',
          Component: MainPage,
        },
        {
          path: 'about',
          Component: AboutPage,
        },
      ],
    },
    {
      path: '*',
      Component: NotFoundPage,
    },
  ]);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
      {/* <Routes>
      {routeConfig.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes> */}
    </Suspense>
  );
};

export default App;
