import { Counter } from "@entities/Counter";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const MainPage: FC = () => {
  const { t } = useTranslation("main");

  return (
    <>
      <p>{t("titlePage")}</p>
      <Counter />
    </>
  );
};
