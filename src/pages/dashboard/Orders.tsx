import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faEye, 
  faTruck, 
  faCheck,
  faTimes,
  faClock,
  faFilter
} from '@fortawesome/free-solid-svg-icons';
import './Orders.css';

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [orders, setOrders] = useState([
    {
      id: '#ORD-001',
      customer: 'Sarah Johnson',
      email: 'sarah@email.com',
      products: ['Diamond Ring', 'Gold Necklace'],
      total: 499.98,
      status: 'completed',
      date: '2024-01-15',
      paymentMethod: 'Credit Card'
    },
    {
      id: '#ORD-002',
      customer: 'Mike Wilson',
      email: 'mike@email.com',
      products: ['Silver Bracelet'],
      total: 89.99,
      status: 'shipped',
      date: '2024-01-14',
      paymentMethod: 'PayPal'
    },
    {
      id: '#ORD-003',
      customer: 'Emily Davis',
      email: 'emily@email.com',
      products: ['Pearl Earrings', 'Ruby Pendant'],
      total: 299.98,
      status: 'processing',
      date: '2024-01-13',
      paymentMethod: 'Credit Card'
    },
    {
      id: '#ORD-004',
      customer: 'John Smith',
      email: 'john@email.com',
      products: ['Sapphire Ring'],
      total: 399.99,
      status: 'pending',
      date: '2024-01-12',
      paymentMethod: 'Bank Transfer'
    },
    {
      id: '#ORD-005',
      customer: 'Lisa Brown',
      email: 'lisa@email.com',
      products: ['Diamond Earrings'],
      total: 599.99,
      status: 'cancelled',
      date: '2024-01-11',
      paymentMethod: 'Credit Card'
    }
  ]);
  const [viewModal, setViewModal] = useState<{ open: boolean; order: any | null }>({ open: false, order: null });

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#2ecc71';
      case 'shipped':
        return '#3498db';
      case 'processing':
        return '#f39c12';
      case 'pending':
        return '#95a5a6';
      case 'cancelled':
        return '#e74c3c';
      default:
        return '#95a5a6';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return faCheck;
      case 'shipped':
        return faTruck;
      case 'processing':
        return faClock;
      case 'pending':
        return faClock;
      case 'cancelled':
        return faTimes;
      default:
        return faClock;
    }
  };

  const handleViewOrder = (order: any) => {
    setViewModal({ open: true, order });
  };

  const closeViewModal = () => {
    setViewModal({ open: false, order: null });
  };

  const handleProcessOrder = (id: string) => {
    setOrders(prev => prev.map(order => order.id === id ? { ...order, status: 'processing' } : order));
  };

  const handleShipOrder = (id: string) => {
    setOrders(prev => prev.map(order => order.id === id ? { ...order, status: 'shipped' } : order));
  };

  return (
    <div className="orders-management">
      {/* Header */}
      <div className="page-header">
        <div className="header-content">
          <h1>Order Management</h1>
          <p>Track and manage customer orders</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="filters-section">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="Search orders by ID, customer, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-controls">
          <div className="status-filter">
            <FontAwesomeIcon icon={faFilter} />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">All Orders</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="orders-table-container">
        <div className="table-header">
          <div className="table-cell">Order ID</div>
          <div className="table-cell">Customer</div>
          <div className="table-cell">Products</div>
          <div className="table-cell">Total</div>
          <div className="table-cell">Status</div>
          <div className="table-cell">Date</div>
          <div className="table-cell">Actions</div>
        </div>

        {filteredOrders.map((order) => (
          <div key={order.id} className="table-row">
            <div className="table-cell order-id">
              <strong>{order.id}</strong>
            </div>
            <div className="table-cell customer-info">
              <div className="customer-name">{order.customer}</div>
              <div className="customer-email">{order.email}</div>
            </div>
            <div className="table-cell products">
              {order.products.map((product, index) => (
                <div key={index} className="product-item">
                  {product}
                </div>
              ))}
            </div>
            <div className="table-cell total">
              ${order.total}
            </div>
            <div className="table-cell">
              <span 
                className="status-badge"
                style={{ backgroundColor: getStatusColor(order.status) }}
              >
                <FontAwesomeIcon icon={getStatusIcon(order.status)} />
                {order.status}
              </span>
            </div>
            <div className="table-cell date">
              {order.date}
            </div>
            <div className="table-cell actions">
              <button className="action-btn view" title="View Order" onClick={() => handleViewOrder(order)}>
                <FontAwesomeIcon icon={faEye} />
              </button>
              {order.status === 'pending' && (
                <button className="action-btn process" title="Process Order" onClick={() => handleProcessOrder(order.id)}>
                  <FontAwesomeIcon icon={faClock} />
                </button>
              )}
              {order.status === 'processing' && (
                <button className="action-btn ship" title="Ship Order" onClick={() => handleShipOrder(order.id)}>
                  <FontAwesomeIcon icon={faTruck} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <div className="empty-state">
          <FontAwesomeIcon icon={faSearch} />
          <h3>No orders found</h3>
          <p>There are no orders matching your current filters.</p>
        </div>
      )}

      {/* Order Details Modal */}
      {viewModal.open && viewModal.order && (
        <div className="modal-overlay">
          <div className="modal-content details-modal">
            <div className="details-modal-header">
              <h2>Order Details</h2>
              <button className="details-modal-close" onClick={closeViewModal}>&times;</button>
            </div>
            <div className="details-modal-body">
              <div className="details-modal-info">
                <div className="details-row"><span className="details-label">Order ID:</span> <span className="details-value">{viewModal.order.id}</span></div>
                <div className="details-row"><span className="details-label">Customer:</span> <span className="details-value">{viewModal.order.customer}</span></div>
                <div className="details-row"><span className="details-label">Email:</span> <span className="details-value">{viewModal.order.email}</span></div>
                <div className="details-row"><span className="details-label">Products:</span> <span className="details-value">{viewModal.order.products.join(', ')}</span></div>
                <div className="details-row"><span className="details-label">Total:</span> <span className="details-value">${viewModal.order.total}</span></div>
                <div className="details-row"><span className="details-label">Payment:</span> <span className="details-value">{viewModal.order.paymentMethod}</span></div>
                <div className="details-row"><span className="details-label">Status:</span> <span className="details-value status-badge" style={{backgroundColor: getStatusColor(viewModal.order.status), color: 'white', padding: '0.25rem 0.75rem', borderRadius: '12px'}}>{viewModal.order.status}</span></div>
                <div className="details-row"><span className="details-label">Date:</span> <span className="details-value">{viewModal.order.date}</span></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Order Statistics */}
      <div className="order-stats">
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#95a5a6' }}>
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{orders.filter(o => o.status === 'pending').length}</div>
            <div className="stat-label">Pending</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#f39c12' }}>
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{orders.filter(o => o.status === 'processing').length}</div>
            <div className="stat-label">Processing</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#3498db' }}>
            <FontAwesomeIcon icon={faTruck} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{orders.filter(o => o.status === 'shipped').length}</div>
            <div className="stat-label">Shipped</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#2ecc71' }}>
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{orders.filter(o => o.status === 'completed').length}</div>
            <div className="stat-label">Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders; 