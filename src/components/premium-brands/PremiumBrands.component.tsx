import Image from 'next/image';
import { ArrowRight, Section } from 'lucide-react';
import { BrandCard, BrandName, BrandsGrid, Header, IconWrapper, LogoContainer, Title, ViewAllLink } from './PremiumBrands.styles';



const PremiumBrands = () => {
  const brands = [
    {
      id: 'audi',
      name: 'Audi',
      logo: '/images/brands/audi-logo.png',
      href: '/brands/audi'
    },
    {
      id: 'bmw',
      name: 'BMW',
      logo: '/images/brands/bmw-logo.png',
      href: '/brands/bmw'
    },
    {
      id: 'ford',
      name: 'Ford',
      logo: '/images/brands/ford-logo.png',
      href: '/brands/ford'
    },
    {
      id: 'mercedes-benz',
      name: 'Mercedes Benz',
      logo: '/images/brands/mercedes-logo.png',
      href: '/brands/mercedes-benz'
    },
    {
      id: 'peugeot',
      name: 'Peugeot',
      logo: '/images/brands/peugeot-logo.png',
      href: '/brands/peugeot'
    },
    {
      id: 'volkswagen',
      name: 'Volkswagen',
      logo: '/images/brands/volkswagen-logo.png',
      href: '/brands/volkswagen'
    }
  ];

  return (
    <Section>
      <Header>
        <Title>Explore Our Premium Brands</Title>
        <ViewAllLink href="/brands">
          Show All Brands
          <IconWrapper>
            <ArrowRight size={16} />
          </IconWrapper>
        </ViewAllLink>
      </Header>

      <BrandsGrid>
        {brands.map((brand) => (
          <BrandCard key={brand.id} href={brand.href}>
            <LogoContainer>
              <Image 
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={64}
                height={64}
                style={{ objectFit: 'contain' }}
              />
            </LogoContainer>
            <BrandName>{brand.name}</BrandName>
          </BrandCard>
        ))}
      </BrandsGrid>
    </Section>
  );
};

export default PremiumBrands;