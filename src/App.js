import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import Dashboard from "./pages/Dashboard";
import NewPlayer from "./pages/NewPlayer";
import Profile from "./components/common/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import './styles/global.css'
import MainComponent from "./pages/MainComponent";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/profile" element={<ProtectedRoute element={Profile} />} />
          <Route path="/assessment" element={<ProtectedRoute element={NewPlayer} />} />
          <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
          <Route path="/" element={<ProtectedRoute element={MainComponent} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
