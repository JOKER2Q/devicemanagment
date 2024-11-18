// App.js
import React from "react";
import "./App.css";
import "./pages/dashboard/pages/css/Sidebar.css";
import Header from "./components/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/Login";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/login" && <Header />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Dashboard />} />
      </Routes>
      {}
    </div>
  );
}

export default App;
