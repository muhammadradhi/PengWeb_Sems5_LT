import Badge from "../Atoms/Badge";
import Button from "../Atoms/Button";
import statusPesanan from "../../data/statusPesanan";

const PesananCard = ({
  id,
  namaPelanggan,
  waktuMasuk,
  waktuSelesai,
  metodePembayaran,
  status,
  items,
  aktif,
  onPilih,
  onAksi,
}) => {
  const info = statusPesanan[status];

  let total = 0;
  items.forEach((item) => {
    total = total + item.harga * item.jumlah;
  });

  const daftarMenu = items.map((item) => item.jumlah + "x " + item.nama).join(", ");

  let garisKartu = "border-gray-200";
  let warnaStatus = "bg-gray-100 text-gray-700";
  if (aktif) {
    garisKartu = "border-2 border-success";
    warnaStatus = info.warna;
  }

  return (
    <article
      onClick={onPilih}
      className={`cursor-pointer rounded-lg border bg-white p-6 ${garisKartu}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-mono text-xl font-bold text-gray-900">#{id}</h3>
          <span className="text-sm text-gray-500">• {waktuMasuk} WIB</span>

          {metodePembayaran === "QRIS" ? (
            <Badge warna="rounded-sm bg-gray-100 text-gray-700">QRIS • Lunas</Badge>
          ) : (
            <Badge warna="rounded-sm bg-[#f68048] text-white">TUNAI</Badge>
          )}
        </div>

        <Badge warna={warnaStatus}>● {info.label}</Badge>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-gray-100 py-4">
        <div>
          <p className="text-sm text-gray-500">
            Pelanggan: <span className="text-lg font-semibold text-gray-900">{namaPelanggan}</span>
          </p>
          <p className="mt-1 text-gray-800">{daftarMenu}</p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-500">Total Tagihan</p>
          <p className="text-2xl font-semibold text-success">
            Rp {total.toLocaleString("id-ID")}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 pt-4">
        {aktif ? (
          <p className="text-sm font-semibold text-success">Sedang Ditinjau →</p>
        ) : (
          <p className="text-xs font-semibold text-gray-600">Klik untuk melihat detail</p>
        )}

        {status === "Selesai" ? (
          <p className="text-sm text-success">Selesai {waktuSelesai} WIB</p>
        ) : (
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onAksi();
            }}
            className="py-3 text-base"
          >
            <ion-icon name="checkmark-outline" />
            {info.tombol}
          </Button>
        )}
      </div>
    </article>
  );
};

export default PesananCard;
