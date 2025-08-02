import React from 'react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
      <div className="container-fluid">
        <button className="btn btn-outline-secondary me-3" id="sidebarToggle" onClick={toggleSidebar}>
          <i className="bi bi-list"></i>
        </button>

        <h5 className="navbar-brand mb-0 d-none d-sm-block">Admin Dashboard</h5>
      </div>
    </nav>
  );
};

export default Navbar;
