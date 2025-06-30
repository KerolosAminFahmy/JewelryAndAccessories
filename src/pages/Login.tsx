import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log(`${isLogin ? 'Login' : 'Signup'} attempt:`, formData);
    alert(t('auth.success', `${isLogin ? 'Login' : 'Signup'} successful!`));
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>{isLogin ? t('auth.login', 'Login') : t('auth.signup', 'Sign Up')}</h1>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">{t('auth.email', 'Email')}:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">{t('auth.password', 'Password')}:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="auth-btn">
            {isLogin ? t('auth.login', 'Login') : t('auth.signup', 'Sign Up')}
          </button>
        </form>

        <div className="auth-switch">
          <p>
            {isLogin 
              ? t('auth.noAccount', "Don't have an account?") 
              : t('auth.hasAccount', 'Already have an account?')
            }
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="switch-btn"
            >
              {isLogin ? t('auth.signup', 'Sign Up') : t('auth.login', 'Login')}
            </button>
          </p>
        </div>

        <div className="auth-links">
          <Link to="/" className="back-link">
            {t('auth.backHome', 'Back to Home')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login; 