import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home.pages";
import App from "../App";
import Aboutpages from "../pages/About.pages";
import Bookingpages from "../pages/Booking.pages";
import Login from "../UserAuthentication/Login";
import Registration from "../UserAuthentication/Registration";

const routes = () => {
  return (
    <BrowserRouter>
      <App></App>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutpages />} />
        <Route path="/booking" element={<Bookingpages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
