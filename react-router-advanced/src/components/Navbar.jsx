import { Link } from "react-router-dom";

function Navbar({ isAuthenticated }) {
  return (
    <nav className="bg-blue-600 p-4 text-white flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/blog/1">Blog Post 1</Link>
      <Link to="/blog/2">Blog Post 2</Link>

      {isAuthenticated && <Link to="/profile">Profile</Link>}
      {!isAuthenticated && <Link to="/login">Login</Link>}
    </nav>
  );
}

export default Navbar;
