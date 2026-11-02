import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TabPesanan from "../Components/Molecules/TabPesanan";
import PesananList from "../Components/Organisms/PesananList";
import PesananDetail from "../Components/Organisms/PesananDetail";
import statusPesanan from "../data/statusPesanan";

const Pesanan = ({ pesanan, onUbahStatus }) => {
  const [isOpen] = useState(true);
  const [tabAktif, setTabAktif] = useState("Baru");
  const [idDipilih, setIdDipilih] = useState("");
  const location = useLocation();

  const navItems = [
    { label: "Beranda", path: "/dashboard" },
    { label: "Pesanan", path: "/pesanan" },
    { label: "Menu", path: "/menu" },
    { label: "Riwayat Transaksi", path: "/riwayat-transaksi" },
  ];

  const isActive = (path) => location.pathname === path;

  const daftarTab = ["Baru", "Diproses", "Siap", "Selesai"];

  const pesananTab = pesanan.filter((item) => item.status === tabAktif);

  let pesananDipilih = pesananTab.find((item) => item.id === idDipilih);
  if (!pesananDipilih) {
    pesananDipilih = pesananTab[0];
  }

  const gantiTab = (tab) => {
    setTabAktif(tab);
    setIdDipilih("");
  };

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
      <main className="mx-auto w-full max-w-[1232px] px-4 pb-12 pt-8 sm:px-6 sm:pt-10">
        <section className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pesanan
          </h1>
          <p className="mt-2 text-base text-gray-600">
            Kelola pesanan yang masuk dan proses pesanan pelanggan dengan tertib dan cepat.
          </p>
        </section>

        <div className="mb-8 flex gap-4 overflow-x-auto border-b border-gray-200">
          {daftarTab.map((tab) => (
            <TabPesanan
              key={tab}
              label={statusPesanan[tab].tab}
              jumlah={pesanan.filter((item) => item.status === tab).length}
              aktif={tab === tabAktif}
              onClick={() => gantiTab(tab)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_420px]">
          <section>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-semibold tracking-wider text-gray-700">
                DAFTAR {statusPesanan[tabAktif].tab.toUpperCase()}
              </h2>
              <p className="text-xs text-gray-600">Klik kartu untuk meninjau rincian</p>
            </div>

            <PesananList
              pesanan={pesananTab}
              teksKosong="Belum ada data Pesanan"
              idDipilih={pesananDipilih ? pesananDipilih.id : ""}
              onPilih={setIdDipilih}
              onAksi={onUbahStatus}
            />
          </section>

          <PesananDetail pesanan={pesananDipilih} onAksi={onUbahStatus} />
        </div>
      </main>
    </div>
  );
};

export default Pesanan;
