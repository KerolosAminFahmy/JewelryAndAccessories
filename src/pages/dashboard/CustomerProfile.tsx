import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit, faSave, faTimes, faEnvelope, faPhone, faMapMarkerAlt, faBox, faCheck, faTruck, faClock, faUserCog, faBell, faCreditCard
} from '@fortawesome/free-solid-svg-icons';
import './Customers.css';

const initialProfile = {
  name: 'Sarah Johnson',
  email: 'sarah@email.com',
  phone: '+1 (555) 123-4567',
  address: '123 Main St, New York, NY',
  avatar: '/src/assets/logo.png',
};

const initialOrders = [
  { id: 'ORD-101', product: 'Diamond Ring', status: 'approved', date: '2024-01-15' },
  { id: 'ORD-102', product: 'Gold Necklace', status: 'processing', date: '2024-01-14' },
  { id: 'ORD-103', product: 'Silver Bracelet', status: 'shipping', date: '2024-01-13' },
];

const initialHistory = [
  { id: 'ORD-099', product: 'Pearl Earrings', status: 'completed', date: '2024-01-10' },
  { id: 'ORD-098', product: 'Ruby Pendant', status: 'cancelled', date: '2024-01-08' },
];

const CustomerProfile = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [editMode, setEditMode] = useState(false);
  const [editProfile, setEditProfile] = useState(profile);
  const [orders, setOrders] = useState(initialOrders);
  const [history, setHistory] = useState(initialHistory);
  const [preferences, setPreferences] = useState({
    notifications: true,
    payment: 'Credit Card',
  });

  const handleEdit = () => {
    setEditProfile(profile);
    setEditMode(true);
  };
  const handleCancel = () => setEditMode(false);
  const handleSave = () => {
    setProfile(editProfile);
    setEditMode(false);
  };
  const handleProfileChange = (field: string, value: string) => {
    setEditProfile(prev => ({ ...prev, [field]: value }));
  };
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setEditProfile(prev => ({ ...prev, avatar: url }));
    }
  };
  const handleCompleteOrder = (id: string) => {
    const order = orders.find(o => o.id === id);
    if (order) {
      setOrders(orders.filter(o => o.id !== id));
      setHistory([{ ...order, status: 'completed', date: new Date().toISOString().slice(0, 10) }, ...history]);
    }
  };
  const handlePrefChange = (field: string, value: any) => {
    setPreferences(prev => ({ ...prev, [field]: value }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return '#2ecc71';
      case 'processing': return '#f39c12';
      case 'shipping': return '#3498db';
      case 'completed': return '#2ecc71';
      case 'cancelled': return '#e74c3c';
      default: return '#95a5a6';
    }
  };
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return faCheck;
      case 'processing': return faClock;
      case 'shipping': return faTruck;
      case 'completed': return faCheck;
      case 'cancelled': return faTimes;
      default: return faClock;
    }
  };

  return (
    <div className="customers-management" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="customer-card" style={{ marginBottom: '2rem' }}>
        <div className="customer-header">
          <div className="customer-avatar" style={{ position: 'relative' }}>
            <img src={editMode ? editProfile.avatar : profile.avatar} alt={profile.name} />
            {editMode && (
              <input type="file" accept="image/*" onChange={handleAvatarChange} style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }} />
            )}
          </div>
          <div className="customer-info">
            {editMode ? (
              <input className="details-value" value={editProfile.name} onChange={e => handleProfileChange('name', e.target.value)} style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: 8 }} />
            ) : (
              <h3>{profile.name}</h3>
            )}
            <div className="customer-rating" style={{ marginBottom: 8 }}>
              <FontAwesomeIcon icon={faUserCog} style={{ color: 'var(--color-primary)' }} />
              <span className="rating-value" style={{ marginLeft: 8 }}>Customer Profile</span>
            </div>
            {editMode ? (
              <input className="details-value" value={editProfile.email} disabled style={{ marginBottom: 8 }} />
            ) : (
              <div className="contact-item"><FontAwesomeIcon icon={faEnvelope} /> <span>{profile.email}</span></div>
            )}
            {editMode ? (
              <input className="details-value" value={editProfile.phone} onChange={e => handleProfileChange('phone', e.target.value)} style={{ marginBottom: 8 }} />
            ) : (
              <div className="contact-item"><FontAwesomeIcon icon={faPhone} /> <span>{profile.phone}</span></div>
            )}
            {editMode ? (
              <input className="details-value" value={editProfile.address} onChange={e => handleProfileChange('address', e.target.value)} style={{ marginBottom: 8 }} />
            ) : (
              <div className="contact-item"><FontAwesomeIcon icon={faMapMarkerAlt} /> <span>{profile.address}</span></div>
            )}
          </div>
          <div className="customer-actions">
            {editMode ? (
              <>
                <button className="action-btn" style={{ background: '#2ecc71' }} onClick={handleSave}><FontAwesomeIcon icon={faSave} /></button>
                <button className="action-btn" style={{ background: '#e74c3c' }} onClick={handleCancel}><FontAwesomeIcon icon={faTimes} /></button>
              </>
            ) : (
              <button className="action-btn edit" title="Edit Profile" onClick={handleEdit}><FontAwesomeIcon icon={faEdit} /></button>
            )}
          </div>
        </div>
      </div>

      {/* Current Orders */}
      <div className="customer-card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: 'var(--color-primary)', marginBottom: 16 }}>Current Orders</h3>
        {orders.length === 0 ? (
          <div className="empty-state" style={{ padding: '2rem' }}>
            <FontAwesomeIcon icon={faBox} />
            <h3>No current orders</h3>
          </div>
        ) : (
          <div className="customers-grid" style={{ gridTemplateColumns: '1fr' }}>
            {orders.map(order => (
              <div key={order.id} className="customer-card" style={{ marginBottom: 0, boxShadow: 'none', border: '1px solid var(--color-border)' }}>
                <div className="customer-header" style={{ alignItems: 'center', marginBottom: 0 }}>
                  <div className="customer-info" style={{ flex: 1 }}>
                    <div className="details-row"><span className="details-label">Order ID:</span> <span className="details-value">{order.id}</span></div>
                    <div className="details-row"><span className="details-label">Product:</span> <span className="details-value">{order.product}</span></div>
                    <div className="details-row"><span className="details-label">Date:</span> <span className="details-value">{order.date}</span></div>
                  </div>
                  <div className="details-row" style={{ flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                    <span className="status-badge" style={{ backgroundColor: getStatusColor(order.status) }}>
                      <FontAwesomeIcon icon={getStatusIcon(order.status)} /> {order.status}
                    </span>
                    <button className="action-btn" style={{ background: '#2ecc71', marginTop: 8 }} onClick={() => handleCompleteOrder(order.id)}>Complete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Order History */}
      <div className="customer-card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: 'var(--color-primary)', marginBottom: 16 }}>Order History</h3>
        {history.length === 0 ? (
          <div className="empty-state" style={{ padding: '2rem' }}>
            <FontAwesomeIcon icon={faBox} />
            <h3>No order history</h3>
          </div>
        ) : (
          <div className="customers-grid" style={{ gridTemplateColumns: '1fr' }}>
            {history.map(order => (
              <div key={order.id} className="customer-card" style={{ marginBottom: 0, boxShadow: 'none', border: '1px solid var(--color-border)' }}>
                <div className="customer-header" style={{ alignItems: 'center', marginBottom: 0 }}>
                  <div className="customer-info" style={{ flex: 1 }}>
                    <div className="details-row"><span className="details-label">Order ID:</span> <span className="details-value">{order.id}</span></div>
                    <div className="details-row"><span className="details-label">Product:</span> <span className="details-value">{order.product}</span></div>
                    <div className="details-row"><span className="details-label">Date:</span> <span className="details-value">{order.date}</span></div>
                  </div>
                  <div className="details-row" style={{ flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                    <span className="status-badge" style={{ backgroundColor: getStatusColor(order.status) }}>
                      <FontAwesomeIcon icon={getStatusIcon(order.status)} /> {order.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Preferences */}
      <div className="customer-card">
        <h3 style={{ color: 'var(--color-primary)', marginBottom: 16 }}>Preferences</h3>
        <div className="details-row">
          <span className="details-label"><FontAwesomeIcon icon={faBell} /> Notifications:</span>
          <span className="details-value">
            <input type="checkbox" checked={preferences.notifications} onChange={e => handlePrefChange('notifications', e.target.checked)} />
            <span style={{ marginLeft: 8 }}>{preferences.notifications ? 'Enabled' : 'Disabled'}</span>
          </span>
        </div>
        <div className="details-row">
          <span className="details-label"><FontAwesomeIcon icon={faCreditCard} /> Payment Method:</span>
          <span className="details-value">
            <select value={preferences.payment} onChange={e => handlePrefChange('payment', e.target.value)}>
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile; 