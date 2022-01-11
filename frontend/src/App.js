import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

//components
import NavBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <NavBar />
      {/*  Sidedrawer*/}
      {/*  Backdrop */}
      <main>
        {" "}
        <Routes>
          {" "}
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/product/:id" element={<ProductScreen />} />
          <Route exact path="/product/cart" element={<CartScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
