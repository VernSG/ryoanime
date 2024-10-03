import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/ongoing" className="text-white">Ongoing</Link></li>
        <li><Link to="/movies" className="text-white">Movies</Link></li>
        <li><Link to="/completed" className="text-white">Completed</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
