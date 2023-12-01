import { FC } from "react";

import cls from "./ValidationErrorText.module.scss";

import { classNames } from "@shared/lib/classNames/classNames";

interface ValidationErrorTextProps {
  validationText: string;
  onTop?: boolean;
}

export const ValidationErrorText: FC<ValidationErrorTextProps> = ({
  validationText,
  onTop = false,
}) => {
  return validationText ? (
    <p
      className={classNames([
        cls.error,
        onTop ? cls.errorTop : cls.errorBottom,
      ])}
    >
      {validationText}
    </p>
  ) : null;
};
