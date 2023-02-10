import { FC, useState } from 'react';

import { classNames } from '@shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@widgets/ThemeSwitcher';
import { LangSwitcher } from '@widgets/LangSwitcher';

import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}

const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapset = () => setCollapsed((prev) => !prev);

  return (
    <div
      className={classNames([cls.sideBar, className], {
        [cls.collapsed]: collapsed,
      })}
    >
      <button type="button" onClick={toggleCollapset}>
        test
      </button>
      <div className={cls.swichers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

export default SideBar;