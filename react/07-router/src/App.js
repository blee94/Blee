import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PhotoPage from './pages/PhotoPage';
import Photo from './pages/Photo';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        {/* Routes컴포넌트 내부에 Link컴포넌트를 import했기때문에 BrowserRouter 내부에 위치해야함 */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/product/:id' element={<ProductDetailPage />} />
          <Route path='photos' element={<Photo />} />
          <Route path='/photo/:id' element={<PhotoPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
