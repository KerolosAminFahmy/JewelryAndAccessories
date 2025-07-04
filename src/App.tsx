import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Layout } from './components';
import {  Countdown } from './pages';
//import { Home, About, Contact, NotFound, Login, Cart, Countdown } from './pages';
import './App.css';
// import Shop from './pages/shop';
// import ProductDetail from './pages/ProductDetail';

function App() {
  //const { i18n } = useTranslation();

  /*const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };*/

  return (
    // <Router>
    //   <Layout>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/cart" element={<Cart />} />
    //       <Route path="/shop" element={<Shop />} />
    //       <Route path="/shop/1" element={<ProductDetail />} />
    //       <Route path="*" element={<NotFound />} />
    //     </Routes>
    //   </Layout>
    // </Router>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Countdown />} />

          <Route path="*" element={<Countdown />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
