import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../Components/Atoms/Button";
import daftarPesanan from "../data/pesananData";

const BULAN = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const ITEM_PER_HALAMAN = 4;

const formatRupiah = (angka) => "Rp " + angka.toLocaleString("id-ID");

// "2026-10-03" -> "3 Oktober 2026"
const formatTanggalPanjang = (iso) => {
  const [t, b, h] = iso.split("-").map(Number);
  return `${h} ${BULAN[b - 1]} ${t}`;
};

// "2026-10-03" -> "3 Okt 2026"
const formatTanggalPendek = (iso) => {
  const [t, b, h] = iso.split("-").map(Number);
  return `${h} ${BULAN[b - 1].slice(0, 3)} ${t}`;
};

const hitungSelisihHari = (isoA, isoB) => {
  const msPerHari = 1000 * 60 * 60 * 24;
  return Math.round((new Date(isoA) - new Date(isoB)) / msPerHari);
};

// Data pesanan hanya menyimpan jam (waktuMasuk/waktuSelesai), tanpa tanggal.
// Semua pesanan pada data frontend ini adalah pesanan hari ini.
const tanggalHariIniISO = () => {
  const sekarang = new Date();
  const bulan = String(sekarang.getMonth() + 1).padStart(2, "0");
  const tanggal = String(sekarang.getDate()).padStart(2, "0");
  return `${sekarang.getFullYear()}-${bulan}-${tanggal}`;
};

