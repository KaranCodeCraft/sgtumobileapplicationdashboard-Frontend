import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import NotFound from "./pages/Notfound";
import Login from "./pages/Login";
import Dashboard from "./pages/Auth/Dashboard";
import Sidebar from "./lib/Sidebar";
import Navbar from "./lib/Navbar";
import Protected from "./pages/Auth/Protected";
import StudentAcess from "./pages/Auth/StudentAcess";
import Profile from "./pages/Auth/Profile";
import Setting from "./pages/Auth/Setting";
import ApiState from "./Context/ApiState";

const App = () => {
  const authenticatedRoutes = [
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    // {
    //   path: "students",
    //   element: <Students />,
    // },
    {
      path: "requests",
      element: <StudentAcess />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "settings",
      element: <Setting />,
    },
  ];

  return (
    <ApiState>
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
              <div className="flex flex-col min-h-screen max-h-screen">
                {/* Navbar */}
                <Navbar />
                {/* Sidebar + Main Content */}
                <div className="flex flex-grow overflow-auto">
                  <Sidebar />
                  <main className="flex-1 p-4 overflow-auto">{route.element}</main>
                </div>
              </div>
            }
          />
        ))}
      </Route>
    </Routes>
    </ApiState>
  );
};

export default App;
