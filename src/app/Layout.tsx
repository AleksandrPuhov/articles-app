import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import './styles/index.scss';

import { classNames } from '@shared/lib/classNames/classNames';
// import { NavBar } from '@widgets/NavBar';
// import { SideBar } from '@widgets/SideBar';

import Loader from '@shared/ui/Loader/Loader';

import { useThemes } from './providers/ThemeProvider';

const Layout: FC = () => {
  const { theme } = useThemes();

  return (
    <div className={classNames(['app', theme])}>
      <Suspense fallback={<Loader />}>
        <p>sdfsdfsfsfs</p>
        {/* <NavBar />
        <div className="content-page">
          <SideBar />
          <div className="page-wrapper"> */}
        {/* <AppRouter /> */}
        <Outlet />
        {/* </div>
        </div> */}
      </Suspense>
    </div>
  );
};

export default Layout;
