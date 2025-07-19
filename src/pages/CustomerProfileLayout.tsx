import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faBoxOpen, faHistory, faCogs } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout';
import './dashboard/Customers.css';

const user = {
  name: 'Sarah Johnson',
  email: 'sarah@email.com',
  avatar: '/src/assets/logo.jpg',
};

const links = [
  {
    to: '/profile/edit',
    icon: faUserEdit,
    label: 'Edit Profile',
  },
  {
    to: '/profile/orders',
    icon: faBoxOpen,
    label: 'Track Orders',
  },
  {
    to: '/profile/history',
    icon: faHistory,
    label: 'Order History',
  },
  {
    to: '/profile/preferences',
    icon: faCogs,
    label: 'Preferences',
  },
];

const CustomerProfileLayout = () => {
  const location = useLocation();
  return (
    <Layout>
      <div style={{ display: 'flex', minHeight: '70vh', background: 'var(--color-bg, #f8fafc)' }}>
        <aside style={{
          minWidth: 230,
          background: 'var(--color-card-bg, #fff)',
          borderRight: '1px solid var(--color-border, #eee)',
          padding: '1.5rem 0.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          boxShadow: '0 2px 8px rgba(191, 164, 109, 0.05)',
        }}>
          {/* Profile summary card */}
          <div style={{
            background: 'linear-gradient(135deg, #f8fafc 60%, #f3e9d2 100%)',
            borderRadius: 16,
            boxShadow: '0 2px 8px rgba(191, 164, 109, 0.08)',
            padding: '1.25rem 1rem',
            textAlign: 'center',
            marginBottom: '0.5rem',
          }}>
            <img src={user.avatar} alt={user.name} style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', marginBottom: 12, border: '2px solid var(--color-primary, #bfa46d)' }} />
            <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '1.08rem', marginBottom: 2 }}>{user.name}</div>
            <div style={{ color: 'var(--color-text)', fontSize: '0.93rem', opacity: 0.8 }}>{user.email}</div>
          </div>
          <div style={{ marginBottom: 8, color: 'var(--color-primary)', fontWeight: 600, fontSize: '1.05rem', textAlign: 'center', letterSpacing: 0.5 }}>My Profile</div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '0.5rem 0.75rem',
                  borderRadius: 8,
                  color: location.pathname === link.to ? 'var(--color-primary)' : 'var(--color-text, #333)',
                  background: location.pathname === link.to ? 'rgba(191, 164, 109, 0.10)' : 'transparent',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.98rem',
                  transition: 'background 0.2s, color 0.2s',
                  marginBottom: 2,
                }}
              >
                <FontAwesomeIcon icon={link.icon} style={{ fontSize: 18 }} />
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main style={{ flex: 1, padding: '1.5rem 0.5rem', minHeight: '70vh', maxWidth: 900, margin: '0 auto' }}>
          <Outlet />
        </main>
      </div>
    </Layout>
  );
};

export default CustomerProfileLayout; 