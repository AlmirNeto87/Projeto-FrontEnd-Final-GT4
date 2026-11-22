
import ProductCard from '../ProductCard';

import {
  ProductListingContainer,
  ProductListingItem,
} from './ProductListing.styles';

const ProductListing = ({ products = [] }) => {
  return (
    <ProductListingContainer>
      {products.map((product, index) => (
        <ProductListingItem key={`${product.name}-${index}`}>
          <ProductCard
            imagem={product.image}
            name={product.name}
            price={product.price}
            priceDiscount={product.priceDiscount}
          />
        </ProductListingItem>
      ))}
    </ProductListingContainer>
  );
};

export default ProductListing;
