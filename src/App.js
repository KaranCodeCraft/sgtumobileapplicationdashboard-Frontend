import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import NotFound from "./pages/Notfound";
import Login from "./pages/Login";
import Dashboard from "./pages/Auth/Dashboard";
import Sidebar from "./lib/Sidebar";
import Navbar from "./lib/Navbar";
import Protected from "./pages/Auth/Protected";

const App = () => {
  const authenticatedRoutes = [
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    // Add more authenticated routes here if needed
  ];

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />

      {/* Authenticated Routes */}
      <Route path="/auth" element={<Protected />}>
        {authenticatedRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <div className="flex flex-col min-h-screen">
                {/* Navbar */}
                <Navbar />
                {/* Sidebar + Main Content */}
                <div className="flex flex-grow">
                  <Sidebar />
                  <main className="flex-1 p-4">{route.element}</main>
                </div>
              </div>
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
