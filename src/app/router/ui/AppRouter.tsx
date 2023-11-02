import { FC, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Loader from "@shared/ui/Loader/Loader";
import { routeConfig } from "@app/router/routeConfig/routeConfig";

export const AppRouter: FC = () => {
  const router = createBrowserRouter(routeConfig);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
