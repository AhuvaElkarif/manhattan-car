import React from 'react';
import { Container, FeatureCard, FeatureDescription, FeatureTitle, FeaturesContainer, IconContainer, Title } from './WhyChooseUs.styles';
import { features } from './content';

const WhyChooseUs: React.FC = () => {
  return (
    <Container>
      <Title>למה לבחור בנו?</Title>
      <FeaturesContainer>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <IconContainer>{feature.icon}</IconContainer>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesContainer>
    </Container>
  );
};

export default WhyChooseUs;