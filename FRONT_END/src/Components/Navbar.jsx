import { Link } from "react-router-dom";

const Navbar = ({ showLogin = true }) => {
  return (
    <nav className="flex items-center justify-between shadow-xl px-6 py-4">
      <Link to="/" className="text-2xl font-bold text-primary">
        Warung <span className="text-tertiary">Dhiesna</span>
      </Link>

      {showLogin && (
        <div className="flex gap-4 text-font-2">
          <Link to="/login" className="font-medium hover:underline">
            Masuk
          </Link>
        </div>
      )}

      {!showLogin && (
        <div className="flex gap-4 text-font-2">
          <Link to="/register" className="font-medium hover:underline">
            Daftar
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
