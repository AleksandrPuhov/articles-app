import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@shared/lib/classNames/classNames';
import Button, { ButtonVariant } from '@shared/ui/Button/Button';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'sidebar' });

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      onClick={toggleLang}
      className={classNames([className, cls.switcher])}
      variant={ButtonVariant.CLEAR}
    >
      {t('langSwich')}
    </Button>
  );
};

export default LangSwitcher;
