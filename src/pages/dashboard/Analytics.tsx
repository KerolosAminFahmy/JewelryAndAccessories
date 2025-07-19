import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faChartBar, 
  faUsers,
  faShoppingCart,
  faDollarSign,
  faBox
} from '@fortawesome/free-solid-svg-icons';
import './Analytics.css';

const Analytics = () => {
  const metrics = [
    {
      title: 'Total Revenue',
      value: '$45,678',
      change: '+23%',
      changeType: 'increase',
      icon: faDollarSign,
      color: '#2ecc71'
    },
    {
      title: 'Total Orders',
      value: '856',
      change: '+8%',
      changeType: 'increase',
      icon: faShoppingCart,
      color: '#3498db'
    },
    {
      title: 'Total Customers',
      value: '2,341',
      change: '+15%',
      changeType: 'increase',
      icon: faUsers,
      color: '#f39c12'
    },
    {
      title: 'Total Products',
      value: '1,234',
      change: '+12%',
      changeType: 'increase',
      icon: faBox,
      color: '#e74c3c'
    }
  ];

  const chartData = {
    sales: [120, 190, 300, 500, 200, 300, 400],
    orders: [80, 150, 250, 400, 150, 250, 350],
    customers: [50, 100, 200, 300, 100, 200, 250]
  };

  return (
    <div className="analytics">
      {/* Header */}
      <div className="page-header">
        <div className="header-content">
          <h1>Analytics Dashboard</h1>
          <p>Track your business performance and insights</p>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <div className="metric-icon" style={{ backgroundColor: metric.color }}>
              <FontAwesomeIcon icon={metric.icon} />
            </div>
            <div className="metric-content">
              <h3 className="metric-title">{metric.title}</h3>
              <div className="metric-value">{metric.value}</div>
              <div className={`metric-change ${metric.changeType}`}>
                {metric.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <div className="chart-card">
          <div className="chart-header">
            <h3>Sales Overview</h3>
            <div className="chart-legend">
              <span className="legend-item">
                <span className="legend-color" style={{ backgroundColor: '#2ecc71' }}></span>
                Sales
              </span>
              <span className="legend-item">
                <span className="legend-color" style={{ backgroundColor: '#3498db' }}></span>
                Orders
              </span>
            </div>
          </div>
          <div className="chart-placeholder">
            <FontAwesomeIcon icon={faChartLine} />
            <p>Sales Chart</p>
            <div className="chart-bars">
              {chartData.sales.map((value, index) => (
                <div 
                  key={index} 
                  className="chart-bar"
                  style={{ height: `${value / 5}px` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3>Customer Growth</h3>
          </div>
          <div className="chart-placeholder">
            <FontAwesomeIcon icon={faChartBar} />
            <p>Customer Growth Chart</p>
            <div className="chart-bars">
              {chartData.customers.map((value, index) => (
                <div 
                  key={index} 
                  className="chart-bar"
                  style={{ height: `${value / 3}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon" style={{ backgroundColor: '#2ecc71' }}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <div className="activity-content">
              <div className="activity-title">New order received</div>
              <div className="activity-description">Order #ORD-001 from Sarah Johnson</div>
              <div className="activity-time">2 hours ago</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon" style={{ backgroundColor: '#3498db' }}>
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <div className="activity-content">
              <div className="activity-title">New customer registered</div>
              <div className="activity-description">Mike Wilson joined the platform</div>
              <div className="activity-time">4 hours ago</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon" style={{ backgroundColor: '#f39c12' }}>
              <FontAwesomeIcon icon={faBox} />
            </div>
            <div className="activity-content">
              <div className="activity-title">Product added</div>
              <div className="activity-description">New product "Diamond Ring" added to catalog</div>
              <div className="activity-time">6 hours ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 