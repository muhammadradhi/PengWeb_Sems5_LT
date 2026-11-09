import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuStatCard from "../Components/Molecules/MenuStatCard";
import MenuList from "../Components/Organisms/MenuList";
import MenuForm from "../Components/Organisms/MenuForm";
import Button from "../Components/Atoms/Button";

const Menu = ({ menu, onTambahMenu, onUbahMenu }) => {
  const [isOpen] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [menuDipilih, setMenuDipilih] = useState(null);
  const location = useLocation();

  const navItems = [
    { label: "Beranda", path: "/dashboard" },
    { label: "Pesanan", path: "/pesanan" },
    { label: "Menu", path: "/menu" },
    { label: "Riwayat Transaksi", path: "/riwayat-transaksi" },
  ];

  const isActive = (path) => location.pathname === path;

  const menuAktif = menu.filter((item) => item.stok > 0);

  let totalPorsi = 0;
  menu.forEach((item) => {
    totalPorsi = totalPorsi + item.stok;
  });

  const bukaFormTambah = () => {
    setMenuDipilih(null);
    setShowForm(true);
  };

  const bukaFormEdit = (item) => {
    setMenuDipilih(item);
    setShowForm(true);
  };

  const tutupForm = () => {
    setShowForm(false);
  };

  const simpanMenu = (data) => {
    if (menuDipilih) {
      onUbahMenu(data);
    } else {
      onTambahMenu(data);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
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

      <main className="mx-auto w-full max-w-[1232px] px-4 pb-12 pt-8 sm:px-6">
        {/* JUDUL HALAMAN */}
        <section className="mb-8 flex flex-col gap-5 border-b border-gray-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-success">
              <ion-icon name="restaurant-outline" />
              PENGELOLAAN STOK & MENU HARIAN
            </span>

            <h1 className="mt-1 font-serif text-3xl font-bold sm:text-4xl">
              Menu Saya
            </h1>

            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              Atur makanan, harga, dan jumlah porsi yang tersedia untuk dijual
              hari ini.
            </p>
          </div>

          <Button onClick={bukaFormTambah} className="w-fit px-8 py-3.5 text-base font-medium sm:text-lg">
            <ion-icon name="add-outline" />
            Tambah Menu
          </Button>
        </section>

        {/* RINGKASAN */}
        <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <MenuStatCard
            title="Total Menu Aktif"
            value={menuAktif.length + " Menu"}
            caption="Siap dipesan pembeli"
            icon="checkmark-circle-outline"
            warnaAngka="text-gray-900"
          />

          <MenuStatCard
            title="Porsi Tersedia"
            value={totalPorsi + " Porsi"}
            caption="Gabungan seluruh menu"
            icon="archive-outline"
            warnaAngka="text-success"
          />
        </section>

        {/* DAFTAR MENU */}
        <section>
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="flex items-center gap-2 font-serif text-xl font-bold">
              Daftar Menu & Stok Hari Ini
              <span className="rounded-full bg-gray-200 px-2 py-0.5 font-sans text-xs font-semibold text-gray-700">
                {menu.length} Item
              </span>
            </h2>

            <p className="text-xs text-gray-600">
              Pembaruan otomatis saat kasir memproses pesanan
            </p>
          </div>

          <MenuList menu={menu} onEdit={bukaFormEdit} />
        </section>
      </main>

      {showForm && (
        <MenuForm menuAwal={menuDipilih} onSimpan={simpanMenu} onClose={tutupForm} />
      )}
    </div>
  );
};

export default Menu;
