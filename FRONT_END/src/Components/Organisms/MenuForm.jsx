import { useState } from "react";
import Button from "../Atoms/Button";

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

const MenuForm = ({ menuAwal, onSimpan, onClose }) => {
  const isEdit = menuAwal !== null;

  let dataAwal = formKosong;
  if (isEdit) {
    dataAwal = menuAwal;
  }

  const [form, setForm] = useState(dataAwal);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let id = Date.now();
    let stok = Number(form.stokAwal);
    if (isEdit) {
      id = menuAwal.id;
      stok = Number(form.stok);
    }

    onSimpan({
      id: id,
      nama: form.nama,
      kategori: form.kategori,
      harga: Number(form.harga),
      deskripsi: form.deskripsi,
      stok: stok,
      stokAwal: Number(form.stokAwal),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4">
      <form
        onSubmit={handleSubmit}
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl border border-gray-200 bg-white p-6"
      >
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

        <div className="flex justify-end gap-3 border-t border-gray-100 pt-5">
          <Button variant="outline" onClick={onClose}>
            Batal
          </Button>
          <Button type="submit">{isEdit ? "Simpan" : "Tambah"}</Button>
        </div>
      </form>
    </div>
  );
};

export default MenuForm;
