// File: src/App.tsx
import React from 'react';
import Navbar from './components/nav-bar/NavBar.component';
import Carousel from './components/carousel/Carousel.Component';
import { createGlobalStyle } from 'styled-components';

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
          price="$35,000"
          title="Mercedes-Benz C Class"
          subtitle="Luxury Sedan with Premium Features"
        />
      </div>
    </>
  );
};

export default App;