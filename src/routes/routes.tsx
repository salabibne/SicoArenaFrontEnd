import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home.pages";
import App from "../App";
import Aboutpages from "../pages/About.pages";
import Bookingpages from "../pages/Booking.pages";
import Login from "../UserAuthentication/Login";
import Registration from "../UserAuthentication/Registration";
import AdminLayout from "../layout/AdminLayout";
import AdminDashboard from "../Admin/Dashboard/AdminDashboard";
import AddServiceForm from "../Admin/Management/Services/AddService/AddServiceForm";
import ServicesTable from "../Admin/Management/Services/ManageService/ServicesTable";
import Services from "../Admin/Management/Services/Services";
import OrderSummary from "../Booking/BookingSummery";
import SuccessPage from "../payment/success";
import CancelPage from "../payment/cancel";
import FailPage from "../payment/fail";

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
          <Route path="/bookingsummery" element={<OrderSummary />} />
          {/* <Route path="/payment/success" element={<SuccessPage />} />
          <Route path="/payment/cancel" element={<CancelPage />} />
          <Route path="/payment/fail" element={<FailPage />} /> */}
        </Route>
        {/* Payment-specific routes */}
        <Route path="/payment/success" element={<SuccessPage />} />
        <Route path="/payment/cancel" element={<CancelPage />} />
        <Route path="/payment/fail" element={<FailPage />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="/admin/services" element={<Services />} />
          <Route path="/admin/services/add" element={<AddServiceForm />} />
          <Route path="/admin/services/manage" element={<ServicesTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
