import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@shared/lib/classNames/classNames';
import AppLink, { AppLinkVariant } from '@shared/ui/AppLink/AppLink';
import { RoutePath } from '@shared/config/routeConfig/routeConfig';

import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

const NavBar: FC<NavBarProps> = ({ className }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'navbar' });

  return (
    <div className={classNames([cls.navbar, className])}>
      <div className={cls.navbarLinks}>
        <AppLink to={RoutePath.Main}>{t('mainPageLink')}</AppLink>
        <AppLink to={RoutePath.About} variant={AppLinkVariant.SECONDARY}>
          {t('aboutPageLink')}
        </AppLink>
      </div>
    </div>
  );
};

export default NavBar;
