import React from 'react';
import './CollectionElement.css';

export interface CollectionElementProps {
  image: string;
  alt?: string;
  label: string;
}

const CollectionElement: React.FC<CollectionElementProps> = ({ image, alt, label }) => (
  <div className="collection-element">
    <div className="circle-image-container">
      <img src={image} alt={alt || label} className="circle-image" />
    </div>
    <div className="collection-label">{label}</div>
  </div>
);

export default CollectionElement; 