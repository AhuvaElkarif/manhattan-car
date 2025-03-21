// File: src/components/Carousel/Carousel.styles.ts
import styled, { css } from 'styled-components';

interface SlideImageProps {
  isActive: boolean;
}

interface CarouselDotProps {
  isActive: boolean;
}

interface CarouselArrowProps {
  direction: 'left' | 'right';
}

export const CarouselContainer = styled.div`
//   position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 8px;
`;

export const SlideImage = styled.img<SlideImageProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const CarouselControls = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const CarouselDotsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const CarouselDot = styled.button<CarouselDotProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isActive ? '#fff' : 'rgba(255, 255, 255, 0.8)')};
  }
`;

export const CarouselArrow = styled.button<CarouselArrowProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'left' ? 'left: 16px;' : 'right: 16px;'}
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;
  z-index: 10;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const CarInfo = styled.div`
  position: absolute;
  bottom: 80px;
  left: 30px;
  color: white;
  z-index: 2;
  max-width: 60%;
`;

export const CarTitle = styled.h2`
  font-size: 36px;
  margin: 0 0 8px 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

export const CarSubtitle = styled.p`
  font-size: 18px;
  margin: 0 0 24px 0;
  opacity: 0.9;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

export const ButtonBase = css`
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-size: 16px;
`;

export const PrimaryButton = styled.button`
  ${ButtonBase}
  background-color: #3498db;
  color: white;
  
  &:hover {
    background-color: #2980b9;
  }
`;

export const SecondaryButton = styled.button`
  ${ButtonBase}
  background-color: transparent;
  color: white;
  border: 2px solid white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;