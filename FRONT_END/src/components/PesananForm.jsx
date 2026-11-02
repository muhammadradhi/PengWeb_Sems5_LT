import { useState } from "react";
import formatRupiah from "../utils/formatRupiah";

const formAwal = {
  namaPelanggan: "",
  menuId: "",
  jumlah: 1,
  catatan: "",
  alamat: "",
  metodePembayaran: "Cash",
};

const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600";

const labelClass = "mb-2 block text-[11px] font-bold tracking-wide text-gray-900";

const PesananForm = ({ daftarMenu, onTambah }) => {
  const [form, setForm] = useState(formAwal);

  const menuDipilih = daftarMenu.find((menu) => menu.id === Number(form.menuId));
  const total = menuDipilih ? menuDipilih.harga * form.jumlah : 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const ubahJumlah = (selisih) => {
    setForm((previous) => ({
      ...previous,
      jumlah: Math.max(1, previous.jumlah + selisih),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!menuDipilih) return;

    onTambah({
      id: Date.now(),
      namaPelanggan: form.namaPelanggan.trim(),
      menu: menuDipilih.nama,
      harga: menuDipilih.harga,
      jumlah: form.jumlah,
      catatan: form.catatan.trim(),
      alamat: form.alamat.trim(),
      metodePembayaran: form.metodePembayaran,
      status: "Dimasak",
      waktu: new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });

    setForm(formAwal);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-gray-200 bg-white p-5"
    >
      <h2 className="mb-4 border-b border-gray-100 pb-3 text-sm font-bold tracking-wide text-gray-900">
        TAMBAH PESANAN
      </h2>

      <div className="mb-4">
        <label htmlFor="namaPelanggan" className={labelClass}>
          NAMA PELANGGAN
        </label>
        <input
          type="text"
          id="namaPelanggan"
          name="namaPelanggan"
          value={form.namaPelanggan}
          onChange={handleChange}
          placeholder="Contoh: Budi Santoso"
          required
          className={inputClass}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="menuId" className={labelClass}>
          MENU
        </label>
        <select
          id="menuId"
          name="menuId"
          value={form.menuId}
          onChange={handleChange}
          required
          className={inputClass}
        >
          <option value="">-- Pilih Menu --</option>
          {daftarMenu.map((menu) => (
            <option key={menu.id} value={menu.id} disabled={menu.stok === 0}>
              {menu.nama} — {formatRupiah(menu.harga)}
              {menu.stok === 0 ? " (Habis)" : ""}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <span className={labelClass}>JUMLAH</span>
        <div className="inline-flex items-center rounded-md border border-gray-300">
          <button
            type="button"
            onClick={() => ubahJumlah(-1)}
            aria-label="Kurangi jumlah"
            className="h-9 w-9 text-lg text-gray-700 hover:bg-gray-50"
          >
            −
          </button>
          <span className="w-10 text-center text-sm font-semibold">
            {form.jumlah}
          </span>
          <button
            type="button"
            onClick={() => ubahJumlah(1)}
            aria-label="Tambah jumlah"
            className="h-9 w-9 text-lg text-gray-700 hover:bg-gray-50"
          >
            +
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="catatan" className={labelClass}>
          CATATAN (OPSIONAL)
        </label>
        <input
          type="text"
          id="catatan"
          name="catatan"
          value={form.catatan}
          onChange={handleChange}
          placeholder="Contoh: tidak pedas"
          className={inputClass}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="alamat" className={labelClass}>
          ALAMAT PENGIRIMAN
        </label>
        <textarea
          id="alamat"
          name="alamat"
          rows={2}
          value={form.alamat}
          onChange={handleChange}
          placeholder="Jl. Melati No. 12, Kel. Menteng"
          required
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="metodePembayaran" className={labelClass}>
          METODE PEMBAYARAN
        </label>
        <select
          id="metodePembayaran"
          name="metodePembayaran"
          value={form.metodePembayaran}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="Cash">Cash</option>
          <option value="QRIS">QRIS</option>
        </select>
      </div>

      <div className="mb-4 flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-sm text-gray-600">Total</span>
        <span className="text-lg font-bold text-gray-900">
          {formatRupiah(total)}
        </span>
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-md bg-[#1d70f5] px-3 py-3 text-sm font-semibold text-white transition hover:bg-[#1a5ecf]"
      >
        <ion-icon name="add-outline" className="text-lg" />
        Tambah
      </button>
    </form>
  );
};

export default PesananForm;
