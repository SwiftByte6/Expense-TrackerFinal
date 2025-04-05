import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarSide from "./components/NavbarSide";
import Expense from "./pages/Expense";
import CreateExpense from "./pages/CreateExpense";
import AI from "./pages/AI";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NavbarTop from "./components/NavbarTop";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <Router>
      <div className="flex bg-gray-300 min-h-screen">
        <CustomCursor/>
        <NavbarSide /> {/* Sidebar remains on all pages */}
        <NavbarTop/>{/* Sidebar remains on all pages */}
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/create-expense" element={<CreateExpense />} />
          <Route path="/ai" element={<AI />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
