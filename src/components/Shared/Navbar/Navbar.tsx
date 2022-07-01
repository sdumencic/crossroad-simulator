import "./Navbar.scss";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/game" className="navbar-item">
        Simulacija
      </Link>
      <Link to="/settings" className="navbar-item">
        Postavke
      </Link>
      <Link to="/" className="navbar-item">
        Home
      </Link>
    </div>
  );
};

export default Navbar;
