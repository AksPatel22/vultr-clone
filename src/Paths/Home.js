import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Components/About/About";
import Locations from "../Components/Locations/Locations";
import ControlPanel from "../Components/ControlPanel/ControlPanel";
import Instance from "../Components/Deploy/Instance";
import Insights from "../Components/Insights/Insights";
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
