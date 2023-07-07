import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('О сайте')}
      <LoginForm />
    </div>
  );
};

export default AboutPage;
