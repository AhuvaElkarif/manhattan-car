import styled from "styled-components";

export const Container = styled.div`
  background-color: #f8f9fc;
  padding: 3rem 2rem;
  direction: rtl; // RTL direction for Hebrew
  font-family: 'Rubik', 'Assistant', sans-serif; // Common Hebrew-friendly fonts
`;

export const Title = styled.h2`
  text-align: center;
  color: #333;
  font-size: 2rem;
  margin-bottom: 3rem;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  margin-bottom: 2rem;
`;

export const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const FeatureTitle = styled.h3`
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  text-align: center;
`;

export const FeatureDescription = styled.p`
  color: #666;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.4;
`;