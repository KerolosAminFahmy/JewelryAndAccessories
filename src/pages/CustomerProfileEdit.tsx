import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTimes, faEnvelope, faPhone, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import './dashboard/Customers.css';

const initialProfile = {
  name: 'Sarah Johnson',
  email: 'sarah@email.com',
  phone: '+1 (555) 123-4567',
  address: '123 Main St, New York, NY',
  avatar: '/src/assets/logo.jpg',
};

const CustomerProfileEdit = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [editProfile, setEditProfile] = useState(profile);

  const handleProfileChange = (field: string, value: string) => {
    setEditProfile(prev => ({ ...prev, [field]: value }));
  };
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setEditProfile(prev => ({ ...prev, avatar: url }));
    }
  };
  const handleSave = () => {
    setProfile(editProfile);
    // In real app, send to API
    alert('Profile updated!');
  };
  const handleCancel = () => {
    setEditProfile(profile);
  };

  return (
    <div style={{ maxWidth: 520, margin: '0 auto' }}>
      <div style={{
        background: 'linear-gradient(135deg, #f8fafc 60%, #f3e9d2 100%)',
        borderRadius: 18,
        boxShadow: '0 2px 12px rgba(191, 164, 109, 0.10)',
        padding: '2.5rem 2rem 2rem 2rem',
        marginBottom: 32,
      }}>
        <h2 style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '1.35rem', marginBottom: 8 }}>Edit Profile</h2>
        <div style={{ height: 2, background: 'var(--color-border, #eee)', borderRadius: 2, margin: '0 0 1.5rem 0', opacity: 0.5 }} />
        <div className="customer-header" style={{ gap: 24 }}>
          <div className="customer-avatar" style={{ position: 'relative', marginRight: 24 }}>
            <img src={editProfile.avatar} alt={editProfile.name} style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-primary, #bfa46d)' }} />
            <input type="file" accept="image/*" onChange={handleAvatarChange} style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }} />
          </div>
          <div className="customer-info" style={{ flex: 1 }}>
            <input className="details-value" value={editProfile.name} onChange={e => handleProfileChange('name', e.target.value)} style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: 12, background: '#fff', border: '1px solid var(--color-border, #eee)', borderRadius: 8, padding: '0.5rem 1rem' }} />
            <div className="customer-rating" style={{ marginBottom: 12 }}>
              <FontAwesomeIcon icon={faUser} style={{ color: 'var(--color-primary)' }} />
              <span className="rating-value" style={{ marginLeft: 8 }}>Edit Profile</span>
            </div>
            <input className="details-value" value={editProfile.email} disabled style={{ marginBottom: 12, background: '#f8fafc', border: '1px solid var(--color-border, #eee)', borderRadius: 8, padding: '0.5rem 1rem' }} />
            <input className="details-value" value={editProfile.phone} onChange={e => handleProfileChange('phone', e.target.value)} style={{ marginBottom: 12, background: '#fff', border: '1px solid var(--color-border, #eee)', borderRadius: 8, padding: '0.5rem 1rem' }} />
            <input className="details-value" value={editProfile.address} onChange={e => handleProfileChange('address', e.target.value)} style={{ marginBottom: 12, background: '#fff', border: '1px solid var(--color-border, #eee)', borderRadius: 8, padding: '0.5rem 1rem' }} />
          </div>
          <div className="customer-actions" style={{ flexDirection: 'column', gap: 8, marginLeft: 12 }}>
            <button className="action-btn" style={{ background: '#2ecc71', marginBottom: 4 }} onClick={handleSave}><FontAwesomeIcon icon={faSave} /></button>
            <button className="action-btn" style={{ background: '#e74c3c' }} onClick={handleCancel}><FontAwesomeIcon icon={faTimes} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfileEdit; 