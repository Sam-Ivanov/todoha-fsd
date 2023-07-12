import { useTranslation } from 'react-i18next';

const SettingsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* <BugButton /> */}
      <div>
        {t('Страница настроек')}
      </div>
      {/* <div className={cls.wrapper}>
        <LogoIcon className={classNames(cls.logo)} />
      </div> */}
    </>
  );
};

export default SettingsPage;
