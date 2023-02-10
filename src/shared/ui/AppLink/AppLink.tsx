import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from '@shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
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
}) => (
  <Link
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}
    to={to}
    className={classNames([cls.link, className, cls[variant]])}
  >
    {children}
  </Link>
);

export default AppLink;
