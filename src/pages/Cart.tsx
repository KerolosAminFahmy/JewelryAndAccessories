import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShoppingCart, 
  faPlus, 
  faMinus, 
  faArrowLeft,
  faCreditCard,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import '../index.css';

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
      name: 'Luxury Leather Handbag',
      price: 299.99,
      quantity: 2,
      image: '/src/assets/collectionV1-img1.webp'
    },
    {
      id: 2,
      name: 'Premium Silk Scarf',
      price: 89.99,
      quantity: 1,
      image: '/src/assets/collectionV1-img2.webp'
    },
    {
      id: 3,
      name: 'Designer Sunglasses',
      price: 199.99,
      quantity: 1,
      image: '/src/assets/collectionV1-img3.webp'
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
      <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section style={{
          position: 'relative',
          minHeight: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/src/assets/slideshowV1-bg1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginBottom: 60
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(191, 164, 109, 0.8) 0%, rgba(168, 137, 56, 0.6) 100%)',
            zIndex: 1
          }} />
          
          <div style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            maxWidth: '600px',
            padding: '0 24px'
          }}>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '16px',
              fontFamily: 'var(--font-title)',
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              letterSpacing: '0.02em'
            }}>
              {t('cart.title', 'Shopping Cart')}
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: '#fff',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.6,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              opacity: 0.95
            }}>
              {t('cart.heroDescription', 'Your luxury shopping experience awaits')}
            </p>
          </div>
        </section>

        {/* Empty Cart Section */}
        <section style={{ 
          padding: '60px 0', 
          maxWidth: '500px', 
          margin: '0 auto',
          paddingLeft: '24px',
          paddingRight: '24px'
        }}>
          <div style={{
            background: 'var(--color-card-bg)',
            borderRadius: 20,
            padding: 48,
            boxShadow: 'var(--color-shadow)',
            border: '1px solid var(--color-border)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '4rem',
              color: 'var(--color-primary)',
              marginBottom: '24px'
            }}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--color-primary)',
              marginBottom: '16px',
              fontFamily: 'var(--font-title)'
            }}>
              {t('cart.empty', 'Your cart is empty')}
            </h2>
            
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--color-text)',
              marginBottom: '32px',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.6
            }}>
              {t('cart.emptyMessage', 'Add some luxury products to your cart to get started!')}
            </p>

            <Link 
              to="/shop" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'var(--color-primary)',
                color: '#fff',
                padding: '16px 32px',
                borderRadius: 12,
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                transition: 'all 0.3s ease',
                border: '2px solid var(--color-primary)'
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              {t('cart.continueShopping', 'Continue Shopping')}
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/src/assets/slideshowV1-bg2.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: 60
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(191, 164, 109, 0.8) 0%, rgba(168, 137, 56, 0.6) 100%)',
          zIndex: 1
        }} />
        
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '600px',
          padding: '0 24px'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '16px',
            fontFamily: 'var(--font-title)',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            letterSpacing: '0.02em'
          }}>
            {t('cart.title', 'Shopping Cart')}
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#fff',
            fontFamily: 'var(--font-body)',
            lineHeight: 1.6,
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            opacity: 0.95
          }}>
            {t('cart.heroDescription', 'Your luxury shopping experience awaits')}
          </p>
        </div>
      </section>

      {/* Cart Content Section */}
      <section style={{ 
        padding: '60px 0', 
        maxWidth: '1200px', 
        margin: '0 auto',
        paddingLeft: '24px',
        paddingRight: '24px'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 400px', 
          gap: 40,
          alignItems: 'start'
        }}>
          {/* Cart Items */}
          <div style={{
            background: 'var(--color-card-bg)',
            borderRadius: 20,
            padding: 32,
            boxShadow: 'var(--color-shadow)',
            border: '1px solid var(--color-border)'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              color: 'var(--color-primary)',
              marginBottom: '24px',
              fontFamily: 'var(--font-title)'
            }}>
              {t('cart.items', 'Cart Items')} ({getTotalItems()})
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {cartItems.map(item => (
                <div key={item.id} style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr auto auto auto',
                  gap: '20px',
                  alignItems: 'center',
                  padding: '20px',
                  background: 'var(--color-bg)',
                  borderRadius: 12,
                  border: '1px solid var(--color-border)'
                }}>
                  <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: 8,
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={item.image} 
                      alt={item.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  
                  <div>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                      marginBottom: '8px',
                      fontFamily: 'var(--font-title)'
                    }}>
                      {item.name}
                    </h3>
                    <p style={{
                      fontSize: '1.1rem',
                      color: 'var(--color-text)',
                      fontWeight: 600,
                      fontFamily: 'var(--font-body)'
                    }}>
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '2px solid var(--color-primary)',
                        background: 'var(--color-primary)',
                        color: '#fff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span style={{
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      minWidth: '30px',
                      textAlign: 'center',
                      fontFamily: 'var(--font-body)'
                    }}>
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '2px solid var(--color-primary)',
                        background: 'var(--color-primary)',
                        color: '#fff',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  
                  <div>
                    <p style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      fontFamily: 'var(--font-body)'
                    }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => removeItem(item.id)}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: '2px solid #ef4444',
                      background: '#ef4444',
                      color: '#fff',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Cart Summary */}
          <div style={{
            background: 'var(--color-card-bg)',
            borderRadius: 20,
            padding: 32,
            boxShadow: 'var(--color-shadow)',
            border: '1px solid var(--color-border)',
            position: 'sticky',
            top: '20px'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              color: 'var(--color-primary)',
              marginBottom: '24px',
              fontFamily: 'var(--font-title)'
            }}>
              {t('cart.summary', 'Order Summary')}
            </h2>
            
            <div style={{ marginBottom: '24px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px',
                fontSize: '1rem',
                fontFamily: 'var(--font-body)'
              }}>
                <span style={{ color: 'var(--color-text)' }}>
                  {t('cart.items', 'Items')} ({getTotalItems()}):
                </span>
                <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px',
                fontSize: '1rem',
                fontFamily: 'var(--font-body)'
              }}>
                <span style={{ color: 'var(--color-text)' }}>
                  {t('cart.shipping', 'Shipping')}:
                </span>
                <span style={{ fontWeight: 600, color: '#22c55e' }}>
                  {t('cart.free', 'Free')}
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 0',
                borderTop: '2px solid var(--color-border)',
                fontSize: '1.2rem',
                fontWeight: 700,
                fontFamily: 'var(--font-body)'
              }}>
                <span style={{ color: 'var(--color-primary)' }}>
                  {t('cart.total', 'Total')}:
                </span>
                <span style={{ color: 'var(--color-primary)' }}>
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
            </div>
            
            <button style={{
              width: '100%',
              padding: '16px 32px',
              borderRadius: 12,
              border: '2px solid var(--color-primary)',
              background: 'var(--color-primary)',
              color: '#fff',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'var(--font-body)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginBottom: '16px'
            }}>
              <FontAwesomeIcon icon={faCreditCard} />
              {t('cart.checkout', 'Proceed to Checkout')}
            </button>
            
            <Link 
              to="/shop" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--color-primary)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                fontFamily: 'var(--font-body)',
                transition: 'all 0.3s ease',
                justifyContent: 'center',
                width: '100%',
                padding: '12px'
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              {t('cart.continueShopping', 'Continue Shopping')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart; 