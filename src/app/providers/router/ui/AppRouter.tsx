import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '@shared/config/routeConfig/routeConfig';
import Loader from '@shared/ui/Loader/Loader';

const AppRouter: FC = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routeConfig.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
