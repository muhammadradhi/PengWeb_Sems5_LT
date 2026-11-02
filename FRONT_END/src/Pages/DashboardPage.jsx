import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const DashboardPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const today = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  const navItems = [
    { label: "Beranda", path: "/dashboard" },
    { label: "Pesanan", path: "/pesanan" },
    { label: "Menu", path: "/menu" },
    { label: "Riwayat Transaksi", path: "/riwayat-transaksi" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white text-[#20211f]">
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
      <main className="mx-auto w-full max-w-275 px-5 pb-12 pt-8 sm:px-12 sm:pt-10">
        {/* WELCOME */}
        <section className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Selamat datang, Warung Ibu Dhiesna
            </h1>

            <p className="mt-2 text-sm text-[#626962]">
              Berikut ringkasan penjualan hari ini.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-md bg-[#f2f2f6] px-3 py-2 text-xs font-medium text-gray-700 sm:text-sm">
            <ion-icon name="calendar-outline" className="text-base" />
            <span>Hari ini, {today}</span>
          </div>
        </section>

        {/* OPERATIONAL STATUS */}
        <section className="mb-8 flex flex-col gap-5 rounded-lg border border-gray-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#2186ff] text-white">
              <ion-icon name="storefront-outline" className="text-2xl" />
            </div>

            <div>
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <p className="text-xs font-medium tracking-wide text-gray-500 sm:text-sm">
                  STATUS OPERASIONAL WARUNG
                </p>

                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold text-white ${
                    isOpen ? "bg-blue-500" : "bg-gray-500"
                  }`}
                >
                  {isOpen ? "BUKA" : "TUTUP"}
                </span>
              </div>

              <p className="text-sm font-semibold text-gray-900 sm:text-base">
                {isOpen
                  ? "Warung Buka — Siap Menerima Pesanan"
                  : "Warung Tutup — Pesanan Dinonaktifkan"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="inline-flex min-h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50 sm:text-sm"
          >
            <ion-icon name="power-outline" className="text-lg" />
            {isOpen ? "Tutup Warung Sementara" : "Buka Warung Kembali"}
          </button>
        </section>

        {/* STATISTICS */}
        <section className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* REVENUE */}
          <article className="rounded-lg border border-gray-200 bg-white p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-sm font-semibold text-gray-600 sm:text-base">
                Pendapatan Hari Ini
              </h2>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                <ion-icon name="wallet-outline" className="text-2xl" />
              </div>
            </div>

            <p className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Rp 0
            </p>

            <p className="mt-2 text-xs text-gray-500 sm:text-sm">
              Belum ada transaksi hari ini
            </p>

            <div className="mt-5 flex items-center gap-2 rounded-md bg-[#f2f2f6] px-3 py-3 text-xs text-gray-600 sm:text-sm">
              <ion-icon
                name="information-circle-outline"
                className="shrink-0 text-lg"
              />
              <span>Terupdate saat penjualan</span>
            </div>
          </article>

          {/* TOTAL ORDERS */}
          <article className="rounded-lg border border-gray-200 bg-white p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-sm font-semibold text-gray-600 sm:text-base">
                Total Pesanan Hari Ini
              </h2>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                <ion-icon name="receipt-outline" className="text-2xl" />
              </div>
            </div>

            <p className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              0 Pesanan
            </p>

            <p className="mt-2 text-xs text-gray-500 sm:text-sm">
              Belum ada pesanan masuk
            </p>

            <div className="mt-5 flex items-center gap-2 rounded-md bg-[#f2f2f6] px-3 py-3 text-xs text-gray-600 sm:text-sm">
              <ion-icon
                name="checkmark-circle-outline"
                className="shrink-0 text-lg"
              />
              <span>0 antrean dapur siap menerima pesanan</span>
            </div>
          </article>
        </section>

        {/* ORDERS TO PROCESS */}
        <section>
          <div className="mb-5">
            <div className="mb-2 inline-flex items-center gap-2 rounded-sm bg-[#e9e9e2] px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#28523b]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#28523b]" />
              DAPUR STANDBY
            </div>

            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Pesanan Perlu Diproses
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-[#626962]">
              Pesanan berikut membutuhkan tindakan segera dari dapur.
            </p>
          </div>

          {/* EMPTY STATE */}
          <div className="flex min-h-[290px] flex-col items-center justify-center rounded-lg border border-gray-200 px-5 py-10 text-center sm:px-10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#2186ff] text-white">
              <ion-icon name="restaurant-outline" className="text-3xl" />
            </div>

            <h3 className="text-base font-bold text-gray-900 sm:text-lg">
              Tidak Ada Pesanan yang Perlu Diproses
            </h3>

            <p className="mt-2 max-w-[390px] text-sm leading-relaxed text-gray-500">
              Semua pesanan sudah ditangani atau belum ada pesanan baru yang
              masuk. Warung siap menerima pesanan berikutnya.
            </p>

            <div className="mt-4 flex max-w-full items-center justify-center gap-2 rounded-lg bg-[#f2f2f6] px-3 py-2 text-xs text-gray-600 sm:px-4 sm:text-sm">
              <ion-icon
                name="notifications-outline"
                className="shrink-0 text-base"
              />
              <span>
                Notifikasi suara berbunyi otomatis saat ada pesanan baru
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
