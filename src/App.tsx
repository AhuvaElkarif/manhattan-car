// File: src/App.tsx
import React from 'react';
import Navbar from './components/nav-bar/NavBar.component';
import Carousel from './components/carousel/Carousel.Component';
import { createGlobalStyle } from 'styled-components';
import WhyChooseUs from './components/whyChooseus/WhyChooseUs.component';
import CustomerTestimonials from './components/customer-testimonials/CustomerTestimonials.component';
import AboutPage from './components/about/About.component';
import Footer from './components/footer/Footer.component';
import PremiumBrands from './components/premium-brands/PremiumBrands.component';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }
  
  body {
    background-color: #f5f5f5;
  }
`;

const App: React.FC = () => {
  // Sample data for the navbar
  const navItems = [
    { id: 1, label: 'Home', url: '/' },
    { id: 2, label: 'Cars', url: '/cars' },
    { id: 3, label: 'About', url: '/about' },
    { id: 4, label: 'Services', url: '/services' },
    { id: 5, label: 'Contact', url: '/contact' }
  ];
  
  // Sample data for the carousel
  const carImages = [
    {
      id: 1,
      src: '/images/cars/car1.jpg',
      alt: 'Mercedes-Benz C Class Front View'
    },
    {
      id: 2,
      src: '/images/cars/car2.jpg',
      alt: 'Mercedes-Benz C Class Interior'
    },
    {
      id: 3,
      src: '/images/cars/car3.jpg',
      alt: 'Mercedes-Benz C Class Rear View'
    }
  ];
  
  return (
    <>
      <GlobalStyle />
      <Navbar navItems={navItems} />
      <div>
        <Carousel
          images={carImages}
          title="Mercedes-Benz C Class"
          subtitle="Luxury Sedan with Premium Features"
        />
      </div>
      <div style={{margin:"40px 0"}}>
        <WhyChooseUs/>
      </div>
      <div style={{margin:"40px 0"}}>
        <CustomerTestimonials/>
      </div>
      <div style={{margin:"40px 0"}}>
        <AboutPage/>
      </div>
      <div style={{margin:"40px 0"}}>
        {/* <PremiumBrands/> */}
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default App;