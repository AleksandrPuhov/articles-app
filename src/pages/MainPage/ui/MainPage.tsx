import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  const { t } = useTranslation('main');

  return (
    <>
      <p>{t('titlePage')}</p>
    </>
  );
};

export default MainPage;
