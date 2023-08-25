import React from "react";
import Dashboard from "./Pages/New_app";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactUs from "./Pages/ContactUs.tsx";
import AboutPage from "./Pages/AboutPage.tsx";
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="About" element={<AboutPage />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;