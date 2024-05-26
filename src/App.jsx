import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/AboutUs";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Validation/Login";
import Signup from "./components/Validation/Signup";
import { SessionProvider } from "./ContextApi/SessionContext";
const App = () => {
  return (
    <div>
      <SessionProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </SessionProvider>
    </div>
  );
};

export default App;
