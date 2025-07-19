import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faPlus, 
  faEdit, 
  faTrash, 
  faEye,
  faFilter
} from '@fortawesome/free-solid-svg-icons';
import './ProductManagement.css';

const ProductManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Diamond Ring',
      category: 'Rings',
      price: 299.99,
      stock: 15,
      status: 'active',
      image: '/src/assets/25.webp',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Gold Necklace',
      category: 'Necklaces',
      price: 199.99,
      stock: 8,
      status: 'active',
      image: '/src/assets/28.webp',
      rating: 4.2
    },
    {
      id: 3,
      name: 'Silver Bracelet',
      category: 'Bracelets',
      price: 89.99,
      stock: 0,
      status: 'out-of-stock',
      image: '/src/assets/collectionV1-img1.webp',
      rating: 4.0
    },
    {
      id: 4,
      name: 'Pearl Earrings',
      category: 'Earrings',
      price: 149.99,
      stock: 12,
      status: 'active',
      image: '/src/assets/collectionV1-img2.webp',
      rating: 4.8
    },
    {
      id: 5,
      name: 'Ruby Pendant',
      category: 'Pendants',
      price: 179.99,
      stock: 5,
      status: 'active',
      image: '/src/assets/collectionV1-img3.webp',
      rating: 4.3
    }
  ];

  const categories = ['all', 'Rings', 'Necklaces', 'Bracelets', 'Earrings', 'Pendants'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return '#2ecc71';
      case 'out-of-stock':
        return '#e74c3c';
      case 'draft':
        return '#95a5a6';
      default:
        return '#95a5a6';
    }
  };

  return (
    <div className="product-management">
      {/* Header */}
      <div className="page-header">
        <div className="header-content">
          <h1>Product Management</h1>
          <p>Manage your product catalog, inventory, and pricing</p>
        </div>
        <button className="add-product-btn" onClick={() => window.location.href = '/dashboard/add-product'}>
          <FontAwesomeIcon icon={faPlus} />
          Add New Product
        </button>
      </div>

      {/* Filters and Search */}
      <div className="filters-section">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-controls">
          <div className="category-filter">
            <FontAwesomeIcon icon={faFilter} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="products-table-container">
        <div className="table-header">
          <div className="table-cell">Product</div>
          <div className="table-cell">Category</div>
          <div className="table-cell">Price</div>
          <div className="table-cell">Stock</div>
          <div className="table-cell">Status</div>
          <div className="table-cell">Rating</div>
          <div className="table-cell">Actions</div>
        </div>

        {filteredProducts.map((product) => (
          <div key={product.id} className="table-row">
            <div className="table-cell product-info">
              <img src={product.image} alt={product.name} />
              <div>
                <div className="product-name">{product.name}</div>
                <div className="product-id">#{product.id}</div>
              </div>
            </div>
            <div className="table-cell">{product.category}</div>
            <div className="table-cell">${product.price}</div>
            <div className="table-cell">
              <span className={`stock-badge ${product.stock === 0 ? 'out-of-stock' : ''}`}>
                {product.stock}
              </span>
            </div>
            <div className="table-cell">
              <span 
                className="status-badge"
                style={{ backgroundColor: getStatusColor(product.status) }}
              >
                {product.status}
              </span>
            </div>
            <div className="table-cell">
              <div className="rating">
                <span className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'}>
                      ★
                    </span>
                  ))}
                </span>
                <span className="rating-value">({product.rating})</span>
              </div>
            </div>
            <div className="table-cell actions">
              <button className="view" title="View">
                <FontAwesomeIcon icon={faEye} />
              </button>
              <button className="edit" title="Edit" onClick={() => window.location.href = `/dashboard/edit-product/${product.id}`}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button className="delete" title="Delete">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="pagination-btn">Previous</button>
        <div className="page-numbers">
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
        </div>
        <button className="pagination-btn">Next</button>
      </div>
    </div>
  );
};

export default ProductManagement; 