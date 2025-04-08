import styled from "styled-components";
import Link from 'next/link';

export const Section = styled.section`
  padding: 2rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ViewAllLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const BrandsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const BrandCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

export const LogoContainer = styled.div`
  height: 4rem;
  width: 4rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BrandName = styled.span`
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const IconWrapper = styled.span`
  margin-left: 0.25rem;
`;