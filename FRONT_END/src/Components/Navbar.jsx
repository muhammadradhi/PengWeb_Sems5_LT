import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between shadow-xl px-6 py-4">
      <h1 className="text-2xl font-bold text-primary">
        Warung <span className="text-tertiary">Dhiesna</span>
      </h1>

      <div className="flex gap-4 text-font-2">
        <Link to="/login" className="font-medium hover:underline">
          Masuk
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
