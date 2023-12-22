import viteLogo from "/vite.svg";
import Home from "./pages/Home";
import ShopDeals from "./pages/ShopDeals";
import SeasonalOffers from "./pages/SeasonalOffers";
import SignInRegister from "./pages/SignInRegister";
import About from "./pages/About";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header></Header>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="ShopDeals" element={<ShopDeals></ShopDeals>}></Route>
        <Route
          path="SeasonalOffers"
          element={<SeasonalOffers></SeasonalOffers>}
        ></Route>
        <Route path="About" element={<About></About>}></Route>
        <Route
          path="SignInRegister"
          element={<SignInRegister></SignInRegister>}
        ></Route>
        <Route path="Wishlist" element={<Wishlist></Wishlist>}></Route>
        <Route path="Cart" element={<Cart></Cart>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
