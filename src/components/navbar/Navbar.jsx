import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="container py-3 d-flex align-items-center justify-content-between">
        <div className="logo">
          <Link href="#" className="fs-3">
            Logo
          </Link>
        </div>
        <div className="navigation d-flex gap-3">
          <Link to={"/register"} className="fs-5">
            Register
          </Link>
          <Link to={"/login"} className="fs-5">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
