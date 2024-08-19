import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Wishlist from "./pages/wishlist/Wishlist";
import Deatails from "./pages/details/Deatails";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/details/:id" element={<Deatails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
