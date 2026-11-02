import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import momoMasak from "../assets/momo masak.png";
import FormInput from "../Components/Molecules/FormInput";
import Button from "../Components/Atoms/Button";
import RegisterPromo from "../Components/Organisms/RegisterPromo";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [namaOwner, setNamaOwner] = useState("");
  const [email, setEmail] = useState("");
  const [namaWarung, setNamaWarung] = useState("");
  const [kategori, setKategori] = useState("");
  const [alamat, setAlamat] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");

  const categories = [
    { value: "warteg", label: "Warteg / RM" },
    { value: "coffee-shop", label: "Coffee Shop" },
    { value: "makanan", label: "Makanan" },
    { value: "minuman", label: "Minuman" },
    { value: "jajanan", label: "Jajanan / Camilan" },
  ];

  const statistik = [
    { angka: "30+", label: "Pengguna Terdaftar" },
    { angka: "100+", label: "Resep Tersedia" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== konfirmasiPassword) {
      alert("Konfirmasi kata sandi tidak sama");
      return;
    }

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10 text-gray-800">
      {/* Navbar */}
      <header className="flex h-16 items-center border-b border-gray-200 bg-white px-5 sm:px-12">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="text-xl font-bold tracking-tight text-[#111111]">
            Warung
          </span>

          <span className="text-base text-gray-300">|</span>

          <span className="text-xs font-semibold tracking-wide text-gray-500">
            UMKM
          </span>
        </Link>
      </header>

      {/* Main Container */}
      <main className="flex justify-center px-4 py-8 sm:px-6">
        <div className="w-full max-w-6xl rounded-xl border border-gray-200 bg-white p-5 sm:p-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_340px]">
            {/* Register Form */}
            <section>
              <div className="mb-7">
                <span className="mb-3 inline-block rounded bg-gray-100 px-2.5 py-1 text-[10px] font-bold tracking-wide text-gray-600 sm:text-[11px]">
                  PENDAFTARAN PORTAL · KHUSUS PEMILIK & WARUNG
                </span>

                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-[26px]">
                  Buat akun owner & warung.
                </h1>

                <p className="text-sm leading-relaxed text-gray-500">
                  Daftarkan identitas pemilik dan profil usaha Anda untuk
                  memulai pengelolaan kasir terpadu.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Informasi Pemilik */}
                <fieldset className="mb-6">
                  <legend className="mb-4 w-full border-b border-gray-100 pb-3 text-xs font-bold tracking-wide text-gray-900">
                    <span className="mr-2">♙</span>
                    1. INFORMASI PEMILIK
                  </legend>

                  <FormInput
                    label="NAMA LENGKAP OWNER"
                    id="owner-name"
                    type="text"
                    value={namaOwner}
                    onChange={(e) => setNamaOwner(e.target.value)}
                    placeholder="Budi Santoso"
                  />

                  <FormInput
                    label="EMAIL BISNIS"
                    id="business-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="budi@warungpadang.com"
                  />
                </fieldset>

                {/* Detail Bisnis */}
                <fieldset className="mb-6">
                  <legend className="mb-4 w-full border-b border-gray-100 pb-3 text-xs font-bold tracking-wide text-gray-900">
                    <span className="mr-2">⌂</span>
                    2. DETAIL BISNIS / WARUNG
                  </legend>

                  <FormInput
                    label="NAMA BISNIS / WARUNG"
                    id="store-name"
                    type="text"
                    value={namaWarung}
                    onChange={(e) => setNamaWarung(e.target.value)}
                    placeholder="Contoh: Warung Bu Dhiesna"
                  />

                  <div className="mb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <label
                        htmlFor="business-category"
                        className="text-xs font-bold tracking-wide text-gray-900"
                      >
                        KATEGORI / JENIS BISNIS
                      </label>

                      <span className="text-xs text-gray-500">
                        Pilih salah satu
                      </span>
                    </div>

                    <select
                      id="business-category"
                      value={kategori}
                      onChange={(e) => setKategori(e.target.value)}
                      required
                      className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-3 text-sm outline-none focus:border-blue-600"
                    >
                      <option value="">-- Pilih Kategori Usaha --</option>

                      {categories.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>

                    <p className="mt-2 flex items-start gap-1.5 text-xs leading-relaxed text-gray-500">
                      <span>ⓘ</span>
                      Catatan jenis usaha membantu kami menyesuaikan pengaturan
                      menu dan struk warung Anda.
                    </p>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="store-address"
                      className="mb-2 block text-xs font-bold tracking-wide text-gray-900"
                    >
                      ALAMAT LENGKAP BISNIS
                    </label>

                    <textarea
                      id="store-address"
                      rows={3}
                      maxLength={200}
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                      placeholder="Jl. Melati No. 12, Kel. Menteng, Jakarta Pusat"
                      required
                      className="w-full resize-y rounded-md border border-gray-300 px-3.5 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-600"
                    />

                    <p className="mt-1 text-right text-[11px] text-gray-400">
                      {alamat.length}/200 karakter
                    </p>
                  </div>
                </fieldset>

                {/* Keamanan Akun */}
                <fieldset className="mb-6">
                  <legend className="mb-4 w-full border-b border-gray-100 pb-3 text-xs font-bold tracking-wide text-gray-900">
                    <span className="mr-2">♙</span>
                    3. KEAMANAN AKUN
                  </legend>

                  <FormInput
                    label="KATA SANDI"
                    hint="Min. 8 karakter"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimal 8 karakter"
                  />

                  <FormInput
                    label="KONFIRMASI KATA SANDI"
                    id="confirm-password"
                    type="password"
                    value={konfirmasiPassword}
                    onChange={(e) => setKonfirmasiPassword(e.target.value)}
                    placeholder="Ulangi kata sandi"
                  />

                  <p className="text-xs leading-relaxed text-gray-500">
                    ⓘ Pastikan kata sandi cocok dan mudah diingat.
                  </p>
                </fieldset>

                {/* Terms */}
                <p className="my-5 text-xs leading-relaxed text-gray-500">
                  Dengan mendaftar, Anda menyetujui Ketentuan Layanan Kasir dan
                  Kebijakan Privasi data finansial UMKM Warung.
                </p>

                {/* Submit */}
                <Button type="submit" className="w-full py-3 text-[15px]">
                  Daftar Akun & Bisnis Baru <span>→</span>
                </Button>

                <div className="relative my-6 text-center">
                  <div className="absolute top-1/2 w-full border-t border-gray-100" />

                  <span className="relative bg-white px-3 text-[11px] font-bold tracking-wide text-gray-400">
                    SUDAH TERDAFTAR?
                  </span>
                </div>

                <p className="text-center text-sm text-gray-700">
                  Sudah punya akun?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-gray-900 underline hover:text-blue-600"
                  >
                    Masuk ke Login
                  </Link>
                </p>
              </form>
            </section>

            <RegisterPromo
              gambar={momoMasak}
              judul="Kelola Pesanan & Kasir Lebih Praktis"
              deskripsi="Sistem pencatatan transaksi kasir, stok bahan, dan rekapan omzet harian ramah pemilik usaha kecil & menengah."
              statistik={statistik}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
