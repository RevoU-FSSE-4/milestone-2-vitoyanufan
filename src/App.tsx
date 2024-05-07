// import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  const isAllowed = localStorage.getItem('Token')
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>

        <Route element={<PrivateRoute isAllowed={!!isAllowed as boolean} />}></Route>
        <Route path="/dashboard" element={<Dashboard />}> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
