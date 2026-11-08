import PesananCard from "./PesananCard";

const PesananList = ({ pesanan, teksKosong, idDipilih, onPilih, onAksi }) => {
  if (pesanan.length === 0) {
    return (
      <div className="flex min-h-[240px] flex-col items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-12 text-center">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#2186ff] text-white">
          <ion-icon name="restaurant-outline" className="text-3xl" />
        </div>

        <h3 className="text-base font-bold text-gray-900 sm:text-lg">{teksKosong}</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {pesanan.map((item) => (
        <PesananCard
          key={item.id}
          id={item.id}
          namaPelanggan={item.namaPelanggan}
          waktuMasuk={item.waktuMasuk}
          waktuSelesai={item.waktuSelesai}
          metodePembayaran={item.metodePembayaran}
          status={item.status}
          items={item.items}
          aktif={item.id === idDipilih}
          onPilih={() => onPilih(item.id)}
          onAksi={() => onAksi(item.id)}
        />
      ))}
    </div>
  );
};

export default PesananList;
