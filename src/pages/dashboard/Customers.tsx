import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faEye, 
  faBan, 
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faUser,
  faFilter,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import './Customers.css';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [viewModal, setViewModal] = useState<{ open: boolean; customer: any | null }>({ open: false, customer: null });
  const [blockModal, setBlockModal] = useState<{ open: boolean; customer: any | null }>({ open: false, customer: null });
  const [ordersModal, setOrdersModal] = useState<{ open: boolean; customer: any | null }>({ open: false, customer: null });

  const customers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@email.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      totalOrders: 5,
      totalSpent: 1249.95,
      lastOrder: '2024-01-15',
      status: 'active',
      avatar: '/src/assets/logo.png',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Mike Wilson',
      email: 'mike@email.com',
      phone: '+1 (555) 234-5678',
      location: 'Los Angeles, CA',
      totalOrders: 3,
      totalSpent: 589.97,
      lastOrder: '2024-01-14',
      status: 'active',
      avatar: '/src/assets/logo.png',
      rating: 4.5
    },
    {
      id: 3,
      name: 'Emily Davis',
      email: 'emily@email.com',
      phone: '+1 (555) 345-6789',
      location: 'Chicago, IL',
      totalOrders: 8,
      totalSpent: 2199.92,
      lastOrder: '2024-01-13',
      status: 'active',
      avatar: '/src/assets/logo.png',
      rating: 4.9
    },
    {
      id: 4,
      name: 'John Smith',
      email: 'john@email.com',
      phone: '+1 (555) 456-7890',
      location: 'Houston, TX',
      totalOrders: 2,
      totalSpent: 399.98,
      lastOrder: '2024-01-12',
      status: 'inactive',
      avatar: '/src/assets/logo.png',
      rating: 4.2
    },
    {
      id: 5,
      name: 'Lisa Brown',
      email: 'lisa@email.com',
      phone: '+1 (555) 567-8901',
      location: 'Phoenix, AZ',
      totalOrders: 1,
      totalSpent: 599.99,
      lastOrder: '2024-01-11',
      status: 'active',
      avatar: '/src/assets/logo.png',
      rating: 4.7
    }
  ];

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = 
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm);
    const matchesStatus = selectedStatus === 'all' || customer.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return '#2ecc71';
      case 'inactive':
        return '#95a5a6';
      default:
        return '#95a5a6';
    }
  };

  // Handlers for actions
  const handleViewProfile = (customer: any) => {
    setViewModal({ open: true, customer });
  };
  const handleBlockCustomer = (customer: any) => {
    setBlockModal({ open: true, customer });
  };
  const handleSendEmail = (customer: any) => {
    window.location.href = `mailto:${customer.email}`;
  };
  const handleViewOrders = (customer: any) => {
    setOrdersModal({ open: true, customer });
  };
  const closeViewModal = () => setViewModal({ open: false, customer: null });
  const closeBlockModal = () => setBlockModal({ open: false, customer: null });
  const closeOrdersModal = () => setOrdersModal({ open: false, customer: null });
  const handleBlockConfirm = () => {
    // For demo, just alert. In real app, update state or send to API.
    alert(`User ${blockModal.customer.name} has been blocked.`);
    closeBlockModal();
  };

  return (
    <div className="customers-management">
      {/* Header */}
      <div className="page-header">
        <div className="header-content">
          <h1>Customer Management</h1>
          <p>Manage customer profiles and view customer analytics</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="filters-section">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="Search customers by name, email, or phone..."
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
              <option value="all">All Customers</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Customers Grid */}
      <div className="customers-grid">
        {filteredCustomers.map((customer) => (
          <div key={customer.id} className="customer-card">
            <div className="customer-header">
              <div className="customer-avatar">
                <img src={customer.avatar} alt={customer.name} />
                <span 
                  className="status-indicator"
                  style={{ backgroundColor: getStatusColor(customer.status) }}
                />
              </div>
              <div className="customer-info">
                <h3>{customer.name}</h3>
                <div className="customer-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon 
                        key={i}
                        icon={faStar} 
                        className={i < Math.floor(customer.rating) ? 'star filled' : 'star'}
                      />
                    ))}
                  </div>
                  <span className="rating-value">({customer.rating})</span>
                </div>
              </div>
              <div className="customer-actions">
                <button className="action-btn view" title="View Profile" onClick={() => handleViewProfile(customer)}>
                  <FontAwesomeIcon icon={faEye} />
                </button>
                <button className="action-btn block" title="Block User" onClick={() => handleBlockCustomer(customer)}>
                  <FontAwesomeIcon icon={faBan} />
                </button>
                <button className="action-btn email" title="Send Email" onClick={() => handleSendEmail(customer)}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </button>
              </div>
            </div>

            <div className="customer-details">
              <div className="contact-info">
                <div className="contact-item">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>{customer.email}</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>{customer.phone}</span>
                </div>
                <div className="contact-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>{customer.location}</span>
                </div>
              </div>

              <div className="customer-stats">
                <div className="stat-item">
                  <div className="stat-value">{customer.totalOrders}</div>
                  <div className="stat-label">Orders</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">${customer.totalSpent}</div>
                  <div className="stat-label">Total Spent</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{customer.lastOrder}</div>
                  <div className="stat-label">Last Order</div>
                </div>
              </div>
            </div>

            <div className="customer-footer">
              <span 
                className="status-badge"
                style={{ backgroundColor: getStatusColor(customer.status) }}
              >
                {customer.status}
              </span>
              <button className="view-orders-btn" onClick={() => handleViewOrders(customer)}>
                View Orders
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredCustomers.length === 0 && (
        <div className="empty-state">
          <FontAwesomeIcon icon={faUser} />
          <h3>No customers found</h3>
          <p>There are no customers matching your current filters.</p>
        </div>
      )}

      {/* View Profile Modal */}
      {viewModal.open && viewModal.customer && (
        <div className="modal-overlay">
          <div className="modal-content details-modal">
            <div className="details-modal-header">
              <h2>Customer Profile</h2>
              <button className="details-modal-close" onClick={closeViewModal}>&times;</button>
            </div>
            <div className="details-modal-body">
              <div className="details-modal-image">
                <img src={viewModal.customer.avatar} alt={viewModal.customer.name} />
              </div>
              <div className="details-modal-info">
                <div className="details-row"><span className="details-label">Name:</span> <span className="details-value">{viewModal.customer.name}</span></div>
                <div className="details-row"><span className="details-label">Email:</span> <span className="details-value">{viewModal.customer.email}</span></div>
                <div className="details-row"><span className="details-label">Phone:</span> <span className="details-value">{viewModal.customer.phone}</span></div>
                <div className="details-row"><span className="details-label">Location:</span> <span className="details-value">{viewModal.customer.location}</span></div>
                <div className="details-row"><span className="details-label">Status:</span> <span className="details-value status-badge" style={{backgroundColor: getStatusColor(viewModal.customer.status), color: 'white', padding: '0.25rem 0.75rem', borderRadius: '12px'}}>{viewModal.customer.status}</span></div>
                <div className="details-row"><span className="details-label">Total Orders:</span> <span className="details-value">{viewModal.customer.totalOrders}</span></div>
                <div className="details-row"><span className="details-label">Total Spent:</span> <span className="details-value">${viewModal.customer.totalSpent}</span></div>
                <div className="details-row"><span className="details-label">Last Order:</span> <span className="details-value">{viewModal.customer.lastOrder}</span></div>
                <div className="details-row"><span className="details-label">Rating:</span> <span className="details-value">{viewModal.customer.rating}</span></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Block User Modal */}
      {blockModal.open && blockModal.customer && (
        <div className="modal-overlay">
          <div className="modal-content details-modal">
            <div className="details-modal-header">
              <h2>Block User</h2>
              <button className="details-modal-close" onClick={closeBlockModal}>&times;</button>
            </div>
            <div className="details-modal-body">
              <div className="details-modal-info">
                <div className="details-row" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                  <span>Are you sure you want to block <b>{blockModal.customer.name}</b> from the website?</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem', gap: '1rem' }}>
                  <button onClick={closeBlockModal} style={{ padding: '0.5rem 1rem' }}>Cancel</button>
                  <button onClick={handleBlockConfirm} style={{ padding: '0.5rem 1rem', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px' }}>Block</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Orders Modal */}
      {ordersModal.open && ordersModal.customer && (
        <div className="modal-overlay">
          <div className="modal-content details-modal">
            <div className="details-modal-header">
              <h2>Orders for {ordersModal.customer.name}</h2>
              <button className="details-modal-close" onClick={closeOrdersModal}>&times;</button>
            </div>
            <div className="details-modal-body">
              <div className="details-modal-info">
                <div className="details-row">This is a placeholder for the customer's orders list.</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Customer Statistics */}
      <div className="customer-stats-overview">
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#2ecc71' }}>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{customers.length}</div>
            <div className="stat-label">Total Customers</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#3498db' }}>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{customers.filter(c => c.status === 'active').length}</div>
            <div className="stat-label">Active Customers</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#f39c12' }}>
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="stat-content">
            <div className="stat-value">
              {(customers.reduce((sum, c) => sum + c.rating, 0) / customers.length).toFixed(1)}
            </div>
            <div className="stat-label">Avg. Rating</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#e74c3c' }}>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="stat-content">
            <div className="stat-value">
              ${customers.reduce((sum, c) => sum + c.totalSpent, 0).toFixed(2)}
            </div>
            <div className="stat-label">Total Revenue</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers; 