import OwnerNavbar from "../components/OwnerNavbar";
import PageHeading from "../components/PageHeading";
import PesananForm from "../components/PesananForm";
import PesananList from "../components/PesananList";

const Pesanan = ({ pesanan, daftarMenu, onTambahPesanan, isOpen }) => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
      <OwnerNavbar namaWarung="Warung Ibu Dhiesna" isOpen={isOpen} />

      {/* MAIN CONTENT */}
      <main className="mx-auto w-full max-w-[1232px] px-4 pb-10 pt-8 sm:px-6 sm:pt-10">
        <PageHeading
          badge="MANAJEMEN ANTRIAN DAPUR"
          title="Daftar Pesanan Masuk"
          description="Pantau proses masak dan ubah status pesanan secara real-time."
        />

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[340px_1fr]">
          <PesananForm daftarMenu={daftarMenu} onTambah={onTambahPesanan} />
          <PesananList pesanan={pesanan} />
        </div>
      </main>
    </div>
  );
};

export default Pesanan;
