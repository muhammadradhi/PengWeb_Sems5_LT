import formatRupiah from "../utils/formatRupiah";

const MenuCard = ({ nama, kategori, harga, deskripsi, stok, stokAwal, onEdit }) => {
  const isHabis = stok === 0;
  const isMenipis = stok > 0 && stok <= 3;

  return (
    <article
      className={`flex flex-col gap-5 rounded-lg border p-6 sm:flex-row sm:items-center ${
        isHabis ? "border-gray-400 bg-[#f1f1f5]" : "border-gray-200 bg-white"
      }`}
    >
      {/* GAMBAR */}
      <div className="relative flex h-28 w-28 shrink-0 flex-col items-center justify-center gap-1 rounded-md bg-[#e9e9e2] text-gray-700">
        <ion-icon
          name={kategori === "Minuman" ? "cafe-outline" : "restaurant-outline"}
          className="text-3xl"
        />
        <span className="text-xs font-semibold">{kategori}</span>

        {isHabis && (
          <span className="absolute rounded-sm bg-tertiary px-2 py-1 text-xs font-bold text-white">
            HABIS
          </span>
        )}
      </div>

      {/* INFO MENU */}
      <div className="flex-1">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded-sm bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-700">
            {kategori}
          </span>

          {isHabis && (
            <span className="rounded-full bg-gray-300 px-2.5 py-0.5 text-xs font-semibold text-tertiary">
              ● Habis
            </span>
          )}

          {isMenipis && (
            <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-600">
              <ion-icon name="warning-outline" />
              Stok tinggal {stok} porsi
            </span>
          )}

          {!isHabis && !isMenipis && (
            <span className="rounded-full bg-[#2186ff] px-2.5 py-0.5 text-xs font-semibold text-white">
              ● Tersedia
            </span>
          )}
        </div>

        <h3 className="font-serif text-xl font-bold text-gray-900">{nama}</h3>

        <p className="mt-1">
          <span
            className={`font-serif text-lg font-bold ${
              isHabis ? "text-gray-500 line-through" : "text-success"
            }`}
          >
            {formatRupiah(harga)}
          </span>
          <span className="text-xs text-gray-500"> / porsi</span>
        </p>

        {isHabis ? (
          <p className="mt-1 flex items-center gap-1 text-xs text-tertiary">
            <ion-icon name="remove-circle-outline" />
            Otomatis tidak dapat dipesan pelanggan di aplikasi
          </p>
        ) : (
          <p className="mt-1 text-xs text-gray-600">{deskripsi}</p>
        )}
      </div>

      {/* STOK & TOMBOL EDIT */}
      <div className="flex items-center justify-between gap-8">
        <div className="sm:text-right">
          <p
            className={`font-serif text-2xl font-bold sm:text-3xl ${
              isHabis ? "text-tertiary" : isMenipis ? "text-gray-500" : "text-gray-900"
            }`}
          >
            {stok} Porsi Tersisa
          </p>
          <p className="mt-1 text-xs text-gray-500">
            dari total stok awal {stokAwal} porsi
          </p>
        </div>

        <button
          type="button"
          onClick={onEdit}
          className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 bg-gray-50 px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100"
        >
          <ion-icon name="create-outline" />
          Edit Menu
        </button>
      </div>
    </article>
  );
};

export default MenuCard;
