import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//screens
import HomeScreen from "./screens/HomeScreen";
import ShopScreen from "./screens/ShopScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import ShipsScreen from "./screens/ShipsScreen";

//components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

// import CheckoutForm from "./components/CheckoutForm";

//stripe
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// const stripePromise = loadStripe(
//   "pk_test_51KKSURG1UsWcmbVpNmllMlbysaIF04bx38rCbLEpCkyXYx1yFaEE7BXyMg1CvxpCk1EP7iNH42pnuCBVb2YlptKM00vZNmUF2x"
// );

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        {" "}
        <Routes>
          {" "}
          <Route path="/" element={<HomeScreen />} />
          <Route path="/shop" element={<ShopScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/ships" element={<ShipsScreen />} />
        </Routes>
      </main>{" "}
    </Router>
  );
}

export default App;
