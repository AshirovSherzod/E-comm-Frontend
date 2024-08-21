import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Wishlist from "./pages/wishlist/Wishlist";
import Deatails from "./pages/details/Deatails";
import Cart from "./pages/cart/Cart";
import SignIn from "./pages/signIn/SignIn";
import Auth from "./pages/auth/Auth";
import Admin from "./pages/admin/Admin";
import ManageProducts from "./pages/admin/manageproducts/ManageProducts";
import CreateProducts from "./pages/admin/createproducts/CreateProducts";
import ManageAdmins from "./pages/admin/manageadmins/ManageAdmins";
import CreateAdmins from "./pages/admin/createadmins/CreateAdmins";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<Deatails />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="createadmins" element={<CreateAdmins />} />
            <Route path="manageadmins" element={<ManageAdmins />} />
            <Route path="manageproducts" element={<ManageProducts />} />
            <Route path="createproducts" element={<CreateProducts />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
