import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <>
      {/* <BugButton /> */}
      <div>
        {t('Главная страница')}
      </div>
      {/* <div className={cls.wrapper}>
        <LogoIcon className={classNames(cls.logo)} />
      </div> */}
    </>
  );
};

export default MainPage;
