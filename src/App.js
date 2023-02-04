import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from './components/CartContainer/CartContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        
        <Route path="/category/:categoryid" element={<ItemListContainer />} />

        <Route path="/item/:itemid" element={<ItemDetailContainer />} />

        <Route path="/cart" element={<CartContainer />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
