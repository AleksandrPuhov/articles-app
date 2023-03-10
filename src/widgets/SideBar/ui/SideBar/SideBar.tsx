import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ArrowRight from '@shared/assets/icons/arrow-right.svg';

import Home from '@shared/assets/icons/home.svg';
import About from '@shared/assets/icons/about.svg';

import { classNames } from '@shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@widgets/ThemeSwitcher';
import { LangSwitcher } from '@widgets/LangSwitcher';
import Button, { ButtonVariant } from '@shared/ui/Button/Button';
import AppLink from '@shared/ui/AppLink/AppLink';
import { RoutePath } from '@shared/config/routeConfig/routeConfig';

import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapset = () => setCollapsed((prev) => !prev);

  const { t } = useTranslation('translation', { keyPrefix: 'navbar' });

  return (
    <div
      className={classNames([cls.sideBar, className], {
        [cls.collapsed]: collapsed,
      })}
      data-testid="sidebar-testid"
    >
      <div className={cls.pagesLinks}>
        <AppLink to={RoutePath.Main} className={cls.pageLink}>
          <Home className={cls.iconPage} />
          <span
            className={classNames([cls.pageLinkText], {
              [cls.pageLinkTextCollapsed]: collapsed,
            })}
          >
            {t('mainPageLink')}
          </span>
        </AppLink>
        <AppLink to={RoutePath.About} className={cls.pageLink}>
          <About className={cls.iconPage} />
          <span
            className={classNames([cls.pageLinkText], {
              [cls.pageLinkTextCollapsed]: collapsed,
            })}
          >
            {t('aboutPageLink')}
          </span>
        </AppLink>
      </div>
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
};

export default SideBar;
