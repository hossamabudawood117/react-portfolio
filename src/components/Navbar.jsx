import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent border-bottom border-secondary border-opacity-25 py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          The Digital <span className="gradient-text">Orchard</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3 text-center mt-3 mt-lg-0">
            <li className="nav-item"><NavLink className="nav-link text-white-50" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white-50" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white-50" to="/services">Services</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white-50" to="/project/synapse">Project</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white-50" to="/reading">Reading List</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white-50" to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;