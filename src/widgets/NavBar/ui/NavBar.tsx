import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@shared/lib/classNames/classNames";

import cls from "./NavBar.module.scss";
import Button, { ButtonVariant } from "@shared/ui/Button/Button";
import { LoginModal } from "@features/AuthByUserName";

interface NavBarProps {
  className?: string;
}

const NavBar: FC<NavBarProps> = ({ className }) => {
  const { t } = useTranslation("translation");

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames([cls.navbar, className])}>
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
    </div>
  );
};

export default NavBar;
