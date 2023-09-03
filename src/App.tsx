import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Sale from "./pages/sale/sale";
import Product from "./pages/product/product";
import User from "./pages/user/user";

// components
import Drawer from "./components/drawer";

type Props = {};

export default function App({}: Props) {
  return (
    <BrowserRouter>
      <Drawer />
      <div style={{ marginLeft: 70 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
