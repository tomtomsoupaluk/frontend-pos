import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Sale from "./pages/sale/sale";
import Product from "./pages/product/product";
import User from "./pages/user/user";
import NotFound from "./pages/notFound/notFound";

// components
import Drawer from "./components/drawer";
import { useState } from "react";
import { AuthRoute, PrivateRoute } from "./utils/Router/ProtectedRoutes";

type Props = {};

export default function App({}: Props) {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <BrowserRouter>
      {isAuth && <Drawer />}
      <div style={{ marginLeft: isAuth ? 70 : 0 }}>
        <Routes>
          <Route path="/" element={<PrivateRoute isAuth={isAuth} />}>
            <Route path="/" element={<Home />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/product" element={<Product />} />
            <Route path="/user" element={<User />} />
          </Route>

          <Route path="/" element={<AuthRoute isAuth={isAuth} />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
