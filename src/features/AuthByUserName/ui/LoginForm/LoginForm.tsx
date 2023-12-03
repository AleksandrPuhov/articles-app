import { FC, memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import cls from "./LoginForm.module.scss";

import Button, { ButtonVariant } from "@shared/ui/Button/Button";
import Input from "@shared/ui/Input/Input";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUserName } from "../../model/services/loginByUserName/loginByUserName";
import { useAppDispatch } from "@app/providers/StoreProvider/config/store";
import { ValidationErrorText } from "@shared/ui/ValidationErrorText/ValidationErrorText";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

interface LoginFormProps {
  onClose: () => void;
}

const initialReducers: ReducersList = {
  login: loginReducer,
};

export const LoginForm: FC<LoginFormProps> = memo(({ onClose }) => {
  const { t } = useTranslation("translation");
  const dispatch = useAppDispatch();
  const loginState = useSelector(getLoginState);

  const onChangeUserName = useCallback(
    (name: string) => {
      dispatch(loginActions.setUserName(name));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (password: string) => {
      dispatch(loginActions.setPassword(password));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    if (loginState?.username && loginState?.password)
      dispatch(
        loginByUserName({
          username: loginState.username,
          password: loginState.password,
          onSuccess: onClose,
        })
      );
  }, [dispatch, loginState?.password, loginState?.username, onClose]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={cls.loginForm}>
        <Input
          className={cls.input}
          label={t("loginForm.login")}
          onChange={onChangeUserName}
          value={loginState?.username || ""}
        />
        <Input
          className={cls.input}
          label={t("loginForm.pass")}
          onChange={onChangePassword}
          value={loginState?.password || ""}
        />
        <div className={cls.btnWrapp}>
          <Button
            variant={ButtonVariant.OUTLINE}
            onClick={onLoginClick}
            disabled={loginState?.isLoading || false}
          >
            {t("signIn")}
          </Button>
          <ValidationErrorText
            validationText={loginState?.error || ""}
            onTop={true}
          />
        </div>
      </div>
    </DynamicModuleLoader>
  );
});
