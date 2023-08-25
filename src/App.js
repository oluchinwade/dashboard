import React from "react";
import Dashboard from "./Pages/New_app";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;