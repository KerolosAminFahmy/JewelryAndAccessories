import type { ReactNode } from 'react';
import { useEffect } from 'react';
import Navigation from './Navigation';
import { useTheme } from '../theme/ThemeProvider';
import { Footer } from './index';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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
      <Footer />
    </div>
  );
};

export default Layout; 