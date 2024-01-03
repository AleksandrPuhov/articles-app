import { FC } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import cls from "./ArticlesDetailPage.module.scss";

import { ArticleDetails } from "@entities/Article";

export const ArticlesDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation("article");

  return (
    <div className={cls.wrapp}>
      {id ? (
        <ArticleDetails id={id} />
      ) : (
        <>
          <p>{t("articleNotFound")}</p>
        </>
      )}
    </div>
  );
};
