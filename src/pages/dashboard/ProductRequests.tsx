import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheck, 
  faTimes, 
  faEye, 
  faClock,
  faUser,
  faBox
} from '@fortawesome/free-solid-svg-icons';
import './ProductRequests.css';

const ProductRequests = () => {
  const [selectedStatus, setSelectedStatus] = useState('pending');
  const [rejectModal, setRejectModal] = useState<{ open: boolean; requestId: number | null }>({ open: false, requestId: null });
  const [viewModal, setViewModal] = useState<{ open: boolean; request: any | null }>({ open: false, request: null });
  const [rejectReason, setRejectReason] = useState('');
  const [reasonError, setReasonError] = useState('');

  const requests = [
    {
      id: 1,
      productName: 'Emerald Ring',
      vendor: 'Jewelry Plus',
      category: 'Rings',
      price: 399.99,
      description: 'Beautiful emerald ring with diamond accents',
      status: 'pending',
      submittedDate: '2024-01-15',
      image: '/src/assets/25.webp',
      color: 'Emerald Green',
      size: '7'
    },
    {
      id: 2,
      productName: 'Sapphire Necklace',
      vendor: 'Precious Stones Co.',
      category: 'Necklaces',
      price: 299.99,
      description: 'Elegant sapphire necklace with white gold setting',
      status: 'approved',
      submittedDate: '2024-01-14',
      image: '/src/assets/28.webp',
      color: 'Blue',
      size: 'M'
    },
    {
      id: 3,
      productName: 'Ruby Bracelet',
      vendor: 'Royal Gems',
      category: 'Bracelets',
      price: 199.99,
      description: 'Stunning ruby bracelet with intricate design',
      status: 'rejected',
      submittedDate: '2024-01-13',
      image: '/src/assets/collectionV1-img1.webp',
      color: 'Red',
      size: 'S'
    },
    {
      id: 4,
      productName: 'Diamond Earrings',
      vendor: 'Sparkle & Shine',
      category: 'Earrings',
      price: 599.99,
      description: 'Classic diamond stud earrings',
      status: 'pending',
      submittedDate: '2024-01-12',
      image: '/src/assets/collectionV1-img2.webp',
      color: 'White',
      size: 'One Size'
    },
    {
      id: 5,
      productName: 'Pearl Pendant',
      vendor: 'Ocean Pearls',
      category: 'Pendants',
      price: 149.99,
      description: 'Natural pearl pendant with silver chain',
      status: 'pending',
      submittedDate: '2024-01-11',
      image: '/src/assets/collectionV1-img3.webp',
      color: 'Pearl White',
      size: 'Adjustable'
    }
  ];

  const filteredRequests = requests.filter(request => 
    selectedStatus === 'all' || request.status === selectedStatus
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return '#f39c12';
      case 'approved':
        return '#2ecc71';
      case 'rejected':
        return '#e74c3c';
      default:
        return '#95a5a6';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return faClock;
      case 'approved':
        return faCheck;
      case 'rejected':
        return faTimes;
      default:
        return faClock;
    }
  };

  const handleApprove = (id: number) => {
    console.log('Approved request:', id);
    // Add approval logic here
  };

  const handleReject = (id: number) => {
    setRejectModal({ open: true, requestId: id });
    setRejectReason('');
    setReasonError('');
  };

  const handleRejectSubmit = () => {
    if (!rejectReason.trim()) {
      setReasonError('Reason is required');
      return;
    }
    console.log('Rejected request:', rejectModal.requestId, 'Reason:', rejectReason);
    // Add rejection logic here
    setRejectModal({ open: false, requestId: null });
    setRejectReason('');
    setReasonError('');
  };

  const handleViewDetails = (request: any) => {
    setViewModal({ open: true, request });
  };

  const closeRejectModal = () => {
    setRejectModal({ open: false, requestId: null });
    setRejectReason('');
    setReasonError('');
  };

  const closeViewModal = () => {
    setViewModal({ open: false, request: null });
  };

  return (
    <div className="product-requests">
      {/* Header */}
      <div className="page-header">
        <div className="header-content">
          <h1>Product Requests</h1>
          <p>Review and manage product submissions from vendors</p>
        </div>
        <div className="header-stats">
          <div className="stat-item">
            <FontAwesomeIcon icon={faClock} />
            <span>{requests.filter(r => r.status === 'pending').length} Pending</span>
          </div>
          <div className="stat-item">
            <FontAwesomeIcon icon={faCheck} />
            <span>{requests.filter(r => r.status === 'approved').length} Approved</span>
          </div>
          <div className="stat-item">
            <FontAwesomeIcon icon={faTimes} />
            <span>{requests.filter(r => r.status === 'rejected').length} Rejected</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="status-filter">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="all">All Requests</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Requests Grid */}
      <div className="requests-grid">
        {filteredRequests.map((request) => (
          <div key={request.id} className="request-card">
            <div className="request-header">
              <div className="request-info">
                <img src={request.image} alt={request.productName} />
                <div>
                  <h3>{request.productName}</h3>
                  <div className="vendor-info">
                    <FontAwesomeIcon icon={faUser} />
                    <span>{request.vendor}</span>
                  </div>
                </div>
              </div>
              <div className="request-status">
                <span 
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(request.status) }}
                >
                  <FontAwesomeIcon icon={getStatusIcon(request.status)} />
                  {request.status}
                </span>
              </div>
            </div>

            <div className="request-details">
              <div className="detail-row">
                <span className="label">Category:</span>
                <span className="value">{request.category}</span>
              </div>
              <div className="detail-row">
                <span className="label">Price:</span>
                <span className="value">${request.price}</span>
              </div>
              <div className="detail-row">
                <span className="label">Submitted:</span>
                <span className="value">{request.submittedDate}</span>
              </div>
              <div className="detail-row description">
                <span className="label">Description:</span>
                <span className="value">{request.description}</span>
              </div>
            </div>

            <div className="request-actions">
              <button className="action-btn-dashboard view" onClick={() => handleViewDetails(request)}>
                <FontAwesomeIcon icon={faEye} />
                View Details
              </button>
              {request.status === 'pending' && (
                <>
                  <button 
                    className="action-btn-dashboard approve"
                    onClick={() => handleApprove(request.id)}
                  >
                    <FontAwesomeIcon icon={faCheck} />
                    Approve
                  </button>
                  <button 
                    className="action-btn-dashboard reject"
                    onClick={() => handleReject(request.id)}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                    Reject
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Reject Modal */}
      {rejectModal.open && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Reject Product Request</h2>
            <label htmlFor="reject-reason">Reason <span style={{color: 'red'}}>*</span></label>
            <textarea
              id="reject-reason"
              value={rejectReason}
              onChange={e => { setRejectReason(e.target.value); setReasonError(''); }}
              placeholder="Enter reason for rejection"
              rows={4}
              style={{ width: '100%', marginBottom: '0.5rem' }}
            />
            {reasonError && <div style={{ color: 'red', marginBottom: '0.5rem' }}>{reasonError}</div>}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button onClick={closeRejectModal} style={{ padding: '0.5rem 1rem' }}>Cancel</button>
              <button onClick={handleRejectSubmit} style={{ padding: '0.5rem 1rem', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px' }}>Reject</button>
            </div>
          </div>
        </div>
      )}

      {/* View Details Modal */}
      {viewModal.open && viewModal.request && (
        <div className="modal-overlay">
          <div className="modal-content details-modal">
            <div className="details-modal-header">
              <h2>Product Request Details</h2>
              <button className="details-modal-close" onClick={closeViewModal}>&times;</button>
            </div>
            <div className="details-modal-body">
              <div className="details-modal-image">
                <img src={viewModal.request.image} alt={viewModal.request.productName} />
              </div>
              <div className="details-modal-info">
                <div className="details-row"><span className="details-label">Product Name:</span> <span className="details-value">{viewModal.request.productName}</span></div>
                <div className="details-row"><span className="details-label">Vendor:</span> <span className="details-value">{viewModal.request.vendor}</span></div>
                <div className="details-row"><span className="details-label">Category:</span> <span className="details-value">{viewModal.request.category}</span></div>
                <div className="details-row"><span className="details-label">Price:</span> <span className="details-value">${viewModal.request.price}</span></div>
                <div className="details-row"><span className="details-label">Color:</span> <span className="details-value">{viewModal.request.color}</span></div>
                <div className="details-row"><span className="details-label">Size:</span> <span className="details-value">{viewModal.request.size}</span></div>
                <div className="details-row"><span className="details-label">Status:</span> <span className="details-value status-badge" style={{backgroundColor: getStatusColor(viewModal.request.status), color: 'white', padding: '0.25rem 0.75rem', borderRadius: '12px'}}>{viewModal.request.status}</span></div>
                <div className="details-row"><span className="details-label">Submitted:</span> <span className="details-value">{viewModal.request.submittedDate}</span></div>
                <div className="details-row details-description"><span className="details-label">Description:</span> <span className="details-value">{viewModal.request.description}</span></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {filteredRequests.length === 0 && (
        <div className="empty-state">
          <FontAwesomeIcon icon={faBox} />
          <h3>No requests found</h3>
          <p>There are no product requests matching your current filters.</p>
        </div>
      )}
    </div>
  );
};

export default ProductRequests; 