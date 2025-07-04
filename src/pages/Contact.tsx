import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock,
  faPaperPlane,
  faHourglassHalf,
  faMap,
  faCheckCircle,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import SectionHeader from '../components/SectionHeader';
import '../index.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: faMapMarkerAlt,
      title: 'Visit Us',
      details: ['123 Luxury Avenue', 'New York, NY 10001', 'United States'],
      action: 'Get Directions'
    },
    {
      icon: faPhone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      action: 'Call Now'
    },
    {
      icon: faEnvelope,
      title: 'Email Us',
      details: ['info@luxurybrand.com', 'support@luxurybrand.com'],
      action: 'Send Email'
    },
    {
      icon: faClock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9:00 AM - 8:00 PM', 'Sat: 10:00 AM - 6:00 PM', 'Sun: 12:00 PM - 5:00 PM'],
      action: 'Book Appointment'
    }
  ];

  return (
    <div style={{ background: 'var(--color-bg)' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/src/assets/slideshowV1-bg1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        marginBottom: 80
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
          maxWidth: '900px',
          padding: '0 24px'
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '24px',
            fontFamily: 'var(--font-title)',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            letterSpacing: '0.02em'
          }}>
            {t('contact.title', 'Contact Us')}
          </h1>
          <p style={{
            fontSize: '1.4rem',
            color: '#fff',
            marginBottom: '32px',
            fontFamily: 'var(--font-body)',
            lineHeight: 1.6,
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            opacity: 0.95
          }}>
            {t('contact.heroDescription', 'Get in touch with our team. We\'re here to help and answer any questions you may have.')}
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            fontSize: '1rem',
            color: '#fff',
            opacity: 0.9
          }}>
            <span>Home</span>
            <span style={{ color: 'var(--color-primary)' }}>/</span>
            <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section style={{ padding: '80px 0', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <SectionHeader 
            title={t('contact.getInTouch', 'Get In Touch')}
            description={t('contact.getInTouchDescription', 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.')}
          />
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: 32,
          marginBottom: 80
        }}>
          {contactInfo.map((info, index) => (
            <div key={index} style={{
              background: 'var(--color-card-bg)',
              borderRadius: 20,
              padding: 32,
              textAlign: 'center',
              boxShadow: 'var(--color-shadow)',
              border: '1px solid var(--color-border)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '20px',
                color: 'var(--color-primary)'
              }}>
                <FontAwesomeIcon icon={info.icon} />
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--color-primary)',
                marginBottom: '16px',
                fontFamily: 'var(--font-title)'
              }}>
                {info.title}
              </h3>
              <div style={{ marginBottom: '20px' }}>
                {info.details.map((detail, idx) => (
                  <p key={idx} style={{
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    marginBottom: '4px',
                    fontFamily: 'var(--font-body)'
                  }}>
                    {detail}
                  </p>
                ))}
              </div>
              <button style={{
                background: 'var(--color-primary)',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: 12,
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-body)'
              }}>
                {info.action}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ 
        background: 'var(--color-card-bg)', 
        padding: '80px 0',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <SectionHeader 
              title={t('contact.sendMessage', 'Send Us a Message')}
              description={t('contact.sendMessageDescription', 'Fill out the form below and we\'ll get back to you within 24 hours.')}
            />
          </div>
          
          <form onSubmit={handleSubmit} style={{
            background: 'var(--color-bg)',
            borderRadius: 20,
            padding: 48,
            boxShadow: 'var(--color-shadow)',
            border: '1px solid var(--color-border)'
          }}>
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div style={{
                background: 'rgba(34, 197, 94, 0.1)',
                border: '2px solid #22c55e',
                borderRadius: 12,
                padding: '16px 20px',
                marginBottom: 24,
                color: '#22c55e',
                fontWeight: 600,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <FontAwesomeIcon icon={faCheckCircle} />
                {t('contact.successMessage', 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.')}
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '2px solid #ef4444',
                borderRadius: 12,
                padding: '16px 20px',
                marginBottom: 24,
                color: '#ef4444',
                fontWeight: 600,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                {t('contact.errorMessage', 'Something went wrong. Please try again or contact us directly.')}
              </div>
            )}

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: 24,
              marginBottom: 24
            }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-body)'
                }}>
                  {t('contact.name', 'Full Name')} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 12,
                    border: '2px solid var(--color-border)',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)',
                    background: 'var(--color-bg)',
                    color: 'var(--color-text)',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder={t('contact.namePlaceholder', 'Enter your full name')}
                />
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-body)'
                }}>
                  {t('contact.email', 'Email Address')} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 12,
                    border: '2px solid var(--color-border)',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)',
                    background: 'var(--color-bg)',
                    color: 'var(--color-text)',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder={t('contact.emailPlaceholder', 'Enter your email address')}
                />
              </div>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: 24,
              marginBottom: 24
            }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-body)'
                }}>
                  {t('contact.phone', 'Phone Number')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 12,
                    border: '2px solid var(--color-border)',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)',
                    background: 'var(--color-bg)',
                    color: 'var(--color-text)',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder={t('contact.phonePlaceholder', 'Enter your phone number')}
                />
              </div>
              
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-body)'
                }}>
                  {t('contact.subject', 'Subject')} *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 12,
                    border: '2px solid var(--color-border)',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-body)',
                    background: 'var(--color-bg)',
                    color: 'var(--color-text)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <option value="">{t('contact.selectSubject', 'Select a subject')}</option>
                  <option value="general">{t('contact.general', 'General Inquiry')}</option>
                  <option value="support">{t('contact.support', 'Customer Support')}</option>
                  <option value="sales">{t('contact.sales', 'Sales Question')}</option>
                  <option value="partnership">{t('contact.partnership', 'Partnership')}</option>
                  <option value="other">{t('contact.other', 'Other')}</option>
                </select>
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
                {t('contact.message', 'Message')} *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: 12,
                  border: '2px solid var(--color-border)',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-body)',
                  background: 'var(--color-bg)',
                  color: 'var(--color-text)',
                  transition: 'all 0.3s ease',
                  resize: 'vertical'
                }}
                placeholder={t('contact.messagePlaceholder', 'Tell us how we can help you...')}
              />
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
                  <FontAwesomeIcon icon={faHourglassHalf} />
                  {t('contact.sending', 'Sending...')}
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  {t('contact.send', 'Send Message')}
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ padding: '80px 0', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <SectionHeader 
            title={t('contact.findUs', 'Find Us')}
            description={t('contact.findUsDescription', 'Visit our flagship store in the heart of New York City')}
          />
        </div>
        
        <div style={{
          background: 'var(--color-card-bg)',
          borderRadius: 20,
          padding: 24,
          boxShadow: 'var(--color-shadow)',
          border: '1px solid var(--color-border)',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          color: 'var(--color-primary)',
          fontWeight: 600,
          gap: '12px'
        }}>
          <FontAwesomeIcon icon={faMap} style={{ fontSize: '1.5rem' }} />
          {t('contact.mapPlaceholder', 'Interactive Map - 123 Luxury Avenue, New York, NY 10001')}
        </div>
      </section>
    </div>
  );
};

export default Contact; 