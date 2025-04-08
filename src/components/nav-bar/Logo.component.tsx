import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
`;

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <LogoContainer className={className}>
      <LogoImage 
        src="/images/logo.jpg" 
        alt="Manhattan Car" 
      />
    </LogoContainer>
  );
};

export default Logo;