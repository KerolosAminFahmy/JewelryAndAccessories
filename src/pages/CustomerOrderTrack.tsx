import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCheck, faTruck, faClock } from '@fortawesome/free-solid-svg-icons';
import './dashboard/Customers.css';

const initialOrders = [
  { id: 'ORD-101', product: 'Diamond Ring', status: 'approved', date: '2024-01-15' },
  { id: 'ORD-102', product: 'Gold Necklace', status: 'processing', date: '2024-01-14' },
  { id: 'ORD-103', product: 'Silver Bracelet', status: 'shipping', date: '2024-01-13' },
];

type Order = {
  id: string;
  product: string;
  status: string;
  date: string;
};

const CustomerOrderTrack = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [history, setHistory] = useState<Order[]>([]);

  const handleCompleteOrder = (id: string) => {
    const order = orders.find(o => o.id === id);
    if (order) {
      setOrders(orders.filter(o => o.id !== id));
      setHistory([{ ...order, status: 'completed', date: new Date().toISOString().slice(0, 10) }, ...history]);
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return '#2ecc71';
      case 'processing': return '#f39c12';
      case 'shipping': return '#3498db';
      default: return '#95a5a6';
    }
  };
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return faCheck;
      case 'processing': return faClock;
      case 'shipping': return faTruck;
      default: return faClock;
    }
  };
  return (
    <div className="customers-management" style={{ maxWidth: 700, margin: '2rem auto' }}>
      <div className="customer-card">
        <h3 style={{ color: 'var(--color-primary)', marginBottom: 16 }}>Track Your Orders</h3>
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
    </div>
  );
};

export default CustomerOrderTrack; 