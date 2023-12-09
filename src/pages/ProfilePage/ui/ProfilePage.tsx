import { profileReducer } from "@entities/Profile";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const initialReducers: ReducersList = {
  profile: profileReducer,
};

export const ProfilePage: FC = () => {
  const { t } = useTranslation("profile");

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <p>{t("titlePage")}</p>
    </DynamicModuleLoader>
  );
};
