import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from './components/CartContainer/CartContainer';
import { CartContextProvider } from './context/cartContext';
import OrderDetail from './components/OrderDetail/OrderDetail';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          
          <Route path="/category/:categoryid" element={<ItemListContainer />} />

          <Route path="/item/:itemid" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<CartContainer />} />

          <Route path="/orders/:orderid" element={<OrderDetail />} />
          
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
