import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import SearchPage from "./Pages/SearchPage";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:data" element={<ProductPage />} />
        
      </Routes>
    </AnimatePresence>
  );
}

export default App;
