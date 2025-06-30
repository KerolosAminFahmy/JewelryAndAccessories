import type { ReactNode } from 'react';
import { useEffect } from 'react';
import Navigation from './Navigation';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../theme/ThemeProvider';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { t } = useTranslation();
  const { theme, direction } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`layout ${theme} ${direction}`}>
      <Navigation />
      <main className="main-content">
        {children}
      </main>
      <footer className={`footer ${theme} ${direction}`}>
        <div className="footer-content">
          <p>&copy; 2024 {t('footer.copyright', 'Merna Project')}. {t('footer.rights', 'All rights reserved.')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 