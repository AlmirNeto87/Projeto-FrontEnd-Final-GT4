
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Section from '../components/Section';
import FilterGroup from '../components/FilterGroup';
import ProductListing from '../components/ProductListing';

import {
  ProductPageContainer,
  FilterSidebar,
  SortContainer,
  SortLabel,
  SortSelect,
  FilterPanel,
  FilterPanelTitle,
  FilterPanelContent,
  ProductsContainer,
  EmptyMessage
} from './ProductListingPage.styles';

const products = [
   {
    name: 'Tênis Esportivo',
    image: '/product-thumb-1.jpeg',
    price: 299.9,
    priceDiscount: 249.9,
    brand: 'nike',
    category: 'esporte',
    gender: 'masculino',
    status: 'novo'
  },
  {
    name: 'Camiseta Casual',
    image: '/product-thumb-2.jpeg',
    price: 89.9,
    brand: 'puma',
    category: 'moda',
    gender: 'feminino',
    status: 'novo'
  },
  {
    name: 'Tênis Casual',
    image: '/product-thumb-3.jpeg',
    price: 259.9,
    priceDiscount: 219.9,
    brand: 'adidas',
    category: 'casual',
    gender: 'unissex',
    status: 'usado'
  },
  {
    name: 'Jaqueta Urbana',
    image: '/product-thumb-4.jpeg',
    price: 349.9,
    brand: 'puma',
    category: 'moda',
    gender: 'masculino',
    status: 'usado'
  },
  {
    name: 'Calça Jeans',
    image: '/product-thumb-5.jpeg',
    price: 199.9,
    priceDiscount: 169.9,
    brand: 'nike',
    category: 'casual',
    gender: 'feminino',
    status: 'novo'
  },
  {
    name: 'Camiseta Casual',
    image: '/product-thumb-2.jpeg',
    price: 89.9,
    brand: 'adidas',
    category: 'esporte',
    gender: 'unissex',
    status: 'usado'
  },
  {
    name: 'Tênis Casual',
    image: '/product-thumb-3.jpeg',
    price: 259.9,
    priceDiscount: 219.9,
    brand: 'puma',
    category: 'casual',
    gender: 'masculino',
    status: 'novo'
  },
  {
    name: 'Jaqueta Urbana',
    image: '/product-thumb-4.jpeg',
    price: 349.9,
    brand: 'nike',
    category: 'moda',
    gender: 'feminino',
    status: 'novo'
  }

  
];

const ProductListingPage = () => {
    const [sortOrder, setSortOrder] = useState('');
  
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedGender, setSelectedGender] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState([]);

    const [searchParams] = useSearchParams();

    const searchFilter = searchParams
    .get('filter')
    ?.trim()
    .toLocaleLowerCase('pt-BR') || '';

  
    
    const filteredProducts = products.filter((product) => {
    const matchesSearch =
        !searchFilter ||
        product.name.toLocaleLowerCase('pt-BR').includes(searchFilter);

    const matchesBrand =
        selectedBrands.length === 0 ||
        selectedBrands.includes(product.brand);

    const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

    const matchesGender =
        selectedGender.length === 0 ||
        selectedGender.includes(product.gender);

    const matchesStatus =
        selectedStatus.length === 0 ||
        selectedStatus.includes(product.status);

    return (
        matchesSearch &&
        matchesBrand &&
        matchesCategory &&
        matchesGender &&
        matchesStatus
    );
    });


const sortedProducts = [...filteredProducts].sort((a, b) => {
  const priceA = a.priceDiscount ?? a.price;
  const priceB = b.priceDiscount ?? b.price;

  if (sortOrder === 'lowest') return priceA - priceB;
  if (sortOrder === 'highest') return priceB - priceA;

  return 0;
});


  return (
    <ProductPageContainer>
      <FilterSidebar>
        <SortContainer>
          <SortLabel htmlFor="sort-products">
            Ordenar por
          </SortLabel>

          <SortSelect
            id="sort-products"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
          >
            <option value="">Selecione</option>
            <option value="lowest">Menor preço</option>
            <option value="highest">Maior preço</option>
          </SortSelect>
        </SortContainer>

        <FilterPanel>
          <FilterPanelTitle>Filtrar por</FilterPanelTitle>

                    
          <FilterPanelContent>
            <FilterGroup
                title="Marca"
                inputType="checkbox"
                options={[
                { text: 'Adidas', value: 'adidas' },
                { text: 'Nike', value: 'nike' },
                { text: 'Puma', value: 'puma' },
                ]}
                selectedValues={selectedBrands}
                onChange={setSelectedBrands}
            />

            <FilterGroup
                title="Categoria"
                inputType="checkbox"
                options={[
                { text: 'Esporte', value: 'esporte' },
                { text: 'Casual', value: 'casual' },
                { text: 'Moda', value: 'moda' },
                ]}
                selectedValues={selectedCategories}
                onChange={setSelectedCategories}
            />

            <FilterGroup
                title="Gênero"
                inputType="checkbox"
                options={[
                { text: 'Masculino', value: 'masculino' },
                { text: 'Feminino', value: 'feminino' },
                { text: 'Unissex', value: 'unissex' },
                ]}
                selectedValues={selectedGender}
                onChange={setSelectedGender}
            />

            <FilterGroup
                title="Estado"
                inputType="checkbox"
                options={[
                { text: 'Novo', value: 'novo' },
                { text: 'Usado', value: 'usado' },
                ]}
                selectedValues={selectedStatus}
                onChange={setSelectedStatus}
            />
          </FilterPanelContent>
          
        </FilterPanel>
      </FilterSidebar>

      <ProductsContainer>
       
        
        <Section
        title={
            searchFilter
            ? `${sortedProducts.length} ${searchParams.get('filter').trim()}`
            : `${sortedProducts.length} produtos`
        }
        titleAlign="left"
        >

        {sortedProducts.length > 0 ? (
            <ProductListing
            products={sortedProducts}
            className="products-grid"
            />
        ) : (
            <EmptyMessage>
            Nenhum produto encontrado.
            <span>
                Tente pesquisar por outro termo ou alterar os filtros.
            </span>
            </EmptyMessage>
        )}

        </Section>

      </ProductsContainer>
    </ProductPageContainer>
  );
};

export default ProductListingPage;
