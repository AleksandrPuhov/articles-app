import { FC } from "react";

import cls from "./NavBar.module.scss";

import { classNames } from "@shared/lib/classNames/classNames";
import AppLink, { AppLinkVariant } from "@shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@widgets/ThemeSwitcher";

interface NavBarProps {
  className?: string;
}

const NavBar: FC<NavBarProps> = ({ className }) => {
  return (
    <div className={classNames([cls.navbar, className])}>
      <ThemeSwitcher />
      <div className={cls.navbarLinks}>
        <AppLink to={"/"}>Main</AppLink>
        <AppLink to={"/about"} variant={AppLinkVariant.SECONDARY}>
          About
        </AppLink>
      </div>
    </div>
  );
};

export default NavBar;
