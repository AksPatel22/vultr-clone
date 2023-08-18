import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Components/Pricing/About/About";
import Footer from "../Components/Footer/Footer";
import Body from "../Components/Pricing/Body/Body";
import Services from "../Components/Pricing/Services/Services";

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
