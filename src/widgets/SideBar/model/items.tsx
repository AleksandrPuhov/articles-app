import Home from "@shared/assets/icons/home.svg";
import About from "@shared/assets/icons/about.svg";
import Profile from "@shared/assets/icons/profile.svg";

export interface SideBarItemType {
  path: string;
  textKey: string;
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
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
  },
];
