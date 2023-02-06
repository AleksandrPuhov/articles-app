import { ButtonHTMLAttributes, FC } from "react";
import { Link, LinkProps } from "react-router-dom";

import cls from "./Button.module.scss";

import { classNames } from "@shared/lib/classNames/classNames";

export enum ButtonVariant {
  CLEAR = "clear",
  PRIMARY = "primary",
  SECONDARY = "secondary",
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
}) => {
  return (
    <button
      {...otherProps}
      className={classNames([cls.btn, className, cls[variant]])}
    >
      {children}
    </button>
  );
};

export default Button;
