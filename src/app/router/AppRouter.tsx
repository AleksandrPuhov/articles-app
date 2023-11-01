import { FC, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Loader from "@shared/ui/Loader/Loader";
import { NotFoundPage } from "@pages/NotFoundPage";
import { Layout } from "@app/layout/Layout";

const AppRouter: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          async lazy() {
            let { MainPage } = await import("@pages/MainPage");
            return { Component: MainPage };
          },
          //   element: <MainPage />,
        },
        {
          path: "about",
          // element: <AboutPage />,
          async lazy() {
            let { AboutPage } = await import("@pages/AboutPage");
            return { Component: AboutPage };
          },
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
