import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "ionicons";
const Pesanan = () => {
  const [isOpen] = useState(true);
  const location = useLocation();

  const navItems = [
    { label: "Beranda", path: "/dashboard" },
    { label: "Pesanan", path: "/pesanan" },
    { label: "Menu", path: "/menu" },
    { label: "Riwayat Transaksi", path: "/riwayat-transaksi" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
      {/* NAVBAR */}
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
              <p className="text-sm font-semibold text-gray-800">
                Warung Ibu Dhiesna
              </p>

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

      {/* MAIN CONTENT */}
      <main className="mx-auto w-full max-w-[1232px] px-4 pb-10 pt-8 sm:px-6 sm:pt-10 lg:px-0">
        {/* PAGE HEADING */}
        <section className="mb-5">
          <span className="inline-flex items-center gap-1 rounded-md bg-gray-200 px-2.5 py-1 text-xs font-semibold text-slate-700">
            <span className="text-[10px]">●</span>
            MANAJEMEN ANTRIAN DAPUR
          </span>

          <h1 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Daftar Pesanan Masuk
          </h1>

          <p className="mt-1 text-sm leading-6 text-slate-500 sm:text-base">
            Pantau proses masak dan ubah status pesanan secara real-time.
          </p>
        </section>

        {/* EMPTY STATE */}
        <section className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 py-12 text-center">
          <div className="mb-5 flex h-[58px] w-[58px] items-center justify-center rounded-xl bg-blue-600 text-white">
            <ion-icon name="restaurant" className="text-[28px]" />
          </div>

          <h2 className="text-base font-bold text-slate-900 sm:text-lg">
            Belum Ada Pesanan Masuk
          </h2>

          <p className="mt-2 max-w-md text-sm leading-[22px] text-slate-500 sm:text-base">
            Tambah produk langsung dari Menu.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Pesanan;
