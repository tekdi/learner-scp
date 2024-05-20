import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import Dashboard from "./pages/Dashboard";
import NewPlayer from "./pages/NewPlayer";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />  
          <Route path="/assessment" element={<NewPlayer />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes> 
      </Router>
    </div>
  );
}

export default App;