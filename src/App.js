import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/*" element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
