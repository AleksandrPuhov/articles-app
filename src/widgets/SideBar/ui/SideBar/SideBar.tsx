import { FC, memo, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import cls from "./SideBar.module.scss";

import ArrowRight from "@shared/assets/icons/arrow-right.svg";

import { classNames } from "@shared/lib/classNames/classNames";
import { ThemeSwitcher } from "@widgets/ThemeSwitcher";
import { LangSwitcher } from "@widgets/LangSwitcher";
import Button, { ButtonVariant } from "@shared/ui/Button/Button";
import { sideBarItemsList } from "@widgets/SideBar/model/items";
import { SideBarItem } from "../SideBarItem/SideBarItem";
import { getUserAuthData } from "@entities/User";

interface SideBarProps {
  className?: string;
}

const SideBar: FC<SideBarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const userAuthData = useSelector(getUserAuthData);

  const toggleCollapset = () => setCollapsed((prev) => !prev);

  const { t } = useTranslation("translation", { keyPrefix: "navbar" });

  const itemsList = useMemo(() => {
    let _items = sideBarItemsList;

    if (!userAuthData) {
      _items = _items.filter((item) => !item?.isAuth);
    }

    return _items.map((link) => {
      return (
        <SideBarItem
          key={link.path}
          collapsed={collapsed}
          path={link.path}
          text={t(link.textKey)}
          Icon={link.icon}
        />
      );
    });
  }, [collapsed, t, userAuthData]);

  return (
    <div
      className={classNames([cls.sideBar, className], {
        [cls.collapsed]: collapsed,
      })}
      data-testid="sidebar-testid"
    >
      <div className={cls.pagesLinks}>{itemsList}</div>
      <div
        className={classNames([cls.swichers], {
          [cls.swichersCollapsed]: collapsed,
        })}
      >
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
      <div className={cls.btnToggleWrapp}>
        <Button
          data-testid="sidebar-toggle-testid"
          onClick={toggleCollapset}
          variant={ButtonVariant.ICON}
        >
          <ArrowRight
            className={classNames([cls.arrow], {
              [cls.arrowCollapsed]: !collapsed,
            })}
          />
        </Button>
      </div>
    </div>
  );
});

export default SideBar;
