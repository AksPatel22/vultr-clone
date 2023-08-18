import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Paths/Home.js";
import LoginPage from "./Paths/Login.js";
import SignUpPage from "./Paths/SignUp.js";
import Pricing from "./Paths/Pricing.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
};

export default App;
