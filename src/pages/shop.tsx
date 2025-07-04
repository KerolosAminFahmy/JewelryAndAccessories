import React, { useState } from 'react';
import { ProductCard } from '../components';
import SectionHeader from '../components/SectionHeader';
import '../index.css';

// Mock product data
const mockProducts = [
  {
    id: '1',
    name: 'Elegant Gold Watch',
    currentPrice: 199.99,
    oldPrice: 249.99,
    mainImage: '/src/assets/collectionV1-img1.webp',
    hoverImage: '/src/assets/collectionV1-img2.webp',
    badge: 'sale' as 'sale',
    salePercentage: 20,
    rating: 4,
    tags: ['luxury', 'gold'],
    category: 'Watches',
    color: 'gold',
  },
  {
    id: '2',
    name: 'Classic Leather Bag',
    currentPrice: 149.99,
    mainImage: '/src/assets/collectionV1-img3.webp',
    hoverImage: '/src/assets/collectionV1-img4.webp',
    badge: 'new' as 'new',
    rating: 5,
    tags: ['classic', 'leather'],
    category: 'Bags',
    color: 'brown',
  },
  {
    id: '3',
    name: 'Modern Sunglasses',
    currentPrice: 89.99,
    oldPrice: 109.99,
    mainImage: '/src/assets/collectionV1-img5.webp',
    hoverImage: '/src/assets/collectionV1-img6.webp',
    badge: 'sale' as 'sale',
    salePercentage: 18,
    rating: 3,
    tags: ['modern', 'summer'],
    category: 'Accessories',
    color: 'black',
  },
  {
    id: '4',
    name: 'Luxury Gold Ring',
    currentPrice: 299.99,
    mainImage: '/src/assets/28.webp',
    hoverImage: '/src/assets/25.webp',
    badge: 'new' as 'new',
    rating: 5,
    tags: ['luxury', 'gold'],
    category: 'Jewelry',
    color: 'gold',
  },
  {
    id: '5',
    name: 'Elegant Gold Watch',
    currentPrice: 199.99,
    oldPrice: 249.99,
    mainImage: '/src/assets/collectionV1-img1.webp',
    hoverImage: '/src/assets/collectionV1-img2.webp',
    badge: 'sale' as 'sale',
    salePercentage: 20,
    rating: 4,
    tags: ['luxury', 'gold'],
    category: 'Watches',
    color: 'gold',
  },
  {
    id: '6',
    name: 'Classic Leather Bag',
    currentPrice: 149.99,
    mainImage: '/src/assets/collectionV1-img3.webp',
    hoverImage: '/src/assets/collectionV1-img4.webp',
    badge: 'new' as 'new',
    rating: 5,
    tags: ['classic', 'leather'],
    category: 'Bags',
    color: 'brown',
  },
  {
    id: '7',
    name: 'Modern Sunglasses',
    currentPrice: 89.99,
    oldPrice: 109.99,
    mainImage: '/src/assets/collectionV1-img5.webp',
    hoverImage: '/src/assets/collectionV1-img6.webp',
    badge: 'sale' as 'sale',
    salePercentage: 18,
    rating: 3,
    tags: ['modern', 'summer'],
    category: 'Accessories',
    color: 'black',
  },
  {
      id: '8',
    name: 'Luxury Gold Ring',
    currentPrice: 299.99,
    mainImage: '/src/assets/28.webp',
    hoverImage: '/src/assets/25.webp',
    badge: 'new' as 'new',
    rating: 5,
    tags: ['luxury', 'gold'],
    category: 'Jewelry',
    color: 'gold',
  },
];

