import { useTheme } from "app/providers/ThemeProvider";
import ThemeIcon from 'shared/assets/icons/theme-icon.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from "shared/ui/Button/Button";
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      <ThemeIcon className={classNames(cls.icon)} />
    </Button>
  );
};

