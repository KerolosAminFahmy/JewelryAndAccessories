import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <h1>{t('about.title', 'About Us')}</h1>
      <div className="about-content">
        <p>
          {t('about.description', 'This is a modern React application built with Vite, TypeScript, and React Router.')}
        </p>
        <p>
          {t('about.features', 'Features include:')}
        </p>
        <ul>
          <li>{t('about.feature1', 'Internationalization (i18n) support')}</li>
          <li>{t('about.feature2', 'Theme switching (light/dark mode)')}</li>
          <li>{t('about.feature3', 'TypeScript for type safety')}</li>
          <li>{t('about.feature4', 'React Router for navigation')}</li>
          <li>{t('about.feature5', 'Modern development tools')}</li>
        </ul>
      </div>
    </div>
  );
};

export default About; 