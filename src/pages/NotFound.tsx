import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faExclamationTriangle, 
  faArrowLeft, 
  faHome,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/src/assets/slideshowV1-bg2.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: 60
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(191, 164, 109, 0.8) 0%, rgba(168, 137, 56, 0.6) 100%)',
          zIndex: 1
        }} />
        
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '600px',
          padding: '0 24px'
        }}>
          <div style={{
            fontSize: '8rem',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '16px',
            fontFamily: 'var(--font-title)',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            letterSpacing: '0.02em'
          }}>
            404
          </div>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '24px',
            fontFamily: 'var(--font-title)',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            letterSpacing: '0.02em'
          }}>
            {t('notFound.title', 'Page Not Found')}
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: '#fff',
            fontFamily: 'var(--font-body)',
            lineHeight: 1.6,
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            opacity: 0.95
          }}>
            {t('notFound.message', 'The page you are looking for does not exist.')}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ 
        padding: '60px 0', 
        maxWidth: '600px', 
        margin: '0 auto',
        paddingLeft: '24px',
        paddingRight: '24px'
      }}>
        <div style={{
          background: 'var(--color-card-bg)',
          borderRadius: 20,
          padding: 48,
          boxShadow: 'var(--color-shadow)',
          border: '1px solid var(--color-border)',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '4rem',
            color: 'var(--color-primary)',
            marginBottom: '24px'
          }}>
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </div>
          
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: 'var(--color-primary)',
            marginBottom: '16px',
            fontFamily: 'var(--font-title)'
          }}>
            {t('notFound.oops', 'Oops!')}
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-text)',
            marginBottom: '32px',
            fontFamily: 'var(--font-body)',
            lineHeight: 1.6
          }}>
            {t('notFound.description', 'It seems the page you\'re looking for has wandered off. Don\'t worry, we\'ll help you find your way back to our luxury collection.')}
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center'
          }}>
            <Link 
              to="/" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'var(--color-primary)',
                color: '#fff',
                padding: '16px 32px',
                borderRadius: 12,
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                transition: 'all 0.3s ease',
                border: '2px solid var(--color-primary)'
              }}
            >
              <FontAwesomeIcon icon={faHome} />
              {t('notFound.backHome', 'Back to Home')}
            </Link>
            
            <Link 
              to="/shop" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'none',
                color: 'var(--color-primary)',
                padding: '14px 28px',
                borderRadius: 12,
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                transition: 'all 0.3s ease',
                border: '2px solid var(--color-primary)'
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
              {t('notFound.browseShop', 'Browse Our Shop')}
            </Link>
          </div>

          <div style={{
            marginTop: '40px',
            padding: '24px',
            background: 'var(--color-bg)',
            borderRadius: 12,
            border: '1px solid var(--color-border)'
          }}>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
              marginBottom: '12px',
              fontFamily: 'var(--font-title)'
            }}>
              {t('notFound.helpTitle', 'Need Help?')}
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: 'var(--color-text)',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.5
            }}>
              {t('notFound.helpText', 'If you believe this is an error, please contact our support team and we\'ll be happy to assist you.')}
            </p>
            <Link 
              to="/contact" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-primary)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                marginTop: '12px',
                transition: 'all 0.3s ease'
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              {t('notFound.contactSupport', 'Contact Support')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound; 