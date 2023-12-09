import { Layout } from "@app/layout/ui/Layout";
import { NotFoundPage } from "@pages/NotFoundPage";

export enum AppRoutes {
  Main = "/",
  About = "/about",
  Profile = "/profile",
  NotFound = "*",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: "/",
  [AppRoutes.About]: "/about",
  [AppRoutes.Profile]: "/profile",
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
      {
        path: RoutePath[AppRoutes.Profile],
        async lazy() {
          const { ProfilePage } = await import("@pages/ProfilePage");
          return { Component: ProfilePage };
        },
      },
    ],
  },
  {
    path: RoutePath[AppRoutes.NotFound],
    element: <NotFoundPage />,
  },
];
