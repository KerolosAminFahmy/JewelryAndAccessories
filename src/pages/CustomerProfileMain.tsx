import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faBoxOpen, faHistory, faCogs } from '@fortawesome/free-solid-svg-icons';
import './dashboard/Customers.css';

const links = [
  {
    to: '/profile/edit',
    icon: faUserEdit,
    title: 'Edit Profile',
    desc: 'Update your personal information and contact details.'
  },
  {
    to: '/profile/orders',
    icon: faBoxOpen,
    title: 'Track Orders',
    desc: 'View and track your current orders.'
  },
  {
    to: '/profile/history',
    icon: faHistory,
    title: 'Order History',
    desc: 'See your completed and cancelled orders.'
  },
  {
    to: '/profile/preferences',
    icon: faCogs,
    title: 'Preferences',
    desc: 'Manage your notification and payment settings.'
  }
];

const CustomerProfileMain = () => (
  <div className="customers-management" style={{ maxWidth: 700, margin: '2rem auto' }}>
    <div className="customer-card" style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h2 style={{ color: 'var(--color-primary)', marginBottom: 8 }}>My Profile</h2>
      <p style={{ color: 'var(--color-text)', opacity: 0.8, marginBottom: 0 }}>Welcome! Manage your account and orders below.</p>
    </div>
    <div className="customers-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
      {links.map(link => (
        <Link to={link.to} key={link.to} style={{ textDecoration: 'none' }}>
          <div className="customer-card" style={{ minHeight: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', transition: 'box-shadow 0.2s' }}>
            <FontAwesomeIcon icon={link.icon} style={{ fontSize: 36, color: 'var(--color-primary)', marginBottom: 16 }} />
            <h3 style={{ color: 'var(--color-primary)', marginBottom: 8 }}>{link.title}</h3>
            <p style={{ color: 'var(--color-text)', opacity: 0.8 }}>{link.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default CustomerProfileMain; 