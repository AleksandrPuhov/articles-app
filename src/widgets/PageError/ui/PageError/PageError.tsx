import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@shared/lib/classNames/classNames";
import Button, { ButtonVariant } from "@shared/ui/Button/Button";

import cls from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = memo(({ className }) => {
  const { t } = useTranslation("translation", { keyPrefix: "pageError" });

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames([cls.pageError, className])}>
      <p>{t("hasError")}</p>
      <Button variant={ButtonVariant.OUTLINE} onClick={reloadPage}>
        {t("reloadBtn")}
      </Button>
    </div>
  );
});

export default PageError;
