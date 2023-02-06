import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

import cls from "./AppLink.module.scss";

import { classNames } from "@shared/lib/classNames/classNames";

export enum AppLinkVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
}

const AppLink: FC<AppLinkProps> = ({
  to,
  className,
  children,
  variant = AppLinkVariant.PRIMARY,
  ...otherProps
}) => {
  return (
    <Link
      {...otherProps}
      to={to}
      className={classNames([cls.link, className, cls[variant]])}
    >
      {children}
    </Link>
  );
};

export default AppLink;
