import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";
import Login from "./components/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar isAuthenticated={isAuthenticated} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Protected Route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested Routes */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Route */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default App;
