import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import RingkasanCard from "../Components/Molecules/RingkasanCard";
import TransaksiList from "../Components/Organisms/TransaksiList";
import Button from "../Components/Atoms/Button";

const RiwayatTransaksi = ({ pesanan }) => {
  const [isOpen] = useState(true);
  const [filter, setFilter] = useState("Hari Ini");
  const [halaman, setHalaman] = useState(1);
  const [idTerbuka, setIdTerbuka] = useState("");
  const location = useLocation();

  const navItems = [
    { label: "Beranda", path: "/dashboard" },
    { label: "Pesanan", path: "/pesanan" },
    { label: "Menu", path: "/menu" },
    { label: "Riwayat Transaksi", path: "/riwayat-transaksi" },
  ];

  const isActive = (path) => location.pathname === path;

  const tanggalPanjang = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const tanggalPendek = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const transaksi = pesanan.filter((item) => item.status === "Selesai");

  let totalPenjualan = 0;
  transaksi.forEach((item) => {
    item.items.forEach((menu) => {
      totalPenjualan = totalPenjualan + menu.harga * menu.jumlah;
    });
  });

  const jumlahPerHalaman = 4;
  const totalHalaman = Math.max(1, Math.ceil(transaksi.length / jumlahPerHalaman));
  const awal = (halaman - 1) * jumlahPerHalaman;
  const transaksiHalamanIni = transaksi.slice(awal, awal + jumlahPerHalaman);

  const bukaTutupDetail = (id) => {
    if (idTerbuka === id) {
      setIdTerbuka("");
    } else {
      setIdTerbuka(id);
    }
  };

  let kelasHariIni = "bg-white text-gray-800";
  let kelas7Hari = "bg-white text-gray-800";
  if (filter === "Hari Ini") {
    kelasHariIni = "bg-[#2186ff] text-white";
  } else {
    kelas7Hari = "bg-[#2186ff] text-white";
  }

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
      <main className="mx-auto w-full max-w-[1232px] px-4 pb-12 pt-10 sm:px-6">
        <section className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold tracking-wider text-gray-900">
              <span className="h-2 w-2 rounded-full bg-gray-900" />
              LAPORAN PENJUALAN KASIR
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Riwayat Transaksi
            </h1>
            <p className="mt-2 text-lg text-gray-800">
              Lihat penjualan dan pembayaran yang sudah tercatat.
            </p>
          </div>

          <Button variant="outline" onClick={() => window.print()} className="w-fit border-0 bg-gray-100 text-lg">
            <ion-icon name="print-outline" />
            Cetak Laporan
          </Button>
        </section>

        <section className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <RingkasanCard
            title="Total Penjualan"
            value={"Rp " + totalPenjualan.toLocaleString("id-ID")}
            caption="Berdasarkan transaksi selesai pada periode ini"
            icon="cash-outline"
            captionIcon="checkmark-circle-outline"
            warnaAngka="text-gray-900"
            warnaIkon="bg-[#2186ff] text-white"
          />

          <RingkasanCard
            title="Jumlah Transaksi"
            value={transaksi.length + " Transaksi"}
            caption="Pesanan berhasil disajikan & dibayar"
            icon="receipt-outline"
            captionIcon="restaurant-outline"
            warnaAngka="text-success"
            warnaIkon="bg-gray-100 text-success"
          />
        </section>

        <section className="mb-12 flex flex-wrap items-center justify-between gap-4 rounded-md bg-gray-100 p-3">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setFilter("Hari Ini")}
              className={`rounded-md px-8 py-2.5 text-lg ${kelasHariIni}`}
            >
              Hari Ini
            </button>
            <button
              type="button"
              onClick={() => setFilter("7 Hari")}
              className={`rounded-md px-8 py-2.5 text-lg ${kelas7Hari}`}
            >
              7 Hari Terakhir
            </button>
            <span className="flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-lg text-gray-800">
              <ion-icon name="calendar-outline" />
              Pilih Tanggal: <b>{tanggalPendek}</b>
            </span>
          </div>

          <p className="pr-4 text-sm font-semibold tracking-wide text-gray-700">
            Zona Waktu: WIB (Jakarta)
          </p>
        </section>

        <section>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-3xl font-bold text-gray-900">Daftar Transaksi</h2>
            <p className="text-lg text-gray-700">
              Menampilkan {transaksi.length} transaksi selesai hari ini
            </p>
          </div>

          <TransaksiList
            transaksi={transaksiHalamanIni}
            tanggal={tanggalPanjang}
            idTerbuka={idTerbuka}
            onLihatDetail={bukaTutupDetail}
          />

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            <p className="text-lg text-gray-700">
              Menampilkan {transaksiHalamanIni.length} dari {transaksi.length} transaksi
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setHalaman(halaman - 1)}
                disabled={halaman === 1}
                className="rounded bg-gray-200 px-4 py-2 font-medium text-gray-900 disabled:text-gray-400"
              >
                Sebelumnya
              </button>
              <button
                type="button"
                onClick={() => setHalaman(halaman + 1)}
                disabled={halaman === totalHalaman}
                className="rounded bg-gray-200 px-4 py-2 font-medium text-gray-900 disabled:text-gray-400"
              >
                Berikutnya
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RiwayatTransaksi;
