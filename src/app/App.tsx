import { FC, Suspense } from 'react';

import './styles/index.scss';

import { classNames } from '@shared/lib/classNames/classNames';
import { NavBar } from '@widgets/NavBar';
import { SideBar } from '@widgets/SideBar';

import Loader from '@shared/ui/Loader/Loader';

import { AppRouter } from './providers/router';

import { useThemes } from './providers/ThemeProvider';

const App: FC = () => {
  const { theme } = useThemes();

  return (
    <div className={classNames(['app', theme])}>
      <Suspense fallback={<Loader />}>
        <NavBar />
        <div className="content-page">
          <SideBar />
          <div className="page-wrapper">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
