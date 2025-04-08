import { useState } from "react";
import { Container, CustomerName, HeaderContainer, NavigationButton, RatingInfo, Star, StarRating, TestimonialCard, TestimonialText, TestimonialTitle, TestimonialsContainer, Title, VerifiedBadge, VerifiedIcon } from "./CustomerTestimonials.styles";
import { testimonials } from "./content";

const CustomerTestimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, testimonials.length - 4));
  };

  // Helper to render stars
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star key={i} filled={i < rating}>★</Star>
    ));
  };

  return (
    <Container>
      <HeaderContainer>
        <Title>מה הלקוחות שלנו אומרים</Title>
        <RatingInfo>דירוג 4.7 / 5 מבוסס על 28,370 ביקורות המציגות את 4 & 5 ביקורות הכוכבים שלנו</RatingInfo>
      </HeaderContainer>
      
      <div style={{ position: 'relative' }}>
        <TestimonialsContainer>
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id}>
              <StarRating>{renderStars(testimonial.rating)}</StarRating>
              <VerifiedBadge>
                <span>מאומת</span>
                <VerifiedIcon />
              </VerifiedBadge>
              <TestimonialTitle>{testimonial.title}</TestimonialTitle>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <CustomerName>{testimonial.name}</CustomerName>
            </TestimonialCard>
          ))}
        </TestimonialsContainer>
        
        {currentIndex > 0 && (
          <NavigationButton direction="prev" onClick={handlePrev} />
        )}
        
        {currentIndex < testimonials.length - 4 && (
          <NavigationButton direction="next" onClick={handleNext} />
        )}
      </div>
    </Container>
  );
};

export default CustomerTestimonials;