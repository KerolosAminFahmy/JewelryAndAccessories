import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faLock, 
  faEnvelope, 
  faEye, 
  faEyeSlash,
  faArrowLeft,
  faSignInAlt,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const Login = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log(`${isLogin ? 'Login' : 'Signup'} attempt:`, formData);
      alert(t('auth.success', `${isLogin ? 'Login' : 'Signup'} successful!`));
    } catch (error) {
      console.error('Auth error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/src/assets/slideshowV1-bg1.jpg')`,
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
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '16px',
            fontFamily: 'var(--font-title)',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            letterSpacing: '0.02em'
          }}>
            {isLogin ? t('auth.login', 'Welcome Back') : t('auth.signup', 'Join Us')}
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#fff',
            fontFamily: 'var(--font-body)',
            lineHeight: 1.6,
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            opacity: 0.95
          }}>
            {isLogin 
              ? t('auth.loginDescription', 'Sign in to access your account and continue shopping')
              : t('auth.signupDescription', 'Create your account to start your luxury shopping journey')
            }
          </p>
        </div>
      </section>

      {/* Auth Form Section */}
      <section style={{ 
        padding: '60px 0', 
        maxWidth: '500px', 
        margin: '0 auto',
        paddingLeft: '24px',
        paddingRight: '24px'
      }}>
        <div style={{
          background: 'var(--color-card-bg)',
          borderRadius: 20,
          padding: 48,
          boxShadow: 'var(--color-shadow)',
          border: '1px solid var(--color-border)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{
              fontSize: '3rem',
              color: 'var(--color-primary)',
              marginBottom: '16px'
            }}>
              <FontAwesomeIcon icon={isLogin ? faSignInAlt : faUserPlus} />
            </div>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--color-primary)',
              marginBottom: '8px',
              fontFamily: 'var(--font-title)'
            }}>
              {isLogin ? t('auth.login', 'Login') : t('auth.signup', 'Sign Up')}
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--color-text)',
              fontFamily: 'var(--font-body)',
              opacity: 0.8
            }}>
              {isLogin 
                ? t('auth.loginSubtitle', 'Enter your credentials to continue')
                : t('auth.signupSubtitle', 'Fill in your details to create an account')
              }
            </p>
          </div>
          
          <form onSubmit={handleSubmit} style={{ marginBottom: 32 }}>
            {!isLogin && (
              <div style={{ marginBottom: 24 }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-body)'
                }}>
                  {t('auth.fullName', 'Full Name')} *
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required={!isLogin}
                    style={{
                      width: '100%',
                      padding: '12px 16px 12px 48px',
                      borderRadius: 12,
                      border: '2px solid var(--color-border)',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-body)',
                      background: 'var(--color-bg)',
                      color: 'var(--color-text)',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box'
                    }}
                    placeholder={t('auth.namePlaceholder', 'Enter your full name')}
                  />
                  <div style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--color-primary)',
                    fontSize: '1.1rem'
                  }}>
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                </div>
              </div>
            )}

            <div style={{ marginBottom: 24 }}>
              <label style={{
                display: 'block',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--color-primary)',
                marginBottom: '8px',
                fontFamily: 'var(--font-body)'
              }}>
                {t('auth.email', 'Email Address')} *
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px 12px 48px',
                    borderRadius: 12,
                    border: '2px solid var(--color-border)',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)',
                    background: 'var(--color-bg)',
                    color: 'var(--color-text)',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  placeholder={t('auth.emailPlaceholder', 'Enter your email address')}
                />
                <div style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--color-primary)',
                  fontSize: '1.1rem'
                }}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
              </div>
            </div>
            
            <div style={{ marginBottom: 32 }}>
              <label style={{
                display: 'block',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--color-primary)',
                marginBottom: '8px',
                fontFamily: 'var(--font-body)'
              }}>
                {t('auth.password', 'Password')} *
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 48px 12px 48px',
                    borderRadius: 12,
                    border: '2px solid var(--color-border)',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)',
                    background: 'var(--color-bg)',
                    color: 'var(--color-text)',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  placeholder={t('auth.passwordPlaceholder', 'Enter your password')}
                />
                <div style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--color-primary)',
                  fontSize: '1.1rem'
                }}>
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-primary)',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '16px 32px',
                borderRadius: 12,
                border: '2px solid var(--color-primary)',
                background: isSubmitting ? 'var(--color-border)' : 'var(--color-primary)',
                color: '#fff',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-body)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              {isSubmitting ? (
                <>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid #fff',
                    borderTop: '2px solid transparent',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }} />
                  {t('auth.processing', 'Processing...')}
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={isLogin ? faSignInAlt : faUserPlus} />
                  {isLogin ? t('auth.login', 'Login') : t('auth.signup', 'Sign Up')}
                </>
              )}
            </button>
          </form>

          <div style={{ 
            textAlign: 'center', 
            padding: '24px 0',
            borderTop: '1px solid var(--color-border)'
          }}>
            <p style={{
              fontSize: '1rem',
              color: 'var(--color-text)',
              marginBottom: '16px',
              fontFamily: 'var(--font-body)'
            }}>
              {isLogin 
                ? t('auth.noAccount', "Don't have an account?") 
                : t('auth.hasAccount', 'Already have an account?')
              }
            </p>
            <button 
              onClick={() => {
                setIsLogin(!isLogin);
                setFormData({ email: '', password: '', name: '' });
              }}
              style={{
                background: 'none',
                border: '2px solid var(--color-primary)',
                color: 'var(--color-primary)',
                padding: '12px 24px',
                borderRadius: 12,
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-body)'
              }}
            >
              {isLogin ? t('auth.signup', 'Sign Up') : t('auth.login', 'Login')}
            </button>
          </div>

          <div style={{ 
            textAlign: 'center', 
            paddingTop: '24px',
            borderTop: '1px solid var(--color-border)'
          }}>
            <Link 
              to="/" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-primary)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                transition: 'all 0.3s ease'
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              {t('auth.backHome', 'Back to Home')}
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Login; 