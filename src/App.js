import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';



import './App.css';
import "./bootstrap-5.1.3-dist/css/bootstrap.min.css"

import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Signup from './pages/Signup';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<About />} path="/about" />
        <Route element={<Signup />} path="/sign-up" />
        <Route element={<ProductPage />} path="/products" />

      </Routes>
    </Router>
  );
}

export default App;
