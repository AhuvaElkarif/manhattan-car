import styled from 'styled-components';

export const PageContainer = styled.div`
  font-family: 'Rubik', 'Assistant', sans-serif;
  direction: rtl;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const HeroSection = styled.div`
  position: relative;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const HeroImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/api/placeholder/1200/400');
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to left, rgba(0,0,0,0.7), rgba(0,0,0,0.3));
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 3rem;
  z-index: 10;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
  }
`;

export const HeroTitle = styled.h1`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

export const HeroText = styled.p`
  color: white;
  font-size: 1.2rem;
  line-height: 1.6;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 80px;
    height: 4px;
    background-color: #4a6cf7;
  }
`;

export const ContentSection = styled.div`
  margin-bottom: 4rem;
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #555;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 3rem 0;
  gap: 1rem;
`;

export const StatCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  flex: 1 0 200px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #4a6cf7;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.div`
  font-size: 1.1rem;
  color: #666;
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
`;

export const TeamMember = styled.div`
  flex: 1 0 250px;
  max-width: 300px;
`;

export const TeamMemberImage = styled.div`
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  background-image: url('/api/placeholder/300/300');
  background-size: cover;
  background-position: center;
`;

export const TeamMemberName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const TeamMemberRole = styled.div`
  color: #666;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const TeamMemberBio = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #555;
`;