import React, { useState } from 'react';
import styles from './Countdown.module.css';
import main1 from '../assets/25.webp';

function useCountdownTimer(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);
  
  return timeLeft;
}

const Countdown = () => {
  // Website launch countdown (2 weeks from now) - use useMemo to prevent recreation on every render
  const websiteLaunchDate = React.useMemo(() => {
 
    return new Date(1751675105445 + 1000 * 60 * 60 * 24 * 14); // 14 days
  }, []);
  
  const countdownTimer = useCountdownTimer(websiteLaunchDate);

  return (
    <div className={styles.countdownPage}>
      <div className={styles.countdownContainer}>
        <div className={styles.countdownContent}>
          {/* Header Section */}
          <div className={styles.countdownHeader}>
            <div className={styles.logoSection}>
              <img src={main1} alt="Logo" className={styles.countdownLogo} />
              <h1 className={styles.brandName}>Elegant Home</h1>
            </div>
            <h2 className={styles.countdownTitle}>Something Beautiful is Coming</h2>
            <p className={styles.countdownSubtitle}>
              We're crafting an extraordinary experience for you. 
              Our new collection will be available soon.
            </p>
          </div>
          
          {/* Countdown Timer */}
          {countdownTimer && (
            <div className={styles.countdownTimer}>
              <div className={styles.countdownBox}>
                <span className={styles.countdownNumber}>{countdownTimer.days.toString().padStart(2, '0')}</span>
                <span className={styles.countdownLabel}>Days</span>
              </div>
              <span className={styles.countdownSeparator}>:</span>
              <div className={styles.countdownBox}>
                <span className={styles.countdownNumber}>{countdownTimer.hours.toString().padStart(2, '0')}</span>
                <span className={styles.countdownLabel}>Hours</span>
              </div>
              <span className={styles.countdownSeparator}>:</span>
              <div className={styles.countdownBox}>
                <span className={styles.countdownNumber}>{countdownTimer.minutes.toString().padStart(2, '0')}</span>
                <span className={styles.countdownLabel}>Minutes</span>
              </div>
              <span className={styles.countdownSeparator}>:</span>
              <div className={styles.countdownBox}>
                <span className={styles.countdownNumber}>{countdownTimer.seconds.toString().padStart(2, '0')}</span>
                <span className={styles.countdownLabel}>Seconds</span>
              </div>
            </div>
          )}
          
          {/* Features Section */}
          <div className={styles.countdownFeatures}>
            <div className={styles.featureItem}>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>Premium Quality</span>
            </div>
            <div className={styles.featureItem}>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Exclusive Designs</span>
            </div>
            <div className={styles.featureItem}>
              <svg className={styles.featureIcon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>Free Shipping</span>
            </div>
          </div>
          
          {/* Actions Section */}
          <div className={styles.countdownActions}>
            <button className={styles.enterButton}>
              Enter Site
            </button>
            <div className={styles.socialLinks}>
              <span>Follow us for updates:</span>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown; 