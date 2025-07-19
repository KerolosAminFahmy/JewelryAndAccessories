import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../theme/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSun, 
  faMoon, 
  faUser, 
  faShoppingCart,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import  LogoImage from '../assets/logo1.png'; 
import egyptFlag from '../assets/flag.png';
import usaFlag from '../assets/united-kingdom.png';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme, direction } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Mock cart count - in a real app this would come from a cart context/state
  const [cartCount] = useState(3);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getLanguageFlag = () => {
    return i18n.language !== 'en' ? usaFlag : egyptFlag;
  };

  const getLanguageText = () => {
    return i18n.language !== 'en' ? 'EN' : 'AR';
  };

  return (
    <nav className={`navigation ${theme} ${direction}`}>
      <style>
       {`
         .nav-link.active {
            color: var(--color-link-hover, #a88938);
            font-weight: bold;
          }
          .nav-link:hover ,nav-icon-link:hover,button:hover {
            color: var(--color-link-hover, #a88938);
            font-weight: bold;
            text-decoration: none;
          }
        
       `}
      </style>
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img 
            src={LogoImage} 
            alt="Brand logo centered above navigation links, simple and modern design, neutral background, welcoming tone" 
            loading="lazy" 
          />
        </Link>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {t('nav.home', 'Home')}
          </Link>
           <Link 
            to="/shop" 
            className={`nav-link ${isActive('/shop') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {t('nav.shop', 'shop')}
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {t('nav.about', 'About')}
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {t('nav.contact', 'Contact')}
          </Link>
        </div>

        <div className="nav-controls">
          <button onClick={toggleTheme} className="theme-toggle">
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          </button>
          <button onClick={changeLanguage} className="language-toggle">
            <span className="flag-icon"> <img src={getLanguageFlag()} alt={'flag'+getLanguageText()} /> </span>
            <span className="language-text">{getLanguageText()}</span>
          </button>
          
          <Link to="/login" className="nav-icon-link">
            <button className="user-icon">
              <FontAwesomeIcon icon={faUser} />
            </button>
          </Link>
          
          <Link to="/cart" className="nav-icon-link">
            <button className="cart-icon">
              <FontAwesomeIcon icon={faShoppingCart} />
              {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </button>
          </Link>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 