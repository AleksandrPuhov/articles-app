import { FC, memo } from "react";

import cls from "./SideBarItem.module.scss";

import { classNames } from "@shared/lib/classNames/classNames";
import AppLink from "@shared/ui/AppLink/AppLink";

interface SideBarItemProps {
  collapsed: boolean;
  path: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const SideBarItem: FC<SideBarItemProps> = memo(
  ({ path, text, collapsed, Icon }) => {
    return (
      <AppLink to={path} className={cls.pageLink}>
        <Icon className={cls.iconPage} />
        <span
          className={classNames([cls.pageLinkText], {
            [cls.pageLinkTextCollapsed]: collapsed,
          })}
        >
          {text}
        </span>
      </AppLink>
    );
  }
);
