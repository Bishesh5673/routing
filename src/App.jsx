import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Header from "./components/Header";
import PageNotFound from "./pages/PageNotFound";
import ProductDetail from "./pages/ProductDetail";
import Protected from "./pages/Protected";
import Admin from "./pages/Admin";
import ProductManagement from "./pages/ProductManagement";
import UserManagement from "./pages/UserManagement";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Protected comp={<Product/>} />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="*" element={<PageNotFound/>}/>

        {/* Nested Routing */}
        <Route path="/admin/" element={<Admin/>} >
          <Route index element={<ProductManagement/>}/>
          <Route path="productmanagement" element={<ProductManagement/>}/>
          <Route path="usermanagement" element={<UserManagement/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
