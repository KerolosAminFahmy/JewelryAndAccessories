import { useTheme } from '../theme/ThemeProvider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import slideImage from '../assets/slideshowV1-bg1.jpg';
import sildeImage1 from '../assets/slideshowV1-bg2.webp';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';
import './HeroSlider.css';
import { Button } from 'react-bootstrap';

// Placeholder images (replace with your own if needed)
const slides = [
  {
    image: slideImage,
    textKey: 'slider.jewelry',
    defaultText: 'Elegant Jewelry for Every Occasion',
    bigSale: 'BIG SALE',
    productTitle: 'Rings For Woman',
    discount: 'Discount Cosmetic up to 80% off',
    cta: 'SHOP NOW'
  },
  {
    image: sildeImage1,
    textKey: 'slider.accessories',
    defaultText: 'Stunning Accessories to Complete Your Look',
    bigSale: 'BIG SALE',
    productTitle: 'Accessories Collection',
    discount: 'Discount up to 70% off',
    cta: 'SHOP NOW'
  },
];

const HeroSlider = () => {
    
  const { theme, direction } = useTheme();

  return (
    <section className={`hero-slider ${theme} ${direction}`}
      style={{ minHeight: '100vh', width: '100%', overflow: 'hidden', position: 'relative' }}>
      <Swiper
        modules={[ Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        dir={direction}
        className="swiper-hero"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="slide"
              style={{
                backgroundImage: `url(${slide.image})`,
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <div className="slide-content">
                <div className="slide-text-container">
                  <h1 className="title big-sale">{slide.bigSale}</h1>
                  <h2 className="title product-title">{slide.productTitle}</h2>
                  <p className="description discount-text">{slide.discount}</p>
                  <Button className="shop-now-btn">{slide.cta}</Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider; 