
import Main from './components/screen/Main';
import Product from './components/screen/Product';
import ProductList from './components/screen/ProductList';
import NotFound from './components/screen/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route Component={Main} path='/' element={<Main/>}/>
          <Route Component={ProductList} path='/Products/' element={<ProductList/>}/>
          <Route Component={Product} path="/product/:id" element={<Product/>}/>
          <Route component={NotFound} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
