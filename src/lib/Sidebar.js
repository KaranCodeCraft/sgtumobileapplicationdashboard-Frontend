import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  const tabs = [
    { label: "Dashboard", path: "/auth/dashboard" },
    { label: "Manage Access", path: "/auth/requests" },
    { label: "Students", path: "/auth/students" },
    { label: "Profile", path: "/auth/profile" },
    { label: "Settings", path: "/auth/settings" },
  ];

  return (
    <>
      {/* Mobile menu icon */}
      <div className="md:hidden p-2">
        <button onClick={toggleSidebar} className="text-xl">
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Sidebar */}

      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-48`}
      >
        {/* <div className="p-4 text-xl font-semibold">Na</div> */}
        <nav>
          <ul className="space-y-2 p-2">
            {tabs.map((tab) => (
              <li key={tab.path}>
                <Link
                  to={tab.path}
                  className={`block p-2 rounded hover:bg-gray-700 ${
                    isActive(tab.path) ? "bg-gray-700" : ""
                  }`}
                >
                  {tab.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/login"
                className={`block p-2 rounded hover:bg-gray-700 `}
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
