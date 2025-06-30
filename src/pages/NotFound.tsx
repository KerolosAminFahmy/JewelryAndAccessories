import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>{t('notFound.title', 'Page Not Found')}</h2>
        <p>{t('notFound.message', 'The page you are looking for does not exist.')}</p>
        <Link to="/" className="back-home">
          {t('notFound.backHome', 'Back to Home')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 