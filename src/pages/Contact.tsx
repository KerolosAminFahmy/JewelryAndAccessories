import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert(t('contact.success', 'Message sent successfully!'));
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <h1>{t('contact.title', 'Contact Us')}</h1>
      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">{t('contact.name', 'Name')}:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">{t('contact.email', 'Email')}:</label>
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
            <label htmlFor="message">{t('contact.message', 'Message')}:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
            />
          </div>
          
          <button type="submit" className="submit-btn">
            {t('contact.send', 'Send Message')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 