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
        <div className="p-4 text-xl font-semibold">My App</div>
        <nav>
          <ul className="space-y-2 p-2">
            <li>
              <Link
                to="/auth/dashboard"
                className={`block p-2 rounded hover:bg-gray-700 ${
                  isActive("/auth/dashboard") ? "bg-gray-700" : ""
                }`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className={`block p-2 rounded hover:bg-gray-700 ${
                  isActive("/profile") ? "bg-gray-700" : ""
                }`}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className={`block p-2 rounded hover:bg-gray-700 ${
                  isActive("/settings") ? "bg-gray-700" : ""
                }`}
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                className={`block p-2 rounded hover:bg-gray-700 ${
                  isActive("/logout") ? "bg-gray-700" : ""
                }`}
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