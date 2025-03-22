import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  direction: rtl; // RTL direction for Hebrew
  font-family: 'Rubik', 'Assistant', sans-serif;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  color: #333;
  font-size: 1.8rem;
  margin: 0;
`;

export const RatingInfo = styled.div`
  color: #666;
  font-size: 0.9rem;
`;

export const TestimonialsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
`;

export const TestimonialCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex: 0 0 calc(25% - 1.5rem);
  min-width: 250px;
`;

export const StarRating = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

export const Star = styled.div<{ filled: boolean }>`
  color: ${props => props.filled ? '#00c853' : '#e0e0e0'};
  margin-right: 2px;
`;

export const VerifiedBadge = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #666;
  font-size: 0.8rem;
`;

export const VerifiedIcon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #00c853;
  margin-right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::after {
    content: "✓";
    color: white;
    font-size: 10px;
  }
`;

export const TestimonialTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const TestimonialText = styled.p`
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const CustomerName = styled.p`
  font-weight: 500;
  margin: 0;
`;

export const NavigationButton = styled.button<{ direction: 'prev' | 'next' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'prev' ? 'right: -10px;' : 'left: -10px;'}
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  border: 1px solid #eee;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &::after {
    content: "${props => props.direction === 'prev' ? '›' : '‹'}";
    font-size: 1.2rem;
    font-weight: bold;
  }
`;