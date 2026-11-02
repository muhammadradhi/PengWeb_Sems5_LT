import PesananCard from "./PesananCard";

const PesananList = ({ pesanan, emptyText = "Belum ada data Pesanan" }) => {
  if (pesanan.length === 0) {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-12 text-center">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#2186ff] text-white">
          <ion-icon name="restaurant-outline" className="text-3xl" />
        </div>

        <h3 className="text-base font-bold text-gray-900 sm:text-lg">
          {emptyText}
        </h3>

        <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-500">
          Pesanan yang masuk akan tampil di sini.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {pesanan.map((item) => (
        <PesananCard
          key={item.id}
          namaPelanggan={item.namaPelanggan}
          menu={item.menu}
          harga={item.harga}
          jumlah={item.jumlah}
          catatan={item.catatan}
          alamat={item.alamat}
          metodePembayaran={item.metodePembayaran}
          status={item.status}
          waktu={item.waktu}
        />
      ))}
    </div>
  );
};

export default PesananList;
