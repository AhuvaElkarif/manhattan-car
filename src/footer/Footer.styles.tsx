// FooterStyles.ts
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #0a0a0a;
  color: #ffffff;
  padding: 3rem 0 1rem;
  direction: rtl;
  font-family: 'Rubik', 'Assistant', sans-serif;
  background-image: url('/path-to-pattern.png');
  background-size: cover;
  background-position: center;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const LogoSection = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 450px;
  
  p {
    margin-top: 1rem;
    line-height: 1.6;
    font-size: 0.95rem;
    color: #e0e0e0;
  }
`;

export const LogoImage = styled.img`
  max-width: 200px;
  height: auto;
  margin-bottom: 1rem;
`;

export const FooterColumnsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  flex: 1;
  justify-content: space-between;
  min-width: 300px;
`;

export const FooterColumn = styled.div`
  flex: 1;
  min-width: 150px;
`;

export const ColumnTitle = styled.h3`
  color: #ffffff;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -8px;
    width: 40px;
    height: 2px;
    background-color: #4a90e2;
  }
`;

export const ColumnList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ColumnListItem = styled.li`
  margin-bottom: 0.8rem;
  
  a, span {
    color: #bdbdbd;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.3s ease;
    display: block;
    
    &:hover {
      color: #ffffff;
    }
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: #ffffff;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #4a90e2;
    transform: translateY(-3px);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

export const FooterDisclaimer = styled.div`
  max-width: 1200px;
  margin: 3rem auto 2rem;
  padding: 0 2rem;
  
  p {
    font-size: 0.85rem;
    line-height: 1.6;
    color: #9e9e9e;
    text-align: justify;
  }
`;

export const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const CopyrightText = styled.div`
  font-size: 0.85rem;
  color: #757575;
`;

export const CreditsText = styled.div`
  font-size: 0.85rem;
  color: #757575;
`;