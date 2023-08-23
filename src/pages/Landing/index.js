import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import About from "./About/About";
import Locations from "./Locations/Locations";
import ControlPanel from "./ControlPanel/ControlPanel";
import Instance from "./Deploy/Instance";
import Footer from "../../Components/Footer/Footer";
import Insights from "./Insights/Insights";

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