const allTags = ['luxury', 'gold', 'classic', 'leather', 'modern', 'summer'];
const allCategories = ['Watches', 'Bags', 'Accessories', 'Jewelry'];
const allColors = [
  { name: 'Gold', value: 'gold', code: '#bfa46d' },
  { name: 'Brown', value: 'brown', code: '#8d6748' },
  { name: 'Black', value: 'black', code: '#181818' },
];
const sortOptions = [
  { label: 'Default', value: 'default' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Name: A-Z', value: 'name-asc' },
  { label: 'Name: Z-A', value: 'name-desc' },
];

const ITEMS_PER_PAGE = 6;

const Shop: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 400]);
  const [sort, setSort] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filtering logic
  const filteredProducts = mockProducts.filter(product => {
    const tagMatch = selectedTags.length === 0 || product.tags.some(tag => selectedTags.includes(tag));
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
    const priceMatch = product.currentPrice >= priceRange[0] && product.currentPrice <= priceRange[1];
    return tagMatch && categoryMatch && colorMatch && priceMatch;
  });

  // Sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case 'price-asc':
        return a.currentPrice - b.currentPrice;
      case 'price-desc':
        return b.currentPrice - a.currentPrice;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedTags, selectedCategories, selectedColors, priceRange, sort]);

  // Handlers
  const handleTagChange = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };
  const handleCategoryChange = (cat: string) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };
  const handleColorChange = (color: string) => {
    setSelectedColors(prev => prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]);
  };
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, idx: 0 | 1) => {
    const val = Number(e.target.value);
    setPriceRange(prev => idx === 0 ? [val, prev[1]] : [prev[0], val]);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPaginationNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  // Filter Sidebar Component
  const FilterSidebar = ({ isMobile = false }: { isMobile?: boolean }) => (
    <aside style={{ 
      minWidth: isMobile ? '100%' : 280, 
      maxWidth: isMobile ? '100%' : 320, 
      background: 'var(--color-card-bg)', 
      borderRadius: isMobile ? 0 : 20, 
      boxShadow: 'var(--color-shadow)', 
      padding: isMobile ? 24 : 32, 
      border: isMobile ? 'none' : '1px solid var(--color-border)',
      position: isMobile ? 'relative' : 'sticky',
      top: isMobile ? 'auto' : 32,
      height: isMobile ? '100vh' : 'fit-content',
      overflowY: isMobile ? 'auto' : 'visible',
      zIndex: isMobile ? 1000 : 'auto'
    }}>
      {/* Mobile Header */}
      {isMobile && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 24,
          paddingBottom: 16,
          borderBottom: '2px solid var(--color-border)'
        }}>
          <h3 style={{
            color: 'var(--color-primary)',
            fontSize: 20,
            fontWeight: 700,
            fontFamily: 'var(--font-title)',
            margin: 0
          }}>
            Filters
          </h3>
          <button
            onClick={() => setIsMobileFilterOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 24,
              color: 'var(--color-primary)',
              cursor: 'pointer',
              padding: 8,
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            ✕
          </button>
        </div>
      )}

      {/* Tag Filter */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ 
          fontWeight: 700, 
          color: 'var(--color-primary)', 
          fontSize: 20, 
          marginBottom: 8,
          fontFamily: 'var(--font-title)'
        }}>
          Tags
        </div>
        <div style={{ 
          height: 3, 
          width: '40%', 
          background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)', 
          borderRadius: 2, 
          marginBottom: 20 
        }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {allTags.map(tag => (
            <label key={tag} style={{ 
              fontSize: 14, 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '8px 12px',
              borderRadius: 20,
              border: selectedTags.includes(tag) ? '2px solid var(--color-primary)' : '2px solid var(--color-border)',
              background: selectedTags.includes(tag) ? 'var(--color-primary)' : 'transparent',
              color: selectedTags.includes(tag) ? '#fff' : 'var(--color-text)',
              transition: 'all 0.3s ease',
              fontWeight: selectedTags.includes(tag) ? 600 : 400
            }}>
              <input 
                type="checkbox" 
                checked={selectedTags.includes(tag)} 
                onChange={() => handleTagChange(tag)} 
                style={{ display: 'none' }} 
              />
              {tag}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ 
          fontWeight: 700, 
          color: 'var(--color-primary)', 
          fontSize: 20, 
          marginBottom: 8,
          fontFamily: 'var(--font-title)'
        }}>
          Price Range
        </div>
        <div style={{ 
          height: 3, 
          width: '40%', 
          background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)', 
          borderRadius: 2, 
          marginBottom: 20 
        }} />
        <div style={{ marginBottom: 16 }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: 12
          }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: 16 }}>
              ${priceRange[0]}
            </span>
            <span style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: 16 }}>
              ${priceRange[1]}
            </span>
          </div>
          <div style={{ position: 'relative', height: 6 }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 6,
              background: 'var(--color-border)',
              borderRadius: 3
            }} />
            <div style={{
              position: 'absolute',
              top: 0,
              left: `${(priceRange[0] / 400) * 100}%`,
              right: `${100 - (priceRange[1] / 400) * 100}%`,
              height: 6,
              background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
              borderRadius: 3
            }} />
            <input
              type="range"
              min="0"
              max="400"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              style={{
                position: 'absolute',
                top: -4,
                left: 0,
                right: 0,
                width: '100%',
                height: 14,
                background: 'transparent',
                pointerEvents: 'none',
                appearance: 'none',
                zIndex: 2
              }}
            />
            <input
              type="range"
              min="0"
              max="400"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              style={{
                position: 'absolute',
                top: -4,
                left: 0,
                right: 0,
                width: '100%',
                height: 14,
                background: 'transparent',
                pointerEvents: 'none',
                appearance: 'none',
                zIndex: 2
              }}
            />
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ 
          fontWeight: 700, 
          color: 'var(--color-primary)', 
          fontSize: 20, 
          marginBottom: 8,
          fontFamily: 'var(--font-title)'
        }}>
          Category
        </div>
        <div style={{ 
          height: 3, 
          width: '40%', 
          background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)', 
          borderRadius: 2, 
          marginBottom: 20 
        }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {allCategories.map(cat => (
            <label key={cat} style={{ 
              fontSize: 15, 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '10px 16px',
              borderRadius: 12,
              border: selectedCategories.includes(cat) ? '2px solid var(--color-primary)' : '2px solid var(--color-border)',
              background: selectedCategories.includes(cat) ? 'var(--color-primary)' : 'transparent',
              color: selectedCategories.includes(cat) ? '#fff' : 'var(--color-text)',
              transition: 'all 0.3s ease',
              fontWeight: selectedCategories.includes(cat) ? 600 : 400
            }}>
              <input 
                type="checkbox" 
                checked={selectedCategories.includes(cat)} 
                onChange={() => handleCategoryChange(cat)} 
                style={{ display: 'none' }} 
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div style={{ marginBottom: 8 }}>
        <div style={{ 
          fontWeight: 700, 
          color: 'var(--color-primary)', 
          fontSize: 20, 
          marginBottom: 8,
          fontFamily: 'var(--font-title)'
        }}>
          Color
        </div>
        <div style={{ 
          height: 3, 
          width: '40%', 
          background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)', 
          borderRadius: 2, 
          marginBottom: 20 
        }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {allColors.map(color => (
            <label key={color.value} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer', 
              gap: 12,
              padding: '10px 16px',
              borderRadius: 12,
              border: selectedColors.includes(color.value) ? '2px solid var(--color-primary)' : '2px solid var(--color-border)',
              background: selectedColors.includes(color.value) ? 'rgba(191, 164, 109, 0.1)' : 'transparent',
              transition: 'all 0.3s ease'
            }}>
              <input 
                type="checkbox" 
                checked={selectedColors.includes(color.value)} 
                onChange={() => handleColorChange(color.value)} 
                style={{ display: 'none' }} 
              />
              <span style={{
                display: 'inline-block',
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: color.code,
                border: selectedColors.includes(color.value) ? '3px solid var(--color-primary)' : '3px solid #fff',
                boxShadow: selectedColors.includes(color.value) 
                  ? '0 0 0 2px var(--color-primary-dark), 0 4px 12px rgba(191, 164, 109, 0.3)' 
                  : '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
              }} />
              <span style={{ 
                color: 'var(--color-text)', 
                fontSize: 15,
                fontWeight: selectedColors.includes(color.value) ? 600 : 400
              }}>
                {color.name}
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );

  return (
    <div style={{ background: 'var(--color-bg)' }}>
      {/* Responsive CSS */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-sidebar {
            display: block !important;
          }
          .mobile-filter-btn {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .desktop-sidebar {
            display: none !important;
          }
          .mobile-filter-btn {
            display: flex !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/src/assets/slideshowV1-bg1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
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
          maxWidth: '800px',
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
            Discover Our Collection
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#fff',
            marginBottom: '32px',
            fontFamily: 'var(--font-body)',
            lineHeight: 1.6,
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            opacity: 0.95
          }}>
            Explore our curated selection of luxury accessories, elegant timepieces, and sophisticated fashion pieces. 
            Each item is carefully chosen to reflect timeless elegance and exceptional craftsmanship.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.95rem',
            color: '#fff',
            opacity: 0.9
          }}>
            <span>Home</span>
            <span style={{ color: 'var(--color-primary)' }}>/</span>
            <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Shop</span>
          </div>
        </div>
      </section>
      <div style={{ width:"fit-content",margin:"0 auto" }}>
        <SectionHeader title="Shop All Products" />
      </div>
      {/* Main Content */}
      <div style={{ 
        display: 'flex', 
        gap: 32, 
        alignItems: 'flex-start', 
        padding: '32px 0', 
        maxWidth: '1400px', 
        margin: '0 auto',
        position: 'relative'
      }}>
        {/* Desktop Sidebar Filters */}
        <div style={{ 
          display: 'none'
        }} className="desktop-sidebar">
          <FilterSidebar />
        </div>

        {/* Main Content */}
        <main style={{ flex: 1, minWidth: 0 }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: 24,
            flexWrap: 'wrap',
            gap: 16
          }}>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 8,
              flexWrap: 'wrap'
            }}>
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                style={{
                  padding: '10px 16px',
                  borderRadius: 12,
                  border: '2px solid var(--color-primary)',
                  background: 'var(--color-primary)',
                  color: '#fff',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: 600,
                  fontSize: 14,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8
                }}
                className="mobile-filter-btn"
              >
                <span style={{ fontSize: 16 }}>☰</span>
                Filters
              </button>
              
              <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Sort by:</span>
              <select 
                value={sort} 
                onChange={e => setSort(e.target.value)} 
                style={{ 
                  borderRadius: 12, 
                  border: '2px solid var(--color-border)', 
                  padding: '8px 16px', 
                  color: 'var(--color-text)',
                  background: 'var(--color-card-bg)',
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 32,
            marginBottom: 48
          }}>
            {currentProducts.length === 0 ? (
              <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: 22, gridColumn: '1/-1', textAlign: 'center', marginTop: 40 }}>
                No products found.
              </div>
            ) : (
              currentProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
              marginTop: 32,
              flexWrap: 'wrap'
            }}>
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={{
                  padding: '12px 16px',
                  borderRadius: 12,
                  border: '2px solid var(--color-border)',
                  background: currentPage === 1 ? 'var(--color-border)' : 'var(--color-card-bg)',
                  color: currentPage === 1 ? '#999' : 'var(--color-primary)',
                  cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: 600,
                  fontSize: 14
                }}
              >
                Previous
              </button>

              {/* Page Numbers */}
              <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                {renderPaginationNumbers().map((page, index) => (
                  <button
                    key={index}
                    onClick={() => typeof page === 'number' ? handlePageChange(page) : null}
                    disabled={page === '...'}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      border: '2px solid var(--color-border)',
                      background: page === currentPage ? 'var(--color-primary)' : 'var(--color-card-bg)',
                      color: page === currentPage ? '#fff' : page === '...' ? '#999' : 'var(--color-text)',
                      cursor: page === '...' ? 'default' : 'pointer',
                      transition: 'all 0.3s ease',
                      fontWeight: page === currentPage ? 700 : 500,
                      fontSize: 14,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{
                  padding: '12px 16px',
                  borderRadius: 12,
                  border: '2px solid var(--color-border)',
                  background: currentPage === totalPages ? 'var(--color-border)' : 'var(--color-card-bg)',
                  color: currentPage === totalPages ? '#999' : 'var(--color-primary)',
                  cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: 600,
                  fontSize: 14
                }}
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Filter Overlay */}
      {isMobileFilterOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'stretch'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '350px',
            background: 'var(--color-card-bg)',
            transform: 'translateX(0)',
            transition: 'transform 0.3s ease',
            overflow: 'hidden'
          }}>
            <FilterSidebar isMobile={true} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
