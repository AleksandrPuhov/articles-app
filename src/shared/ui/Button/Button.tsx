import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from '@shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonVariant {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = ButtonVariant.PRIMARY,
  ...otherProps
}) => (
  <button
    type="button"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...otherProps}
    className={classNames([cls.btn, className, cls[variant]])}
  >
    {children}
  </button>
);

export default Button;
