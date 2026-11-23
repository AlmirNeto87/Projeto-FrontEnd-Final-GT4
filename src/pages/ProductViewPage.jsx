
import { useParams } from 'react-router-dom';
import Gallery from '../components/Galery';

import {
  ProductViewContainer,
  ProductMainContent,
  ProductGalleryContainer,
} from './ProductViewPage.styles';

const ProductViewPage = () => {
  const { id } = useParams();

  const productImages = [
    { src: '/product-image-1.jpeg' },
    { src: '/product-image-2.jpeg' },
    { src: '/product-image-3.jpeg' },
    { src: '/product-image-4.jpeg' },
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

        <div>
          <h1>Produto selecionado: {id}</h1>
        </div>
      </ProductMainContent>
    </ProductViewContainer>
  );
};

export default ProductViewPage;
