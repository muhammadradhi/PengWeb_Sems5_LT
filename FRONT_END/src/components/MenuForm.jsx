import { useState } from "react";

const formKosong = {
  nama: "",
  kategori: "Makanan Utama",
  harga: "",
  deskripsi: "",
  stok: "",
  stokAwal: "",
};

const inputClass =
  "w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-sm outline-none focus:border-blue-600";

const labelClass = "mb-2 block text-[11px] font-bold tracking-wide text-gray-900";

// Kalau menuAwal ada isinya berarti form untuk edit, kalau kosong berarti tambah.
const MenuForm = ({ menuAwal, onSimpan, onClose }) => {
  const isEdit = menuAwal ? true : false;
  const [form, setForm] = useState(menuAwal ? menuAwal : formKosong);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const menuBaru = {
      id: isEdit ? menuAwal.id : Date.now(),
      nama: form.nama,
      kategori: form.kategori,
      harga: Number(form.harga),
      deskripsi: form.deskripsi,
      stok: isEdit ? Number(form.stok) : Number(form.stokAwal),
      stokAwal: Number(form.stokAwal),
    };

    onSimpan(menuBaru);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4">
      <form
        onSubmit={handleSubmit}
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl border border-gray-200 bg-white p-6"
      >
        {/* JUDUL */}
        <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            {isEdit ? "Edit Menu" : "Tambah Menu"}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-gray-900"
          >
            ×
          </button>
        </div>

        {/* NAMA */}
        <div className="mb-4">
          <label htmlFor="nama" className={labelClass}>
            NAMA MENU
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            placeholder="Contoh: Nasi Uduk Komplit"
            required
            className={inputClass}
          />
        </div>

        {/* KATEGORI & HARGA */}
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="kategori" className={labelClass}>
              KATEGORI
            </label>
            <select
              id="kategori"
              name="kategori"
              value={form.kategori}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="Makanan Utama">Makanan Utama</option>
              <option value="Minuman">Minuman</option>
              <option value="Camilan">Camilan</option>
            </select>
          </div>

          <div>
            <label htmlFor="harga" className={labelClass}>
              HARGA PER PORSI (RP)
            </label>
            <input
              type="number"
              id="harga"
              name="harga"
              value={form.harga}
              onChange={handleChange}
              placeholder="15000"
              min="0"
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* DESKRIPSI */}
        <div className="mb-4">
          <label htmlFor="deskripsi" className={labelClass}>
            DESKRIPSI
          </label>
          <textarea
            id="deskripsi"
            name="deskripsi"
            rows="3"
            value={form.deskripsi}
            onChange={handleChange}
            placeholder="Contoh: Nasi uduk dengan ayam goreng, telur, dan sambal kacang."
            required
            className={inputClass}
          />
        </div>

        {/* STOK */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {isEdit && (
            <div>
              <label htmlFor="stok" className={labelClass}>
                PORSI TERSISA
              </label>
              <input
                type="number"
                id="stok"
                name="stok"
                value={form.stok}
                onChange={handleChange}
                min="0"
                required
                className={inputClass}
              />
            </div>
          )}

          <div>
            <label htmlFor="stokAwal" className={labelClass}>
              STOK AWAL
            </label>
            <input
              type="number"
              id="stokAwal"
              name="stokAwal"
              value={form.stokAwal}
              onChange={handleChange}
              placeholder="10"
              min="0"
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* TOMBOL */}
        <div className="flex justify-end gap-3 border-t border-gray-100 pt-5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Batal
          </button>

          <button
            type="submit"
            className="rounded-md bg-[#2186ff] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#086bdc]"
          >
            {isEdit ? "Simpan" : "Tambah"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MenuForm;
