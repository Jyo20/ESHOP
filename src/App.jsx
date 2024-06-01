import React from "react";
import { Route, Routes ,useLocation} from "react-router-dom";
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
import Footer from "./components/Footer";
import Registartion from "./components/Validation/Registartion";
const App = () => {
  
  // used to hide navbar in registration
  const location = useLocation();
  const hideNavbarOnRegistration = location.pathname.includes("/registration");
  return (
    <div>
      <SessionProvider>
      {!hideNavbarOnRegistration && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="registration" element={<Registartion />}>
          {/*<Route index element={<Login/>}/>*/}
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        </Route>
      </Routes>
      <Footer/>
      </SessionProvider>
    </div>
  );
};

export default App;
