import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl">SGTU Mobile Dashboard</div>
      <ul className="list-none flex gap-4">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Profile</li>
        <li className="cursor-pointer">Settings</li>
      </ul>
    </nav>
  );
};

export default Navbar;