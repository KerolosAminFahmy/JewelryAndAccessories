import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Layout } from './components';
import {  Countdown } from './pages';
// import { Home, About, Contact, NotFound, Login, Cart,ProductDetail,Shop } from './pages';
// import { 
//   DashboardLayout, 
//   DashboardHome, 
//   ProductManagement, 
//   ProductRequests, 
//   Orders, 
//   Customers, 
//   Analytics, 
//   Settings,
//   AddEditProduct
// } from './pages/dashboard';
// import CustomerProfileEdit from './pages/CustomerProfileEdit';
// import CustomerOrderTrack from './pages/CustomerOrderTrack';
// import CustomerOrderHistory from './pages/CustomerOrderHistory';
// import CustomerPreferences from './pages/CustomerPreferences';
// import CustomerProfileMain from './pages/CustomerProfileMain';
// import CustomerProfileLayout from './pages/CustomerProfileLayout';
import './App.css';
// import Shop from './pages/shop';
// import ProductDetail from './pages/ProductDetail';

function App() {
  //const { i18n } = useTranslation();

  /*const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };*/

  return (
    
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
