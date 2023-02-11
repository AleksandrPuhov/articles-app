import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './NotFoundPage.module.scss';

const NotFoundPage: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className={cls.notFoundText}>{t('NotFoundInfo')}</p>
    </>
  );
};

export default NotFoundPage;
