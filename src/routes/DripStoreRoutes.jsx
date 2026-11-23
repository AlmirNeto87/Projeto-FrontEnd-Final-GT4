import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import PageLayout from '../layouts/PageLayout';
import HomePage from '../pages/HomePage';
import ProductListingPage from '../pages/ProductListingPage'
import ProductViewPage from '../pages/ProductViewPage';

const DripStoreRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="produtos" element={<ProductListingPage />} />
        <Route path="product/:id" element={<ProductViewPage />} />


        <Route path="*" element={<NotFoundPage />} /> Rota para páginas não encontradas
      </Route>
    </Routes>
  </BrowserRouter>
);

export default DripStoreRoutes;
