import { ChangeEvent, FC, InputHTMLAttributes, memo } from "react";

import cls from "./Input.module.scss";

import { classNames } from "@shared/lib/classNames/classNames";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
}

const Input: FC<InputProps> = memo(
  ({ className, value, onChange, type = "text", label, ...otherProps }) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    return (
      <label className={classNames([cls.label, className])}>
        {!!label && label}
        <input
          type={type}
          {...otherProps}
          className={cls.input}
          value={value}
          onChange={onChangeHandler}
          data-testid="test-input"
        />
      </label>
    );
  }
);

export default Input;
