// File: src/components/Navbar/Navbar.styles.ts
import styled from 'styled-components';
import Logo from './Logo.component';

interface NavbarContainerProps {
  isScrolled: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
}

interface NavLinkProps {
  mobile?: boolean;
}

export const NavbarContainer = styled.nav<NavbarContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: ${(props) => (props.isScrolled ? '8px 0' : '15px 0')};
  background-color: ${(props) => 
    props.isScrolled 
      ? 'rgba(0, 0, 0, 0.9)' 
      : 'rgba(0, 0, 0, 0.2)'};
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  box-shadow: ${(props) => 
    props.isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none'};
`;

export const NavbarInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled(Logo)`
  height: 50px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 24px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a<NavLinkProps>`
  color: white;
  text-decoration: none;
  font-weight: ${(props) => (props.mobile ? 'bold' : '600')};
  font-size: ${(props) => (props.mobile ? '18px' : '16px')};
  padding: ${(props) => (props.mobile ? '16px 0' : '0')};
  display: ${(props) => (props.mobile ? 'block' : 'inline-block')};
  transition: color 0.3s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  
  &:hover {
    color: #d4af37; /* Gold color to match logo */
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div<MobileMenuProps>`
  display: none;
  
  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.95);
    padding: 20px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;