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
  rating: 4.2,
  related: [related1, related2, related3],
};

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [userRating, setUserRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [magnify, setMagnify] = useState(false);
  const [magnifyPos, setMagnifyPos] = useState({ x: 0, y: 0 });

  const handleMagnify = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMagnifyPos({ x, y });
  };

  return (
    <div className={styles.productDetail}>
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
        <div className={styles.quantity}>
          <span>Quantity:</span>
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
          />
          <button onClick={() => setQuantity(q => q + 1)}>+</button>
        </div>
        <button className={styles.addToCart}>Add to Cart</button>
        <div className={styles.rating}>
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
        </div>
        <div className={styles.descriptionTruncated}>{product.description}</div>
      </div>
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