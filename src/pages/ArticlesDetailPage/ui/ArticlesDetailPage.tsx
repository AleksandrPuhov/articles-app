import { FC } from "react";

import cls from "./ArticlesDetailPage.module.scss";

export const ArticlesDetailPage: FC = () => {
  // const dispatch = useAppDispatch();
  // const { t } = useTranslation("profile");

  // const profile = useSelector(getProfileData);
  // const profileReadOnly = useSelector(getProfileIsReadOnly);

  // useEffect(() => {
  //   if (__PROJECT__ !== "storybook") {
  //     dispatch(fetchProfileData());
  //   }
  // }, [dispatch]);

  return (
    <div className={cls.wrapp}>
      ArticlesDetailPage
      {/* <div className={cls.headerWrapp}>
          <p className={cls.header}>{t("title")}</p>
          <Button variant={ButtonVariant.OUTLINE}>{t("editBtn")}</Button>
        </div>
        {profile ? (
          <ProfileCard profile={profile} readOnly={profileReadOnly} />
        ) : (
          <Loader />
        )} */}
    </div>
  );
};
