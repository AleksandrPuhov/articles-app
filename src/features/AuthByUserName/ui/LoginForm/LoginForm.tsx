import { FC } from "react";
import { useTranslation } from "react-i18next";

import cls from "./LoginForm.module.scss";

import Button, { ButtonVariant } from "@shared/ui/Button/Button";
import { classNames } from "@shared/lib/classNames/classNames";
import Input from "@shared/ui/Input/Input";

export const LoginForm: FC = () => {
  const { t } = useTranslation("translation");

  return (
    <div className={classNames([cls.loginForm])}>
      <Input className={cls.input} label={t("loginForm.login")} />
      <Input className={cls.input} label={t("loginForm.pass")} />
      <Button variant={ButtonVariant.OUTLINE} className={cls.loginBtn}>
        {t("signIn")}
      </Button>
    </div>
  );
};
