import { FC } from 'react';

import LightIcon from '@shared/assets/icons/icon-sun.svg';
import DarkIcon from '@shared/assets/icons/icon-moon.svg';

import { classNames } from '@shared/lib/classNames/classNames';
import { Theme, useThemes } from '@app/providers/ThemeProvider';
import Button, {
  ButtonIconSize,
  ButtonVariant,
} from '@shared/ui/Button/Button';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useThemes();

  return (
    <Button
      onClick={toggleTheme}
      className={classNames([cls.switcher, className])}
      variant={ButtonVariant.ICON}
      iconSize={ButtonIconSize.L}
    >
      {theme === Theme.NORMAL ? (
        <DarkIcon className={cls.icon} />
      ) : (
        <LightIcon className={cls.icon} />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
