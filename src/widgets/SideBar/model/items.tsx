import Home from "@shared/assets/icons/home.svg";
import About from "@shared/assets/icons/about.svg";
import Profile from "@shared/assets/icons/profile.svg";
import Articles from "@shared/assets/icons/articles.svg";

export interface SideBarItemType {
  path: string;
  textKey: string;
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  isAuth?: boolean;
}

export const sideBarItemsList: SideBarItemType[] = [
  {
    path: "/",
    textKey: "mainPageLink",
    icon: Home,
  },
  {
    path: "/about",
    textKey: "aboutPageLink",
    icon: About,
  },
  {
    path: "/profile",
    textKey: "profilePageLink",
    icon: Profile,
    isAuth: true,
  },
  {
    path: "/articles",
    textKey: "articlesPageLink",
    icon: Articles,
    isAuth: true,
  },
];
