import Button from "../Atoms/Button";
import statusPesanan from "../../data/statusPesanan";

const PesananDetail = ({ pesanan, onAksi }) => {
  if (!pesanan) {
    return (
      <aside className="rounded-lg border border-gray-200 bg-white p-8 text-center text-sm text-gray-500">
        Pilih pesanan untuk melihat detail.
      </aside>
    );
  }

  const info = statusPesanan[pesanan.status];

  let subtotal = 0;
  pesanan.items.forEach((item) => {
    subtotal = subtotal + item.harga * item.jumlah;
  });

  let teksBayar = "QRIS Lunas";
  let warnaBayar = "bg-gray-100 text-gray-900";
  if (pesanan.metodePembayaran === "Tunai") {
    teksBayar = "Tagih Tunai";
    warnaBayar = "bg-[#f68048] text-white";
  }
  if (pesanan.metodePembayaran === "Tunai" && pesanan.status === "Selesai") {
    teksBayar = "Tunai Lunas";
    warnaBayar = "bg-gray-100 text-gray-900";
  }

  return (
    <aside className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold tracking-wider text-gray-600">RINCIAN PESANAN</p>
          <h2 className="mt-1 text-2xl font-bold text-gray-900">Detail Pesanan</h2>
        </div>
        <span className={`rounded px-3 py-1.5 text-sm font-semibold ${warnaBayar}`}>
          {teksBayar}
        </span>
      </div>

      <div className="mt-6 rounded-lg bg-[#f2f2f6] p-5">
        <div className="flex justify-between py-2 text-sm">
          <span className="text-gray-600">Nomor Tiket:</span>
          <span className="font-mono text-lg font-bold text-success">#{pesanan.id}</span>
        </div>
        <div className="flex justify-between py-2 text-sm">
          <span className="text-gray-600">Nama Pemesan:</span>
          <span className="text-base font-semibold text-gray-900">{pesanan.namaPelanggan}</span>
        </div>
        <div className="flex justify-between py-2 text-sm">
          <span className="text-gray-600">Waktu Masuk:</span>
          <span className="text-gray-900">{pesanan.waktuMasuk} WIB (Hari ini)</span>
        </div>
        {pesanan.status === "Selesai" && (
          <div className="flex justify-between py-2 text-sm">
            <span className="text-gray-600">Diambil Pelanggan:</span>
            <span className="text-success">{pesanan.waktuSelesai} WIB</span>
          </div>
        )}

        <p className="mt-3 border-t border-gray-300 pt-4 text-xs font-semibold tracking-wider text-gray-600">
          STATUS SAAT INI
        </p>
        <div className="mt-2 flex items-start gap-3 rounded border border-gray-400 bg-white p-4">
          <ion-icon name={info.ikonInfo} className="mt-1 text-xl" />
          <div>
            <p className="text-lg font-semibold text-gray-900">{info.judulInfo}</p>
            <p className="text-sm text-gray-700">{info.teksInfo}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Menu Pesanan</h3>
        <span className="text-sm font-semibold text-gray-600">
          {pesanan.items.length} Macam Menu
        </span>
      </div>

      {pesanan.items.map((item) => (
        <div key={item.nama} className="mt-4 flex justify-between gap-3">
          <div>
            <p className="text-lg text-gray-900">
              {item.jumlah}x {item.nama}
            </p>
            {item.keterangan !== "" && (
              <p className="text-sm text-gray-500">{item.keterangan}</p>
            )}
          </div>
          <p className="text-gray-900">
            Rp {(item.harga * item.jumlah).toLocaleString("id-ID")}
          </p>
        </div>
      ))}

      {pesanan.catatan !== "" && (
        <div className="mt-5 flex gap-3 border border-gray-400 bg-[#f2f2f6] p-4">
          <ion-icon name="create-outline" className="text-lg" />
          <div>
            <p className="text-sm font-semibold text-gray-900">CATATAN DAPUR:</p>
            <p className="italic text-gray-900">"{pesanan.catatan}"</p>
          </div>
        </div>
      )}

      <div className="mt-5 border-t border-gray-200 pt-5 text-gray-600">
        <div className="flex justify-between py-1">
          <span>Subtotal Makanan & Minuman</span>
          <span className="text-gray-900">Rp {subtotal.toLocaleString("id-ID")}</span>
        </div>
        <div className="flex justify-between py-1">
          <span>Biaya Layanan & Bungkus</span>
          <span className="text-gray-900">Rp 0 (Gratis)</span>
        </div>
        <div className="mt-4 flex items-center justify-between border-b border-gray-200 pb-5">
          <span className="text-xl font-semibold text-gray-900">Total Pembayaran</span>
          <span className="text-3xl font-bold text-success">
            Rp {subtotal.toLocaleString("id-ID")}
          </span>
        </div>
      </div>

      {pesanan.status === "Selesai" ? (
        <p className="mt-5 flex items-center gap-2 rounded bg-[#f2f2f6] p-3 text-sm text-gray-700">
          <ion-icon name="checkmark-outline" />
          Transaksi telah tercatat di Riwayat Transaksi.
        </p>
      ) : (
        <Button onClick={() => onAksi(pesanan.id)} className="mt-6 w-full py-4 text-lg">
          <ion-icon name="checkmark-circle-outline" />
          {info.tombolDetail}
        </Button>
      )}
    </aside>
  );
};

export default PesananDetail;
