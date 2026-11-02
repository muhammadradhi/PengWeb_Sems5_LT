import Badge from "../Atoms/Badge";
import Button from "../Atoms/Button";

const MenuCard = ({ nama, kategori, harga, deskripsi, stok, stokAwal, onEdit }) => {
  const habis = stok === 0;
  const menipis = stok > 0 && stok <= 3;

  let warnaKartu = "border-gray-200 bg-white";
  let warnaHarga = "text-success";
  let warnaPorsi = "text-gray-900";

  if (habis) {
    warnaKartu = "border-gray-400 bg-[#f1f1f5]";
    warnaHarga = "text-gray-500 line-through";
    warnaPorsi = "text-tertiary";
  }
  if (menipis) {
    warnaPorsi = "text-gray-500";
  }

  let ikon = "restaurant-outline";
  if (kategori === "Minuman") {
    ikon = "cafe-outline";
  }

  return (
    <article
      className={`flex flex-col gap-5 rounded-lg border p-6 sm:flex-row sm:items-center ${warnaKartu}`}
    >
      <div className="relative flex h-28 w-28 shrink-0 flex-col items-center justify-center gap-1 rounded-md bg-[#e9e9e2] text-gray-700">
        <ion-icon name={ikon} className="text-3xl" />
        <span className="text-xs font-semibold">{kategori}</span>

        {habis && (
          <span className="absolute rounded-sm bg-tertiary px-2 py-1 text-xs font-bold text-white">
            HABIS
          </span>
        )}
      </div>

      <div className="flex-1">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded-sm bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-700">
            {kategori}
          </span>

          {habis && <Badge warna="bg-gray-300 text-tertiary">● Habis</Badge>}

          {menipis && (
            <Badge warna="bg-gray-100 text-gray-600">
              <ion-icon name="warning-outline" />
              Stok tinggal {stok} porsi
            </Badge>
          )}

          {!habis && !menipis && (
            <Badge warna="bg-[#2186ff] text-white">● Tersedia</Badge>
          )}
        </div>

        <h3 className="font-serif text-xl font-bold text-gray-900">{nama}</h3>

        <p className="mt-1">
          <span className={`font-serif text-lg font-bold ${warnaHarga}`}>
            Rp {harga.toLocaleString("id-ID")}
          </span>
          <span className="text-xs text-gray-500"> / porsi</span>
        </p>

        {habis ? (
          <p className="mt-1 flex items-center gap-1 text-xs text-tertiary">
            <ion-icon name="remove-circle-outline" />
            Otomatis tidak dapat dipesan pelanggan di aplikasi
          </p>
        ) : (
          <p className="mt-1 text-xs text-gray-600">{deskripsi}</p>
        )}
      </div>

      <div className="flex items-center justify-between gap-8">
        <div className="sm:text-right">
          <p className={`font-serif text-2xl font-bold sm:text-3xl ${warnaPorsi}`}>
            {stok} Porsi Tersisa
          </p>
          <p className="mt-1 text-xs text-gray-500">
            dari total stok awal {stokAwal} porsi
          </p>
        </div>

        <Button variant="outline" onClick={onEdit} className="bg-gray-50">
          <ion-icon name="create-outline" />
          Edit Menu
        </Button>
      </div>
    </article>
  );
};

export default MenuCard;
