
// import { useParams } from 'react-router-dom';
import Gallery from '../components/Galery';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductOptions';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

import {
  ProductViewContainer,
  ProductMainContent,
  ProductGalleryContainer,
  
} from './ProductViewPage.styles';

const ProductViewPage = () => {
//   const { id } = useParams();

  const productImages = [
    { src: '/product-image-1.jpeg' },
    { src: '/product-image-2.jpeg' },
    { src: '/product-image-3.jpeg' },
    { src: '/product-image-4.jpeg' },
  ];


    const recommendedProducts = [
    {
        name: 'Tênis Casual',
        image: '/product-thumb-3.jpeg',
        price: 259.90,
        priceDiscount: 219.90,
    },
    {
        name: 'Jaqueta Urbana',
        image: '/product-thumb-4.jpeg',
        price: 349.90,
    },
    {
        name: 'Calça Jeans',
        image: '/product-thumb-5.jpeg',
        price: 199.90,
        priceDiscount: 169.90,
    },
    {
        name: 'Moletom Drip',
        image: '/product-thumb-3.jpeg',
        price: 229.90,
    },
    ];


  return (
    <ProductViewContainer>
            
        <ProductMainContent>
        <ProductGalleryContainer>
            <Gallery
            images={productImages}
            showThumbs
            width={700}
            height={570}
            radius="4px"
            />
        </ProductGalleryContainer>
        

        <BuyBox
        name="Tênis Esportivo"
        reference="DRP-001"
        stars={4.5}
        rating={120}
        price={299.90}
        priceDiscount={249.90}
        description="Tênis confortável e moderno, ideal para o dia a dia e atividades esportivas."
        >
           <ProductOptions
              title="Tamanho"
              options={['P', 'M', 'G', 'GG']}
              shape="square"
              type="text"
              radius="4px"
            />


            <ProductOptions
             title="Cor"
             options={['#000000', '#FF0000', '#FFFFFF']}
             shape="circle"
             type="color"
            />


        </BuyBox>


       
        </ProductMainContent>

        
     
        <Section
        title="Produtos recomendados"
        titleAlign="left"
        link={{
            text: 'Ver todos',
            href: '/produtos',
        }}
        >
        <ProductListing products={recommendedProducts} />
        </Section>

  

    </ProductViewContainer>
  );
};

export default ProductViewPage;
