import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShoppingCart, 
  faPlus, 
  faMinus, 
  faTimes 
} from '@fortawesome/free-solid-svg-icons';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const { t } = useTranslation();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      quantity: 2,
      image: 'https://via.placeholder.com/80x80?text=Product+1'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      quantity: 1,
      image: 'https://via.placeholder.com/80x80?text=Product+2'
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <h1>{t('cart.title', 'Shopping Cart')}</h1>
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <h2>{t('cart.empty', 'Your cart is empty')}</h2>
            <p>{t('cart.emptyMessage', 'Add some products to your cart to get started!')}</p>
            <Link to="/" className="continue-shopping">
              {t('cart.continueShopping', 'Continue Shopping')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>{t('cart.title', 'Shopping Cart')}</h1>
      
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-price">${item.price.toFixed(2)}</p>
              </div>
              
              <div className="item-quantity">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="quantity-btn"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="quantity-btn"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              
              <div className="item-total">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              
              <button 
                onClick={() => removeItem(item.id)}
                className="remove-btn"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          ))}
        </div>
        
        <div className="cart-summary">
          <h2>{t('cart.summary', 'Order Summary')}</h2>
          <div className="summary-item">
            <span>{t('cart.items', 'Items')} ({getTotalItems()}):</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>{t('cart.shipping', 'Shipping')}:</span>
            <span>{t('cart.free', 'Free')}</span>
          </div>
          <div className="summary-total">
            <span>{t('cart.total', 'Total')}:</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
          
          <button className="checkout-btn">
            {t('cart.checkout', 'Proceed to Checkout')}
          </button>
          
          <Link to="/" className="continue-shopping">
            {t('cart.continueShopping', 'Continue Shopping')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart; 