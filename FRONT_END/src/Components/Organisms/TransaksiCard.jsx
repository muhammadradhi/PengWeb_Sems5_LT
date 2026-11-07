import Badge from "../Atoms/Badge";
import Button from "../Atoms/Button";

const TransaksiCard = ({
  id,
  namaPelanggan,
  tanggal,
  waktuMasuk,
  metodePembayaran,
  items,
  terbuka,
  onLihatDetail,
}) => {
  let total = 0;
  items.forEach((item) => {
    total = total + item.harga * item.jumlah;
  });

  const daftarMenu = items.map((item) => item.jumlah + "x " + item.nama).join(", ");

  let ikonBayar = "qr-code-outline";
  let teksBayar = "Metode: QRIS";
  if (metodePembayaran === "Tunai") {
    ikonBayar = "cash-outline";
    teksBayar = "Metode: Tunai (Cash)";
  }

  return (
    <article className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm">
      <div className="flex flex-col justify-between gap-6 sm:flex-row">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-semibold text-success">#{id}</h3>
            <span className="text-gray-300">•</span>
            <span className="text-xl text-gray-900">{namaPelanggan}</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-500">
              {tanggal} · {waktuMasuk} WIB
            </span>
          </div>

          <p className="mt-3 text-xl text-gray-900">{daftarMenu}</p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-sm bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
              <ion-icon name={ikonBayar} />
              {teksBayar}
            </span>
            <Badge warna="rounded-sm bg-[#2186ff] text-white">● Selesai</Badge>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <div className="sm:text-right">
            <p className="text-sm text-gray-600">Total Pembayaran</p>
            <p className="text-3xl font-semibold text-success">
              Rp {total.toLocaleString("id-ID")}
            </p>
          </div>

          <Button variant="outline" onClick={onLihatDetail} className="border-0 bg-gray-100 text-lg">
            {terbuka ? "Tutup Detail" : "Lihat Detail"}
            <ion-icon name="chevron-forward-outline" />
          </Button>
        </div>
      </div>

      {terbuka && (
        <div className="mt-6 rounded-lg bg-[#f2f2f6] p-5">
          {items.map((item) => (
            <div key={item.nama} className="flex justify-between py-1 text-gray-800">
              <span>
                {item.jumlah}x {item.nama}
              </span>
              <span>Rp {(item.harga * item.jumlah).toLocaleString("id-ID")}</span>
            </div>
          ))}
          <div className="mt-3 flex justify-between border-t border-gray-300 pt-3 font-semibold text-gray-900">
            <span>Total</span>
            <span>Rp {total.toLocaleString("id-ID")}</span>
          </div>
        </div>
      )}
    </article>
  );
};

export default TransaksiCard;
