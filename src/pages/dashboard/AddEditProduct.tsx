import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSave, 
  faTimes, 
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import './AddEditProduct.css';
import ProductCard from '../../components/ProductCard';

interface ProductFormData {
  ProductID?: number; // Optional for new products
  Name: string;
  Description: string;
  SKU: string;
  CategoryID: number | '';
  SubCategoryID: number | '';
  MaterialID: number | '';
  BrandID: number | '';
  Gender: 'Male' | 'Female' | 'Unisex' | '';
  StyleID: number | '';
  Price: number;
  DiscountPrice: number;
  Weight: number;
  Color: string;
  SizeID: number | '';
  OccasionID: number | '';
  MainImageURL1: string;
  MainImageURL2: string;
  GalleryImages: string[];
  IsFeatured: boolean;
  CreatedDate?: string;
  UpdatedDate?: string;
}

const AddEditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState<ProductFormData>({
    Name: '',
    Description: '',
    SKU: '',
    CategoryID: '',
    SubCategoryID: '',
    MaterialID: '',
    BrandID: '',
    Gender: '',
    StyleID: '',
    Price: 0,
    DiscountPrice: 0,
    Weight: 0,
    Color: '',
    SizeID: '',
    OccasionID: '',
    MainImageURL1: '',
    MainImageURL2: '',
    GalleryImages: [],
    IsFeatured: false,
  });

  const [activeTab, setActiveTab] = useState('basic');
  const [step, setStep] = useState(0);
  const steps = ['Product Info', 'Product Variants', 'Images & Gallery', 'Review & Submit'];

  // Example options for dropdowns (replace with real data or fetch from API)
  const categories = [
    { id: 1, name: 'Rings' },
    { id: 2, name: 'Necklaces' },
    { id: 3, name: 'Bracelets' },
    { id: 4, name: 'Earrings' },
  ];
  const subcategories = [
    { id: 1, name: 'Engagement Rings', categoryId: 1 },
    { id: 2, name: 'Wedding Rings', categoryId: 1 },
    { id: 3, name: 'Chains', categoryId: 2 },
    { id: 4, name: 'Studs', categoryId: 4 },
  ];
  const materials = [
    { id: 1, name: 'Gold' },
    { id: 2, name: 'Silver' },
    { id: 3, name: 'Platinum' },
  ];
  const brands = [
    { id: 1, name: 'Brand A' },
    { id: 2, name: 'Brand B' },
  ];
  const styles = [
    { id: 1, name: 'Classic' },
    { id: 2, name: 'Modern' },
  ];
  const occasions = [
    { id: 1, name: 'Wedding' },
    { id: 2, name: 'Birthday' },
  ];
  const [colors, setColors] = useState<string[]>(['Gold', 'Silver', 'Rose Gold', 'Black', 'White']);
  const [sizes, setSizes] = useState<{ id: number; name: string }[]>([
    { id: 1, name: '6' },
    { id: 2, name: '7' },
    { id: 3, name: '8' },
  ]);
  const [newColor, setNewColor] = useState('');
  const [newSize, setNewSize] = useState('');
  const genders = ['Male', 'Female', 'Unisex'];

  const [variants, setVariants] = useState([
    { color: '', size: '', quantity: 0 }
  ]);

  useEffect(() => {
    if (isEditing && id) {
      // Load product data for editing
      // This would typically fetch from API
      console.log('Loading product with ID:', id);
    }
  }, [isEditing, id]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedChange = (parent: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...(prev[parent as keyof ProductFormData] as any),
        [field]: value
      }
    }));
  };

  // Handlers for main and gallery images
  const handleMainImageUpload = (index: 1 | 2, file: File) => {
    const url = URL.createObjectURL(file);
    setFormData(prev => ({
      ...prev,
      [`MainImageURL${index}`]: url,
    }));
  };

  const handleGalleryUpload = (files: FileList) => {
    const newImages = Array.from(files).map(file => URL.createObjectURL(file));
    setFormData(prev => ({
      ...prev,
      GalleryImages: [...prev.GalleryImages, ...newImages],
    }));
  };

  const removeGalleryImage = (idx: number) => {
    setFormData(prev => ({
      ...prev,
      GalleryImages: prev.GalleryImages.filter((_, i) => i !== idx),
    }));
  };

  const handleVariantChange = (idx: number, field: string, value: any) => {
    setVariants(prev => prev.map((v, i) => i === idx ? { ...v, [field]: value } : v));
  };

  const addVariant = () => {
    setVariants(prev => [...prev, { color: '', size: '', quantity: 0 }]);
  };

  const removeVariant = (idx: number) => {
    setVariants(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Product data:', formData);
    console.log('Variants:', variants);
    // Handle save logic here
    navigate('/dashboard/products');
  };

  const handleCancel = () => {
    navigate('/dashboard/products');
  };

  const nextStep = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep(s => Math.max(s - 1, 0));

  return (
    <div className="add-edit-product">
      <div className="page-header">
        <div className="header-content">
          <h1>{isEditing ? 'Edit Product' : 'Add New Product'}</h1>
          <p>{isEditing ? 'Update product information and settings' : 'Create a new product for your catalog'}</p>
        </div>
        <div className="header-actions">
          <button className="cancel-btn" onClick={handleCancel}>
            <FontAwesomeIcon icon={faTimes} />
            Cancel
          </button>
          <button className="save-btn" onClick={handleSubmit}>
            <FontAwesomeIcon icon={faSave} />
            {isEditing ? 'Update Product' : 'Save Product'}
          </button>
        </div>
      </div>
      <div className="stepper-bar">
        {steps.map((label, idx) => (
          <div key={label} className={`stepper-step${step === idx ? ' active' : ''}${step > idx ? ' completed' : ''}`}>
            <div className="stepper-label">{label}</div>
            <div className="stepper-circle-row">
              <div className="stepper-circle">{idx + 1}</div>
              <div className='progress-line-container'>

                {idx < steps.length - 1 && <div className="stepper-line" />}
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="product-form">
        {step === 0 && (
          <div className="form-section">
            <h3>Product Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Product Name *</label>
                <input
                  type="text"
                  value={formData.Name}
                  onChange={e => handleInputChange('Name', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>SKU *</label>
                <input
                  type="text"
                  value={formData.SKU}
                  onChange={e => handleInputChange('SKU', e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Description *</label>
              <textarea
                value={formData.Description}
                onChange={e => handleInputChange('Description', e.target.value)}
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Category *</label>
                <select
                  value={formData.CategoryID}
                  onChange={e => handleInputChange('CategoryID', Number(e.target.value))}
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Subcategory</label>
                <select
                  value={formData.SubCategoryID}
                  onChange={e => handleInputChange('SubCategoryID', Number(e.target.value))}
                  disabled={!formData.CategoryID}
                >
                  <option value="">Select Subcategory</option>
                  {subcategories.filter(sub => sub.categoryId === formData.CategoryID).map(sub => (
                    <option key={sub.id} value={sub.id}>{sub.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Material</label>
                <select
                  value={formData.MaterialID}
                  onChange={e => handleInputChange('MaterialID', Number(e.target.value))}
                >
                  <option value="">Select Material</option>
                  {materials.map(mat => (
                    <option key={mat.id} value={mat.id}>{mat.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Brand</label>
                <select
                  value={formData.BrandID}
                  onChange={e => handleInputChange('BrandID', Number(e.target.value))}
                >
                  <option value="">Select Brand</option>
                  {brands.map(brand => (
                    <option key={brand.id} value={brand.id}>{brand.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Gender</label>
                <select
                  value={formData.Gender}
                  onChange={e => handleInputChange('Gender', e.target.value)}
                >
                  <option value="">Select Gender</option>
                  {genders.map(gender => (
                    <option key={gender} value={gender}>{gender}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Style</label>
                <select
                  value={formData.StyleID}
                  onChange={e => handleInputChange('StyleID', Number(e.target.value))}
                >
                  <option value="">Select Style</option>
                  {styles.map(style => (
                    <option key={style.id} value={style.id}>{style.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Price *</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.Price}
                  onChange={e => handleInputChange('Price', parseFloat(e.target.value))}
                  required
                />
              </div>
              <div className="form-group">
                <label>Discount Price</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.DiscountPrice}
                  onChange={e => handleInputChange('DiscountPrice', parseFloat(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label>Weight (grams)</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.Weight}
                  onChange={e => handleInputChange('Weight', parseFloat(e.target.value))}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Occasion</label>
              <select
                value={formData.OccasionID}
                onChange={e => handleInputChange('OccasionID', Number(e.target.value))}
              >
                <option value="">Select Occasion</option>
                {occasions.map(occ => (
                  <option key={occ.id} value={occ.id}>{occ.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Main Image 1</label>
              <input
                type="file"
                accept="image/*"
                onChange={e => {
                  const file = e.target.files?.[0];
                  if (file) handleMainImageUpload(1, file);
                }}
              />
              {formData.MainImageURL1 && (
                <img src={formData.MainImageURL1} alt="Main 1" style={{ maxWidth: 120, marginTop: 8 }} />
              )}
            </div>
            <div className="form-group">
              <label>Main Image 2</label>
              <input
                type="file"
                accept="image/*"
                onChange={e => {
                  const file = e.target.files?.[0];
                  if (file) handleMainImageUpload(2, file);
                }}
              />
              {formData.MainImageURL2 && (
                <img src={formData.MainImageURL2} alt="Main 2" style={{ maxWidth: 120, marginTop: 8 }} />
              )}
            </div>
            <div className="form-group">
              <label>Gallery Images</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={e => {
                  if (e.target.files) handleGalleryUpload(e.target.files);
                }}
              />
              <div className="images-grid">
                {formData.GalleryImages.map((img, idx) => (
                  <div key={idx} className="image-item">
                    <img src={img} alt={`Gallery ${idx + 1}`} style={{ maxWidth: 80 }} />
                    <button type="button" onClick={() => removeGalleryImage(idx)}>×</button>
                  </div>
                ))}
              </div>
            </div>
            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={formData.IsFeatured}
                  onChange={e => handleInputChange('IsFeatured', e.target.checked)}
                />
                Featured Product
              </label>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="form-section">
            <h3>Product Variants</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {variants.map((variant, idx) => (
                <div key={idx} className="form-row" style={{ alignItems: 'center' }}>
                  <div className="form-group">
                    <label>Color</label>
                    <div className="color-size-adder">
                      <select
                        value={variant.color}
                        onChange={e => handleVariantChange(idx, 'color', e.target.value)}
                        style={{ flex: 1 }}
                      >
                        <option value="">Select Color</option>
                        {colors.map(color => (
                          <option key={color} value={color}>{color}</option>
                        ))}
                      </select>
                      <input
                        type="text"
                        placeholder="Add color"
                        value={newColor}
                        onChange={e => setNewColor(e.target.value)}
                        style={{ flex: 1 }}
                      />
                      <button
                        type="button"
                        className="save-btn"
                        onClick={() => {
                          if (newColor && !colors.includes(newColor)) {
                            setColors([...colors, newColor]);
                            setNewColor('');
                          }
                        }}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Size</label>
                    <div className="color-size-adder">
                      <select
                        value={variant.size}
                        onChange={e => handleVariantChange(idx, 'size', e.target.value)}
                        style={{ flex: 1 }}
                      >
                        <option value="">Select Size</option>
                        {sizes.map(size => (
                          <option key={size.id} value={size.name}>{size.name}</option>
                        ))}
                      </select>
                      <input
                        type="text"
                        placeholder="Add size"
                        value={newSize}
                        onChange={e => setNewSize(e.target.value)}
                        style={{ flex: 1 }}
                      />
                      <button
                        type="button"
                        className="save-btn"
                        onClick={() => {
                          if (newSize && !sizes.some(s => s.name === newSize)) {
                            setSizes([...sizes, { id: sizes.length ? Math.max(...sizes.map(s => s.id)) + 1 : 1, name: newSize }]);
                            setNewSize('');
                          }
                        }}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Quantity</label>
                    <input
                      type="number"
                      min={0}
                      value={variant.quantity}
                      onChange={e => handleVariantChange(idx, 'quantity', parseInt(e.target.value) || 0)}
                    />
                  </div>
                  <div className="form-group" style={{ alignSelf: 'flex-end' }}>
                    <button
                      type="button"
                      className="cancel-btn"
                      onClick={() => removeVariant(idx)}
                      style={{ padding: '8px 14px', marginLeft: 8 }}
                      disabled={variants.length === 1}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              ))}
              <button type="button" className="save-btn" onClick={addVariant} style={{ width: 180, alignSelf: 'flex-start', marginTop: 8 }}>
                <FontAwesomeIcon icon={faPlus} /> Add Variant
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="form-section">
            <h3>Images & Gallery</h3>
            <div className="form-group">
              <label>Main Image 1</label>
              <input
                type="file"
                accept="image/*"
                onChange={e => {
                  const file = e.target.files?.[0];
                  if (file) handleMainImageUpload(1, file);
                }}
              />
              {formData.MainImageURL1 && (
                <img src={formData.MainImageURL1} alt="Main 1" style={{ maxWidth: 120, marginTop: 8 }} />
              )}
            </div>
            <div className="form-group">
              <label>Main Image 2</label>
              <input
                type="file"
                accept="image/*"
                onChange={e => {
                  const file = e.target.files?.[0];
                  if (file) handleMainImageUpload(2, file);
                }}
              />
              {formData.MainImageURL2 && (
                <img src={formData.MainImageURL2} alt="Main 2" style={{ maxWidth: 120, marginTop: 8 }} />
              )}
            </div>
            <div className="form-group">
              <label>Gallery Images</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={e => {
                  if (e.target.files) handleGalleryUpload(e.target.files);
                }}
              />
              <div className="images-grid">
                {formData.GalleryImages.map((img, idx) => (
                  <div key={idx} className="image-item">
                    <img src={img} alt={`Gallery ${idx + 1}`} style={{ maxWidth: 80 }} />
                    <button type="button" onClick={() => removeGalleryImage(idx)}>×</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="form-section">
            <h3>Review & Submit</h3>
            <div className="review-card-preview">
              <ProductCard
                id={formData.SKU || 'preview'}
                name={formData.Name}
                currentPrice={formData.Price}
                oldPrice={formData.DiscountPrice || undefined}
                mainImage={formData.MainImageURL1 || formData.MainImageURL2 || (formData.GalleryImages[0] || '')}
                hoverImage={formData.MainImageURL2 || formData.MainImageURL1 || (formData.GalleryImages[1] || formData.GalleryImages[0] || '')}
                badge={formData.IsFeatured ? 'new' : undefined}
                salePercentage={formData.DiscountPrice ? Math.round(100 - (formData.DiscountPrice / formData.Price) * 100) : undefined}
                rating={4.5}
              />
            </div>
            {/* Optionally show more details here, like variants table */}
          </div>
        )}
        <div className="stepper-nav">
          {step > 0 && <button type="button" className="cancel-btn" onClick={prevStep}>Back</button>}
          {step < steps.length - 1 && <button type="button" className="save-btn" onClick={nextStep}>Next</button>}
          {step === steps.length - 1 && <button className="save-btn" type="submit">{isEditing ? 'Update Product' : 'Save Product'}</button>}
        </div>
      </form>
    </div>
  );
};

export default AddEditProduct; 