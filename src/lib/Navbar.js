import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl">SGTU Mobile Dashboard</div>
      <ul className="list-none flex gap-4">
        <li className="cursor-pointer"><Link to="/auth/dashboard">Home</Link></li>
        <li className="cursor-pointer"><Link to="/auth/profile">Profile</Link></li>
        <li className="cursor-pointer"><Link to="/auth/settings">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;