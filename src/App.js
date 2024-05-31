import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Loading from "./components/common/Loading";

// Lazy load components
const LoginScreen = lazy(() => import("./pages/LoginScreen"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NewPlayer = lazy(() => import("./pages/NewPlayer"));
const Profile = lazy(() => import("./components/common/Profile"));
const MainComponent = lazy(() => import("./pages/MainComponent"));

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/profile" element={<ProtectedRoute element={Profile} />} />
            <Route path="/assessment" element={<ProtectedRoute element={NewPlayer} />} />
            <Route path="/dashboard" element={<ProtectedRoute element={Dashboard} />} />
            <Route path="/" element={<ProtectedRoute element={MainComponent} />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
