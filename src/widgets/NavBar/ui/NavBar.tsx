import { FC, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@shared/lib/classNames/classNames";

import cls from "./NavBar.module.scss";
import Button, { ButtonVariant } from "@shared/ui/Button/Button";
import { LoginModal } from "@features/AuthByUserName";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@entities/User";
import { userActions } from "@entities/User/model/slice/userSlice";
import { useAppDispatch } from "@app/providers/StoreProvider";

interface NavBarProps {
  className?: string;
}

const NavBar: FC<NavBarProps> = memo(({ className }) => {
  const { t } = useTranslation("translation");
  const dispatch = useAppDispatch();

  const userAuthData = useSelector(getUserAuthData);

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <div className={classNames([cls.navbar, className])}>
      {userAuthData ? (
        <>
          <Button
            variant={ButtonVariant.OUTLINE}
            className={cls.links}
            onClick={onLogout}
          >
            {t("signOut")}
          </Button>
        </>
      ) : (
        <>
          <Button
            variant={ButtonVariant.OUTLINE}
            className={cls.links}
            onClick={onToggleModal}
          >
            {t("signIn")}
          </Button>

          <LoginModal
            onClose={() => setIsAuthModal(false)}
            isOpened={isAuthModal}
          />
        </>
      )}
    </div>
  );
});

export default NavBar;