const RiwayatTransaksi = ({ pesanan = daftarPesanan, onLihatDetail, onCetak }) => {
  const [isOpen] = useState(true);
  const [filter, setFilter] = useState("hari-ini"); // hari-ini | 7-hari | tanggal
  const [tanggalDipilih, setTanggalDipilih] = useState("");
  const [halaman, setHalaman] = useState(1);
  const [transaksiTerpilih, setTransaksiTerpilih] = useState(null);
  const location = useLocation();

  const tanggalHariIni = tanggalHariIniISO();

  // Mapping data pesanan -> kebutuhan tampilan Riwayat Transaksi.
  // Hanya pesanan berstatus "Selesai" yang masuk ke riwayat.
  const transaksi = pesanan
    .filter((item) => item.status === "Selesai")
    .map((item) => {
      let total = 0;
      item.items.forEach((menu) => {
        total = total + menu.harga * menu.jumlah;
      });

      return {
        id: item.id,
        pelanggan: item.namaPelanggan,
        tanggal: tanggalHariIni,
        jam: item.waktuSelesai || item.waktuMasuk,
        items: item.items.map((menu) => ({
          nama: menu.nama,
          qty: menu.jumlah,
          harga: menu.harga,
          keterangan: menu.keterangan,
        })),
        metode: item.metodePembayaran,
        total,
        status: item.status,
      };
    });

  const navItems = [
    { label: "Beranda", path: "/dashboard" },
    { label: "Pesanan", path: "/pesanan" },
    { label: "Menu", path: "/menu" },
    { label: "Riwayat Transaksi", path: "/riwayat-transaksi" },
  ];

  const isActive = (path) => location.pathname === path;

  // Tanggal acuan = tanggal transaksi terbaru.
  const urut = [...transaksi].sort((a, b) =>
    (b.tanggal + b.jam).localeCompare(a.tanggal + a.jam)
  );
  const tanggalAcuan = urut.length > 0 ? urut[0].tanggal : tanggalHariIni;

  const tanggalTampil = filter === "tanggal" && tanggalDipilih ? tanggalDipilih : tanggalAcuan;

  const terfilter = urut.filter((t) => {
    if (filter === "hari-ini") return t.tanggal === tanggalAcuan;
    if (filter === "7-hari") {
      const selisih = hitungSelisihHari(tanggalAcuan, t.tanggal);
      return selisih >= 0 && selisih < 7;
    }
    if (filter === "tanggal" && tanggalDipilih) return t.tanggal === tanggalDipilih;
    return true;
  });

  let totalPenjualan = 0;
  terfilter.forEach((t) => {
    totalPenjualan = totalPenjualan + t.total;
  });

  const totalHalaman = Math.max(1, Math.ceil(terfilter.length / ITEM_PER_HALAMAN));
  const mulai = (halaman - 1) * ITEM_PER_HALAMAN;
  const tampil = terfilter.slice(mulai, mulai + ITEM_PER_HALAMAN);

  const labelPeriode =
    filter === "hari-ini"
      ? "hari ini"
      : filter === "7-hari"
      ? "7 hari terakhir"
      : "pada " + formatTanggalPendek(tanggalTampil);

  const bukaDetail = (transaksi) => {
    setTransaksiTerpilih(transaksi);
    if (onLihatDetail) {
      onLihatDetail(transaksi);
    }
  };

  const tutupDetail = () => {
    setTransaksiTerpilih(null);
  };

  const ubahFilter = (nilai) => {
    setFilter(nilai);
    setHalaman(1);
  };

  const ubahTanggal = (e) => {
    setTanggalDipilih(e.target.value);
    setFilter("tanggal");
    setHalaman(1);
  };

  const cetakLaporan = () => {
    if (onCetak) {
      onCetak(terfilter);
    } else {
      window.print();
    }
  };

  const ringkasItem = (items) => items.map((i) => `${i.qty}x ${i.nama}`).join(", ");

  const kelasFilter = (aktif) =>
    `rounded-lg px-5 py-2.5 text-sm font-medium transition ${
      aktif
        ? "bg-[#2186ff] text-white shadow-sm"
        : "bg-white text-gray-700 hover:bg-gray-100"
    }`;

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
        <section className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wide text-gray-900">
              <span className="h-2 w-2 rounded-full bg-gray-900" />
              LAPORAN PENJUALAN KASIR
            </span>

            <h1 className="mt-1 font-serif text-3xl font-bold sm:text-4xl">
              Riwayat Transaksi
            </h1>

            <p className="mt-2 text-sm text-gray-700 sm:text-base">
              Lihat penjualan dan pembayaran yang sudah tercatat.
            </p>
          </div>

          <Button
            onClick={cetakLaporan}
            className="w-fit gap-2 px-6 py-3 text-base font-medium"
          >
            <ion-icon name="print-outline" />
            Cetak Laporan
          </Button>
        </section>

        {/* RINGKASAN */}
        <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg text-gray-700">Total Penjualan</p>
                <p className="mt-1 font-serif text-4xl font-bold text-gray-900 sm:text-5xl">
                  {formatRupiah(totalPenjualan)}
                </p>
              </div>

              <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#2186ff] text-3xl text-white">
                <ion-icon name="cash-outline" />
              </span>
            </div>

            <p className="mt-8 flex items-center gap-2 text-sm text-gray-600">
              <ion-icon name="checkmark-circle-outline" class="text-xl text-green-800" />
              Berdasarkan transaksi selesai pada periode ini
            </p>
          </div>

          <div className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-lg text-gray-700">Jumlah Transaksi</p>
                <p className="mt-1 font-serif text-4xl font-bold text-green-900 sm:text-5xl">
                  {terfilter.length} Transaksi
                </p>
              </div>

              <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100 text-3xl text-green-900">
                <ion-icon name="receipt-outline" />
              </span>
            </div>

            <p className="mt-8 flex items-center gap-2 text-sm text-gray-600">
              <ion-icon name="restaurant-outline" class="text-xl text-green-900" />
              Pesanan berhasil disajikan & dibayar
            </p>
          </div>
        </section>

        {/* FILTER PERIODE */}
        <section className="mb-10 flex flex-col gap-3 rounded-xl bg-gray-200/60 p-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => ubahFilter("hari-ini")}
              className={kelasFilter(filter === "hari-ini")}
            >
              Hari Ini
            </button>

            <button
              type="button"
              onClick={() => ubahFilter("7-hari")}
              className={kelasFilter(filter === "7-hari")}
            >
              7 Hari Terakhir
            </button>

            <label
              className={`flex cursor-pointer items-center gap-2 ${kelasFilter(
                filter === "tanggal"
              )}`}
            >
              <ion-icon name="calendar-outline" class="text-lg" />
              <span>
                Pilih Tanggal:{" "}
                <span className="font-semibold">
                  {formatTanggalPendek(tanggalTampil)}
                </span>
              </span>
              <input
                type="date"
                value={tanggalDipilih}
                onChange={ubahTanggal}
                className="sr-only"
              />
            </label>
          </div>

          <p className="px-2 text-xs font-semibold text-gray-700 sm:text-sm">
            Zona Waktu: WIB (Jakarta)
          </p>
        </section>

        {/* DAFTAR TRANSAKSI */}
        <section>
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-serif text-2xl font-bold">Daftar Transaksi</h2>

            <p className="text-sm text-gray-700">
              Menampilkan {terfilter.length} transaksi selesai {labelPeriode}
            </p>
          </div>

          {tampil.length === 0 ? (
            <div className="rounded-xl bg-white p-10 text-center text-gray-500 shadow-sm">
              Belum ada transaksi pada periode ini.
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {tampil.map((t) => (
                <article
                  key={t.id}
                  className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                >
                  {/* INFO PESANAN */}
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-serif text-xl font-bold text-green-900">
                        #{t.id}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                      <span className="font-semibold text-gray-900">
                        {t.pelanggan}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                      <span className="text-sm text-gray-600">
                        {formatTanggalPanjang(t.tanggal)} · {t.jam} WIB
                      </span>
                    </div>

                    <p className="mt-3 text-base text-gray-900">
                      {ringkasItem(t.items)}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-2 rounded bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-800">
                        <ion-icon
                          name={t.metode === "QRIS" ? "qr-code-outline" : "cash-outline"}
                          class="text-base text-green-900"
                        />
                        Metode: {t.metode === "QRIS" ? "QRIS" : "Tunai (Cash)"}
                      </span>

                      {t.metode === "Tunai" && t.diterima > t.total && (
                        <span className="rounded bg-gray-100 px-3 py-1.5 text-xs text-gray-600">
                          Diterima: {formatRupiah(t.diterima)} · Kembalian:{" "}
                          {formatRupiah(t.diterima - t.total)}
                        </span>
                      )}

                      <span className="inline-flex items-center gap-1.5 rounded bg-[#2186ff] px-3 py-1.5 text-sm font-medium text-white">
                        <span className="h-2 w-2 rounded-full bg-white" />
                        {t.status}
                      </span>
                    </div>
                  </div>

                  {/* TOTAL & AKSI */}
                  <div className="flex shrink-0 flex-col sm:items-end">
                    <p className="text-sm text-gray-700">Total Pembayaran</p>
                    <p className="font-serif text-3xl font-bold text-green-900">
                      {formatRupiah(t.total)}
                    </p>

                    <button
                      type="button"
                      onClick={() => bukaDetail(t)}
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-8 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-200"
                    >
                      Lihat Detail
                      <ion-icon name="chevron-forward-outline" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* PAGINASI */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600">
              Menampilkan {terfilter.length === 0 ? 0 : mulai + 1} -{" "}
              {Math.min(mulai + ITEM_PER_HALAMAN, terfilter.length)} dari{" "}
              {terfilter.length} transaksi
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                disabled={halaman === 1}
                onClick={() => setHalaman(halaman - 1)}
                className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:bg-gray-100"
              >
                Sebelumnya
              </button>

              <button
                type="button"
                disabled={halaman === totalHalaman}
                onClick={() => setHalaman(halaman + 1)}
                className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:bg-gray-100"
              >
                Berikutnya
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* MODAL DETAIL TRANSAKSI */}
      {transaksiTerpilih && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={tutupDetail}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="judul-detail-transaksi"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white shadow-xl"
          >
            {/* HEADER MODAL */}
            <div className="flex items-start justify-between gap-4 border-b border-gray-200 px-6 py-5">
              <div>
                <p className="text-xs font-bold tracking-wide text-gray-500">
                  DETAIL TRANSAKSI
                </p>
                <h2
                  id="judul-detail-transaksi"
                  className="mt-1 font-serif text-2xl font-bold text-green-900"
                >
                  #{transaksiTerpilih.id}
                </h2>
              </div>

              <button
                type="button"
                onClick={tutupDetail}
                aria-label="Tutup detail transaksi"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-2xl leading-none text-gray-700 transition hover:bg-gray-200"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            {/* INFO TRANSAKSI */}
            <div className="px-6 py-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-gray-500">
                    NAMA PELANGGAN
                  </p>
                  <p className="mt-1 text-base font-semibold text-gray-900">
                    {transaksiTerpilih.pelanggan}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-wide text-gray-500">
                    TANGGAL &amp; JAM
                  </p>
                  <p className="mt-1 text-base text-gray-900">
                    {formatTanggalPanjang(transaksiTerpilih.tanggal)} ·{" "}
                    {transaksiTerpilih.jam} WIB
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-wide text-gray-500">
                    METODE PEMBAYARAN
                  </p>
                  <p className="mt-1 inline-flex items-center gap-2 text-base text-gray-900">
                    <ion-icon
                      name={
                        transaksiTerpilih.metode === "QRIS"
                          ? "qr-code-outline"
                          : "cash-outline"
                      }
                      class="text-base text-green-900"
                    />
                    {transaksiTerpilih.metode === "QRIS"
                      ? "QRIS"
                      : "Tunai (Cash)"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-wide text-gray-500">
                    STATUS
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1.5 rounded bg-[#2186ff] px-3 py-1.5 text-sm font-medium text-white">
                    <span className="h-2 w-2 rounded-full bg-white" />
                    {transaksiTerpilih.status}
                  </span>
                </div>
              </div>

              {/* DAFTAR MENU */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold tracking-wide text-gray-700">
                  DAFTAR MENU
                </h3>

                <div className="mt-3 divide-y divide-gray-100 rounded-lg bg-gray-50 px-4">
                  {transaksiTerpilih.items.map((item) => (
                    <div
                      key={item.nama}
                      className="flex items-start justify-between gap-3 py-3"
                    >
                      <div>
                        <p className="text-base text-gray-900">
                          {item.qty}x {item.nama}
                        </p>
                        {item.keterangan && (
                          <p className="mt-0.5 text-xs text-gray-500">
                            {item.keterangan}
                          </p>
                        )}
                      </div>
                      <p className="shrink-0 text-sm text-gray-700">
                        {formatRupiah(item.harga * item.qty)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TOTAL */}
              <div className="mt-5 border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">
                    Total Pembayaran
                  </span>
                  <span className="font-serif text-2xl font-bold text-green-900">
                    {formatRupiah(transaksiTerpilih.total)}
                  </span>
                </div>

                {transaksiTerpilih.diterima !== undefined && (
                  <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
                    <span>Diterima: {formatRupiah(transaksiTerpilih.diterima)}</span>
                    <span>
                      Kembalian:{" "}
                      {formatRupiah(
                        transaksiTerpilih.diterima - transaksiTerpilih.total
                      )}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RiwayatTransaksi;