// File: src/components/Navbar/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { 
  NavbarContainer, 
  NavbarInner, 
  Logo, 
  NavLinks,
  NavLink,
  MobileMenuButton,
  MobileMenu
} from './NavBar.styles';

interface NavItem {
  id: number;
  label: string;
  url: string;
}

interface NavbarProps {
  logo: string;
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ logo, navItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarContainer isScrolled={isScrolled}>
      <NavbarInner>
        <Logo src={logo} alt="Site Logo" />
        
        <NavLinks>
          {navItems.map((item) => (
            <NavLink key={item.id} href={item.url}>
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
        
        <MobileMenuButton onClick={toggleMobileMenu}>
          ☰
        </MobileMenuButton>
        
        <MobileMenu isOpen={isMobileMenuOpen}>
          {navItems.map((item) => (
            <NavLink key={item.id} href={item.url} mobile>
              {item.label}
            </NavLink>
          ))}
        </MobileMenu>
      </NavbarInner>
    </NavbarContainer>
  );
};

export default Navbar;