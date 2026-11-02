import formatRupiah from "../utils/formatRupiah";

const statusStyles = {
  Dimasak: "bg-amber-100 text-amber-800",
  OTW: "bg-blue-100 text-blue-700",
  Selesai: "bg-green-100 text-green-800",
};

const PesananCard = ({
  namaPelanggan,
  menu,
  harga,
  jumlah,
  catatan,
  alamat,
  metodePembayaran,
  status,
  waktu,
}) => {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-gray-900">{namaPelanggan}</h3>
          <p className="mt-0.5 text-xs text-gray-500">Masuk pukul {waktu}</p>
        </div>

        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-3 border-t border-gray-100 pt-4">
        <p className="text-sm text-gray-800">
          <span className="font-semibold">{jumlah}x</span> {menu}
        </p>
        <p className="shrink-0 text-sm font-bold text-gray-900">
          {formatRupiah(harga * jumlah)}
        </p>
      </div>

      {catatan && (
        <p className="mt-2 text-xs text-gray-600">
          <span className="font-semibold">Catatan:</span> {catatan}
        </p>
      )}

      <div className="mt-4 flex flex-col gap-2 rounded-md bg-[#f2f2f6] px-3 py-3 text-xs text-gray-600">
        <p className="flex items-start gap-2">
          <ion-icon name="location-outline" className="shrink-0 text-base" />
          <span>{alamat}</span>
        </p>
        <p className="flex items-center gap-2">
          <ion-icon name="card-outline" className="shrink-0 text-base" />
          <span>{metodePembayaran}</span>
        </p>
      </div>
    </article>
  );
};

export default PesananCard;
