import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import Dashboard from "./pages/Dashboard";
import NewPlayer from "./pages/NewPlayer";
import Profile from "./components/common/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/profile" element={<ProtectedRoute element={Profile} />} />
          <Route path="/assessment" element={<ProtectedRoute element={NewPlayer} />} />
          <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
