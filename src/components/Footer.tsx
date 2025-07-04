import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo1.png';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../theme/ThemeProvider';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, direction } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer
      className={`footer-section pt-5 pb-3 mt-5 border-top animate__animated animate__fadeIn ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'} ${direction}`}
      style={{ transition: 'background 0.5s, color 0.5s' }}
      dir={direction}
    >
      <Container>
        <Row className="mb-4">
          {/* Logo & Description */}
          <Col xs={12} md={6} lg={3} className="mb-4 mb-lg-0 text-center text-lg-start">
            <img
              src={logo}
              alt="Merna Jewelry Logo"
              style={{ height: 60, objectFit: 'contain', filter: isDark ? 'brightness(0.9)' : 'none', transition: 'filter 0.5s' }}
              className="footer-logo animate__animated animate__fadeInDown"
            />
            <div className="mt-3 text-secondary" style={{ fontSize: '1rem', maxWidth: 220, margin: '0 auto', color: isDark ? '#ccc' : '#555', transition: 'color 0.5s' }}>
              {t('footer.description', 'Discover timeless elegance and modern design with Merna Jewelry. Crafted for every occasion.')}
            </div>
          </Col>
          {/* Important Links */}
          <Col xs={12} md={6} lg={3} className="mb-4 mb-lg-0 text-center text-lg-start">
            <h6 className="fw-bold mb-3">{t('footer.quickLinks', 'Quick Links')}</h6>
            <nav className="d-flex flex-column gap-2">
              <a href="/shop" className="footer-link text-decoration-none" tabIndex={0}>{t('footer.shop', 'Shop')}</a>
              <a href="/about" className="footer-link text-decoration-none" tabIndex={0}>{t('footer.aboutUs', 'About Us')}</a>
              <a href="/contact" className="footer-link text-decoration-none" tabIndex={0}>{t('footer.contactUs', 'Contact Us')}</a>
              <a href="/cart" className="footer-link text-decoration-none" tabIndex={0}>{t('footer.cart', 'Cart')}</a>
            </nav>
          </Col>
          {/* Social Media */}
          <Col xs={12} md={6} lg={3} className="mb-4 mb-lg-0 text-center text-lg-start">
            <h6 className="fw-bold mb-3">{t('footer.followUs', 'Follow Us')}</h6>
            <div className="d-flex justify-content-center justify-content-lg-start gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social text-dark" tabIndex={0}><FontAwesomeIcon icon={faFacebookF} size="lg" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social text-dark" tabIndex={0}><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social text-dark" tabIndex={0}><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="footer-social text-dark" tabIndex={0}><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a>
            </div>
          </Col>
          {/* Contact Info */}
          <Col xs={12} md={6} lg={3} className="text-center text-lg-start">
            <h6 className="fw-bold mb-3">{t('footer.contact', 'Contact')}</h6>
            <div className="mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="me-2 text-secondary" /> info@mernajewelry.com
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} className="me-2 text-secondary" /> +1 234 567 890
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center text-secondary small pt-3 border-top">
            &copy; {new Date().getFullYear()} Merna Jewelry. {t('footer.rights', 'All rights reserved.')}
          </Col>
        </Row>
      </Container>
      <style>{`
        .footer-link {
          width: fit-content;
          color: inherit;
          transition: color 0.3s, transform 0.3s;
        }
        .footer-link:hover, .footer-link:focus {
          color: #bfa46d;
          transform: translateY(-2px) scale(1.05);
          text-decoration: underline;
        }
        .footer-social {
          transition: color 0.3s, transform 0.3s;
        }
        .footer-social:hover, .footer-social:focus {
          color: #bfa46d !important;
          transform: scale(1.2) rotate(-8deg);
        }
        .footer-logo {
          transition: filter 0.5s, transform 0.5s;
        }
        .footer-logo:hover {
          transform: scale(1.07) rotate(-2deg);
          filter: brightness(1.1) drop-shadow(0 2px 8px #bfa46d44);
        }
        .footer-section {
          transition: background 0.5s, color 0.5s;
        }
      `}</style>
    </footer>
  );
};

export default Footer; 