import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBox, 
  faShoppingCart, 
  faUsers, 
  faDollarSign,
  faArrowUp,
  faArrowDown
} from '@fortawesome/free-solid-svg-icons';
import './DashboardHome.css';

const DashboardHome = () => {
  const stats = [
    {
      title: 'Total Products',
      value: '1,234',
      change: '+12%',
      changeType: 'increase',
      icon: faBox,
      color: '#bfa46d'
    },
    {
      title: 'Total Orders',
      value: '856',
      change: '+8%',
      changeType: 'increase',
      icon: faShoppingCart,
      color: '#2ecc71'
    },
    {
      title: 'Total Customers',
      value: '2,341',
      change: '+15%',
      changeType: 'increase',
      icon: faUsers,
      color: '#3498db'
    },
    {
      title: 'Total Revenue',
      value: '$45,678',
      change: '+23%',
      changeType: 'increase',
      icon: faDollarSign,
      color: '#e74c3c'
    }
  ];

  const recentOrders = [
    {
      id: '#ORD-001',
      customer: 'Sarah Johnson',
      product: 'Diamond Ring',
      amount: '$299.99',
      status: 'completed',
      date: '2024-01-15'
    },
    {
      id: '#ORD-002',
      customer: 'Mike Wilson',
      product: 'Gold Necklace',
      amount: '$199.99',
      status: 'pending',
      date: '2024-01-14'
    },
    {
      id: '#ORD-003',
      customer: 'Emily Davis',
      product: 'Silver Bracelet',
      amount: '$89.99',
      status: 'processing',
      date: '2024-01-13'
    },
    {
      id: '#ORD-004',
      customer: 'John Smith',
      product: 'Pearl Earrings',
      amount: '$149.99',
      status: 'completed',
      date: '2024-01-12'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#2ecc71';
      case 'pending':
        return '#f39c12';
      case 'processing':
        return '#3498db';
      default:
        return '#95a5a6';
    }
  };

  return (
    <div className="dashboard-home">
      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: stat.color }}>
              <FontAwesomeIcon icon={stat.icon} />
            </div>
            <div className="stat-content">
              <h3 className="stat-title">{stat.title}</h3>
              <div className="stat-value">{stat.value}</div>
              <div className={`stat-change ${stat.changeType}`}>
                <FontAwesomeIcon 
                  icon={stat.changeType === 'increase' ? faArrowUp : faArrowDown} 
                />
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="recent-orders">
        <div className="section-header-dashboard">
          <h2>Recent Orders</h2>
          <button className="view-all-btn">View All</button>
        </div>
        
        <div className="orders-table">
          <div className="table-header">
            <div className="table-cell">Order ID</div>
            <div className="table-cell">Customer</div>
            <div className="table-cell">Product</div>
            <div className="table-cell">Amount</div>
            <div className="table-cell">Status</div>
            <div className="table-cell">Date</div>
          </div>
          
          {recentOrders.map((order, index) => (
            <div key={index} className="table-row">
              <div className="table-cell">{order.id}</div>
              <div className="table-cell">{order.customer}</div>
              <div className="table-cell">{order.product}</div>
              <div className="table-cell">{order.amount}</div>
              <div className="table-cell">
                <span 
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(order.status) }}
                >
                  {order.status}
                </span>
              </div>
              <div className="table-cell">{order.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <button className="action-btn" style={{width:"100%",height:"100%"}}>
            <FontAwesomeIcon icon={faBox} />
            <span>Add New Product</span>
          </button>
          <button className="action-btn" style={{width:"100%",height:"100%"}}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>View Orders</span>
          </button>
          <button className="action-btn" style={{width:"100%",height:"100%"}}>
            <FontAwesomeIcon icon={faUsers} />
            <span>Manage Customers</span>
          </button>
          <button className="action-btn" style={{width:"100%",height:"100%"}}> 
            <FontAwesomeIcon icon={faDollarSign} />
            <span>View Analytics</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome; 