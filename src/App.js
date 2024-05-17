import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginScreen from "./pages/LoginScreen";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/login" element={<LoginScreen />} /> 
        </Routes> 
      </Router>
    </div>
  );
}

export default App;