import React from "react";
import HomeCarousel from "../compoents/homeCarousel";
import WhyUs from "../compoents/WhyUs";
import Appointment from "../compoents/appointment";
import Pricing from "../compoents/Pricing";
import NavBar from "../compoents/Navbar";
import Footer from "../compoents/Footer"
import Trainer from "../compoents/Trainer";
import "../assets/styling/cards.css";

export default function App() {
  const silverMembership = {
    title: "Silver Membership",
    tagline: "Shape your life.",
    price: "800 for One month.",
    features: "Access to all gym accessories",
    features1: "Get worth of 50 rupees voucher",
    features2: "One month planned Diet",
    buttonText: "Join Silver",
  };
  const GoldMembership = {
    title: "Gold Membership",
    tagline: "Shape your life.",
    price: "2000 for Three months.",
    features: "Access to all gym accessories",
    features2: "Three months planned Diet",
    features1: "Get worth of 100 rupees voucher",
    buttonText: "Join Gold",
  };
  const TitaniumMembership = {
    title: "Titatinum Membership",
    tagline: "Shape your life.",
    price: "6000 for Six month and get 6 months memberships free.",
    features: "Access to all gym accessories",
    features1: "Get worth of 150 rupees voucher",
    features2: "Six months planned Diet",
    buttonText: "Join Titanium",
  };
  return (
   
      <div>
        <NavBar/>
          <HomeCarousel />
          <WhyUs />
          <Appointment />
          <div className="cards">
            <Pricing {...silverMembership} />
            <Pricing {...GoldMembership} />
            <Pricing {...TitaniumMembership} />
          </div>
          <Trainer/>
          <Footer/>
          
        
        
      </div>
    
  );
}
