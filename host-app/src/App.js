import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Lazy load remote apps
const Dashboard = React.lazy(() => import("dashboard/App"));
const Profile = React.lazy(() => import("profile/App"));

function App() {
  return (
    <BrowserRouter>
      <h1 style={{ color: "green" }}>Host Application (Shell)</h1>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Suspense fallback={<div>Loading Micro App...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;