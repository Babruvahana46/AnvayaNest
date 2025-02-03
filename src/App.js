import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
// import Register from "./pages/Register";
import Maintenance from "./pages/maintanance";
import Security from "./pages/security";
import Financials from "./pages/financial";
import Navbar from "./components/navBar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/security" element={<Security />} />
        <Route path="/financials" element={<Financials />} />
      </Routes>
    </Router>
  );
}

export default App;