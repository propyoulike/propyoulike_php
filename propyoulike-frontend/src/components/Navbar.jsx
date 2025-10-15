import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold text-xl">PropYouLike</h1>
        <div className="space-x-4">
          <NavLink to="/builders" className="hover:text-blue-600">Builders</NavLink>
          <NavLink to="/projects" className="hover:text-blue-600">Projects</NavLink>
          <NavLink to="/properties" className="hover:text-blue-600">Properties</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;