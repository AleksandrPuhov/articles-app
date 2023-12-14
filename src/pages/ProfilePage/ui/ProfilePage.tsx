import { FC, useEffect } from "react";
import { useAppDispatch } from "@app/providers/StoreProvider";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import cls from "./ProfilePage.module.scss";

import {
  ProfileCard,
  fetchProfileData,
  getProfileData,
  getProfileIsReadOnly,
  profileReducer,
} from "@entities/Profile";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import Loader from "@shared/ui/Loader/Loader";
import Button, { ButtonVariant } from "@shared/ui/Button/Button";

const initialReducers: ReducersList = {
  profile: profileReducer,
};

export const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation("profile");

  const profile = useSelector(getProfileData);
  const profileReadOnly = useSelector(getProfileIsReadOnly);

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={cls.wrapp}>
        <div className={cls.headerWrapp}>
          <p className={cls.header}>{t("title")}</p>
          <Button variant={ButtonVariant.OUTLINE}>{t("editBtn")}</Button>
        </div>
        {profile ? (
          <ProfileCard profile={profile} readOnly={profileReadOnly} />
        ) : (
          <Loader />
        )}
      </div>
    </DynamicModuleLoader>
  );
};
