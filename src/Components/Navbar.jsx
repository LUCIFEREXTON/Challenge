import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand mb-0 h1">
          YouKraft
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
