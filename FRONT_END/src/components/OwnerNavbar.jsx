import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Beranda", path: "/dashboard" },
  { label: "Pesanan", path: "/pesanan" },
  { label: "Menu", path: "/menu" },
  { label: "Riwayat Transaksi", path: "/riwayat-transaksi" },
];

const OwnerNavbar = ({ namaWarung, isOpen }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="flex min-h-16 flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 sm:px-12">
        {/* BRAND */}
        <Link to="/dashboard" className="shrink-0">
          <span className="text-2xl font-semibold tracking-tight text-[#111111]">
            Warung
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="order-3 flex w-full items-center gap-6 overflow-x-auto sm:order-none sm:w-auto sm:flex-1 sm:justify-center sm:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative shrink-0 py-5 text-sm transition-colors ${
                isActive(item.path)
                  ? "font-semibold text-[#303630] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#536258]"
                  : "font-medium text-gray-500 hover:text-gray-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* STORE PROFILE */}
        <div className="flex shrink-0 items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-semibold text-gray-800">{namaWarung}</p>

            <p
              className={`flex items-center justify-end gap-1 text-xs ${
                isOpen ? "text-blue-600" : "text-gray-500"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isOpen ? "bg-blue-500" : "bg-gray-400"
                }`}
              />
              {isOpen ? "Toko Buka" : "Toko Tutup"}
            </p>
          </div>

          <button
            type="button"
            aria-label="Profil pengguna"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2186ff] text-white transition hover:bg-[#086bdc]"
          >
            <ion-icon name="person-outline" className="text-xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default OwnerNavbar;
