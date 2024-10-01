import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 justify-center text-white">
        <li><Link to="/ongoing" className="hover:underline">Ongoing</Link></li>
        <li><Link to="/completed" className="hover:underline">Completed</Link></li>
        <li><Link to="/movies" className="hover:underline">Movies</Link></li>
        <li><Link to="/genres" className="hover:underline">Genres</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
