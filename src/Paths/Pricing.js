import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import About from "../pages/Pricing/About/About";
import Footer from "../Components/Footer/Footer";
import Body from "../pages/Pricing/Body/Body";
import Services from "../pages/Pricing/Services/Services";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <About />
      <Body />
      <Services />
      <Footer />
    </>
  );
};

export default Pricing;
