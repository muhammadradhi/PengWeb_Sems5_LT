import { useState } from "react";
import OwnerNavbar from "../components/OwnerNavbar";
import MenuStatCard from "../components/MenuStatCard";
import MenuList from "../components/MenuList";
import MenuForm from "../components/MenuForm";

const Menu = ({ menu, isOpen, onTambahMenu, onUbahMenu }) => {
  const [showForm, setShowForm] = useState(false);
  const [menuDipilih, setMenuDipilih] = useState(null);

  // Menu yang stoknya lebih dari 0
  const menuAktif = menu.filter((item) => item.stok > 0);

  // Jumlah semua porsi
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
      <OwnerNavbar namaWarung="Warung Ibu Dhiesna" isOpen={isOpen} />

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

          <button
            type="button"
            onClick={bukaFormTambah}
            className="inline-flex w-fit items-center gap-2 rounded-md bg-[#2186ff] px-8 py-3.5 text-base font-medium text-white hover:bg-[#086bdc] sm:text-lg"
          >
            <ion-icon name="add-outline" />
            Tambah Menu
          </button>
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
