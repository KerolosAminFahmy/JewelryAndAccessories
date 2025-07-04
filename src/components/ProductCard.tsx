import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEye, 
  faHeart, 
  faShoppingCart,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import './ProductCard.css';
import { Button } from 'react-bootstrap';

export interface ProductCardProps {
  id: string;
  name: string;
  currentPrice: number;
  oldPrice?: number;
  mainImage: string;
  hoverImage: string;
  badge?: 'new' | 'sale' | 'out-of-stock';
  salePercentage?: number;
  rating?: number;
  onQuickView?: (id: string) => void;
  onAddToCart?: (id: string) => void;
  onAddToWishlist?: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  currentPrice,
  oldPrice,
  mainImage,
  hoverImage,
  badge,
  salePercentage,
  rating = 0,
  onQuickView,
  onAddToCart,
  onAddToWishlist
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleQuickView = () => {
    onQuickView?.(id);
  };

  const handleAddToCart = () => {
    onAddToCart?.(id);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    onAddToWishlist?.(id);
  };

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  const getBadgeContent = () => {
    switch (badge) {
      case 'new':
        return 'NEW';
      case 'sale':
        return salePercentage ? `-${salePercentage}%` : 'SALE';
      case 'out-of-stock':
        return 'OUT STOCK';
      default:
        return null;
    }
  };

  const getBadgeClass = () => {
    switch (badge) {
      case 'new':
        return 'badge-new';
      case 'sale':
        return 'badge-sale';
      case 'out-of-stock':
        return 'badge-out-of-stock';
      default:
        return '';
    }
  };

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <div className="image-wrapper">
          <img 
            src={mainImage} 
            alt={name}
            className={`product-image main-image ${isHovered ? 'fade-out' : 'fade-in'}`}
          />
          <img 
            src={hoverImage} 
            alt={name}
            className={`product-image hover-image ${isHovered ? 'fade-in' : 'fade-out'}`}
          />
        </div>
        
        {badge && (
          <div className={`corner-ribbon ${getBadgeClass()}`}>
            {getBadgeContent()}
          </div>
        )}
        
        <div className="product-actions">
          <Button 
            className="action-btn quick-view-btn"
            onClick={handleQuickView}
            title="Quick View"
          >
            <FontAwesomeIcon icon={faEye} />
          </Button>
          
          <Button 
            className={`action-btn wishlist-btn ${isWishlisted ? 'active' : ''}`}
            onClick={handleWishlist}
            title="Add to Wishlist"
          >
            <FontAwesomeIcon icon={faHeart} />
          </Button>

          <Button 
            className="action-btn cart-btn"
            onClick={handleAddToCart}
            title="Add to Cart"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </Button>
        </div>
      </div>

      <div className="product-info">
        <h3 className="title product-name">{name}</h3>
        
        <div className="product-rating">
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon 
              key={index}
              icon={faStar} 
              className={`star ${index < rating ? 'filled' : ''}`}
            />
          ))}
          <span className="rating-text">({rating})</span>
        </div>

        <div className="product-price">
          <span className="current-price">{formatPrice(currentPrice)}</span>
          {oldPrice && (
            <span className="old-price">{formatPrice(oldPrice)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 