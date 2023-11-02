import { Layout } from "@app/layout/ui/Layout";
import { NotFoundPage } from "@pages/NotFoundPage";

export enum AppRoutes {
  Main = "Main",
  About = "About",
  NotFound = "NotFound",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: "/",
  [AppRoutes.About]: "/about",
  [AppRoutes.NotFound]: "*",
};

export const routeConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: RoutePath[AppRoutes.Main],
        async lazy() {
          const { MainPage } = await import("@pages/MainPage");
          return { Component: MainPage };
        },
      },
      {
        path: RoutePath[AppRoutes.About],
        async lazy() {
          const { AboutPage } = await import("@pages/AboutPage");
          return { Component: AboutPage };
        },
      },
    ],
  },
  {
    path: RoutePath[AppRoutes.NotFound],
    element: <NotFoundPage />,
  },
];
