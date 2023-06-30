import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import LogoIcon from 'shared/assets/icons/logobable.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <>
      <BugButton />
      <div>
        {t('Главная страница')}
      </div>
      <div className={cls.wrapper}>
        <LogoIcon className={classNames(cls.logo)} />
      </div>
    </>
  );
};

export default MainPage;
