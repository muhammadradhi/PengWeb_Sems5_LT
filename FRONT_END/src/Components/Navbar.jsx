const Navbar = () => {
  return (
    <nav className="flex items-center justify-between shadow-xl px-6 py-4">
      <h1 className="text-2xl font-bold text-primary">Warung Dhiesna</h1>

      <div className="flex gap-4 text-font-2">
        <a href="/" className="hover:underline font-medium">
          Masuk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
