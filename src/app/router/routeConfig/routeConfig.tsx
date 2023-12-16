import { Layout } from "@app/layout/ui/Layout";
import { NotFoundPage } from "@pages/NotFoundPage";
import { protectedLoader } from "./protectedLoader";

export const routeConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        async lazy() {
          const { MainPage } = await import("@pages/MainPage");
          return { Component: MainPage };
        },
      },
      {
        path: "about",
        async lazy() {
          const { AboutPage } = await import("@pages/AboutPage");
          return { Component: AboutPage };
        },
      },
      {
        path: "profile",
        loader: protectedLoader,
        async lazy() {
          const { ProfilePage } = await import("@pages/ProfilePage");
          return { Component: ProfilePage };
        },
      },
      {
        path: "articles",
        loader: protectedLoader,
        children: [
          {
            index: true,
            async lazy() {
              const { ArticlesPage } = await import("@pages/ArticlesPage");
              return { Component: ArticlesPage };
            },
          },
          {
            path: ":id",
            async lazy() {
              const { ArticlesDetailPage } = await import(
                "@pages/ArticlesDetailPage"
              );
              return { Component: ArticlesDetailPage };
            },
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
