import React, { useState, useEffect } from 'react';
import { 
  CarouselContainer, 
  SlideImage, 
  CarouselControls, 
  CarouselDot, 
  CarouselDotsContainer,
  CarouselArrow,
  CarTitle,
  CarSubtitle,
  CarInfo,
  ButtonsContainer,
  PrimaryButton,
  SecondaryButton
} from './Carousel.styles';

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
}

interface CarouselProps {
  images: CarouselImage[];
  title: string;
  subtitle?: string;
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ 
  images, 
  title, 
  subtitle,
  autoPlayInterval = 5000 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, currentSlide, autoPlayInterval]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <CarouselContainer 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {images.map((image, index) => (
        <SlideImage
          key={image.id}
          src={image.src}
          alt={image.alt}
          isActive={index === currentSlide}
        />
      ))}
      
      <CarInfo>
        <CarTitle>{title}</CarTitle>
        {subtitle && <CarSubtitle>{subtitle}</CarSubtitle>}
        
        <ButtonsContainer>
          <PrimaryButton>View Details</PrimaryButton>
          <SecondaryButton>Contact</SecondaryButton>
        </ButtonsContainer>
      </CarInfo>
      
      <CarouselArrow direction="left" onClick={prevSlide}>
        &lt;
      </CarouselArrow>
      
      <CarouselArrow direction="right" onClick={nextSlide}>
        &gt;
      </CarouselArrow>
      
      <CarouselControls>
        <CarouselDotsContainer>
          {images.map((_, index) => (
            <CarouselDot
              key={index}
              isActive={index === currentSlide}
              onClick={() => goToSlide(index)}
            />
          ))}
        </CarouselDotsContainer>
      </CarouselControls>
    </CarouselContainer>
  );
};

export default Carousel;