import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/AboutUs";
import Tracker from "./pages/calorieTracker";
import Contact from "./pages/ContactUs";
import Signup from "./pages/SignUp";
import OTPVerification from "./pages/OTPVerification";
import ForgotPassword from "./pages/ForgotPassword";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/calorie-tracker" element={<Tracker />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/email-verification" element={<OTPVerification />} />
        <Route path="/forget-password" element={<ForgotPassword />} /> {/* Corrected 'path' */}
      </Routes>
    </BrowserRouter>
  );
}
