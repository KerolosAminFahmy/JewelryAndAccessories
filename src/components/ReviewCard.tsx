import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface ReviewCardProps {
  text: string;
  image: string;
  rating: number;
  name: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ text, image, rating, name }) => {
  return (
    <div className="review-card p-4 bg-white rounded shadow text-center" style={{ maxWidth: 350, minHeight: 280 }}>
      <div className="review-user-image mb-3">
        <img src={image} alt={name} style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '3px solid #eee' }} />
      </div>
      <div className="review-text mb-2" style={{ fontStyle: 'italic', color: '#555' }}>
        "{text}"
      </div>
      <div className="review-rating mb-2">
        {[...Array(5)].map((_, i) => (
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            style={{ color: i < rating ? '#FFD700' : '#e4e5e9' }}
          />
        ))}
      </div>
      <div className="review-user-name fw-bold" style={{ color: '#222' }}>{name}</div>
    </div>
  );
};

export default ReviewCard; 