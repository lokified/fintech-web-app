import logo from './logo.svg';
import './App.css';
import { Home } from "./components/pages/Home"
import { Cards } from "./components/pages/Cards";
import { Contact } from './components/pages/Contact';
import { NavBar } from "./components/NavBar";
import { Product } from "./components/pages/Product";

import {Routes, Route} from "react-router-dom"
import { Login } from './components/Login';
import { Register } from "./components/Register";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/openAccount" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
