import { BrowserRouter, Routes, Route } from "react-router-dom";
import authService from "./services/authService";

// pages
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Sale from "./pages/sale/sale";
import Product from "./pages/product/product";
import User from "./pages/user/user";
import Report from "./pages/report/report";
import DailyReport from "./pages/report/dailyReport";
import WeeklyReport from "./pages/report/weeklyReport";
import MonthlyReport from "./pages/report/monthlyReport";
import YesterdayReport from "./pages/report/yesterdayReport";
import NotFound from "./pages/notFound/notFound";

// components
import Drawer from "./components/drawer";
import { useEffect, useState } from "react";
import { AuthRoute, PrivateRoute } from "./utils/Router/ProtectedRoutes";

type Props = {};

export default function App({}: Props) {
  const [isAuth, setIsAuth] = useState(true);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      setLoading(true);

      authService
        .validateToken()
        .then((res) => {
          if (res.data.success) {
            setIsAuth(true);
          } else {
            setIsAuth(false);
            localStorage.removeItem("token");
          }
        })
        .catch((err) => {
          console.log(err);
          setIsAuth(false);
          localStorage.removeItem("token");
        });

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      {isAuth && <Drawer setIsAuth={setIsAuth} />}
      <div style={{ marginLeft: isAuth ? 70 : 0 }}>
        <Routes>
          <Route path="/" element={<PrivateRoute isAuth={isAuth} />}>
            <Route path="/" element={<Home />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/product" element={<Product />} />
            <Route path="/user" element={<User />} />
            <Route path="report" element={<Report />} />
            <Route path="report/daily-sale" element={<DailyReport />} />
            <Route path="report/weekly-sale" element={<WeeklyReport />} />
            <Route path="report/monthly-sale" element={<MonthlyReport />} />
            <Route path="report/yesterday-sale" element={<YesterdayReport />} />
          </Route>

          <Route path="/" element={<AuthRoute isAuth={isAuth} />}>
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
