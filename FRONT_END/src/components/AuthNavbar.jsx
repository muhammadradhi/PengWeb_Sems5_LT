import { Link } from "react-router-dom";

const AuthNavbar = ({ brand = "Warung", label = "UMKM" }) => {
  return (
    <header className="flex h-16 items-center border-b border-gray-200 bg-white px-5 sm:px-12">
      <Link to="/" className="flex items-center gap-2.5">
        <span className="text-xl font-bold tracking-tight text-[#111111]">
          {brand}
        </span>

        <span className="text-base text-gray-300">|</span>

        <span className="text-xs font-semibold tracking-wide text-gray-500">
          {label}
        </span>
      </Link>
    </header>
  );
};

export default AuthNavbar;
