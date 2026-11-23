import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NotFound from '../pages/NotFound';
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


        {/* <Route path="*" element={<NotFound />} /> Rota para páginas não encontradas */}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default DripStoreRoutes;
