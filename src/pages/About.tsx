import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faHandshake, 
  faPalette, 
  faGem,
  faCrown,
  faUsers,
  faChartLine,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import SectionHeader from '../components/SectionHeader';
import '../index.css';

const About = () => {
  const { t } = useTranslation();

  // Demo team data
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Founder & CEO',
      image: '/src/assets/collectionV1-img1.webp',
      description: 'Visionary leader with 15+ years in luxury retail'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Creative Director',
      image: '/src/assets/collectionV1-img2.webp',
      description: 'Award-winning designer with global experience'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      position: 'Head of Operations',
      image: '/src/assets/collectionV1-img3.webp',
      description: 'Expert in supply chain and customer experience'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Marketing Director',
      image: '/src/assets/collectionV1-img4.webp',
      description: 'Digital marketing strategist and brand expert'
    }
  ];

  // Demo statistics
  const stats = [
    { number: '15+', label: 'Years Experience', icon: faCrown },
    { number: '50K+', label: 'Happy Customers', icon: faUsers },
    { number: '200+', label: 'Luxury Products', icon: faGem },
    { number: '25+', label: 'Countries Served', icon: faGlobe }
  ];

  // Demo values
  const values = [
    {
      icon: faStar,
      title: 'Excellence',
      description: 'We strive for perfection in every detail, from product selection to customer service.'
    },
    {
      icon: faHandshake,
      title: 'Trust',
      description: 'Building lasting relationships through transparency and reliability.'
    },
    {
      icon: faPalette,
      title: 'Innovation',
      description: 'Continuously evolving to bring you the latest in luxury fashion and accessories.'
    },
    {
      icon: faGem,
      title: 'Quality',
      description: 'Curating only the finest materials and craftsmanship for our discerning clients.'
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
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/src/assets/slideshowV1-bg2.webp')`,
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
            {t('about.title', 'About Us')}
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
            {t('about.heroDescription', 'Crafting luxury experiences through timeless elegance and exceptional service since 2008.')}
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
            <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>About</span>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section style={{ padding: '80px 0', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <SectionHeader 
            title={t('about.ourStory', 'Our Story')}
            description={t('about.storyDescription', 'A journey of passion, innovation, and unwavering commitment to excellence')}
          />
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: 60, 
          alignItems: 'center',
          marginBottom: 80
        }}>
          <div>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--color-primary)',
              marginBottom: '24px',
              fontFamily: 'var(--font-title)'
            }}>
              {t('about.founded', 'Founded in 2008')}
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'var(--color-text)',
              marginBottom: '24px',
              fontFamily: 'var(--font-body)'
            }}>
              {t('about.storyText1', 'What began as a small boutique in the heart of the city has grown into a global destination for luxury fashion and accessories. Our founder, Sarah Johnson, envisioned a space where elegance meets accessibility, where every customer feels valued and every product tells a story.')}
            </p>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'var(--color-text)',
              fontFamily: 'var(--font-body)'
            }}>
              {t('about.storyText2', 'Today, we continue to honor that vision by curating collections that blend contemporary trends with timeless sophistication, serving discerning clients across 25+ countries worldwide.')}
            </p>
          </div>
          <div style={{
            background: 'var(--color-card-bg)',
            borderRadius: 20,
            padding: 24,
            boxShadow: 'var(--color-shadow)',
            border: '1px solid var(--color-border)'
          }}>
            <img 
              src="/src/assets/collectionV1-img5.webp" 
              alt="Our Story"
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: 12
              }}
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section style={{ 
        background: 'var(--color-card-bg)', 
        padding: '80px 0',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <SectionHeader 
              title={t('about.achievements', 'Our Achievements')}
              description={t('about.achievementsDescription', 'Numbers that tell our story of growth and success')}
            />
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: 40 
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '3rem',
                  color: 'var(--color-primary)',
                  marginBottom: '16px'
                }}>
                  <FontAwesomeIcon icon={stat.icon} />
                </div>
                <div style={{
                  fontSize: '3.5rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-title)'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '1.1rem',
                  color: 'var(--color-text)',
                  fontWeight: 500,
                  fontFamily: 'var(--font-body)'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section style={{ padding: '80px 0', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <SectionHeader 
            title={t('about.values', 'Our Values')}
            description={t('about.valuesDescription', 'The principles that guide everything we do')}
          />
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: 40 
        }}>
          {values.map((value, index) => (
            <div key={index} style={{
              background: 'var(--color-card-bg)',
              borderRadius: 20,
              padding: 40,
              textAlign: 'center',
              boxShadow: 'var(--color-shadow)',
              border: '1px solid var(--color-border)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '20px',
                color: 'var(--color-primary)'
              }}>
                <FontAwesomeIcon icon={value.icon} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--color-primary)',
                marginBottom: '16px',
                fontFamily: 'var(--font-title)'
              }}>
                {value.title}
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'var(--color-text)',
                fontFamily: 'var(--font-body)'
              }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section style={{ 
        background: 'var(--color-card-bg)', 
        padding: '80px 0',
        borderTop: '1px solid var(--color-border)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <SectionHeader 
              title={t('about.team', 'Meet Our Team')}
              description={t('about.teamDescription', 'The passionate individuals behind our success')}
            />
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: 40 
          }}>
            {teamMembers.map((member) => (
              <div key={member.id} style={{
                background: 'var(--color-bg)',
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: 'var(--color-shadow)',
                border: '1px solid var(--color-border)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  height: '250px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </div>
                <div style={{ padding: 24 }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    marginBottom: '8px',
                    fontFamily: 'var(--font-title)'
                  }}>
                    {member.name}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--color-primary-dark)',
                    fontWeight: 600,
                    marginBottom: '12px',
                    fontFamily: 'var(--font-body)'
                  }}>
                    {member.position}
                  </p>
                  <p style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-body)'
                  }}>
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: '80px 0', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          background: 'var(--color-card-bg)', 
          borderRadius: 20, 
          padding: 60,
          textAlign: 'center',
          boxShadow: 'var(--color-shadow)',
          border: '1px solid var(--color-border)'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: 'var(--color-primary)',
            marginBottom: '24px',
            fontFamily: 'var(--font-title)'
          }}>
            {t('about.mission', 'Our Mission')}
          </h2>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: 1.8,
            color: 'var(--color-text)',
            maxWidth: '800px',
            margin: '0 auto',
            fontFamily: 'var(--font-body)'
          }}>
            {t('about.missionText', 'To inspire confidence and celebrate individuality through curated luxury experiences, while maintaining the highest standards of quality, service, and ethical business practices. We believe that true luxury is not just about the products we offer, but about the relationships we build and the experiences we create.')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default About; 