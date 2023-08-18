import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import About from "../pages/Landing/About/About";
import Locations from "../pages/Landing/Locations/Locations";
import ControlPanel from "../pages/Landing/ControlPanel/ControlPanel";
import Instance from "../pages/Landing/Deploy/Instance";
import Insights from "../pages/Landing/Insights/Insights";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Locations />
      <ControlPanel />
      <Instance />
      <Insights />
      <Footer />
    </>
  );
};

export default Home;
