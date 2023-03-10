import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from '@shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonVariant {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  OUTLINE = 'outline',
  ICON = 'icon',
}

export enum ButtonIconSize {
  M = 'iconSize_m',
  L = 'iconSize_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  iconSize?: ButtonIconSize;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = ButtonVariant.PRIMARY,
  iconSize = ButtonIconSize.M,
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [cls[iconSize]]: variant === ButtonVariant.ICON,
  };

  return (
    <button
      type="button"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
      className={classNames([cls.btn, className, cls[variant]], mods)}
    >
      {children}
    </button>
  );
};

export default Button;
