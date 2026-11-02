import OwnerNavbar from "../components/OwnerNavbar";
import OperationalStatus from "../components/OperationalStatus";
import StatCard from "../components/StatCard";
import PageHeading from "../components/PageHeading";
import PesananList from "../components/PesananList";
import formatRupiah from "../utils/formatRupiah";

const DashboardPage = ({ pesanan, isOpen, onToggleOperasional }) => {
  const today = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  const pendapatan = pesanan.reduce(
    (total, item) => total + item.harga * item.jumlah,
    0,
  );
  const perluDiproses = pesanan.filter((item) => item.status !== "Selesai");

  return (
    <div className="min-h-screen bg-white text-[#20211f]">
      <OwnerNavbar namaWarung="Warung Ibu Dhiesna" isOpen={isOpen} />

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

        <OperationalStatus isOpen={isOpen} onToggle={onToggleOperasional} />

        {/* STATISTICS */}
        <section className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <StatCard
            title="Pendapatan Hari Ini"
            icon="wallet-outline"
            value={formatRupiah(pendapatan)}
            caption={
              pesanan.length === 0
                ? "Belum ada transaksi hari ini"
                : `Dari ${pesanan.length} transaksi`
            }
            note="Terupdate saat penjualan"
            noteIcon="information-circle-outline"
          />

          <StatCard
            title="Total Pesanan Hari Ini"
            icon="receipt-outline"
            value={`${pesanan.length} Pesanan`}
            caption={
              pesanan.length === 0
                ? "Belum ada pesanan masuk"
                : `${perluDiproses.length} pesanan masih diproses`
            }
            note={`${perluDiproses.length} antrean dapur saat ini`}
            noteIcon="checkmark-circle-outline"
          />
        </section>

        {/* ORDERS TO PROCESS */}
        <PageHeading
          as="h2"
          badge="DAPUR STANDBY"
          title="Pesanan Perlu Diproses"
          description="Pesanan berikut membutuhkan tindakan segera dari dapur."
        />

        <PesananList
          pesanan={perluDiproses}
          emptyText="Tidak Ada Pesanan yang Perlu Diproses"
        />
      </main>
    </div>
  );
};

export default DashboardPage;
