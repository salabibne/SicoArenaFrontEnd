import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home.pages";
import App from "../App";
import Aboutpages from "../pages/About.pages";
import Bookingpages from "../pages/Booking.pages";
import Login from "../UserAuthentication/Login";
import Registration from "../UserAuthentication/Registration";
import AdminLayout from "../layout/AdminLayout";
import AdminDashboard from "../Admin/Dashboard/AdminDashboard";

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Aboutpages />} />
          <Route path="/booking" element={<Bookingpages />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
