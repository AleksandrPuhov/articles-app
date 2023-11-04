import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { NavBar } from "@widgets/NavBar";
import { SideBar } from "@widgets/SideBar";
import Loader from "@shared/ui/Loader/Loader";

export const Layout: FC = () => {
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
