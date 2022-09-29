import logo from './logo.svg';
import './App.css';
import { Home } from "./components/pages/Home"
import { Blog } from "./components/pages/Blog"
import { Contact } from './components/pages/Contact';
import { NavBar } from "./components/NavBar";
import { Product } from "./components/pages/Product";

import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
