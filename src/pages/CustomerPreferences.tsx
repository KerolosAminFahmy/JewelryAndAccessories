import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import './dashboard/Customers.css';

const CustomerPreferences = () => {
  const [preferences, setPreferences] = useState({
    notifications: true,
    payment: 'Credit Card',
  });
  const handlePrefChange = (field: string, value: any) => {
    setPreferences(prev => ({ ...prev, [field]: value }));
  };
  return (
    <div className="customers-management" style={{ maxWidth: 600, margin: '2rem auto' }}>
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

export default CustomerPreferences; 