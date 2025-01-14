import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AppDownload from "./components/AppDownload/AppDownload";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes, Navigate } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="app">
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<Navigate to="/add" replace />} />
        </Routes>
      </div>
      <hr />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default App;
