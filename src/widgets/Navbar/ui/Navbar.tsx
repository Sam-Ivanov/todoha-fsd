import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { DropdownMenu } from 'shared/ui/DropdownMenu/DropdownMenu';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.logo}>{t('ToDoHa')}</div>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.INVERTED} to='/' className={cls.mainLink}>
          {t('Главная')}
        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to='/about' className={cls.mainLink}>
          {t('О сайте')}
        </AppLink>
        <ThemeSwitcher className={cls.mainLink} />
        <LangSwitcher className={cls.mainLink} />
        <DropdownMenu type='qwe' />
      </div>
    </div>
  );
};
