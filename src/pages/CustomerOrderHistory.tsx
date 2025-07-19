import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import './dashboard/Customers.css';

const initialHistory = [
  { id: 'ORD-099', product: 'Pearl Earrings', status: 'completed', date: '2024-01-10' },
  { id: 'ORD-098', product: 'Ruby Pendant', status: 'cancelled', date: '2024-01-08' },
];

const CustomerOrderHistory = () => {
  const [history] = useState(initialHistory);
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#2ecc71';
      case 'cancelled': return '#e74c3c';
      default: return '#95a5a6';
    }
  };
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return faCheck;
      case 'cancelled': return faTimes;
      default: return faCheck;
    }
  };
  return (
    <div className="customers-management" style={{ maxWidth: 700, margin: '2rem auto' }}>
      <div className="customer-card">
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
    </div>
  );
};

export default CustomerOrderHistory; 