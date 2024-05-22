import React ,{ useState }from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/AboutUs";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";
const App = () => {
  let [isLoggIn,setIsLoggedIn]=useState(true);
  return (
    <div>
      <Navbar isLogged={isLoggIn}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
