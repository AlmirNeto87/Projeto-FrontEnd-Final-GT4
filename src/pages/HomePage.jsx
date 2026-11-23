
import Gallery from '../components/Galery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

import {
  HomePageContainer,
  CollectionsContainer,
  CollectionImage,
} from './HomePage.styles';

const slides = [
  { src: '/home-slide-1.jpeg' },
  { src: '/home-slide-2.jpeg' },
  { src: '/home-slide-3.jpeg' },
];

const products = [
  {
    name: 'Tênis Esportivo',
    image: '/product-thumb-1.jpeg',
    price: 299.9,
    priceDiscount: 249.9,
  },
  {
    name: 'Camiseta Casual',
    image: '/product-thumb-2.jpeg',
    price: 89.9,
  },
  {
    name: 'Tênis Casual',
    image: '/product-thumb-3.jpeg',
    price: 259.9,
    priceDiscount: 219.9,
  },
  {
    name: 'Jaqueta Urbana',
    image: '/product-thumb-4.jpeg',
    price: 349.9,
  },
  {
    name: 'Calça Jeans',
    image: '/product-thumb-5.jpeg',
    price: 199.9,
    priceDiscount: 169.9,
  },
  {
    name: 'Tênis Esportivo',
    image: '/product-thumb-1.jpeg',
    price: 299.9,
    priceDiscount: 249.9,
  },
  {
    name: 'Camiseta Casual',
    image: '/product-thumb-2.jpeg',
    price: 89.9,
  },
  {
    name: 'Tênis Casual',
    image: '/product-thumb-3.jpeg',
    price: 259.9,
    priceDiscount: 219.9,
  },

];

const HomePage = () => {
  return (
    <HomePageContainer>
      <Gallery
        images={slides}
        width={1440}
        height={681}
      />



      <Section
        title="Coleções em destaque"
        titleAlign="center"
      >
        <CollectionsContainer>
          <CollectionImage
            src="/collection-1.png"
            alt="Coleção em destaque 1"
          />
          <CollectionImage
            src="/collection-2.png"
            alt="Coleção em destaque 2"
          />
          <CollectionImage
            src="/collection-3.png"
            alt="Coleção em destaque 3"
          />
        </CollectionsContainer>
      </Section>

      <Section
        title="Produtos em alta"
        titleAlign="left"
      >
        <ProductListing products={products} />
      </Section>
    </HomePageContainer>
  );
};

export default HomePage;
