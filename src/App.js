import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Landing/index";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Pricing from "./pages/Pricing/index";
import Deploy from "./pages/Deploy";
import Billing from "./pages/Billing";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/deploy" element={<Deploy />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </Router>
  );
};

export default App;
