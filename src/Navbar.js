import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Flashcards</div>
      <ul className="navbar-links">
        <li><a href="#/admin">Admin Dashboard</a></li>
        <li><a href="#/learn">Learn</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
