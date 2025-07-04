import React, { useState } from 'react';
import styles from './ProductDetail.module.css';
import related1 from '../assets/collectionV1-img1.webp';
import related2 from '../assets/collectionV1-img2.webp';
import related3 from '../assets/collectionV1-img3.webp';
import main1 from '../assets/25.webp';
import main2 from '../assets/28.webp';

const product = {
  name: 'Modern Armchair',
  images: [main1, main2],
  colors: ['#bfa46d', '#e9c46a', '#C0C0C0'],
  description: 'A comfortable and stylish armchair for your living room.',
  price: 199.99,
  oldPrice: 249.99,
  saleEnd: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
  rating: 4.2,
  related: [related1, related2, related3],
};

function useSaleTimer(saleEnd: Date | undefined) {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  React.useEffect(() => {
    if (!saleEnd) return;
    const interval = setInterval(() => {
      const now = new Date();
      const diff = saleEnd.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft(null);
        clearInterval(interval);
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, [saleEnd]);
  return timeLeft;
}

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  // const [userRating, setUserRating] = useState(0);
  // const [hoveredStar, setHoveredStar] = useState(0);
  const [magnify, setMagnify] = useState(false);
  const [magnifyPos, setMagnifyPos] = useState({ x: 0, y: 0 });
  const [showSharePopup, setShowSharePopup] = useState(false);
  const saleTimer = useSaleTimer(product.saleEnd);

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const productUrl = window.location.href;

  const handleMagnify = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMagnifyPos({ x, y });
  };

  return (
    <div className={styles.productDetail}>
      <section className={styles.sectionDetail}>

        <div className={styles.left}>
          <div
            className={styles.imageWrapper}
            onMouseEnter={() => setMagnify(true)}
            onMouseLeave={() => setMagnify(false)}
            onMouseMove={handleMagnify}
          >
            <img 
              src={product.images[selectedImage]} 
              alt="Product" 
              className={styles.mainImage} 
              style={{ display: magnify ? 'none' : 'block' }}
            />
            {magnify && (
              <div
                className={styles.magnifier}
                style={{
                  backgroundImage: `url(${product.images[selectedImage]})`,
                  backgroundPosition: `${magnifyPos.x}% ${magnifyPos.y}%`,
                }}
              />
            )}
          </div>
          
          <div className={styles.thumbnails}>
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumb ${idx}`}
                className={
                  idx === selectedImage ? styles.thumbActive : styles.thumb
                }
                onClick={() => setSelectedImage(idx)}
              />
            ))}
          </div>
          
        </div>
        <div className={styles.right}>
          <div className={styles.nameAndRating}>
            <h2 className={styles.name}>
              <span className={styles.nameHighlight}>{product.name.split(' ').slice(0,2).join(' ')}</span> {product.name.split(' ').slice(2).join(' ')}
            </h2>
            <div className={styles.actualRating}>
              {[1,2,3,4,5].map(star => (
                <span key={star} className={star <= Math.round(product.rating) ? styles.starActive : styles.star}>★</span>
              ))}
              <span className={styles.ratingValue}>({product.rating})</span>
            </div>
            <div className={styles.priceSection}>
              <span className={styles.price}>${product.price.toFixed(2)}</span>
              {product.oldPrice && (
                <span className={styles.oldPrice}>${product.oldPrice.toFixed(2)}</span>
              )}
              {product.oldPrice && (
                <span className={styles.salePercent}>SAVE {Math.round(100 - (product.price / product.oldPrice) * 100)}%</span>
              )}
            </div>
            {product.saleEnd && saleTimer && (
              <div className={styles.saleTimerBox}>
                <span className={styles.saleTimerLabel}>
                  <svg className={styles.timerIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Sales end in:
                </span>
                <div className={styles.timerContainer}>
                  <div className={styles.timerBox}>
                    <span className={styles.timerValue}>{saleTimer.days.toString().padStart(2, '0')}</span>
                      {/*<span className={styles.timerLabel}>Days</span>*/}
                  </div>
                  <span className={styles.timerSeparator}>:</span>
                  <div className={styles.timerBox}>
                    <span className={styles.timerValue}>{saleTimer.hours.toString().padStart(2, '0')}</span>
                    {/*<span className={styles.timerLabel}>Hours</span>*/}
                  </div>
                  <span className={styles.timerSeparator}>:</span>
                  <div className={styles.timerBox}>
                    <span className={styles.timerValue}>{saleTimer.minutes.toString().padStart(2, '0')}</span>
                    {/*<span className={styles.timerLabel}>Minutes</span>*/}
                  </div>
                  <span className={styles.timerSeparator}>:</span>
                  <div className={styles.timerBox}>
                    <span className={styles.timerValue}>{saleTimer.seconds.toString().padStart(2, '0')}</span>
                    {/*<span className={styles.timerLabel}>Seconds</span>*/}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.descriptionTruncated}>{product.description}</div>
          
          {/* Elegant Line */}
          <div className={styles.elegantLine}></div>
          
          {/* Delivery & Return Info */}
          <div className={styles.deliveryInfo}>
            <div className={styles.infoItem}>
              <svg className={styles.infoIcon} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <div className={styles.infoContent}>
                <h4>Free Delivery</h4>
                <p>Free shipping on orders over $50</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <svg className={styles.infoIcon} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <div className={styles.infoContent}>
                <h4>Easy Returns</h4>
                <p>30-day return policy</p>
              </div>
            </div>
          </div>
          
          <div className={styles.colors}>
            <span>Color:</span>
            {product.colors.map((color) => (
              <button
                key={color}
                className={
                  color === selectedColor ? styles.colorActive : styles.color
                }
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
          
          {/* Size Selection */}
          <div className={styles.sizes}>
            <span>Size:</span>
            <div className={styles.sizeOptions}>
              {sizes.map((size) => (
                <button
                  key={size}
                  className={
                    size === selectedSize ? styles.sizeActive : styles.size
                  }
                  onClick={() => setSelectedSize(size)}
                  aria-label={`Select size ${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.cartRow}>
            <div className={styles.quantity}>

              <button className={styles.decQuantity} onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
              />
              <button className={styles.incQuantity} onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
            <button className={styles.addToCart}>Add to Cart</button>
          </div>
          <button className={styles.orderNow}>Order Now</button>
          
          {/* Share Button */}
          <button className={styles.shareButton} onClick={() => setShowSharePopup(true)}>
            <svg className={styles.shareIcon} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
            </svg>
            Share Product
          </button>
          
          {/* Share Popup */}
          {showSharePopup && (
            <div className={styles.sharePopup}>
              <div className={styles.sharePopupContent}>
                <div className={styles.sharePopupHeader}>
                  <h3>Share this product</h3>
                  <button 
                    className={styles.closeButton}
                    onClick={() => setShowSharePopup(false)}
                  >
                    ×
                  </button>
                </div>
                <div className={styles.shareLink}>
                  <input 
                    type="text" 
                    value={productUrl} 
                    readOnly 
                    className={styles.linkInput}
                  />
                  <button 
                    className={styles.copyButton}
                    onClick={() => {
                      navigator.clipboard.writeText(productUrl);
                      alert('Link copied to clipboard!');
                    }}
                  >
                    Copy
                  </button>
                </div>
                <div className={styles.socialLinks}>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(productUrl)}&text=Check out this amazing product!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                  </a>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(productUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a 
                    href={`https://wa.me/?text=Check out this amazing product! ${encodeURIComponent(productUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
          {/* <div className={styles.rating}>
            <span>Rate this product:</span>
            {[1, 2, 3, 4, 5].map(star => (
              <span
                key={star}
                className={
                  (hoveredStar || userRating || product.rating) >= star
                    ? styles.starActive
                    : styles.star
                }
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                onClick={() => setUserRating(star)}
                role="button"
                aria-label={`Rate ${star} star`}
              >
                ★
              </span>
            ))}
            <span className={styles.ratingValue}>
              ({userRating || product.rating})
            </span>
          </div> */}
        </div>
      </section>
      <div className={styles.relatedSection}>
        <h3>Related Products</h3>
        <div className={styles.relatedSlider}>
          {product.related.map((img, idx) => (
            <div key={idx} className={styles.relatedCard}>
              <img src={img} alt={`Related ${idx}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 