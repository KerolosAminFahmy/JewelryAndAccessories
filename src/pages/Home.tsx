// import { useState } from 'react'

// import { useTranslation, Trans } from 'react-i18next';
// import { useTheme } from '../theme/ThemeProvider';
import HeroSlider from '../components/HeroSlider';
import { ProductCard, SectionHeader, ReviewCard } from '../components';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import collection1 from '../assets/collectionV1-img1.webp'
import collection2 from '../assets/collectionV1-img2.webp'
import collection3 from '../assets/collectionV1-img3.webp'
import collection4 from '../assets/collectionV1-img4.webp'
import collection5 from '../assets/collectionV1-img5.webp'
import collection6 from '../assets/collectionV1-img6.webp'
import product from '../assets/25.webp'
import product1 from '../assets/28.webp'
import bgReview from '../assets/slideshowV1-bg2.webp';
import user from '../assets/testimonial-img2.webp'
import user1 from '../assets/testimonial-img3.webp'
import './home.css'
import CollectionElement from '../components/CollectionElement';
import { Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';


const Home = () => {
  // const [count, setCount] = useState(0)
  // const { t, i18n } = useTranslation();
  // const { theme, toggleTheme } = useTheme();

  // const changeLanguage = () => {
  //   i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  // };
  const collection=[
    {
      imageUrl:collection1,
      alt: "Image NeckLaces",
      label:"NeckLaces"
    },
    {
      imageUrl:collection2,
      alt: "Image Ring",
      label:"Ring"
    }, {
      imageUrl:collection3,
      alt: "Image Bracelets",
      label:"Bracelets"
    }, {
      imageUrl:collection4,
      alt: "Image Earrings",
      label:"Earrings"
    }, {
      imageUrl:collection5,
      alt: "Image Charm & Dangles",
      label:"Charm & Dangles"
    }, {
      imageUrl:collection6,
      alt: "Image NeckLaces",
      label:"NeckLaces"
    }, {
      imageUrl:collection1,
      alt: "Image Gift Ideas",
      label:"Gift Ideas"
    },
  ]
  const reviews = [
    {
      text: 'Absolutely stunning jewelry! The quality exceeded my expectations and the customer service was fantastic.',
      image: product, // You can replace with real user images
      rating: 5,
      name: 'Sarah M.'
    },
    {
      text: 'I love my new ring! It arrived quickly and looks even better in person.',
      image: user,
      rating: 4,
      name: 'Emily R.'
    },
    {
      text: 'Beautiful craftsmanship and elegant design. Will definitely shop again.',
      image: user1,
      rating: 5,
      name: 'Olivia K.'
    },
    {
      text: 'Great value for the price. The packaging was lovely too!',
      image: user,
      rating: 4,
      name: 'Liam T.'
    },
    {
      text: 'A perfect gift for my wife. She was thrilled!',
      image: user,
      rating: 5,
      name: 'James B.'
    },
  ];
  return (
    <div className="home-page">
      <HeroSlider />
      <section className='collection container'>
        <div className="title-section">

          <SectionHeader title='Our collection'></SectionHeader>
        </div>
        <div className="content-collection">
          {/* Responsive: Swiper slider on small screens, grid on large screens */}
          <div className="d-block">
            <Swiper
             modules={[ Pagination, Autoplay]}
              pagination={{ clickable: true }}
              spaceBetween={10}
              
              breakpoints={{
                570: { slidesPerView: 2 },
                590: { slidesPerView: 2 },
                600: { slidesPerView: 3 },
                675: { slidesPerView: 3 },
                685: { slidesPerView: 3 },
                950: { slidesPerView: 5 },
                1059: { slidesPerView:7 },
              }}
            >
              {collection.map((ele, idx) => (
                <SwiperSlide key={idx}>
                  <CollectionElement image={ele.imageUrl} label={ele.label} alt={ele.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>
      <section className='best-sales'>
        <div className="title-section">
          <SectionHeader title='Best Sales' description='Best Seller Product This Week!'></SectionHeader>
        </div>
        <div className="content container">

        <Row className="justify-content-space-between">
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <div style={{  maxWidth: 500, width: '100%' }}>
              <ProductCard
                id="product-1"
                name="Elegant Diamond Ring"
                currentPrice={299.99}
                oldPrice={399.99}
                mainImage={product}
                hoverImage={product1}
                badge='new'
                rating={2}
                onQuickView={(id) => console.log('Quick view:', id)}
                onAddToCart={(id) => console.log('Add to cart:', id)}
                onAddToWishlist={(id) => console.log('Add to wishlist:', id)}
              />
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <div style={{  maxWidth: 500, width: '100%' }}>
              <ProductCard
                id="product-1"
                name="Elegant Diamond Ring"
                currentPrice={299.99}
                oldPrice={399.99}
                mainImage={product}
                hoverImage={product1}
                badge='out-of-stock'
                rating={3}
                onQuickView={(id) => console.log('Quick view:', id)}
                onAddToCart={(id) => console.log('Add to cart:', id)}
                onAddToWishlist={(id) => console.log('Add to wishlist:', id)}
              />
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <div style={{  maxWidth: 500, width: '100%' }}>
              <ProductCard
                id="product-1"
                name="Elegant Diamond Ring"
                currentPrice={299.99}
                oldPrice={399.99}
                mainImage={product}
                hoverImage={product1}
                badge='sale'
                rating={4.5}
                onQuickView={(id) => console.log('Quick view:', id)}
                onAddToCart={(id) => console.log('Add to cart:', id)}
                onAddToWishlist={(id) => console.log('Add to wishlist:', id)}
              />
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <div style={{  maxWidth: 500, width: '100%' }}>
              <ProductCard
                id="product-1"
                name="Elegant Diamond Ring"
                currentPrice={299.99}
                oldPrice={399.99}
                mainImage={product}
                hoverImage={product1}
                badge='sale'
                rating={4.5}
                onQuickView={(id) => console.log('Quick view:', id)}
                onAddToCart={(id) => console.log('Add to cart:', id)}
                onAddToWishlist={(id) => console.log('Add to wishlist:', id)}
              />
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <div style={{  maxWidth: 500, width: '100%' }}>
              <ProductCard
                id="product-1"
                name="Elegant Diamond Ring"
                currentPrice={299.99}
                oldPrice={399.99}
                mainImage={product}
                hoverImage={product1}
                badge='sale'
                rating={4.5}
                onQuickView={(id) => console.log('Quick view:', id)}
                onAddToCart={(id) => console.log('Add to cart:', id)}
                onAddToWishlist={(id) => console.log('Add to wishlist:', id)}
              />
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <div style={{  maxWidth: 500, width: '100%' }}>
              <ProductCard
                id="product-1"
                name="Elegant Diamond Ring"
                currentPrice={299.99}
                oldPrice={399.99}
                mainImage={product}
                hoverImage={product1}
                badge='sale'
                rating={4.5}
                onQuickView={(id) => console.log('Quick view:', id)}
                onAddToCart={(id) => console.log('Add to cart:', id)}
                onAddToWishlist={(id) => console.log('Add to wishlist:', id)}
              />
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <div style={{  maxWidth: 500, width: '100%' }}>
              <ProductCard
                id="product-1"
                name="Elegant Diamond Ring"
                currentPrice={299.99}
                oldPrice={399.99}
                mainImage={product}
                hoverImage={product1}
                badge='sale'
                rating={4.5}
                onQuickView={(id) => console.log('Quick view:', id)}
                onAddToCart={(id) => console.log('Add to cart:', id)}
                onAddToWishlist={(id) => console.log('Add to wishlist:', id)}
              />
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <div style={{  maxWidth: 500, width: '100%' }}>
              <ProductCard
                id="product-1"
                name="Elegant Diamond Ring"
                currentPrice={299.99}
                oldPrice={399.99}
                mainImage={product}
                hoverImage={product1}
                badge='sale'
                rating={4.5}
                onQuickView={(id) => console.log('Quick view:', id)}
                onAddToCart={(id) => console.log('Add to cart:', id)}
                onAddToWishlist={(id) => console.log('Add to wishlist:', id)}
              />
            </div>
          </Col>
        </Row>
        </div>
      </section>
      {/* Customer Reviews Section */}
          <div className="title-section mb-4">
            <SectionHeader title="What Our Customers Say" description="Real reviews from our valued customers" />
          </div>
      <section className="customer-reviews-section position-relative py-5" style={{ background: `url(${bgReview}) center/cover no-repeat`, minHeight: 400 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)', zIndex: 1 }} />
        <div className="position-relative" style={{ zIndex: 2 }}>
          <div className="review-slider-container mx-auto" style={{ width: '90vw', maxWidth: 1100 }}>
            <Swiper
              modules={[ Pagination, Autoplay ]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              breakpoints={{
                576: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
              }}
            >
              {reviews.map((review, idx) => (
                <SwiperSlide key={idx}>
                  <ReviewCard {...review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home; 