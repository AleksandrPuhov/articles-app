import { FC, Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { NavBar } from "@widgets/NavBar";
import { SideBar } from "@widgets/SideBar";
import Loader from "@shared/ui/Loader/Loader";
import { userActions } from "@entities/User/model/slice/userSlice";
import { useAppDispatch } from "@app/providers/StoreProvider";
import { USER_LOCALSTORAGE_KEY } from "@shared/consts/localstorageConst";

export const Layout: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    if (user) {
      dispatch(userActions.setAuthData(JSON.parse(user)));
    } else {
      dispatch(userActions.logout());
    }
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <NavBar />
      <div className="content-page">
        <SideBar />
        <div className="page-wrapper">
          <Outlet />
        </div>
      </div>
    </Suspense>
  );
};
