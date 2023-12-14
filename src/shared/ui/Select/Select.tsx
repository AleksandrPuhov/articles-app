import { ChangeEvent, FC, SelectHTMLAttributes, useMemo } from "react";

import cls from "./Select.module.scss";

import { classNames } from "@shared/lib/classNames/classNames";

export interface SelectOption {
  value: string;
  content: string;
}

type HTMLSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "value" | "onChange"
>;

interface SelectProps extends HTMLSelectProps {
  className?: string;
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export const Select: FC<SelectProps> = ({
  className,
  label,
  options,
  value,
  onChange,
  readOnly = false,
  ...otherProps
}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e.target.value);
  };

  const optionsList = useMemo(
    () =>
      options.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      )),
    [options]
  );

  return (
    <label className={classNames([cls.label, className])}>
      {!!label && label}
      <select
        {...otherProps}
        disabled={readOnly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </label>
  );
};
