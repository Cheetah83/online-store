import './App.css';
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cart from './components/Cart';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Create from './components/Create';
import Login from './components/Login';
import Register from './components/Register';
import { useEffect, useState } from 'react';
import { productServiceFactory } from './features/productService';
import { AuthContext } from './context/AuthContext';
import { authServiceFactory } from './services/authService';
import Footer from './components/Footer';

function App() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  const [auth, setAuth] = useState({});
  const productService = productServiceFactory(auth.accessToken);
  const authService = authServiceFactory(auth.accessToken);

  useEffect(() => {
    productService.getAll()
      .then(result => {
        setProducts(result)
      })
  }, []);

  const onCreateProduct = async (data) => {
    const newProduct = await productService.createProduct(data);
    setProducts(state => [...state, newProduct]);

    navigate('/products');
  };

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);

      setAuth(result);
      navigate('/products');
    } catch (error) {
      console.log('Your email or password is not correct');
    }
  }

  const onRegisterSubmit = async (values) => {
    const { repeatPass, ...registerData } = values;
    if(repeatPass !== registerData.password) {
      return;
    }

    try {
      const result = await authService.register(registerData);
      setAuth(result);
      navigate('/products');
    }catch(error) {
      console.log('Passwords do not match')
    }
  };

  const onLogout = async () => {
    await authService.logout();

    setAuth({});
  };

  const onProductEdit = async (values) => {
    const result = await productService.edit(values._id, values);

    setProducts(state => state.map(x => x._id === values._id ? result : x));

    navigate(`/products/${values._id}`);
  };

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuth: !!auth.accessToken,
  }
  return (
    <AuthContext.Provider value={contextValues}>
    <div className="App">
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/create" element={<Create onCreateProduct={onCreateProduct} />} />
        <Route exact path="/products" element={<Products products={products} />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
    </AuthContext.Provider>
  );
}

export default App;
