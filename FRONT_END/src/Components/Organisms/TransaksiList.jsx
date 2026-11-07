import TransaksiCard from "./TransaksiCard";

const TransaksiList = ({ transaksi, tanggal, idTerbuka, onLihatDetail }) => {
  if (transaksi.length === 0) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white px-5 py-16 text-center">
        <h3 className="text-base font-bold text-gray-900 sm:text-lg">
          Belum ada data Transaksi
        </h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {transaksi.map((item) => (
        <TransaksiCard
          key={item.id}
          id={item.id}
          namaPelanggan={item.namaPelanggan}
          tanggal={tanggal}
          waktuMasuk={item.waktuMasuk}
          metodePembayaran={item.metodePembayaran}
          items={item.items}
          terbuka={item.id === idTerbuka}
          onLihatDetail={() => onLihatDetail(item.id)}
        />
      ))}
    </div>
  );
};

export default TransaksiList;
