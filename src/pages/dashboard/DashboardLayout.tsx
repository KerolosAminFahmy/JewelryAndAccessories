import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faBox, 
  faUsers, 
  faShoppingCart, 
  faChartBar, 
  faCog, 
  faSignOutAlt,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import './DashboardLayout.css';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: faHome },
    { name: 'Products', href: '/dashboard/products', icon: faBox },
    { name: 'Product Requests', href: '/dashboard/product-requests', icon: faBox },
    { name: 'Orders', href: '/dashboard/orders', icon: faShoppingCart },
    { name: 'Customers', href: '/dashboard/customers', icon: faUsers },
    { name: 'Analytics', href: '/dashboard/analytics', icon: faChartBar },
    { name: 'Settings', href: '/dashboard/settings', icon: faCog },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-layout">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <img src="/src/assets/logo.png" alt="Merna" />
            <span>Merna Admin</span>
          </div>
        
        </div>

        <nav className="sidebar-nav">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`nav-item ${isActive(item.href) ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="nav-item">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Back to Site</span>
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <button 
              className={`hamburger-menu ${sidebarOpen ? 'active' : ''}`}
              onClick={toggleSidebar}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
            <h1>Dashboard</h1>
          </div>

          <div className="header-right">
            <button className="notification-btn">
              <FontAwesomeIcon icon={faBell} />
              <span className="notification-badge">3</span>
            </button>
            <div className="user-menu">
              <img src="/src/assets/logo.png" alt="Admin" />
              <span>Admin User</span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 